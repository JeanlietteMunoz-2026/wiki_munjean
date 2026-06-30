05.- Servicios Red  (Criterio2.1.4) 

Configuración del servicio DNS Y DHCP (ámbito activo)
Instalación del rol: Agregar e instalar el rol de Servidor DHCP en el Administrador del servidor.
[(./docs_munjean/](img_munjean/PASO_D/D.13.0.png)


Configuración post-instalación: Completar el asistente de configuración de DHCP haciendo clic en la bandera de notificación.
[(./docs_munjean/](img_munjean/PASO_D/D.13.0.png)   ME FALTA?????


Creación del ámbito: Generar un nuevo ámbito IPv4 con el rango de direcciones desde 192.168.10.50 hasta 192.168.10.100.
[(./docs_munjean/](img_munjean/PASO_E/E.15.IP50-100.png)


Parámetros de red: Establecer la máscara 255.255.255.0 para el ámbito.
[(./docs_munjean/](img_munjean/PASO_E/E.15.IP50-100.png) 


Parámetros de dominio: Asignar la dirección 192.168.10.10 como servidor DNS y configurar "inacap.local" como dominio.
[(./docs_munjean/](img_munjean/PASO_D/D.13.1.png)


Habilitación: Activar el ámbito recién creado para que comience a asignar direcciones IP.
[(./docs_munjean/](img_munjean/PASO_D/D.13.0.png)


