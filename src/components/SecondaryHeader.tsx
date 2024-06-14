'use client'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

interface NavLinkProps {
    pageName: string;
    isActive: boolean;
    onClick: (pageName: string) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ pageName, isActive, onClick }) => {
    return (
        <li>
            <a 
                className={`font-manrope font-medium ${isActive ? 'text-black-regular font-black' : 'text-header-grey hover:text-black-regular'}`} 
                href="#"
                onClick={() => onClick(pageName)}
            >
                {pageName}
            </a>
        </li>
    );
}

export default function SecondaryHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [activePage, setActivePage] = useState('Home');

    const handleLinkClick = (pageName: string) => {
        setActivePage(pageName);
    };

    useEffect(() => {
        const handleResize = () => {
            const isMobileDevice = window.innerWidth <= 768;
            setIsMobile(isMobileDevice);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); 

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    library.add(fab, fas, far);

    return (
        <>
            <div className="flex justify-center bg-paper-image w-full h-12">
                <nav className="flex items-center">
                <ul className="flex space-x-9">
                        <NavLink 
                            pageName="Home" 
                            isActive={activePage === 'Home'} 
                            onClick={handleLinkClick} 
                        />
                        <NavLink 
                            pageName="Sobre" 
                            isActive={activePage === 'Sobre'} 
                            onClick={handleLinkClick} 
                        />
                        <NavLink 
                            pageName="Produtos" 
                            isActive={activePage === 'Produtos'} 
                            onClick={handleLinkClick} 
                        />
                        <NavLink 
                            pageName="Parceiros" 
                            isActive={activePage === 'Parceiros'} 
                            onClick={handleLinkClick} 
                        />
                        <NavLink 
                            pageName="Eventos" 
                            isActive={activePage === 'Eventos'} 
                            onClick={handleLinkClick} 
                        />
                        <NavLink 
                            pageName="Contatos" 
                            isActive={activePage === 'Contatos'} 
                            onClick={handleLinkClick} 
                        />
                    </ul>
                </nav>
            </div>
        </>
    )
    
}