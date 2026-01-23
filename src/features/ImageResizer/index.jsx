import { useState, useCallback, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import { getCroppedImg } from './utils/imageProcessing'
import { SOCIAL_PRESETS } from './utils/presets'
import PresetSelector from './components/PresetSelector'
import CropEditor from './components/CropEditor'
import BatchQueue from './components/BatchQueue'
import ExportSettings from './components/ExportSettings'
import './styles.css'

function ImageResizer() {
    // State
    const [queue, setQueue] = useState([])
    const [activeId, setActiveId] = useState(null)
    const [isProcessing, setIsProcessing] = useState(false)

    // Global Settings (applied to batch by default, but individual overrides could be added)
    const [format, setFormat] = useState('image/jpeg')
    const [quality, setQuality] = useState(0.9)

    // Create a default crop state map? Or just store in queue items
    // For simplicity, let's store operational state in the queue item objects

    const activeItem = queue.find(item => item.id === activeId)

    const handleAddFiles = (files) => {
        const newItems = Array.from(files).map(file => ({
            id: uuidv4(),
            file,
            preview: URL.createObjectURL(file), // Helper for queue thumb
            originalSrc: URL.createObjectURL(file), // For cropper
            crop: { x: 0, y: 0 },
            zoom: 1,
            rotation: 0,
            preset: SOCIAL_PRESETS[0], // Default to IG Post
            croppedAreaPixels: null, // To store crop result
            status: 'pending' // pending, processing, done
        }))

        setQueue(prev => [...prev, ...newItems])
        if (!activeId && newItems.length > 0) {
            setActiveId(newItems[0].id)
        }
    }

    const handleRemove = (id) => {
        setQueue(prev => prev.filter(i => i.id !== id))
        if (activeId === id) {
            setActiveId(null) // Should pick next available really
        }
    }

    const updateActiveItem = (updates) => {
        setQueue(prev => prev.map(item =>
            item.id === activeId ? { ...item, ...updates } : item
        ))
    }

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        updateActiveItem({ croppedAreaPixels })
    }, [activeId])

    const handleExportBatch = async () => {
        setIsProcessing(true)
        const zip = new JSZip()

        try {
            // Process sequentially to avoid crashing browser memory
            for (const item of queue) {
                const blob = await getCroppedImg(
                    item.originalSrc,
                    item.croppedAreaPixels,
                    item.rotation,
                    { horizontal: false, vertical: false },
                    format,
                    quality,
                    item.preset.width, // Resize to preset dims
                    item.preset.height
                )

                // Filename logic
                const ext = format.split('/')[1]
                const name = `${item.file.name.split('.')[0]}_${item.preset.id}.${ext}`
                zip.file(name, blob)

                // Update status visually (optional)
                setQueue(prev => prev.map(i => i.id === item.id ? { ...i, status: 'done' } : i))
            }

            const content = await zip.generateAsync({ type: 'blob' })
            saveAs(content, 'resized_images.zip')

        } catch (e) {
            console.error(e)
            alert('Error during batch processing')
        } finally {
            setIsProcessing(false)
        }
    }

    return (
        <div className="resizer-app">
            <div className="left-panel">
                <h3>Presets</h3>
                <PresetSelector
                    currentPresetId={activeItem?.preset?.id}
                    onSelect={(preset) => updateActiveItem({ preset })}
                />
            </div>

            <div className="center-panel">
                {activeItem ? (
                    <CropEditor
                        imageSrc={activeItem.originalSrc}
                        aspect={activeItem.preset.aspect}
                        onCropComplete={onCropComplete}
                    />
                ) : (
                    <div className="empty-state">
                        <p>Upload images to start editing</p>
                        <label className="btn-primary">
                            Select Images
                            <input type="file" multiple accept="image/*" hidden onChange={e => handleAddFiles(e.target.files)} />
                        </label>
                    </div>
                )}
            </div>

            <div className="right-panel">
                <div className="panel-section">
                    <h3>Batch Queue</h3>
                    <BatchQueue
                        items={queue}
                        activeId={activeId}
                        onSelect={setActiveId}
                        onRemove={handleRemove}
                        onAdd={handleAddFiles}
                    />
                </div>

                <div className="panel-section">
                    <h3>Export Settings</h3>
                    <ExportSettings
                        format={format}
                        quality={quality}
                        onFormatChange={setFormat}
                        onQualityChange={setQuality}
                        onExport={handleExportBatch}
                        isProcessing={isProcessing}
                    />
                </div>
            </div>
        </div>
    )
}

export default ImageResizer
