import React, { useState } from 'react';
import './App.css';
import BeautyTrends from './components/BeautyTrends';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  // Uso del custom hook para conectar el estado con Local Storage
  const [products, setProducts] = useLocalStorage('veloura_products', []);
  
  // Estado para saber qué producto se está editando
  const [editingProduct, setEditingProduct] = useState(null);

  // Lógica CRUD (Create, Read, Update, Delete)
  
  // CREATE
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  // UPDATE
  const updateProduct = (updatedProduct) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  // DELETE
  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="app-container bg-light min-vh-100 pb-5">
      {/* Header */}
      <header className="bg-dark text-white p-3 mb-4 shadow-sm border-bottom border-danger border-4">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h3 mb-0 fw-bold text-uppercase">
            <span className="text-danger">Veloura</span> Admin
          </h1>
          <span className="badge bg-danger px-3 py-2">Gestor de Inventario</span>
        </div>
      </header>

      <main className="container">
        <div className="row">
          <div className="col-12">
            {/* Consumo de API Externa */}
            <BeautyTrends />
          </div>
        </div>

        <div className="row mt-2">
          {/* Formulario (Crear / Editar) */}
          <div className="col-lg-4 mb-4">
            <ProductForm 
              addProduct={addProduct}
              updateProduct={updateProduct}
              editingProduct={editingProduct}
              setEditingProduct={setEditingProduct}
            />
          </div>

          {/* Lista de Productos (Read / Delete) */}
          <div className="col-lg-8">
            <div className="card shadow-sm border-0 border-top border-dark border-3">
              <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                <h5 className="fw-bold m-0">📦 Inventario Actual</h5>
              </div>
              <div className="card-body">
                <ProductList 
                  products={products}
                  deleteProduct={deleteProduct}
                  setEditingProduct={setEditingProduct}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
