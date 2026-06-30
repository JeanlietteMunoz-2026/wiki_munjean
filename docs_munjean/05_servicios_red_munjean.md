
# 05. Servicios de red (Criterio 2.1.4)

Configuración y puesta en marcha de servicios de red (DHCP y DNS) para el laboratorio.

## Instalación y post-instalación de DHCP

Instalar el rol de Servidor DHCP y completar la configuración inicial.

<figure>
	<img src="/img_munjean/PASO_D/D.13.0.png" srcset="/img_munjean/optimized/PASO_D/D.13.0-800.webp 800w, /img_munjean/optimized/PASO_D/D.13.0-400.webp 400w, /img_munjean/PASO_D/D.13.0.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Instalación rol DHCP" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Instalación y configuración inicial del rol DHCP.</figcaption>
</figure>

## Creación del ámbito DHCP

Crear un ámbito IPv4 con el rango <code>192.168.10.50 - 192.168.10.100</code> y máscara <code>255.255.255.0</code>.

<figure>
	<img src="/img_munjean/PASO_E/E.15.IP50-100.png" srcset="/img_munjean/optimized/PASO_E/E.15.IP50-100-800.webp 800w, /img_munjean/optimized/PASO_E/E.15.IP50-100-400.webp 400w, /img_munjean/PASO_E/E.15.IP50-100.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Ámbito DHCP 192.168.10.50-100" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Definición del ámbito DHCP con rango y máscara.</figcaption>
</figure>

## Parámetros de dominio y habilitación

Asignar servidor DNS del dominio y habilitar el ámbito para que empiece a distribuir direcciones.

<figure>
	<img src="/img_munjean/PASO_D/D.13.1.png" srcset="/img_munjean/optimized/PASO_D/D.13.1-800.webp 800w, /img_munjean/optimized/PASO_D/D.13.1-400.webp 400w, /img_munjean/PASO_D/D.13.1.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Parámetros DNS y dominio" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Configuración de parámetros DNS apuntando al servidor del laboratorio.</figcaption>
</figure>


