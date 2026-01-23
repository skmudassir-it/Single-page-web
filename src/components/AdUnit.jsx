import { useEffect } from 'react'

function AdUnit({ slotId, format = 'auto', style = {} }) {
    useEffect(() => {
        try {
            if (window.adsbygoogle) {
                (window.adsbygoogle = window.adsbygoogle || []).push({})
            }
        } catch (e) {
            console.error('AdSense error', e)
        }
    }, [])

    return (
        <div className="ad-container" style={{ margin: '20px 0', textAlign: 'center', ...style }}>
            {/* Placeholder for dev mode so we see where ad goes */}
            <div style={{ background: '#f8f9fa', border: '1px dashed #ccc', padding: '10px', fontSize: '12px', color: '#666', display: 'none' }}>
                Ad Placeholder (Slot: {slotId})
            </div>

            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your Publisher ID
                data-ad-slot={slotId}
                data-ad-format={format}
                data-full-width-responsive="true"></ins>
        </div>
    )
}

export default AdUnit
