// Importaciones y declaración de funciones
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './imgPage/logo.png';
import ambur from './imgPage/iconos/bx-menu-alt-right.svg';
import arte from './imgPage/Arte.jpg';
import header from './imgPage/header-img1.png';
import deporte from './imgPage/deporte.jpg';
import logros from './imgPage/logros.jpg';
import respeto from './imgPage/respeto.jpg';
import colaboracion from './imgPage/colaboracion.jpg';
import solidaridad from './imgPage/solidaridad.jpg';
import motivacion from './imgPage/motivacion.jpg';
import footer from './imgPage/school2.png';
import Colegio from './sub-page/Colegio';
import './App.css';

// Componente principal App
const Layout = ({ children }) => (
  <div>
    <header style={{ height: '100vh' }}>
      {/* Menú de navegación */}
      <div className="menu">
        <img src={logo} alt="logo" width="100" className="logo" />
        <img src={ambur} alt="menu-desglos" className="menu-desglos" />
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/colegio">Colegio</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/niveles">Niveles</Link></li>
            <li><Link to="/portafolio">Portafolio</Link></li>
            <li><a href="./gestor/index.php">Login</a></li>
          </ul>
        </nav>
      </div>
      {/* Portada */}
      <div className="portada" style={{ backgroundImage: `url(${header})` }}>
        <div className="contenedor head">
          <h1 className="titulo">"FABRICANDO MENTES BRILLANTES"</h1>
          <p className="texto">Un colegio comprometido con el éxito académico y personal de cada estudiante</p>
        </div>
      </div>
    </header>

    {/* Contenido de las páginas */}
    {children}

    {/* Footer */}
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={footer} alt="Logo del Colegio" />
        </div>
        <div className="footer-info">
          <h3>Contactenos</h3>
          <p>Asociación de Vivienda Virgen de la Candelaria (ASOVICH)</p>
          <p>Characato, Arequipa, Peru</p>
          <p>Teléfono: 930 645 576</p>
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com/share/K25nEPH8Wqqkauyb/?mibextid=qi2Omg" className="social-media-icon" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook'></i></a>
          <a href="#" className="social-media-icon"><i className='bx bxl-twitter'></i></a>
          <a href="#" className="social-media-icon"><i className='bx bxl-instagram-alt'></i></a>
        </div>
      </div>
      <div className="line"></div>
    </footer>
  </div>
);

// Componente principal App
function App() {
  // Efectos de scroll y menú
  useEffect(() => {
    const handleScroll = () => {
      const menu = document.querySelector("header .menu");
      if (menu) {
        menu.classList.toggle("abajo", window.scrollY > 0);
      }
    };

    const handleMenuToggle = () => {
      const menuDesglos = document.querySelector('.menu-desglos');
      const menu = document.querySelector('.menu ul');
      if (menuDesglos && menu) {
        menuDesglos.addEventListener('click', () => {
          menu.classList.toggle('active');
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener('DOMContentLoaded', handleMenuToggle);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener('DOMContentLoaded', handleMenuToggle);
    };
  }, []);

  // Renderizado del componente App con Router y Routes
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout><Home /></Layout>}
        />
        <Route
          path="/colegio"
          element={<Colegio />}
        />
        {/* Añade las rutas para otras páginas aquí */}
      </Routes>
    </Router>
  );
}

// Componente Home con las secciones de contenido
const Home = () => (
  <main>
    {/* Sección de Actividades */}
    <h1 className="subtitulo">ACTIVIDADES</h1>
    <div className="contenedor-main">
      <div className="item">
        <div className="imagen-container">
          <img src={arte} alt="Imagen 1" />
        </div>
        <div className="text-container">
          <h3>ARTE</h3>
          <p>Explora tu creatividad a través de la pintura, la escultura y la música en nuestro programa de Artes, donde cada trazo y cada nota son expresiones de tu imaginación.</p>
        </div>
      </div>
      <div className="item">
        <div className="imagen-container">
          <img src={deporte} alt="Imagen 3" />
        </div>
        <div className="text-container">
          <h3>DEPORTE</h3>
          <p>Desafía tus límites y fortalece tu espíritu competitivo con nuestros equipos deportivos. Desde el campo hasta la pista, estamos aquí para cultivar tu pasión por el deporte y la superación personal.</p>
        </div>
      </div>
      <div className="item">
        <div className="imagen-container">
          <img src={logros} alt="Imagen 3" className="imagen3" height="300px" />
        </div>
        <div className="text-container">
          <h3>COMPETENCIAS</h3>
          <p>Prepárate para brillar en las competencias académicas y culturales que te desafían a demostrar tu conocimiento y habilidades. Desde olimpiadas científicas hasta debates, ¡nuestra escuela te apoya en cada paso hacia la excelencia.</p>
        </div>
      </div>
    </div>

    {/* Sección de Valores del Colegio */}
    <section className="valor">
      <div className="contenido-valor">
        <div className="valor-text">
          <h2 className="text-valores">VALORES DEL COLEGIO</h2>
          <p>En nuestro colegio, creemos firmemente en la importancia de formar no solo mentes brillantes, sino también corazones íntegros. Nuestros valores fundamentales guían cada aspecto de nuestra comunidad educativa y preparan a nuestros estudiantes para ser ciudadanos responsables y compasivos.</p>
        </div>
        <div className="valor-imagen">
          <div className="valor-item">
            <div className="item-texto-valor">
              <h2 className="text-valores">RESPETO</h2>
            </div>
            <div className="cont-margin">
              <img src={respeto} className="valor-img" alt="respeto" />
            </div>
          </div>
          <div className="valor-item">
            <div className="item-texto-valor">
              <h2 className="text-valores">COLABORACION</h2>
            </div>
            <div className="cont-margin">
              <img src={colaboracion} alt="colaboracion" className="valor-img" />
            </div>
          </div>
          <div className="valor-item">
            <div className="item-texto-valor">
              <h2 className="text-valores">SOLIDARIDAD</h2>
            </div>
            <div className="cont-margin">
              <img src={solidaridad} alt="solidaridad" className="valor-img" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Sección de Motivación */}
    <section className="motivacion-main">
      <div className="content-motivacion">
        <div className="elementos-motivacion" style={{ backgroundImage: `url(${motivacion})` }}>
          <div className="overlay">
            <h1>SEMBRAMOS CONOCIMIENTO, COSECHAMOS GRANDES SUEÑOS Y CONSTRUIMOS UN FUTURO BRILLANTE JUNTOS</h1>
            <div className="text-moti">
              <div className="moti-element">
                <p>MOTIVATE</p>
              </div>
              <div className="moti-element">
                <p>APRENDE</p>
              </div>
              <div className="moti-element">
                <p>JUEGA</p>
              </div>
              <div className="moti-element">
                <p>CONVIERTE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

// Exportación del componente App
export default App;
