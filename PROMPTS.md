# 🤖 Registro de Prompts y Asistencia de IA

Este documento justifica y registra el uso de Inteligencia Artificial (IA) como herramienta de mentoría técnica y apoyo durante el desarrollo de la aplicación "Veloura Admin", cumpliendo estrictamente con los criterios de la rúbrica de evaluación.

---

## Criterio 3.1.1: Identifica elementos de React (componentes, props, estado)

Para garantizar una arquitectura escalable desde el día 1, consulté a la IA cómo estructurar el proyecto de manera óptima.

**Prompt enviado:**
> *"Quiero desarrollar un gestor de inventario de maquillaje en React. ¿Cómo debería dividir mis componentes y dónde debería manejar el estado principal (useState) y las propiedades (props) para que sea eficiente?"*

**Sugerencia de IA aplicada (Justificación):**
La IA me recomendó identificar y separar el proyecto en componentes modulares en lugar de tener un solo archivo gigante:
1.  **Estado (`useState`):** Me indicó que el estado central de los productos debía vivir en el componente padre (`App.js`) para que pudiera compartirse.
2.  **Props:** Me enseñó a pasar funciones como `addProduct` o `deleteProduct` hacia abajo como *props* a componentes hijos como `<ProductForm />` y `<ProductList />`. Esto asegura un flujo de datos unidireccional y componentes reutilizables.

---

## Criterio 3.1.2: Prácticas de desarrollo seguro y sanitización

Para el formulario de ingreso, quería asegurarme de que los datos ingresados fueran íntegros y no generaran bugs.

**Prompt enviado:**
> *"¿Cuáles son las mejores prácticas de validación y sanitización en formularios controlados de React para evitar errores de integridad en los datos y asegurar un desarrollo seguro?"*

**Sugerencia de IA aplicada (Justificación):**
La IA propuso crear una función `validate()` que se ejecuta antes de guardar el producto en memoria. Las prácticas seguras implementadas fueron:
*   **Sanitización:** Uso de `trim()` (`formData.name.trim()`) para limpiar espacios vacíos accidentales o intencionados al inicio y final del texto, previniendo entradas de "productos fantasma".
*   **Validaciones de lógica de negocio:** Impedir explícitamente precios en 0, números negativos en el stock, y forzar que el usuario interactúe con el selector `<select>` agregando una opción deshabilitada por defecto.

---

## Criterio 3.1.4: Consumo API con Fetch, manejo de errores y validaciones

Necesitaba implementar la llamada a la API externa para el banner de "Tendencia del Día", pero quería hacerlo con nivel profesional.

**Prompt enviado:**
> *"Necesito crear un componente 'BeautyTrends' que consuma una API externa de productos usando Fetch dentro de useEffect. ¿Cómo manejo correctamente los errores y los tiempos de carga (loading) según las mejores prácticas actuales en React?"*

**Sugerencia de IA aplicada (Justificación):**
La IA me sugirió no hacer un simple fetch ciego, sino crear una función asíncrona dentro de `useEffect`.
*   Implementé un bloque `try/catch/finally`.
*   Añadimos un estado `loading` que se muestra visualmente mediante un *spinner* de Bootstrap mientras los datos llegan.
*   En caso de que el servidor externo falle (comprobado mediante `!response.ok`), la aplicación lanza un `throw new Error()` que es capturado por el bloque `catch` para mostrar una alerta visual al usuario (`<div className="alert alert-danger">`), evitando que la SPA colapse.

---

## Mejora Arquitectónica Extra: Custom Hooks (Local Storage)

**Prompt enviado:**
> *"¿Es buena práctica poner toda la lógica de window.localStorage dentro de App.js o hay una forma más limpia de hacerlo en React?"*

**Sugerencia de IA aplicada:**
La IA me recomendó extraer toda esa lógica a un **Custom Hook** (`src/hooks/useLocalStorage.js`). Esta recomendación fue clave, ya que limpió significativamente el código de `App.js` y demostró el uso avanzado de patrones de diseño en React.
