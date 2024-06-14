'use client'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

function Card({ imageSrc, title, subtitle, hasLine }) {
    return (
        <div className="flex items-center mb-4 md:mb-0">
            <img className="h-8 w-8 mr-4" src={imageSrc} alt="" />
            <div className="flex flex-col">
                <h3 className="text-grey-regular text-sm">{title}</h3>
                <h1 className="text-black-regular text-base">{subtitle}</h1>
            </div>
            {hasLine && <div className="h-12 w-0.5 mx-3 bg-grey-regular"></div>}
        </div>
    );
}

function SocialMedia({ icon, redirectLink }) {
    return (
        <a className="mx-1 min-w-8 h-8 rounded-full bg-grey-secondary hover:bg-black/45 flex items-center justify-center text-white" href={redirectLink}>
            <FontAwesomeIcon className='p-2 text-black-regular hover:text-grey-secondary' icon={icon} />
        </a>
    );
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isMobileDevice = window.innerWidth <= 768;
            setIsMobile(isMobileDevice);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Check the initial screen size

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    library.add(fab, fas, far);

    return (
        <>
            <div className="flex">
                <div className='h-1 w-1/3 bg-green-regular'></div>
                <div className='h-1 w-1/3 bg-mustard-yellow'></div>
                <div className='h-1 w-1/3 bg-orange-regular'></div>
            </div>
            <nav className="max-w-5xl mx-auto max-h-20 bg-[url('https://i.ibb.co/sJPK3zy/paper-header.png')]">
                <div className="flex items-center max-h-20 space-x-1">
                    <img className="p-6 max-h-24" src="https://i.ibb.co/PjLgqMZ/Novo-Projeto-1.png" alt="" />
                    <div className="p-6 justify-center items-center w-full max-w-20 mx-auto flex flex-row h-16">
                        <SocialMedia
                            icon={"fa-brands fa-x-twitter"}
                            redirectLink={"https://twitter.com"}
                        />
                        <SocialMedia
                            icon={"fa-brands fa-instagram"}
                            redirectLink={"https://instagram.com"}
                        />
                        <button 
                            className="md:hidden mx-1 min-w-8 h-8 rounded-full bg-grey-secondary hover:bg-black/45 flex items-center justify-center text-white"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <FontAwesomeIcon className='p-2 text-black-regular hover:text-grey-secondary' icon={menuOpen ? ['fas', 'times'] : ['fas', 'bars']} />
                        </button>
                    </div>
                    <div className={`hidden md:flex md:items-center md:space-x-4 w-full`}>
                        <Card
                            imageSrc={"https://i.ibb.co/W0ZQKG3/cellphone.png"}
                            title={"Whatsapp"}
                            subtitle={"(45) 99832-8886"}
                            hasLine={true}
                        />
                        <Card
                            imageSrc={"https://i.ibb.co/0MFTpM5/EMAIL.png"}
                            title={"Mande um e-mail"}
                            subtitle={"cirleirossi@gmail.com"}
                            hasLine={true}
                        />
                        <Card
                            imageSrc={"https://i.ibb.co/DGkCbVr/pin.png"}
                            title={"Vila Nova"}
                            subtitle={"Toledo, Paraná"}
                            hasLine={false}
                        />
                    </div>
                </div>
                {menuOpen && isMobile && (
                    <div className="flex flex-col items-start bg-white p-4">
                        <Card
                            imageSrc={"https://i.ibb.co/W0ZQKG3/cellphone.png"}
                            title={"Whatsapp"}
                            subtitle={"(45) 99832-8886"}
                            hasLine={false}
                        />
                        <Card
                            imageSrc={"https://i.ibb.co/0MFTpM5/EMAIL.png"}
                            title={"Mande um e-mail"}
                            subtitle={"cirleirossi@gmail.com"}
                            hasLine={false}
                        />
                        <Card
                            imageSrc={"https://i.ibb.co/DGkCbVr/pin.png"}
                            title={"Vila Nova"}
                            subtitle={"Toledo, Paraná"}
                            hasLine={false}
                        />
                    </div>
                )}
            </nav>
        </>
    );
}
