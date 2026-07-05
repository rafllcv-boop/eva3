import React from 'react';

const ProductList = ({ products, deleteProduct, setEditingProduct }) => {
  // Si no hay productos, mostramos un mensaje amigable
  if (products.length === 0) {
    return (
      <div className="alert alert-light text-center border shadow-sm p-5" role="alert">
        <h4 className="text-muted mb-3">El inventario está vacío</h4>
        <p className="mb-0">Utiliza el formulario para añadir tu primer producto de belleza.</p>
      </div>
    );
  }

  return (
    <div className="table-responsive shadow-sm rounded border border-light">
      <table className="table table-hover align-middle mb-0 bg-white">
        <thead className="table-dark">
          <tr>
            <th className="ps-4">Producto</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th className="text-center pe-4">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="ps-4">
                <span className="fw-bold">{product.name}</span>
              </td>
              <td>
                <span className="badge bg-secondary rounded-pill">{product.category}</span>
              </td>
              <td>${product.price.toFixed(2)}</td>
              <td>
                <span className={`badge rounded-pill ${
                  product.stock > 10 ? 'bg-success' : 
                  product.stock > 0 ? 'bg-warning text-dark' : 'bg-danger'
                }`}>
                  {product.stock} {product.stock === 1 ? 'ud.' : 'uds.'}
                </span>
              </td>
              <td className="text-center pe-4">
                <button 
                  className="btn btn-sm btn-outline-dark me-2"
                  onClick={() => setEditingProduct(product)}
                  title="Editar"
                >
                  ✏️ Editar
                </button>
                <button 
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => {
                    // Confirmación antes de eliminar (Buena práctica)
                    if (window.confirm(`¿Estás seguro de eliminar "${product.name}"? Esta acción no se puede deshacer.`)) {
                      deleteProduct(product.id);
                    }
                  }}
                  title="Eliminar"
                >
                  🗑️ Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
