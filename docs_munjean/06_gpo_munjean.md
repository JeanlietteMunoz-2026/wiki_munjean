
# 06. Políticas de Grupo (GPO)

Configuración y aplicación de políticas de grupo para controlar el acceso y configuración de los clientes del dominio.

## Acceso y creación de GPO

Abrir la herramienta de Administración de directivas de grupo y crear la GPO `GPO-Ventas` vinculada a la OU Ventas.

<figure>
	<img src="/img_munjean/PASO_C/C.10.003.png" srcset="/img_munjean/optimized/PASO_C/C.10.003-800.webp 800w, /img_munjean/optimized/PASO_C/C.10.003-400.webp 400w, /img_munjean/PASO_C/C.10.003.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Acceso a Administración de directivas" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Abrir la Administración de directivas de grupo.</figcaption>
</figure>

<figure>
	<img src="/img_munjean/PASO_C/C.9.Ventas.png" srcset="/img_munjean/optimized/PASO_C/C.9.Ventas-800.webp 800w, /img_munjean/optimized/PASO_C/C.9.Ventas-400.webp 400w, /img_munjean/PASO_C/C.9.Ventas.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Creación de GPO-Ventas" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Creación de la GPO vinculada a la OU Ventas.</figcaption>
</figure>

## Edición y aplicación

Editar la GPO para aplicar restricciones como "Prohibir el acceso al Panel de control" y propagar los cambios a los clientes.

<figure>
	<img src="/img_munjean/PASO_C/C.10.001.png" srcset="/img_munjean/optimized/PASO_C/C.10.001-800.webp 800w, /img_munjean/optimized/PASO_C/C.10.001-400.webp 400w, /img_munjean/PASO_C/C.10.001.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Edición de la GPO" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Edición de la directiva en Plantillas administrativas.</figcaption>
</figure>

<figure>
	<img src="/img_munjean/PASO_F/F.19.0.png" srcset="/img_munjean/optimized/PASO_F/F.19.0-800.webp 800w, /img_munjean/optimized/PASO_F/F.19.0-400.webp 400w, /img_munjean/PASO_F/F.19.0.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Regla: prohibir acceso al Panel de control" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Habilitación de la restricción en la GPO.</figcaption>
</figure>

## Actualización y verificación en clientes

Forzar la actualización de políticas con `gpupdate /force` y verificar en el cliente que el Panel de control queda bloqueado.

<figure>
	<img src="/img_munjean/PASO_F/F.20.0.png" srcset="/img_munjean/optimized/PASO_F/F.20.0-800.webp 800w, /img_munjean/optimized/PASO_F/F.20.0-400.webp 400w, /img_munjean/PASO_F/F.20.0.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Ejecutar gpupdate /force" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Comando `gpupdate /force` ejecutado desde el cliente.</figcaption>
</figure>

<figure>
	<img src="/img_munjean/PASO_F/F.20.1.png" srcset="/img_munjean/optimized/PASO_F/F.20.1-800.webp 800w, /img_munjean/optimized/PASO_F/F.20.1-400.webp 400w, /img_munjean/PASO_F/F.20.1.png 1600w" sizes="(max-width:900px) 100vw, 900px" loading="lazy" alt="Verificación bloqueo Panel de control" style="max-width:900px;width:100%;height:auto;border-radius:8px;" />
	<figcaption>Verificación: Panel de control bloqueado tras aplicar la GPO.</figcaption>
</figure>


