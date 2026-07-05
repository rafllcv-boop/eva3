# Veloura Admin - Gestor de Inventario de Maquillaje 💄

Este proyecto es una Single Page Application (SPA) desarrollada con **React.js** para la Evaluación 3. Permite gestionar un inventario de productos de maquillaje mediante operaciones CRUD, persistiendo los datos de manera segura en el Local Storage del navegador y consumiendo una API externa para mostrar tendencias de belleza.

## 🚀 Requisitos Previos

Asegúrate de tener instalado en tu sistema:
- [Node.js](https://nodejs.org/) (Versión 14 o superior)
- npm (Gestor de paquetes, incluido con Node.js)

## 🛠️ Instalación y Configuración

Sigue estos comandos en tu terminal para ejecutar el proyecto sin errores:

1. **Abre la terminal en la carpeta del proyecto**
   Asegúrate de estar ubicado en la raíz del proyecto (la carpeta que contiene el archivo `package.json`).

2. **Instalar las dependencias**
   Ejecuta el siguiente comando para descargar React, Bootstrap y todas las librerías necesarias:
   ```bash
   npm install
   ```

3. **Levantar el entorno de desarrollo**
   Una vez que termine la instalación, arranca el servidor local ejecutando:
   ```bash
   npm start
   ```

4. **Ver la aplicación**
   El comando anterior abrirá automáticamente una pestaña en tu navegador en `http://localhost:3000`. Si no ocurre, puedes ingresar manualmente a ese enlace.

## 📦 Funcionalidades Principales

- **CRUD Completo:** Creación, lectura, actualización y eliminación de productos de maquillaje.
- **Local Storage:** Persistencia de datos local mediante el uso de un Custom Hook (`useLocalStorage`).
- **Consumo de API con Fetch:** Obtención de datos aleatorios desde `dummyjson.com/products/category/beauty` al cargar la página, demostrando uso avanzado de asincronía (`async/await`), manejo de errores (`try/catch`) y estados de carga.
- **Validaciones Rigurosas:** Prevención de envíos vacíos, verificación de categorías, precios en formato chileno y sanitización básica de texto (trimming).
- **Diseño Responsive:** Interfaz moderna y adaptable construida con **Bootstrap 5**, aplicando una temática "Premium" basada en colores Rojo, Negro y Blanco.

## 🤖 Uso de Inteligencia Artificial
El documento que certifica el uso, validación e identificación de componentes de React mediante la asistencia de Inteligencia Artificial se encuentra en el archivo:
👉 **`PROMPTS.md`**
