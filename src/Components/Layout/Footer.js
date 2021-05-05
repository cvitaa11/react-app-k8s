const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="d-flex justify-content-center">
        <span className="text-white">
          &copy; Combis {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};
export default Footer;
