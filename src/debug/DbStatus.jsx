import { useState, useEffect } from 'react'
import { api } from '../services/db_adapter'

function DbStatus() {
    const [status, setStatus] = useState(null)

    useEffect(() => {
        api.checkConnection().then(setStatus)
    }, [])

    if (!status || status.connected) return null

    return (
        <div style={{
            position: 'fixed',
            bottom: '10px',
            right: '10px',
            padding: '4px 10px',
            borderRadius: '12px',
            fontSize: '0.7rem',
            background: 'rgba(100, 116, 139, 0.15)',
            color: 'var(--text-muted)',
            border: '1px solid var(--border)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            opacity: 0.6,
            pointerEvents: 'none'
        }}>
            <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#f87171'
            }}></span>
            Offline
        </div>
    )
}

export default DbStatus
