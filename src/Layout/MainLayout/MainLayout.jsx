
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import { useState } from 'react';

const MainLayout = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const themeClasses = {
        light: 'bg-white text-black',
        dark: 'bg-black ',
    };

    return (
        <div className={`min-h-screen ${themeClasses[theme]}`}>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Outlet />
            <Footer theme={theme} />
        </div>
    );
};

export default MainLayout;