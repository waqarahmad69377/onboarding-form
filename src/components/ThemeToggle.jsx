import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <div className="absolute top-4 right-4">
      <button
        onClick={() => setDark(!dark)}
        className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-1 rounded shadow"
      >
        {dark ? '🌙 Dark' : '☀️ Light'}
      </button>
    </div>
  );
};

export default ThemeToggle;
