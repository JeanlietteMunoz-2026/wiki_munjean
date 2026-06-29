import clienteContent from '../../docs_munjean/04_cliente_dominio_munjean.md?raw';

export default function Cliente() {
    const hasContent = clienteContent && clienteContent.trim().length > 0;
    
    return (
        <div>
            <h1>Cliente Dominio</h1>
            {hasContent ? (
                <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                    {clienteContent}
                </pre>
            ) : (
                <ul>
                    <li>WIP - Contenido próximamente</li>
                </ul>
            )}
        </div>
    );
}