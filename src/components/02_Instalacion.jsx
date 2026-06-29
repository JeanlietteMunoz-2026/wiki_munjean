import instalacionContent from '../../docs_munjean/02_instalacion_munjean.md?raw';

export default function Instalacion() {
    const hasContent = instalacionContent && instalacionContent.trim().length > 0;
    
    return (
        <div>
            <h1>Instalación</h1>
            {hasContent ? (
                <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                    {instalacionContent}
                </pre>
            ) : (
                <ul>
                    <li>WIP - Contenido próximamente</li>
                </ul>
            )}
        </div>
    );
}

