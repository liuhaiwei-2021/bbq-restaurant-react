import { useNavigate } from "react-router-dom";

//Project files
import "../styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero" id="hero">
      <img className="hero-image" src="/images/hero.png" alt="hero" />
      <div className="hero-text">
        <h1 className="restaurant-title">BARBECUE</h1>
        <img className="illustration" src="/images/bbq.png" alt="bbq" />
        <h3 className="subtitle">SMOKE & GRILL</h3>
        <h3 className="slogan">
          LOCALLY GROWN, FAMILIAR, PERSONAL - ALWAYS COOKED WITH LOVE
        </h3>
        <button className="view-btn" onClick={() => navigate(`/categories`)}>
          View Menu
        </button>
      </div>
    </section>
  );
}

export default Hero;
