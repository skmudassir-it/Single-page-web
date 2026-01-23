import { useState } from 'react'
import Papa from 'papaparse'
import { generateSlug } from '../utils/slugUtils'

function BulkGenerator({ options }) {
    const [data, setData] = useState([])
    const [columns, setColumns] = useState([])
    const [targetCol, setTargetCol] = useState(0)

    const handleFileUpload = (e) => {
        const file = e.target.files[0]
        if (!file) return

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                if (results.data && results.data.length > 0) {
                    setData(results.data)
                    setColumns(Object.keys(results.data[0]))
                    setTargetCol(Object.keys(results.data[0])[0]) // Default to first col
                }
            }
        })
    }

    const processSlugs = () => {
        return data.map(row => ({
            ...row,
            slug: generateSlug(row[targetCol] || '', options)
        }))
    }

    const exportCSV = () => {
        const processed = processSlugs()
        const csv = Papa.unparse(processed)
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = 'slugs.csv'
        link.click()
    }

    const processedPreview = processSlugs().slice(0, 5)

    return (
        <div className="bulk-generator">
            <div className="bulk-controls">
                <div className="upload-box">
                    <input type="file" accept=".csv" onChange={handleFileUpload} />
                    <p>Upload CSV</p>
                </div>
                {columns.length > 0 && (
                    <div className="column-select">
                        <label>Source Column:</label>
                        <select value={targetCol} onChange={(e) => setTargetCol(e.target.value)}>
                            {columns.map(col => <option key={col} value={col}>{col}</option>)}
                        </select>
                    </div>
                )}
                <button className="btn-primary" disabled={data.length === 0} onClick={exportCSV}>
                    Download CSV
                </button>
            </div>

            {data.length > 0 && (
                <div className="table-preview">
                    <table>
                        <thead>
                            <tr>
                                <th>Original ({targetCol})</th>
                                <th>Slug Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {processedPreview.map((row, i) => (
                                <tr key={i}>
                                    <td>{row[targetCol]}</td>
                                    <td className="slug-cell">{row.slug}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="table-footer">
                        Showing first 5 of {data.length} rows
                    </div>
                </div>
            )}
        </div>
    )
}

export default BulkGenerator
