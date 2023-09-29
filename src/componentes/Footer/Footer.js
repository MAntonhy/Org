import "./Footer.css";

const Footer = () => {
  const estiloFooter = { backgroundImage: "url(/img/footer.png)" };
  return (
    <footer className="footer" style={estiloFooter}>
      <div className="redes">
        <a href="https://www.facebook.com/MAntonhy/">
          <img src="/img/facebook.png" alt="facebook" />
        </a>
        <a href="https://www.facebook.com/MAntonhy/">
          <img src="/img/whatsapp.png" alt="whatsapp" />
        </a>
        <a href="https://www.facebook.com/MAntonhy/">
          <img src="/img/telegrama.png" alt="telegram" />
        </a>
      </div>
      <img src="/img/logo.png" alt="logo" />
      <strong> Desarrollador por MPV </strong>
    </footer>
  );
};

export default Footer;
