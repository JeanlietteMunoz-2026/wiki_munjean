import activeDirectoryContent from '../../docs_munjean/03_active_directory_munjean.md?raw';

export default function ActiveDirectory() {
    const hasContent = activeDirectoryContent && activeDirectoryContent.trim().length > 0;
    
    return (
        <div>
            <h1>Active Directory</h1>
            {hasContent ? (
                <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                    {activeDirectoryContent}
                </pre>
            ) : (
                <ul>
                    <li>WIP - Contenido próximamente</li>
                </ul>
            )}
        </div>
    );
}