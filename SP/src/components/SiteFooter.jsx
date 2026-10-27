import { Camera, Compass } from 'lucide-react';

function SiteFooter() {
  return (
    <footer className="site-footer">
      <a aria-label="Social Prefect Tours home" className="brand footer-brand" href="#home">
        <span className="brand-mark"><Compass aria-hidden="true" size={23} strokeWidth={1.8} /></span>
        <span className="brand-name">social prefect<span>tours</span></span>
      </a>
      <div className="footer-contact">
        <a href="mailto:hello@socialprefecttours.io">hello@socialprefecttours.io</a>
        <a href="tel:+2349166709829">+234 916 670 9829</a>
        <a href="https://maps.google.com/?q=12+Caroline+Atounah+St+Lekki+Phase+I+Lagos" rel="noreferrer" target="_blank">12 Caroline Atounah St, Lekki Phase I, Lagos</a>
      </div>
      <a aria-label="Social Prefect Tours on Instagram" className="instagram-link" href="https://www.instagram.com/socialprefecttours/" rel="noreferrer" target="_blank"><Camera size={17} /> @socialprefecttours</a>
      <span className="footer-end">GO WELL. COME BACK WITH STORIES. <span>© 2026</span></span>
    </footer>
  );
}

export default SiteFooter;