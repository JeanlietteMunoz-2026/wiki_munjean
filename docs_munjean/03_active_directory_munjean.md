03.- Active Directory y DNS (Criterios 2.1.2  y  2.1.4)

Instalación de roles:
 
Agregar el rol "Servicios de dominio de Active Directory" (AD DS) mediante el Administrador del servidor.
 ![(./docs_munjean/](img_munjean/PASO_B/B.06.1.png)

Configuración de equipo como controlador de dominio desde la bandera de notificación.
 ![(./docs_munjean/](img_munjean/PASO_B/B.06.bandera.png)

Configuración del bosque: Agregar un nuevo bosque utilizando "inacap.local" como dominio raíz.
 ![(./docs_munjean/](img_munjean/PASO_B/B.07.0.png)

Inicio de sesión: Ingresar al sistema como INACAP\Administrator luego de que el equipo se reinicie.
 ![(./docs_munjean/](img_munjean/PASO_B/B.07.2.png)

Gestión de objetos: Abrir la herramienta "Usuarios y equipos de Active Directory".
 ![(./docs_munjean/](img_munjean/PASO_B/B.01.0.png)  ### ME FALTA

Unidad Organizativa: Crear una nueva Unidad Organizativa con el nombre "Ventas".
 ![(./docs_munjean/](img_munjean/PASO_C/C.10.003.png)

Creación de usuarios: Generar dos usuarios dentro de la OU Ventas.
 ![(./docs_munjean/](img_munjean/PASO_C/C.10.002.png) 

Usuario principal: Utilizar tu código personal de alumno para el nombre de uno de estos usuarios.
 ![(./docs_munjean/](img_munjean/PASO_C/C.10.001.png)


Políticas de contraseña: Desmarcar la casilla que obliga al usuario a cambiar la contraseña en su primer inicio de sesión.
 ![(./docs_munjean/](img_munjean/PASO_C/C.10.004.desmarca.png)


Creación de grupo: Crear un grupo denominado "G-Ventas" dentro de la misma OU.
 ![(./docs_munjean/](img_munjean/PASO_C/C.11.0.png)

Se incorpora manualmente a los dos usuarios creados como miembros del grupo G-Ventas.
 ![(./docs_munjean/](img_munjean/PASO_C/C.10.0.png)

