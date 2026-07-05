import './App.css';

function App() {
  return (
    <div className="app-container bg-light min-vh-100">
      <header className="bg-dark text-white p-3 mb-4 shadow-sm border-bottom border-danger border-4">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h3 mb-0 fw-bold text-uppercase">
            <span className="text-danger">Veloura</span> Admin
          </h1>
          <span className="badge bg-danger">Panel de Inventario</span>
        </div>
      </header>

      <main className="container">
        <div className="row">
          <div className="col-12">
            <div className="card shadow-sm border-0 rounded-3 mb-4">
              <div className="card-body text-center p-5">
                <h2 className="text-dark">¡Fase 1 Completada!</h2>
                <p className="text-muted">Bootstrap 5 instalado y tema Rojo/Negro/Blanco configurado correctamente.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
