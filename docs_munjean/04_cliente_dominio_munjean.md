04.- Cliente dominio.  (criterio 2.1.3)

Incorporación al dominio
Creación de la máquina virtual: Configurar una VM llamada PC01 conectada a la Red interna "redlab".
[(./docs_munjean/](img_munjean/PASO_E/E.14.2.png)

Sistema Operativo: Instalar Windows 10 Pro configurando inicialmente una cuenta de usuario local.
[(./docs_munjean/](img_munjean/PASO_E/E.14.6.png)

Verificación de red: Abrir la consola CMD y usar el comando ipconfig para confirmar que el equipo recibió una IP del rango DHCP.
[(./docs_munjean/](img_munjean/PASO_D/D.13.01.png)

Verificación de DNS: Confirmar en la consola que el equipo tiene asignado el DNS 192.168.10.10.
[(./docs_munjean/](img_munjean/PASO_D/D.13.1.png)

Sincronización: Comprobar que la fecha y la hora del cliente son exactamente iguales a las del servidor para evitar fallos de credenciales.
[(./docs_munjean/](img_munjean/PASO_C/C.10.0.png) 

Unión al dominio: Ejecutar sysdm.cpl y modificar la configuración para unirse al dominio "inacap.local".
[(./docs_munjean/](img_munjean/PASO_E/E.17.dominio2.png)

Autenticación: Validar el proceso ingresando las credenciales del usuario INACAP\Administrador.
[(./docs_munjean/](img_munjean/PASO_C/C.10.0.png)

Inicio de sesión en dominio: Reiniciar la máquina virtual e ingresar con la cuenta de dominio creada con tu código personal.
[(./docs_munjean/](img_munjean/PASO_C/C.10.0.png)


