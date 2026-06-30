import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Network } from 'lucide-react'
import instalacionContent from '../../docs_munjean/02_instalacion_munjean.md?raw'

export default function Instalacion() {
  const hasContent = instalacionContent && instalacionContent.trim().length > 0

  return (
    <section className="markdown md-container py-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40">
        <div className="flex items-center gap-3 mb-6">
          <Network className="h-6 w-6 text-sky-500" />
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">02 — Instalación</p>
            <h2 className="text-2xl font-semibold text-slate-900">Instalación</h2>
          </div>
        </div>

        {hasContent ? (
          <article className="prose prose-slate mx-auto">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{instalacionContent}</ReactMarkdown>
          </article>
        ) : (
          <p className="text-slate-600">WIP - Contenido próximamente</p>
        )}
      </div>
    </section>
  )
}

