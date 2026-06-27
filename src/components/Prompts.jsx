import { useState, useEffect } from 'react';
import promptsContent from '../../docs_munjean/07_prompts_munjean.md?raw';

export default function Prompts() {
    const [prompts, setPrompts] = useState([]);
    const [newPrompt, setNewPrompt] = useState('');
    const hasContent = promptsContent && promptsContent.trim().length > 0;

    // Cargar prompts de localStorage al montar el componente
    useEffect(() => {
        const savedPrompts = localStorage.getItem('promptsBitacora');
        if (savedPrompts) {
            setPrompts(JSON.parse(savedPrompts));
        }
    }, []);

    // Guardar prompts en localStorage cuando cambien
    useEffect(() => {
        localStorage.setItem('promptsBitacora', JSON.stringify(prompts));
    }, [prompts]);

    const addPrompt = (e) => {
        e.preventDefault();
        if (newPrompt.trim()) {
            const promptEntry = {
                id: Date.now(),
                text: newPrompt,
                date: new Date().toLocaleString('es-ES'),
                session: new Date().toLocaleDateString('es-ES')
            };
            setPrompts([promptEntry, ...prompts]);
            setNewPrompt('');
        }
    };

    const deletePrompt = (id) => {
        setPrompts(prompts.filter(p => p.id !== id));
    };

    const clearAllPrompts = () => {
        if (confirm('¿Estás seguro de que quieres eliminar toda la bitácora?')) {
            setPrompts([]);
        }
    };

    return (
        <div>
            <h1>Prompts - Bitácora</h1>
            
            {/* Sección de Documentación MD */}
            {hasContent && (
                <div style={{ marginBottom: '30px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
                    <h2>Documentación</h2>
                    <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                        {promptsContent}
                    </pre>
                </div>
            )}

            {/* Sección de Bitácora */}
            <div style={{ marginTop: '30px' }}>
                <h2>Bitácora de Prompts</h2>

                {/* Formulario para agregar nuevo prompt */}
                <form onSubmit={addPrompt} style={{ marginBottom: '20px' }}>
                    <textarea
                        value={newPrompt}
                        onChange={(e) => setNewPrompt(e.target.value)}
                        placeholder="Escribe el prompt aquí..."
                        style={{
                            width: '100%',
                            height: '100px',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            fontSize: '14px'
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            marginTop: '10px',
                            padding: '10px 20px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '14px'
                        }}
                    >
                        Agregar Prompt
                    </button>
                </form>

                {/* Contador y botón limpiar */}
                <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p><strong>Total de prompts registrados: {prompts.length}</strong></p>
                    {prompts.length > 0 && (
                        <button
                            onClick={clearAllPrompts}
                            style={{
                                padding: '8px 15px',
                                backgroundColor: '#dc3545',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '14px'
                            }}
                        >
                            Limpiar Bitácora
                        </button>
                    )}
                </div>

                {/* Lista de prompts */}
                {prompts.length > 0 ? (
                    <div>
                        {prompts.map((prompt) => (
                            <div
                                key={prompt.id}
                                style={{
                                    padding: '15px',
                                    marginBottom: '10px',
                                    backgroundColor: '#f9f9f9',
                                    border: '1px solid #ddd',
                                    borderRadius: '5px'
                                }}
                            >
                                <div style={{ marginBottom: '8px' }}>
                                    <small style={{ color: '#666' }}>
                                        📅 {prompt.date} | Sesión: {prompt.session}
                                    </small>
                                </div>
                                <p style={{ margin: '8px 0', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                                    {prompt.text}
                                </p>
                                <button
                                    onClick={() => deletePrompt(prompt.id)}
                                    style={{
                                        padding: '5px 10px',
                                        backgroundColor: '#dc3545',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '3px',
                                        cursor: 'pointer',
                                        fontSize: '12px'
                                    }}
                                >
                                    Eliminar
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <ul>
                        <li>WIP - No hay prompts registrados aún</li>
                    </ul>
                )}
            </div>
        </div>
    );
}