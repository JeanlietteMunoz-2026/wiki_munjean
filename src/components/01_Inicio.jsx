import inicioContent from '../../docs_munjean/01_inicio_munjean.md?raw';

export default function Inicio() {
    const hasContent = inicioContent && inicioContent.trim().length > 0;
    
    return (
        <div>
            <h1>Inicio</h1>
            {hasContent ? (
                <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                    {inicioContent}
                </pre>
            ) : (
                <ul>
                </ul>
            )}
        </div>
    );
}