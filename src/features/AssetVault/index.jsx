import { useState } from 'react'
import { MOCK_ASSETS, COLLECTIONS } from './data/mockAssets'
import FilterSidebar from './components/FilterSidebar'
import AssetGrid from './components/AssetGrid'
import AssetDetailModal from './components/AssetDetailModal'
import './styles.css'

function AssetVault() {
    const [filter, setFilter] = useState('all')
    const [selectedAsset, setSelectedAsset] = useState(null)

    const filteredAssets = MOCK_ASSETS.filter(a => {
        if (filter === 'all') return true
        if (['image', 'video'].includes(filter)) return a.type === filter
        // Check if filter is a collection ID logic (mocked by random check as data doesn't have it yet)
        if (filter.startsWith('c')) {
            // In real app: return a.collectionId === filter
            // Mock: Randomly include for demo purposes based on ID + Filter char code
            return (a.id.charCodeAt(1) + filter.charCodeAt(1)) % 2 === 0
        }
        return true
    })

    return (
        <div className="av-app">
            <div className="av-header">
                <h2>Asset Vault</h2>
                <button className="primary-btn" onClick={() => alert('Upload Mock Triggered')}>Upload Assets</button>
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

export default AssetVault
