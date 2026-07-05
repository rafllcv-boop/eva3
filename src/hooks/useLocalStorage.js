import { useState } from 'react';

// Custom Hook para manejar el Local Storage de forma reutilizable y segura
export function useLocalStorage(key, initialValue) {
  // Estado para almacenar nuestro valor
  // Pasamos una función a useState para que la lógica de inicialización se ejecute solo una vez
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Obtenemos el item del local storage por su llave (key)
      const item = window.localStorage.getItem(key);
      // Analizamos (parse) el JSON almacenado, o retornamos initialValue si no existe
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Si hay un error, también retornamos el initialValue
      console.error("Error al leer de Local Storage:", error);
      return initialValue;
    }
  });

  // Retornamos una versión envuelta de la función setter de useState que ...
  // ... persiste el nuevo valor en localStorage.
  const setValue = (value) => {
    try {
      // Permitimos que el valor sea una función para tener el mismo API que useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Guardamos en el estado local de React
      setStoredValue(valueToStore);
      // Guardamos en el Local Storage del navegador
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error al guardar en Local Storage:", error);
    }
  };

  return [storedValue, setValue];
}
