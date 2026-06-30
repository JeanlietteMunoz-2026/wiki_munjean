
# 04. Cliente dominio (Criterio 2.1.3)

Esta sección documenta la incorporación de un equipo cliente (PC01) al dominio <strong>inacap.local</strong>.

## Creación y configuración de la VM cliente

Se creó la VM llamada PC01 y se conectó a la red interna <em>redlab</em>.

<figure>
	<img src="/img_munjean/PASO_E/E.14.2.png" srcset="/img_munjean/optimized/PASO_E/E.14.2-800.webp 800w, /img_munjean/optimized/PASO_E/E.14.2-400.webp 400w, /img_munjean/PASO_E/E.14.2.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="VM PC01 conectada a redlab" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>VM PC01 conectada a la red interna <em>redlab</em>.</figcaption>
</figure>

## Sistema operativo y verificación de red

Instalación de Windows 10 Pro y comprobación de conectividad con `ipconfig`.

<figure>
	<img src="/img_munjean/PASO_E/E.14.6.png" srcset="/img_munjean/optimized/PASO_E/E.14.6-800.webp 800w, /img_munjean/optimized/PASO_E/E.14.6-400.webp 400w, /img_munjean/PASO_E/E.14.6.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Instalación Windows 10 Pro" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Instalación inicial de Windows 10 Pro en PC01.</figcaption>
</figure>

<figure>
	<img src="/img_munjean/PASO_D/D.13.01.png" srcset="/img_munjean/optimized/PASO_D/D.13.01-800.webp 800w, /img_munjean/optimized/PASO_D/D.13.01-400.webp 400w, /img_munjean/PASO_D/D.13.01.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Salida ipconfig en cliente" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Salida de `ipconfig` mostrando asignación de IP.</figcaption>
</figure>

## DNS y sincronización

Verificar que el cliente recibe DNS apuntando al servidor (192.168.10.10) y que la hora está sincronizada.

<figure>
	<img src="/img_munjean/PASO_D/D.13.1.png" srcset="/img_munjean/optimized/PASO_D/D.13.1-800.webp 800w, /img_munjean/optimized/PASO_D/D.13.1-400.webp 400w, /img_munjean/PASO_D/D.13.1.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Verificación DNS" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Confirmación de configuración DNS apuntando al servidor.</figcaption>
</figure>

## Unión al dominio

Unir el equipo al dominio usando `sysdm.cpl` y autenticarse con una cuenta de administrador de dominio.

<figure>
	<img src="/img_munjean/PASO_E/E.17.dominio.2.png" srcset="/img_munjean/optimized/PASO_E/E.17.dominio.2-800.webp 800w, /img_munjean/optimized/PASO_E/E.17.dominio.2-400.webp 400w, /img_munjean/PASO_E/E.17.dominio.2.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Unión al dominio inacap.local" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Proceso de unión del equipo al dominio <em>inacap.local</em>.</figcaption>
</figure>

<figure>
	<img src="/img_munjean/PASO_C/C.10.0.png" srcset="/img_munjean/optimized/PASO_C/C.10.0-800.webp 800w, /img_munjean/optimized/PASO_C/C.10.0-400.webp 400w, /img_munjean/PASO_C/C.10.0.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Inicio de sesión en dominio" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Inicio de sesión en el dominio con la cuenta creada.</figcaption>
</figure>


