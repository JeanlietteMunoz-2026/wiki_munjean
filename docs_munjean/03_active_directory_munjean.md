
# 03. Active Directory y DNS (Criterios 2.1.2 y 2.1.4)

En esta sección se describen los pasos de instalación y configuración de Active Directory, creación de OUs, usuarios y grupos. Se incluyen evidencias seleccionadas para mantener un estilo uniforme en toda la wiki.

## Instalación de roles

Agregar el rol "Servicios de dominio de Active Directory" (AD DS) mediante el Administrador del servidor.

<figure>
	<img src="/img_munjean/PASO_B/B.06.1.png" srcset="/img_munjean/optimized/PASO_B/B.06.1-800.webp 800w, /img_munjean/optimized/PASO_B/B.06.1-400.webp 400w, /img_munjean/PASO_B/B.06.1.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Instalación rol AD DS" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Instalación del rol AD DS desde el Administrador del servidor.</figcaption>
</figure>

## Promover a controlador de dominio

Configurar el equipo como controlador de dominio usando la bandera de notificación.

<figure>
	<img src="/img_munjean/PASO_B/B.06.bandera.png" srcset="/img_munjean/optimized/PASO_B/B.06.bandera-800.webp 800w, /img_munjean/optimized/PASO_B/B.06.bandera-400.webp 400w, /img_munjean/PASO_B/B.06.bandera.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Promover a DC desde notificación" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Promoción del servidor a controlador de dominio (notificación de administrador).</figcaption>
</figure>

## Configuración del bosque y dominio

Se creó un nuevo bosque con el dominio raíz <strong>inacap.local</strong>.

<figure>
	<img src="/img_munjean/PASO_B/B.07.0.png" srcset="/img_munjean/optimized/PASO_B/B.07.0-800.webp 800w, /img_munjean/optimized/PASO_B/B.07.0-400.webp 400w, /img_munjean/PASO_B/B.07.0.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Configuración bosque inacap.local" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Configuración del bosque y dominio raíz.</figcaption>
</figure>

## Inicio de sesión y gestión de objetos

Ingreso al sistema como <code>INACAP\Administrator</code> tras reinicio y uso de la consola "Usuarios y equipos de Active Directory".

<figure>
	<img src="/img_munjean/PASO_B/B.07.2.png" srcset="/img_munjean/optimized/PASO_B/B.07.2-800.webp 800w, /img_munjean/optimized/PASO_B/B.07.2-400.webp 400w, /img_munjean/PASO_B/B.07.2.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Inicio de sesión Administrador" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Inicio de sesión con cuenta de administrador de dominio.</figcaption>
</figure>

<figure>
	<img src="/img_munjean/PASO_B/B.01.0.png" srcset="/img_munjean/optimized/PASO_B/B.01.0-800.webp 800w, /img_munjean/optimized/PASO_B/B.01.0-400.webp 400w, /img_munjean/PASO_B/B.01.0.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Usuarios y equipos de Active Directory" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Herramienta Usuarios y equipos de Active Directory.</figcaption>
</figure>

## Unidades organizativas, usuarios y grupos

Creación de la OU <strong>Ventas</strong>, usuarios asociados y el grupo <strong>G-Ventas</strong>.

<figure>
	<img src="/img_munjean/PASO_C/C.10.003.png" srcset="/img_munjean/optimized/PASO_C/C.10.003-800.webp 800w, /img_munjean/optimized/PASO_C/C.10.003-400.webp 400w, /img_munjean/PASO_C/C.10.003.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Creación de OU Ventas" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Creación de la Unidad Organizativa "Ventas".</figcaption>
</figure>

<figure>
	<img src="/img_munjean/PASO_C/C.10.002.png" srcset="/img_munjean/optimized/PASO_C/C.10.002-800.webp 800w, /img_munjean/optimized/PASO_C/C.10.002-400.webp 400w, /img_munjean/PASO_C/C.10.002.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Creación de usuarios en OU Ventas" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Usuarios creados dentro de la OU Ventas.</figcaption>
</figure>

<figure>
	<img src="/img_munjean/PASO_C/C.10.001.png" srcset="/img_munjean/optimized/PASO_C/C.10.001-800.webp 800w, /img_munjean/optimized/PASO_C/C.10.001-400.webp 400w, /img_munjean/PASO_C/C.10.001.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Usuario principal con código" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Usuario principal con código personal del alumno.</figcaption>
</figure>

<figure>
	<img src="/img_munjean/PASO_C/C.10.004.desmarca.png" srcset="/img_munjean/optimized/PASO_C/C.10.004.desmarca-800.webp 800w, /img_munjean/optimized/PASO_C/C.10.004.desmarca-400.webp 400w, /img_munjean/PASO_C/C.10.004.desmarca.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Configuración contraseña" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Desmarcar obligación de cambio de contraseña en primer inicio.</figcaption>
</figure>

<figure>
	<img src="/img_munjean/PASO_C/C.11.0.png" srcset="/img_munjean/optimized/PASO_C/C.11.0-800.webp 800w, /img_munjean/optimized/PASO_C/C.11.0-400.webp 400w, /img_munjean/PASO_C/C.11.0.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Creación de grupo G-Ventas" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Creación del grupo <em>G-Ventas</em> y membresía de usuarios.</figcaption>
</figure>


