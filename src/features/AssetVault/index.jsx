import { useState, useRef } from 'react'
import { MOCK_ASSETS, COLLECTIONS } from './data/mockAssets'
import FilterSidebar from './components/FilterSidebar'
import AssetGrid from './components/AssetGrid'
import AssetDetailModal from './components/AssetDetailModal'
import './styles.css'

function AssetVault() {
    const [filter, setFilter] = useState('all')
    const [selectedAsset, setSelectedAsset] = useState(null)
    const [assets, setAssets] = useState(MOCK_ASSETS)
    const [toast, setToast] = useState({ message: '', visible: false })
    const fileInputRef = useRef(null)

    const showToast = (message) => {
        setToast({ message, visible: true })
        setTimeout(() => setToast({ message: '', visible: false }), 3000)
    }

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files)
        if (files.length === 0) return

        const newAssets = files.map((file, index) => {
            const ext = file.name.split('.').pop().toLowerCase()
            const isVideo = ['mp4', 'mov', 'webm'].includes(ext)
            const isImage = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext)

            return {
                id: `a${Date.now()}_${index}`,
                name: file.name,
                type: isVideo ? 'video' : isImage ? 'image' : 'other',
                url: URL.createObjectURL(file),
                size: formatFileSize(file.size),
                dimensions: 'N/A',
                tags: ['uploaded'],
                license: 'Owned',
                date: new Date().toISOString().split('T')[0]
            }
        })

        setAssets(prev => [...newAssets, ...prev])
        showToast(`${newAssets.length} file(s) uploaded successfully!`)

        // Reset the input so the same file can be re-uploaded
        if (fileInputRef.current) fileInputRef.current.value = ''
    }

    const filteredAssets = assets.filter(a => {
        if (filter === 'all') return true
        if (['image', 'video'].includes(filter)) return a.type === filter
        // Collection filter: c1, c2, c3 — mock assets lack collectionId, use charCode demo logic
        if (filter.startsWith('c')) {
            return (a.id.charCodeAt(1) + filter.charCodeAt(1)) % 2 === 0
        }
        return true
    })

    return (
        <div className="av-app">
            {/* Toast notification */}
            {toast.visible && (
                <div style={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '24px',
                    background: 'var(--primary, #3b82f6)',
                    color: 'white',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    zIndex: 1000,
                    fontSize: '0.9rem',
                    fontWeight: 500
                }}>
                    ✅ {toast.message}
                </div>
            )}

            {/* Hidden file input */}
            <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*,video/*"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
                id="asset-file-upload"
            />

            <div className="av-header">
                <h2>Asset Vault</h2>
                <button
                    className="primary-btn"
                    onClick={() => fileInputRef.current?.click()}
                >
                    Upload Assets
                </button>
            </div>

            <div className="av-layout">
                <FilterSidebar
                    collections={COLLECTIONS}
                    activeFilter={filter}
                    setFilter={setFilter}
                />

                <div className="av-main">
                    <AssetGrid
                        assets={filteredAssets}
                        onSelect={setSelectedAsset}
                    />
                </div>
            </div>

            {selectedAsset && (
                <AssetDetailModal
                    asset={selectedAsset}
                    onClose={() => setSelectedAsset(null)}
                />
            )}
        </div>
    )
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
}

export default AssetVault
