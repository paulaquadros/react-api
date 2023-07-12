import React, { Component } from "react";

const Header = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <ul className="nav nav-pills">
        <li>
          <h2>Store©</h2>
        </li>
        <li className="nav-item dropdown" id="produtos">
          <button
            className="btn btn-dark dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Products
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li>
              <a className="dropdown-item" href="/create">
                Create
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/update">
                Update
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/delete">
                Delete
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item" id="login">
          <a href="google.com" className="nav-link px-2 link-dark">
            Login
          </a>
        </li>
        <li className="nav-item" id="signup">
          <a href="google.com" className="nav-link px-2 link-dark">
            Sign Up
          </a>
        </li>
        <li>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" id="search">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </li>
      </ul>
    </header>
  );
};

const Body = () => {
  return (
    <div className="container">
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">PS5</h5>
            <p className="card-text">
              Largura de banda da RAM: 448 GB/s; Taxa de transferência da RAM:
              14 GB/s; Armazenamento interno: SSD customizado de 825 GB,
              barramento de 12 canais e controlador PCI Express 4.0, com taxa de
              transferência de 5,5 GB/s (tamanho original) ou 8,9 GB/s
              (compactado);
            </p>
            <p className="card-text">
              <small className="text-body-secondary">R$ 4.999,90</small>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Amazon Echo Dot</h5>
            <p className="card-text">
              O Echo Dot é o smart speaker de maior sucesso. Controlado por voz
              com Alexa, ele é perfeito para qualquer ambiente. Você pode pedir
              músicas, notícias, informações e muito mais. Além de ligar para
              amigos e familiares e controlar dispositivos compatíveis de casa
              inteligente com sua voz.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">R$ 349,00</small>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Xbox Series X</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">R$ 4.299.00</small>
            </p>
          </div>
        </div>
      </div>
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Novo Kindle 11ª Geração</h5>
            <p className="card-text">
              O Kindle mais leve e compacto, agora com tela de 300 ppi de alta
              resolução para textos e imagens nítidos. Leia confortavelmente em
              uma tela antirreflexo como se fosse em papel. Com a iluminação
              embutida ajustável e o modo noturno, ler fica mais fácil durante o
              dia e a noite.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">R$ 399,00</small>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              BLACK+DECKER Aspirador 3 em 1 Vertical
            </h5>
            <p className="card-text">
              Aspirador vertical Muito leve e comprido,é perfeito para aspiraros
              lugares díficies como embaixo de sofás e camas. Filtro HEPA
              permanente Garante maior filtragemdo ar, além de tornar
              suasfaxinas mais sustentáveis.È só lavar e usar de novo
              Reservatório de 500ml Faça a limpeza sem sepreocupar em esvaziar
              oreservatório várias vezes! Lanterna frontal Ilumine e aspire
              assujeirinhas mais difícies deenxergar Aspirador portátil.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">R$ 639,90</small>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Apple iPhone 14 (128 GB)</h5>
            <p className="card-text">
              Tela Super Retina XDR de 6,1 polegadas Sistema de câmera avançado
              para fotos melhores em qualquer luz Modo Cinema, agora em 4K Dolby
              Vision até 30 qps Modo Ação para vídeos em movimento com mais
              estabilidade Tecnologia de segurança — Detecção de Acidente, que
              liga para a emergência se você não puder.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">R$ 4.999,00</small>
            </p>
          </div>
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
