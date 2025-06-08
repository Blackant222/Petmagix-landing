import React from 'react';

// Placeholder Social Icons (simple SVGs)
const InstagramIcon = () => (
  <svg className="w-6 h-6 hover:text-pink-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-6 h-6 hover:text-sky-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const TelegramIcon = () => (
  <svg className="w-6 h-6 hover:text-blue-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2L11 13L2 9L22 2ZM22 2L15 22L11 13L2 9L22 2Z"></path>
  </svg>
);


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-8 sm:py-10 border-t border-slate-700">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 space-x-reverse mb-6">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <TwitterIcon />
          </a>
          <a href="https://t.me/petmagixtest_bot" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <TelegramIcon />
          </a>
        </div>
        <p className="text-sm">
          © {currentYear} پت‌مجیکس. تمامی حقوق محفوظ است.
        </p>
        <p className="text-xs mt-2">
          ساخته شده با ❤️ برای دوستداران حیوانات
        </p>
      </div>
    </footer>
  );
};

export default Footer;
