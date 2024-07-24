import Navbar from "../../components/navbar/navbar";
import "./styles.css";
import { Link } from 'react-router-dom'; 
import Footer from '../../components/Footer/Footer'
function Home() {
  return (
    <>
      <Navbar />
      <header className="header-section">
        <div className="home-area">
          <div className="header-content">
            <h1 className="header-title">
              Bem-vindo à Nossa Plataforma de Saúde Online
            </h1>
            <p className="header-subtitle">
              Acompanhe, monitore e registre sua saúde de forma rápida e
              eficiente.
            </p>

            <Link to="/homework" className="start-Link">
              Iniciar
            </Link>
          </div>
        </div>
      </header>

      <div className="features-section">
        <div className="feature-item">
          <div className="seImage">
            <img src="/comida.jpeg" alt="Feature 1" />
          </div>
          <div className="feature-content">
            <h2 className="feature-title">Registe seus alimentos</h2>
            <p className="feature-subtitle">
              Transforme sua vida com nossa orientação personalizada, registre
              seus alimentos, monitore as calorias diárias e alcance o
              equilíbrio perfeito para sua saúde. Seu bem-estar merece toda
              atenção, essa aplicação ressalta a personalização do serfreshness,
              a importância do equilíbrio e reforça o cuidado com a saúde.
            </p>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-content">
            <h2 className="feature-title1">Registe seus alimentos</h2>
            <p className="feature-subtitle1">
              Melhore seu corpo e mente com nossa orientação especializada em
              exercícios personalizados. Alcance seus objetivos, fortaleça sua
              saúde e descubra o poder da atividade física em sua vida. Seu
              bem-estar merece essa dedicação. Valorize a importância dos
              exercícios personalizados, colha os benefícios para a saúde e
              experimente a transformação que a atividade física pode
              proporcionar.
            </p>
          </div>
          <div className="seImage">
            <img src="/comida.jpeg" alt="Feature 2" />
          </div>
        </div>
      </div>
      <Footer isFixed={false} />
    </>
  );
}

export default Home;
