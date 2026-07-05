import React, { useState, useEffect } from 'react';

const ProductForm = ({ addProduct, updateProduct, editingProduct, setEditingProduct }) => {
  // Estado local para los campos del formulario
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    category: '',
    price: '',
    stock: ''
  });

  // Estado para manejar los mensajes de error (Validaciones)
  const [errors, setErrors] = useState({});

  // useEffect para poblar el formulario si el usuario presiona "Editar" en un producto
  useEffect(() => {
    if (editingProduct) {
      setFormData(editingProduct);
    } else {
      setFormData({ id: '', name: '', category: '', price: '', stock: '' });
    }
  }, [editingProduct]);

  // Manejador de cambios en los inputs
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función de validación
  const validate = () => {
    let formErrors = {};
    const trimmedName = formData.name.trim();
    
    if (!trimmedName) {
      formErrors.name = 'El nombre del producto es obligatorio.';
    } else if (trimmedName.length < 3) {
      formErrors.name = 'El nombre debe tener al menos 3 caracteres.';
    }

    if (!formData.category) {
      formErrors.category = 'Debes seleccionar una categoría válida.';
    }

    if (!formData.price || formData.price <= 0) {
      formErrors.price = 'El precio debe ser mayor a 0.';
    }

    if (!formData.stock || formData.stock < 0) {
      formErrors.stock = 'El stock no puede ser negativo.';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // Retorna true si no hay errores
  };

  function handleSubmit(evt) {
    evt.preventDefault(); // Evita recargar la página

    if (validate()) {
      // Aplicar sanitización a los datos antes de guardarlos
      const sanitizedData = {
        ...formData,
        name: formData.name.trim(),
        price: Number(formData.price),
        stock: Number(formData.stock)
      };

      if (editingProduct) {
        updateProduct(sanitizedData);
      } else {
        addProduct({ ...sanitizedData, id: Date.now().toString() }); // ID único
      }

      // Limpiar el formulario
      setFormData({ id: '', name: '', category: '', price: '', stock: '' });
      setEditingProduct(null);
      setErrors({});
    }
  }

  const handleCancel = () => {
    setFormData({ id: '', name: '', category: '', price: '', stock: '' });
    setEditingProduct(null);
    setErrors({});
  };

  return (
    <div className="card shadow-sm border-0 mb-4 border-top border-danger border-3">
      <div className="card-header bg-white">
        <h5 className="mb-0 fw-bold">{editingProduct ? '✏️ Editar Producto' : '➕ Añadir Nuevo Producto'}</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label fw-bold">Nombre del producto</label>
            <input 
              type="text" 
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Labial Matte Premium"
              required
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Categoría</label>
            <select 
              className={`form-select ${errors.category ? 'is-invalid' : ''}`}
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="" disabled>Selecciona una categoría...</option>
              <option value="Labial">Labial</option>
              <option value="Base">Base de Maquillaje</option>
              <option value="Sombras">Paleta de Sombras</option>
              <option value="Mascara">Máscara de Pestañas</option>
              <option value="Delineador">Delineador</option>
            </select>
            {errors.category && <div className="invalid-feedback">{errors.category}</div>}
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Precio ($)</label>
              <div className="input-group">
                <span className="input-group-text bg-light">$</span>
                <input 
                  type="number" 
                  step="1"
                  className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="0"
                />
                {errors.price && <div className="invalid-feedback">{errors.price}</div>}
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Stock Disponible</label>
              <input 
                type="number" 
                className={`form-control ${errors.stock ? 'is-invalid' : ''}`}
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                placeholder="0"
              />
              {errors.stock && <div className="invalid-feedback">{errors.stock}</div>}
            </div>
          </div>

          <div className="d-flex justify-content-end gap-2 mt-3">
            {editingProduct && (
              <button type="button" className="btn btn-outline-secondary" onClick={handleCancel}>
                Cancelar
              </button>
            )}
            <button type="submit" className="btn btn-danger px-4">
              {editingProduct ? 'Actualizar Producto' : 'Guardar Producto'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
