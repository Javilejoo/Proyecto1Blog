# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Blog de One Piece

## Descripción del proyecto

Este proyecto es un blog dedicado al mundo de One Piece, donde los usuarios pueden ver información sobre personajes, leer publicaciones relacionadas con la serie y administrar el contenido si tienen permisos de administrador.

## Tecnologías utilizadas

- **React con Vite**: Se eligió React junto con Vite como el entorno de desarrollo para el frontend debido a su rapidez en la compilación y recarga en caliente, lo que mejora significativamente el proceso de desarrollo.
- **Node.js**: Utilizado para el desarrollo del backend de la aplicación, proporcionando un entorno de ejecución de JavaScript del lado del servidor.
- **Express.js**: Framework de Node.js utilizado para la creación de la API RESTful que gestiona los datos del blog.
- **MySQL**: Base de datos relacional utilizada para almacenar la información sobre los personajes y las publicaciones del blog.

## Instrucciones para ejecutar el proyecto localmente

1. **Clonar el repositorio**: Ejecuta el siguiente comando en tu terminal para clonar el repositorio en tu máquina local:

    ```
    git clone https://github.com/Javilejoo/Proyecto1Blog
    ```

2. **Instalar dependencias**: Ve al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:

    ```
    cd blog
    npm install
    ```

3. **Configurar variables de entorno**: Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias, como la conexión a la base de datos y cualquier otra configuración específica.

4. **Construir y ejecutar el frontend y backend**: Ejecuta los siguientes comandos para construir y ejecutar el frontend y backend:

    - Para el frontend con React y Vite:

    ```
    cd blog
    npm run dev
    ```

    - Para el backend con Node.js:

    ```
    npm start
    ```

5. **Acceder a la aplicación**: Una vez que ambos frontend y backend estén en funcionamiento, abre tu navegador web y accede a la siguiente URL:

    ```
    http://localhost:5173
    ```

Ahora deberías poder ver y utilizar la aplicación en tu máquina local.

¡Disfruta explorando el mundo de One Piece en nuestro blog!
