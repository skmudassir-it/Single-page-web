import { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'

function CropEditor({ imageSrc, aspect, onCropComplete }) {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [rotation, setRotation] = useState(0)

    const onCropChange = (crop) => {
        setCrop(crop)
    }

    const onZoomChange = (zoom) => {
        setZoom(zoom)
    }

    return (
        <div className="crop-editor-wrapper">
            <div className="cropper-area">
                <Cropper
                    image={imageSrc}
                    crop={crop}
                    zoom={zoom}
                    rotation={rotation}
                    aspect={aspect}
                    onCropChange={onCropChange}
                    onCropComplete={onCropComplete}
                    onZoomChange={onZoomChange}
                    showGrid={true}
                />
            </div>
            <div className="editor-controls">
                <div className="control-row">
                    <label>Zoom</label>
                    <input
                        type="range"
                        value={zoom}
                        min={1}
                        max={3}
                        step={0.1}
                        aria-labelledby="Zoom"
                        onChange={(e) => setZoom(e.target.value)}
                        className="range-input"
                    />
                </div>
                <div className="control-row">
                    <label>Rotate</label>
                    <input
                        type="range"
                        value={rotation}
                        min={0}
                        max={360}
                        step={1}
                        aria-labelledby="Rotation"
                        onChange={(e) => setRotation(e.target.value)}
                        className="range-input"
                    />
                </div>
            </div>
        </div>
    )
}

export default CropEditor
