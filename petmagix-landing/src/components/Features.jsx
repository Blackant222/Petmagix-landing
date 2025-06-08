import React from 'react';

// Placeholder SVG Icons (simple geometric shapes for now)
const IconPlaceholder = ({ className }) => (
  <svg className={`w-12 h-12 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
  </svg>
);

const HealthIcon = () => (
  <svg className="w-12 h-12 text-teal-400 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const ReminderIcon = () => (
  <svg className="w-12 h-12 text-sky-400 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    <line x1="12" y1="2" x2="12" y2="5"></line>
  </svg>
);

const ChatIcon = () => (
  <svg className="w-12 h-12 text-amber-400 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const AIInsightsIcon = () => (
  <svg className="w-12 h-12 text-violet-400 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);


const featuresData = [
  {
    icon: <HealthIcon />,
    title: 'پیگیری سلامت',
    description: 'نظارت بر وضعیت جسمانی و فعالیت‌های روزانه حیوان خانگی شما.',
  },
  {
    icon: <ReminderIcon />,
    title: 'یادآوری خودکار',
    description: 'دریافت یادآوری برای واکسیناسیون، قرارهای دامپزشکی و موارد دیگر.',
  },
  {
    icon: <ChatIcon />,
    title: 'چت هوشمند',
    description: 'مشاوره و پاسخ به سوالات شما در مورد نگهداری حیوانات با کمک هوش مصنوعی.',
  },
  {
    icon: <AIInsightsIcon />,
    title: 'بینش هوش مصنوعی',
    description: 'تجزیه و تحلیل داده‌ها برای ارائه توصیه‌های شخصی‌سازی شده برای سلامت بهتر.',
  },
];

const Features = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-teal-400">
          ویژگی‌های کلیدی پت‌مجیکس
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-700 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-teal-500/50 flex flex-col items-center text-center"
            >
              {feature.icon}
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-100">
                {feature.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
