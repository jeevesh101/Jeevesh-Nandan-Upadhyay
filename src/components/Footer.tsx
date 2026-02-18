const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/30 text-center">
      <p className="text-xs text-muted-foreground font-mono">
        Designed & Built by{" "}
        <span className="text-primary">Jeevesh Nandan Upadhyay</span>{" "}
        © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
