import serviciosRedContent from '../../docs_munjean/05_servicios_red_munjean.md?raw';

export default function ServiciosRed() {
    const hasContent = serviciosRedContent && serviciosRedContent.trim().length > 0;
    
    return (
        <div>
            <h1>Servicios de Red</h1>
            {hasContent ? (
                <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                    {serviciosRedContent}
                </pre>
            ) : (
                <ul>
                    <li>WIP - Contenido próximamente</li>
                </ul>
            )}
        </div>
    );
}