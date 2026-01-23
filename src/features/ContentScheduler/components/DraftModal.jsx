import { useState, useEffect } from 'react'

function DraftModal({ isOpen, onClose, onSave, onDelete, post, date }) {
    const [formData, setFormData] = useState({
        title: '',
        caption: '',
        platform: 'instagram',
        status: 'draft',
        date: ''
    })

    useEffect(() => {
        if (post) {
            setFormData(post)
        } else if (date) {
            setFormData(prev => ({ ...prev, date, id: undefined, title: '', caption: '' }))
        }
    }, [post, date, isOpen])

    if (!isOpen) return null

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSave(formData)
        onClose()
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>{post ? 'Edit Post' : 'New Post'}</h3>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input name="title" value={formData.title} onChange={handleChange} required placeholder="Post idea..." />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Date</label>
                            <input name="date" type="date" value={formData.date} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Platform</label>
                            <select name="platform" value={formData.platform} onChange={handleChange}>
                                <option value="instagram">Instagram</option>
                                <option value="tiktok">TikTok</option>
                                <option value="twitter">X / Twitter</option>
                                <option value="linkedin">LinkedIn</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Caption</label>
                        <textarea name="caption" rows={4} value={formData.caption} onChange={handleChange} placeholder="Write your caption..." />
                    </div>

                    <div className="form-group">
                        <label>Status</label>
                        <div className="status-toggles">
                            {['draft', 'scheduled', 'published'].map(s => (
                                <button
                                    key={s}
                                    type="button"
                                    className={`status-btn ${formData.status === s ? 'active' : ''}`}
                                    onClick={() => setFormData({ ...formData, status: s })}
                                >
                                    {s.charAt(0).toUpperCase() + s.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="modal-footer">
                        {post && (
                            <button type="button" className="btn-danger" onClick={() => { onDelete(post.id); onClose(); }}>Delete</button>
                        )}
                        <div className="spacer"></div>
                        <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
                        <button type="submit" className="btn-primary">Save Post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DraftModal
