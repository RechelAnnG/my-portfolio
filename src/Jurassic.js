import logo from './logo.svg';
import './Jurassic.css';
import { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";

function Jurassic() {
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
    <div className="Jurassic">
      <div id="blob" ref={blobRef}></div>
      <div id="blur"></div>

      
      <div className="back-button" onClick={goToHome} style={{ cursor: 'pointer' }}>
        <img src={require('./icons/back.png')} alt="back" />
      </div>

      <div className="jurassic">
        <div className="jurassic__text">Jurassic Pot PH</div>
        <div className="jurassic__desc">Web design of Jurassic Pot PH created in Figma
        </div>
      </div>

      <div className="jurassic__main">
        <div className="jurassic__div">
          <div className="jurassic__info">
            <div className="jurassic__page">Login</div>
            <div className="jurassic__img">
              <img src={require('./icons/jurassic-login.png')} alt="jurassic-login" />
            </div>
          </div>

          <div className="jurassic__info">
            <div className="jurassic__page">Home</div>
            <div className="jurassic__img">
              <img src={require('./icons/jurassic-home.png')} alt="jurassic-home" />
            </div>
          </div>

          <div className="jurassic__info">
            <div className="jurassic__page">About Us</div>
            <div className="jurassic__img">
              <img src={require('./icons/jurassic-aboutus.png')} alt="jurassic-aboutus" />
            </div>
          </div>

          <div className="jurassic__info">
            <div className="jurassic__page">FAQs</div>
            <div className="jurassic__img">
              <img src={require('./icons/jurassic-faqs.png')} alt="jurassic-faqs" />
            </div>
          </div>
        </div>

        <div className="jurassic__div">
          <div className="jurassic__info">
            <div className="jurassic__page">Products</div>
            <div className="jurassic__img">
              <img src={require('./icons/jurassic-shop.png')} alt="jurassic-shop" />
            </div>
          </div>

          <div className="jurassic__info">
            <div className="jurassic__page">Product Details</div>
            <div className="jurassic__img">
              <img src={require('./icons/jurassic-product.png')} alt="jurassic-product" />
            </div>
          </div>

          <div className="jurassic__info">
            <div className="jurassic__page">Cart</div>
            <div className="jurassic__img">
              <img src={require('./icons/jurassic-cart.png')} alt="jurassic-cart" />
            </div>
          </div>

          <div className="jurassic__info">
            <div className="jurassic__page">Account</div>
            <div className="jurassic__img">
              <img src={require('./icons/jurassic-account.png')} alt="jurassic-account" />
            </div>
          </div>

          <div className="jurassic__info">
            <div className="jurassic__page">Contact Us</div>
            <div className="jurassic__img">
              <img src={require('./icons/jurassic-contactus.png')} alt="jurassic-contactus" />
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

export default Jurassic;
