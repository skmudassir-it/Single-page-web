import { useState, useEffect } from 'react'
import { api } from '../services/db_adapter'

function DbStatus() {
    const [status, setStatus] = useState(null)

    useEffect(() => {
        api.checkConnection().then(setStatus)
    }, [])

    if (!status) return null

    return (
        <div style={{
            position: 'fixed',
            bottom: '10px',
            right: '10px',
            padding: '8px 12px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            background: status.connected ? '#065f46' : '#991b1b', // Green or Red
            color: 'white',
            border: '1px solid rgba(255,255,255,0.2)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
        }}>
            <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: status.connected ? '#34d399' : '#f87171'
            }}></span>
            {status.connected ? 'Turso Connected' : 'Using Mock Data'}
        </div>
    )
}

export default DbStatus
