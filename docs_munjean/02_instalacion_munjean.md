# 02. Instalación y configuración (Criterio 2.1.1)

En esta etapa se preparó la máquina virtual que actuará como servidor principal (SRV-DC01). A continuación se muestran los pasos clave con evidencias visuales seleccionadas para mantener un estilo uniforme.

## 1) Creación de la VM

Se creó la máquina virtual en VirtualBox (Windows Server 2025 x64, 50 GB almacenamiento dinámico).

<figure>
	<img src="/img_munjean/PASO_A/A.01.0.png" srcset="/img_munjean/optimized/PASO_A/A.01.0-800.webp 800w, /img_munjean/optimized/PASO_A/A.01.0-400.webp 400w, /img_munjean/PASO_A/A.01.0.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Creación VM VirtualBox" style="max-width:800px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Creación de la VM en VirtualBox.</figcaption>
</figure>

## 2) Configuración de red

El adaptador de red se configuró como "Red interna" con nombre <strong>redlab</strong> para simular la conectividad local del laboratorio.

<figure>
	<img src="/img_munjean/PASO_A/A.01.9.png" srcset="/img_munjean/optimized/PASO_A/A.01.9-800.webp 800w, /img_munjean/optimized/PASO_A/A.01.9-400.webp 400w, /img_munjean/PASO_A/A.01.9.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Adaptador conectado a red interna redlab" style="max-width:800px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Adaptador conectado a la red interna <em>redlab</em>.</figcaption>
</figure>

## 3) Instalación y renombrado

Se instaló Windows Server 2025 Standard (Experiencia de escritorio) y se renombró el equipo a <strong>SRV-DC01</strong>.

<figure>
	<img src="/img_munjean/PASO_A/A.01.7.png" srcset="/img_munjean/optimized/PASO_A/A.01.7-800.webp 800w, /img_munjean/optimized/PASO_A/A.01.7-400.webp 400w, /img_munjean/PASO_A/A.01.7.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Cambio de nombre a SRV-DC01" style="max-width:800px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Cambio de nombre del equipo a SRV-DC01.</figcaption>
</figure>

## 4) Direccionamiento IP

Se configuró una IP estática: <code>192.168.10.10</code> (máscara 255.255.255.0) y DNS apuntando al propio servidor (127.0.0.1) para que entregue servicios localmente.

<figure>
	<img src="/img_munjean/PASO_A/A.04.0.png" srcset="/img_munjean/optimized/PASO_A/A.04.0-800.webp 800w, /img_munjean/optimized/PASO_A/A.04.0-400.webp 400w, /img_munjean/PASO_A/A.04.0.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Configuración IP estática" style="max-width:800px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Asignación de IP estática al servidor.</figcaption>
</figure>

## Evidencia: panel de administración

La siguiente captura muestra el panel del "Administrador del servidor" con el nombre y la IP ya configurados.

<figure>
	<img src="/img_munjean/PASO_A/A.03.0.png" srcset="/img_munjean/optimized/PASO_A/A.03.0-800.webp 800w, /img_munjean/optimized/PASO_A/A.03.0-400.webp 400w, /img_munjean/PASO_A/A.03.0.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Administrador del servidor con configuración inicial" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Administrador del servidor — evidencia de instalación y configuración.</figcaption>
</figure>

---


