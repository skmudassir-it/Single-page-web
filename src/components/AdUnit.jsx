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
            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                data-ad-slot={slotId}
                data-ad-format={format}
                data-full-width-responsive="true"></ins>
        </div>
    )
}

export default AdUnit
