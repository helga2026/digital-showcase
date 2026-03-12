const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Все права защищены
        </p>
        <a
          href="https://t.me/your_username"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Telegram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
