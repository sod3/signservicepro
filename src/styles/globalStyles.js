import { C } from './designTokens';

export const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Barlow', sans-serif;
    color: ${C.textDark};
    overflow-x: hidden;
    background: ${C.white};
  }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: ${C.cream}; }
  ::-webkit-scrollbar-thumb { background: ${C.green}; border-radius: 3px; }

  /* Ticker */
  @keyframes ticker {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .ticker-inner { animation: ticker 18s linear infinite; }

  /* Guarantee ribbon */
  @keyframes ribbonTicker {
    0%   { transform: rotate(-4deg) translateX(0); }
    100% { transform: rotate(-4deg) translateX(-50%); }
  }
  .ribbon-inner { animation: ribbonTicker 22s linear infinite; }

  /* Fade-up on scroll */
  .fade-up {
    opacity: 0;
    transform: translateY(32px);
    transition: opacity .6s ease, transform .6s ease;
  }
  .fade-up.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Button base */
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 28px;
    border-radius: 6px;
    font-family: 'Barlow', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: .08em;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
    text-decoration: none;
  }
  .btn:hover { transform: translateY(-2px); }

  .btn-green {
    background: ${C.green};
    color: ${C.white};
  }
  .btn-green:hover { background: ${C.greenDark}; box-shadow: 0 8px 20px rgba(122,193,66,.35); }

  .btn-outline-white {
    background: transparent;
    color: ${C.white};
    border: 2px solid ${C.white};
  }
  .btn-outline-white:hover { background: ${C.white}; color: ${C.navy}; }

  .btn-navy {
    background: ${C.navy};
    color: ${C.white};
  }
  .btn-navy:hover { background: ${C.navyLight}; box-shadow: 0 8px 20px rgba(13,27,46,.35); }

  .btn-outline-green {
    background: transparent;
    color: ${C.green};
    border: 2px solid ${C.green};
  }
  .btn-outline-green:hover { background: ${C.green}; color: ${C.white}; }

  /* Nav link */
  .nav-link {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: ${C.textDark};
    text-decoration: none;
    position: relative;
    transition: color .2s;
  }
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -3px; left: 0;
    width: 0; height: 2px;
    background: ${C.green};
    transition: width .2s;
  }
  .nav-link:hover { color: ${C.green}; }
  .nav-link:hover::after { width: 100%; }

  /* Feature card */
  .feat-card {
    background: ${C.white};
    border-radius: 14px;
    padding: 32px 28px;
    box-shadow: 0 2px 16px rgba(13,27,46,.07);
    transition: transform .2s ease, box-shadow .2s ease;
  }
  .feat-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(13,27,46,.12);
  }

  /* Serve card */
  .serve-card {
    display: flex;
    align-items: flex-start;
    gap: 28px;
  }

  /* Partner logos */
  .partner-logo {
    filter: grayscale(100%) opacity(.55);
    transition: filter .2s;
    max-height: 40px;
    object-fit: contain;
  }
  .partner-logo:hover { filter: grayscale(0%) opacity(1); }

  /* Quote form */
  .quote-input {
    width: 100%;
    background: rgba(255,255,255,.12);
    border: 1.5px solid rgba(255,255,255,.25);
    border-radius: 6px;
    padding: 11px 14px;
    color: ${C.white};
    font-family: 'Barlow', sans-serif;
    font-size: 14px;
    transition: border-color .2s;
    outline: none;
  }
  .quote-input::placeholder { color: rgba(255,255,255,.45); }
  .quote-input:focus { border-color: ${C.green}; }

  /* Mobile menu */
  .mobile-menu {
    position: fixed;
    top: 0; right: 0;
    width: min(320px, 100vw);
    height: 100vh;
    background: ${C.navy};
    z-index: 200;
    transform: translateX(100%);
    transition: transform .3s ease;
    padding: 80px 32px 40px;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
  .mobile-menu.open { transform: translateX(0); }

  /* Responsive helpers */
  @media (max-width: 1024px) {
    .hide-tablet { display: none !important; }
  }
  @media (max-width: 767px) {
    .hide-mobile { display: none !important; }
    .show-mobile { display: flex !important; }
  }
`;