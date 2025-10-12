import logo from './logo.svg';
import './Grocery.css';
import { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";

function Grocery() {
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
    <div className="Grocery">
      <div id="blob" ref={blobRef}></div>
      <div id="blur"></div>

      
      <div className="back-button" onClick={goToHome} style={{ cursor: 'pointer' }}>
        <img src={require('./icons/back.png')} alt="back" />
      </div>

      <div className="grocery">
        <div className="grocery__text">Grocery Shop Management System</div>
      </div>

      <div className="grocery__main">
          <div className="grocery__div">
            <div className="grocery__info">
              <div className="grocery__page">Welcome Page</div>
              <div className="grocery__img">
                <img src={require('./icons/grocery-landing.png')} alt="grocery-landing" />
              </div>
            </div>

            <div className="grocery__info">
              <div className="grocery__page">Registration</div>
              <div className="grocery__img">
                <img src={require('./icons/grocery-register.png')} alt="grocery-register" />
              </div>
            </div>
          </div>

          <div className="grocery__div">
            <div className="grocery__info">
              <div className="grocery__page">Login</div>
              <div className="grocery__img">
                <img src={require('./icons/grocery-login.png')} alt="grocery-login" />
              </div>
            </div>
          </div>
      </div>

      <div className="grocery__main">
        <div className="admin">
          <div className="admin__text">Admin Side</div>
          <div className="grocery__div">
            <div className="grocery__info">
              <div className="grocery__page">Home</div>
              <div className="grocery__img">
                <img src={require('./icons/grocery-admin.png')} alt="grocery-admin" />
              </div>
            </div>

            <div className="grocery__info">
              <div className="grocery__page">Employee Legder</div>
              <div className="grocery__img">
                <img src={require('./icons/grocery-ledger.png')} alt="grocery-ledger" />
              </div>
            </div>

            <div className="grocery__info">
              <div className="grocery__page">Product Reports</div>
              <div className="grocery__img">
                <img src={require('./icons/grocery-adminReports.png')} alt="grocery-adminReports" />
              </div>
            </div>

            <div className="grocery__info">
              <div className="grocery__page">Transaction Reports</div>
              <div className="grocery__img">
                <img src={require('./icons/grocery-transactionReports.png')} alt="grocery-transactionReports" />
              </div>
            </div>
          </div>
        </div>

        <div className="admin">
          <div className="admin__text">Cashier Side</div>
          <div className="grocery__div">
            <div className="grocery__info">
              <div className="grocery__page">Home</div>
              <div className="grocery__img">
                <img src={require('./icons/grocery-cashier.png')} alt="grocery-cashier" />
              </div>
            </div>

            <div className="grocery__info">
              <div className="grocery__page">Products</div>
              <div className="grocery__img">
                <img src={require('./icons/grocery-viewProd.png')} alt="grocery-viewProd" />
              </div>
            </div>

            <div className="grocery__info">
              <div className="grocery__page">Reports</div>
              <div className="grocery__img">
                <img src={require('./icons/grocery-cashierReports.png')} alt="grocery-cashierReports" />
              </div>
            </div>

            <div className="grocery__info">
              <div className="grocery__page">Transaction</div>
              <div className="grocery__img">
                <img src={require('./icons/grocery-transaction.png')} alt="grocery-transaction" />
              </div>
            </div>

            <div className="grocery__info">
              <div className="grocery__page">Account</div>
              <div className="grocery__img">
                <img src={require('./icons/grocery-account.png')} alt="grocery-account" />
              </div>
            </div>

            <div className="grocery__info">
              <div className="grocery__page">Logs</div>
              <div className="grocery__img">
                <img src={require('./icons/grocery-logs.png')} alt="grocery-logs" />
              </div>
            </div>

            <div className="grocery__info">
              <div className="grocery__page">Receipt</div>
              <div className="grocery__imgReceipt">
                <img src={require('./icons/grocery-receipt.png')} alt="grocery-receipt" />
              </div>
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

export default Grocery;
