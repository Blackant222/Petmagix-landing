import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Keep for font and base styles

const SimpleApp = () => {
  return (
    <div dir="rtl" style={{ fontFamily: 'Vazirmatn, sans-serif' }}> {/* Ensure font is applied */}
      <h1 style={{color: 'white', textAlign: 'center', fontSize: '2em', paddingTop: '20px'}}>سلام دنیا!</h1>
      <p style={{color: 'lightgray', textAlign: 'center'}}>این یک آزمایش رندر ساده است.</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleApp />
  </React.StrictMode>
);
