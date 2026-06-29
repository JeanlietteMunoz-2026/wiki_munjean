import gpoContent from '../../docs_munjean/06_gpo_munjean.md?raw';

export default function Gpo() {
    const hasContent = gpoContent && gpoContent.trim().length > 0;
    
    return (
        <div>
            <h1>GPO</h1>
            {hasContent ? (
                <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                    {gpoContent}
                </pre>
            ) : (
                <ul>
                    <li>WIP - Contenido próximamente</li>
                </ul>
            )}
        </div>
    );
}