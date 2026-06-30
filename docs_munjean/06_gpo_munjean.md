Políticas de grupo (GPO)

Acceso a directivas: Abrir la herramienta de Administración de directivas de grupo en el servidor.
[(./docs_munjean/](img_munjean/PASO_C/C.10.003.png) 


Creación de GPO: Crear una nueva política de grupo con el nombre "GPO-Ventas" y vincularla directamente sobre la OU Ventas.
[(./docs_munjean/](img_munjean/PASO_C/C.9.Ventas.png)


Edición de la directiva: Editar la GPO navegando hasta Configuración de usuario, luego a Directivas, Plantillas administrativas y Panel de control.
[(./docs_munjean/](img_munjean/PASO_C/C.10.001.png)


Aplicación de restricción: Habilitar la regla específica que indica "Prohibir el acceso al Panel de control y a la configuración de PC".
[(./docs_munjean/](img_munjean/PASO_F/F.19.0.png)


Actualización en el cliente: Ejecutar el comando gpupdate /force desde la sesión de usuario del dominio en el equipo cliente.
[(./docs_munjean/](img_munjean/PASO_F/F.20.0.png)



Verificación: Cerrar la sesión en el cliente, volver a ingresar y confirmar que el Panel de control se encuentra bloqueado exitosamente.
[(./docs_munjean/](img_munjean/PASO_F/F.20.1.png)


