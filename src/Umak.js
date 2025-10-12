import logo from './logo.svg';
import './Umak.css';
import { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";

function Umak() {
  const blobRef = useRef(null);
  const targetRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const currentRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const rafRef = useRef(0);
  
  // Refs for navigation
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    const handleMouseMove = (e) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
    };

    const tick = () => {
      const smoothing = 0.12; // smaller = more delay
      const { x: tx, y: ty } = targetRef.current;
      const { x: cx, y: cy } = currentRef.current;
      const nx = cx + (tx - cx) * smoothing;
      const ny = cy + (ty - cy) * smoothing;
      currentRef.current = { x: nx, y: ny };
      blob.style.left = `${nx}px`;
      blob.style.top = `${ny}px`;
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Navigation scroll functions
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Resume and Projects handlers
  const openResume = () => {
    window.open('https://drive.google.com/file/d/1h1qq9-8B9F1fjNaJFq5pf08XKwnT4Tag/view?usp=sharing', '_blank');
  };

  return (
    <div className="Umak">
      <div id="blob" ref={blobRef}></div>
      <div id="blur"></div>

      
      <div className="back-button" onClick={goToHome} style={{ cursor: 'pointer' }}>
        <img src={require('./icons/back.png')} alt="back" />
      </div>

      <div className="umak">
        <div className="umak__text">UMAK Nexus</div>
        <div className="umak__desc">Mobile design version of Nexus Fintech Sales, created in Figma
        </div>
      </div>

      <div className="umak__main">
        <div className="umak__div">
          <div className="umak__info">
            <div className="umak__page">Login</div>
            <div className="umak__img">
              <img src={require('./icons/umak-login.png')} alt="umak-login" />
            </div>
          </div>

          <div className="umak__info">
            <div className="umak__page">Inventory Management</div>
            <div className="umak__img">
              <img src={require('./icons/umak-inventory.png')} alt="umak-inventory" />
            </div>
          </div>

          <div className="umak__info">
            <div className="umak__page">Supplier Management</div>
            <div className="umak__img">
              <img src={require('./icons/umak-supplier.png')} alt="umak-supplier" />
            </div>
          </div>

          <div className="umak__info">
            <div className="umak__page">Logs</div>
            <div className="umak__img">
              <img src={require('./icons/umak-logs.png')} alt="umak-logs" />
            </div>
          </div>
        </div>

        <div className="umak__div">
          <div className="umak__info">
            <div className="umak__page">Order Management</div>
            <div className="umak__img">
              <img src={require('./icons/umak-order.png')} alt="umak-order" />
            </div>
          </div>

          <div className="umak__info">
            <div className="umak__page">Sales Reporting</div>
            <div className="umak__img">
              <img src={require('./icons/umak-sales.png')} alt="umak-sales" />
            </div>
          </div>

          <div className="umak__info">
            <div className="umak__page">User Management</div>
            <div className="umak__img">
              <img src={require('./icons/umak-user.png')} alt="umak-user" />
            </div>
          </div>
        </div>
      </div>

       <footer className="footer">
         <div className="footer__copyright">@2025 Rechel Ann De Guzman. All rights reserved.</div>
         <div className="footer__actions">
           <button className="footer__button" onClick={openResume}>View Resume</button>
           <button className="footer__button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Go back to the top</button>
         </div>
       </footer>

    </div>
  );
}

export default Umak;
