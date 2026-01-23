import { PLATFORMS } from '../utils/platformRules'

function CaptionEditor({ text, onChange, platform }) {
    const rules = PLATFORMS[platform]
    const length = text.length
    const isOverLimit = length > rules.limit

    // Simple hashtag count
    const hashtags = (text.match(/#[a-zA-Z0-9_]+/g) || []).length
    const isOverTags = hashtags > rules.hashtags

    return (
        <div className="editor-container">
            <div className="editor-toolbar">
                <span className="platform-badge" style={{ color: rules.color }}>{rules.name}</span>
                <span className={`count ${isOverLimit ? 'danger' : ''}`}>
                    {length} / {rules.limit}
                </span>
            </div>
            <textarea
                className="main-textarea"
                value={text}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Start writing your caption..."
            />
            <div className="editor-footer">
                <span className={`tag-count ${isOverTags ? 'danger' : ''}`}>
                    #{hashtags} / {rules.hashtags} tags
                </span>
                <div className="actions">
                    <button className="btn-text" onClick={() => navigator.clipboard.writeText(text)}>Copy</button>
                    <button className="btn-text" onClick={() => onChange('')}>Clear</button>
                </div>
            </div>
        </div>
    )
}

export default CaptionEditor
