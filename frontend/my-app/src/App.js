import React, { Component } from "react";

const Header = () => {
  return (
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <ul class="nav nav-pills">
          <li>
            <h2>Store </h2>
          </li>
          <li class="nav-item dropdown">
            <button
              class="btn btn-dark dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Products
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li>
                <a class="dropdown-item" href="/create">
                  Create
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/update">
                  Update
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/delete">
                  Delete
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item" id="login">
            <a href="google.com" class="nav-link px-2 link-dark">
              Login
            </a>
          </li>
          <li class="nav-item" id="signup">
            <a href="google.com" class="nav-link px-2 link-dark">
              Sign Up
            </a>
          </li>
          <li>
            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" id="search">
              <input
                type="search"
                class="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
          </li>
        </ul>
      </header>
    </div>
  );
};

const Body = () => {
  return (
    <div class="card-group">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">PS5</h5>
          <p class="card-text">
            Largura de banda da RAM: 448 GB/s; Taxa de transferência da RAM: 14
            GB/s; Armazenamento interno: SSD customizado de 825 GB, barramento
            de 12 canais e controlador PCI Express 4.0, com taxa de
            transferência de 5,5 GB/s (tamanho original) ou 8,9 GB/s
            (compactado);
          </p>
          <p class="card-text">
            <small class="text-body-secondary">R$ 4.999,90</small>
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Amazon Echo Dot</h5>
          <p class="card-text">
            O Echo Dot é o smart speaker de maior sucesso. Controlado por voz
            com Alexa, ele é perfeito para qualquer ambiente. Você pode pedir
            músicas, notícias, informações e muito mais. Além de ligar para
            amigos e familiares e controlar dispositivos compatíveis de casa
            inteligente com sua voz.
          </p>
          <p class="card-text">
            <small class="text-body-secondary">R$ 349,00</small>
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Xbox Series X</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
          <p class="card-text">
            <small class="text-body-secondary">R$ 4.299.00</small>
          </p>
        </div>
      </div>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="container text-left">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
