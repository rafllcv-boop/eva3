import React, { useState, useEffect } from 'react';

const BeautyTrends = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Función asíncrona para hacer Fetch
    const fetchBeautyTrend = async () => {
      try {
        setLoading(true); // Iniciamos el estado de carga
        setError(null);   // Limpiamos errores previos

        // 2. Consumir la API
        const response = await fetch('https://dummyjson.com/products/category/beauty');
        
        // 3. Validar si la respuesta es correcta
        if (!response.ok) {
          throw new Error('Error al conectar con el servidor de tendencias.');
        }
        
        const data = await response.json();
        
        // 4. Seleccionar un producto al azar para mostrar
        if (data && data.products && data.products.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.products.length);
          setProduct(data.products[randomIndex]);
        } else {
          throw new Error('No se encontraron productos.');
        }

      } catch (err) {
        // 5. Capturar y guardar el error
        setError(err.message);
      } finally {
        // 6. Quitar el estado de carga, independientemente del éxito o error
        setLoading(false);
      }
    };

    fetchBeautyTrend();
  }, []); // El array vacío significa que se ejecuta una sola vez al montar el componente

  // Renderizado Condicional: Si está cargando
  if (loading) {
    return (
      <div className="alert alert-secondary text-center shadow-sm" role="alert">
        <div className="spinner-border spinner-border-sm me-2 text-danger" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        Buscando tendencias de belleza en el servidor...
      </div>
    );
  }

  // Renderizado Condicional: Si hubo un error
  if (error) {
    return (
      <div className="alert alert-danger shadow-sm" role="alert">
        <strong>⚠️ Atención:</strong> {error}
      </div>
    );
  }

  // Renderizado Principal: Datos obtenidos correctamente
  return (
    <div className="card shadow-sm border-0 mb-4 bg-dark text-white">
      <div className="row g-0 align-items-center">
        <div className="col-md-2 text-center p-3">
          {product?.thumbnail && (
            <img 
              src={product.thumbnail} 
              alt={product.title} 
              className="img-fluid rounded" 
              style={{ maxHeight: '100px', objectFit: 'contain' }}
            />
          )}
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h5 className="card-title text-danger fw-bold mb-1">
              🌟 Producto Inspiración: {product?.title}
            </h5>
            <p className="card-text text-light mb-2 small">{product?.description}</p>
            <p className="card-text m-0">
              <span className="badge bg-danger">Precio Ref: ${product?.price}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyTrends;
