import React, { useEffect } from 'react';
import logo from '../imgPage/logo.png';
import ambur from '../imgPage/iconos/bx-menu-alt-right.svg';
import header from "../imgPage/imagen1.jpg";
import footer from '../imgPage/school2.png';
import { Link } from 'react-router-dom';
import './Colegio.css';

function Colegio() {

    useEffect(() => {
        let runTimeOut;
        let runNextAuto;

        const showSlider = (type) => {
            const SliderDom = document.querySelector('.carrusel .list');
            const thumbnailBorderDom = document.querySelector('.carrusel .thumbnail');
            const carouselDom = document.querySelector('.carrusel');

            const SliderItemsDom = SliderDom.querySelectorAll('.carrusel .list .item');
            const thumbnailItemsDom = document.querySelectorAll('.carrusel .thumbnail .item');

            if (type === 'next') {
                SliderDom.appendChild(SliderItemsDom[0]);
                thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
                carouselDom.classList.add('next');
            } else {
                SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
                thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                carouselDom.classList.add('prev');
            }

            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carouselDom.classList.remove('next');
                carouselDom.classList.remove('prev');
            }, 3000);

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                showSlider('next');
            }, 7000);
        };

        const handleObserver = () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    } else {
                        entry.target.classList.remove('show');
                    }
                });
            });

            const objetivoVarElements = document.querySelectorAll('.objetivo-var');
            objetivoVarElements.forEach(el => observer.observe(el));
        };

        handleObserver();

        return () => {
            clearTimeout(runTimeOut);
            clearTimeout(runNextAuto);
        };
    }, []);

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

    return (
        <div>
            <header>
                <div className="menu">
                    <img src={logo} alt="logo" width="100" className="logo"/>
                    <img src={ambur} alt="menu-desglos" className="menu-desglos"/>
                    <nav>
                        <ul>
                            <li><a href="../index.html">Inicio</a></li>
                            <li><a href="./colegio.html">Colegio</a></li>
                            <li><a href="./servicios.html">Servicios</a></li>
                            <li><a href="#">Niveles</a></li>
                            <li><a href="./portafolio.html">Portafolio</a></li>
                            <li><a href="../gestor/index.php">Login</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="portada" style={{backgroundImage: `url(${header})`}}></div>
            </header>

            <main className="completo">
                <div className="concepto_general">
                    <h1>SOBRE NOSOTROS</h1>
                    <p>En San José School, nos dedicamos a brindar una educación de calidad que forma ciudadanos comprometidos con el desarrollo del país y la transformación de la sociedad. Nuestra misión y visión reflejan nuestro compromiso con los valores católicos y el carisma de San José, ofreciendo una educación integral que responde a las necesidades actuales y promueve una cultura de paz y sostenibilidad. Aspiramos a ser referentes en el uso de nuevas tecnologías y metodologías pedagógicas, asegurando una formación completa y actualizada para nuestros estudiantes, preparándolos para ser líderes y agentes de cambio en un mundo globalizado.</p>
                </div>
                <div className="carrusel">
                    <div className="list">
                        <div className="item">
                            <img src="../imgPage/colegio_imagen1.jpg" alt="imagen 1" />
                            <div className="content">
                                <div className="autor">San José School</div>
                                <div className="title">MISIÓN</div>
                                <div className="description">Somos una institución educativa católica que, inspirada en el carisma de San José, forma ciudadanos comprometidos con el desarrollo del país a través de un currículo integral, promoviendo valores morales y una cultura de paz.</div>
                            </div>
                        </div>
                        <div className="item">
                            <img src="../imgPage/colegio_imagen2.jpg" alt="imagen 2" />
                            <div className="content">
                                <div className="autor">San José School</div>
                                <div className="title">VISIÓN</div>
                                <div className="description">Ser referentes en nuevas tecnologías y pedagogías actuales, garantizando una formación integral en valores, ciudadanía y sostenibilidad, preparando a nuestros estudiantes para ser líderes y agentes de cambio en una sociedad globalizada.</div>
                            </div>
                        </div>
                    </div>
                    <div className="thumbnail">
                        <div className="item">
                            <img src="../imgPage/colegio_imagen1.jpg" alt="imagen 1" />
                            <div className="content">
                                <div className="title">MISIÓN</div>
                            </div>
                        </div>
                        <div className="item">
                            <img src="../imgPage/colegio_imagen2.jpg" alt="imagen 2" />
                            <div className="content">
                                <div className="title">VISIÓN</div>
                            </div>
                        </div>
                    </div>
                    <div className="arrows">
                        <button id="prev">{'<'}</button>
                        <button id="next">{'>'}</button>
                    </div>
                    <div className="time"></div>
                </div>
                <div className="objetivos-main">
                    <div className="objetivo-vari">
                        <h1>OBJETIVOS</h1>
                    </div>
                    
                    <div className="objetivo_doble">
                        <div className="objetivo">
                            <div className="objetivo-var">
                                <li className="ob-tit">Fomentar la participación familiar</li>
                                <p>Comprometer a las familias en el desarrollo y educación de los niños, siguiendo los protocolos del Plan de Implementación.</p>
                            </div>
                            <div className="objetivo-var">
                                <li className="ob-tit">Fortalecer la identidad estudiantil</li>
                                <p>Apoyar el desarrollo integral y las potencialidades de los estudiantes a través de actividades extraescolares y programas de desarrollo personal.</p>
                            </div>
                            <div class="objetivo-var">
                                <li class="ob-tit">Personalizar la enseñanza</li>
                                <p>Adaptar el trabajo pedagógico a las necesidades, características e intereses individuales de cada alumno, reconociendo la curiosidad y el juego como fuentes principales de aprendizaje.</p>
                            </div>
                            <div class="objetivo-var">
                                <li class="ob-tit">Valorar la diversidad cultural</li>
                                <p>Integrar y valorar críticamente la diversidad cultural en los procesos educativos.</p>
                            </div>
                            <div class="objetivo-var">
                                <li class="ob-tit">Desarrollar capacitaciones</li>
                                <p>Ofrecer formación continua para docentes, padres y estudiantes, promoviendo el desarrollo integral y la autoestima de los niños.</p>
                            </div>
                            <div class="objetivo-var">
                                <li class="ob-tit">Aplicar estrategias de mediación</li>
                                <p>Implementar estrategias para mejorar los niveles de logro de los estudiantes.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </main>

            <footer>
                <div className="centered-content">
                    <div className="col1">
                        <img src={footer} alt="footer" width="200" />
                    </div>
                    <div className="col2">
                        <div className="social-media">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="copy">
                    <p>&copy; 2024 San José School - Todos los derechos reservados</p>
                </div>
            </footer>
        </div>
    );
}

export default Colegio;
