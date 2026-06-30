import { Network } from 'lucide-react'

const steps = [
  {
    title: 'Instalación de roles',
    description:
      'Agregar el rol "Servicios de dominio de Active Directory" (AD DS) mediante el Administrador del servidor.',
  },
  {
    title: 'Configuración de equipo como controlador de dominio',
    description:
      'Configuración de equipo como controlador de dominio desde la bandera de notificación.',
    note: '### ME FALTA',
  },
  {
    title: 'Configuración del bosque',
    description:
      'Agregar un nuevo bosque utilizando "inacap.local" como dominio raíz.',
  },
  {
    title: 'Inicio de sesión',
    description:
      'Ingresar al sistema como INACAP\\Administrator luego de que el equipo se reinicie.',
  },
  {
    title: 'Gestión de objetos',
    description:
      'Abrir la herramienta "Usuarios y equipos de Active Directory".',
    note: '### ME FALTA',
  },
  {
    title: 'Unidad Organizativa',
    description:
      'Crear una nueva Unidad Organizativa con el nombre "Ventas".',
    note: '### ME FALTA',
  },
  {
    title: 'Creación de usuarios',
    description: 'Generar dos usuarios dentro de la OU Ventas.',
  },
  {
    title: 'Usuario principal',
    description:
      'Utilizar tu código personal de alumno para el nombre de uno de estos usuarios.',
  },
  {
    title: 'Políticas de contraseña',
    description:
      'Desmarcar la casilla que obliga al usuario a cambiar la contraseña en su primer inicio de sesión.',
  },
  {
    title: 'Creación de grupo',
    description: 'Crear un grupo denominado "G-Ventas" dentro de la misma OU.',
  },
  {
    title: 'Miembros del grupo',
    description:
      'Se incorpora manualmente a los dos usuarios creados como miembros del grupo G-Ventas.',
  },
]

export default function ActiveDirectory() {
  return (
    <section className="mb-10">
      <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/50">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
          <Network className="h-6 w-6 text-sky-500" />
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
              2.1.2 - Active Directory
            </p>
            <h2 className="text-2xl font-semibold text-slate-900">Active Directory</h2>
          </div>
        </div>

        <div className="mt-6 space-y-5 text-slate-700">
          {steps.map((step) => (
            <div key={step.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6">{step.description}</p>
              {step.note ? (
                <p className="mt-2 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                  {step.note}
                </p>
              ) : null}
            </div>
          ))}
        </div>

        <figure className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-4">
          <img
            className="mx-auto max-h-[420px] w-full rounded-2xl object-contain"
            src="/img_munjean/ad.png"
            alt="Captura Active Directory"
          />
          <figcaption className="mt-3 text-center text-sm text-slate-500">
            Captura: img_munjean/ad.png
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
