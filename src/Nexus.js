import logo from './logo.svg';
import './Nexus.css';
import { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";

function Nexus() {
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
    <div className="Nexus">
      <div id="blob" ref={blobRef}></div>
      <div id="blur"></div>

      
      <div className="back-button" onClick={goToHome} style={{ cursor: 'pointer' }}>
        <img src={require('./icons/back.png')} alt="back" />
      </div>

      <div className="nexus">
        <div className="nexus__text">Nexus Fintech Sales</div>
        <div className="nexus__desc">Website link: https://nexus-fintech-sales.web.app/
        </div>
      </div>

      <div className="nexus__main">
        <div className="nexus__div">
          <div className="nexus__info">
            <div className="nexus__page">Login</div>
            <div className="nexus__img">
              <img src={require('./icons/nexus-login.png')} alt="nexus-login" />
            </div>
          </div>

          <div className="nexus__info">
            <div className="nexus__page">Booklet Management</div>
            <div className="nexus__img">
              <img src={require('./icons/nexus-booklet.png')} alt="nexus-booklet" />
            </div>
          </div>

          <div className="nexus__info">
            <div className="nexus__page">Sales Reporting</div>
            <div className="nexus__img">
              <img src={require('./icons/nexus-sales.png')} alt="nexus-sales" />
            </div>
          </div>

          <div className="nexus__info">
            <div className="nexus__page">User Management</div>
            <div className="nexus__img">
              <img src={require('./icons/nexus-user.png')} alt="nexus-user" />
            </div>
          </div>
        </div>

        <div className="nexus__div">
          <div className="nexus__info">
            <div className="nexus__page">Order Management</div>
            <div className="nexus__img">
              <img src={require('./icons/nexus-order.png')} alt="nexus-order" />
            </div>
          </div>

          <div className="nexus__info">
            <div className="nexus__page">Inventory Management</div>
            <div className="nexus__img">
              <img src={require('./icons/nexus-inventory.png')} alt="nexus-inventory" />
            </div>
          </div>

          <div className="nexus__info">
            <div className="nexus__page">Supplier Management</div>
            <div className="nexus__img">
              <img src={require('./icons/nexus-supplier.png')} alt="nexus-supplier" />
            </div>
          </div>

          <div className="nexus__info">
            <div className="nexus__page">logs</div>
            <div className="nexus__img">
              <img src={require('./icons/nexus-logs.png')} alt="nexus-logs" />
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

export default Nexus;
