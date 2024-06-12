
'use client'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

function Card({ imageSrc, title, subtitle, hasLine }) {
    return (
        <div className="flex items-center ">
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
    library.add(fab, fas, far)
    return <>
        <div className="flex">
            <div className='h-1 w-1/3 bg-green-regular'></div>
            <div className='h-1 w-1/3 bg-mustard-yellow'></div>
            <div className='h-1 w-1/3 bg-orange-regular'></div>
        </div>
        <nav className="max-w-5xl mx-auto max-h-20 bg-[url('https://i.ibb.co/sJPK3zy/paper-header.png')]">
            <nav className="flex items-center max-h-20 space-x-1">
                <img className="p-6 max-h-24" src="https://i.ibb.co/PjLgqMZ/Novo-Projeto-1.png" alt="" />
                <nav className="p-6 justify-center items-center w-full max-w-20 mx-auto flex flex-row h-16">
                    <SocialMedia
                        icon={"fa-brands fa-x-twitter"}
                        redirectLink={"https://twitter.com"}
                    />
                    <SocialMedia
                        icon={"fa-brands fa-instagram"}
                        redirectLink={"https://instagram.com"}
                    />
                    <button 
                        className="md:hidden ml-4 p-2 bg-gray-200 rounded-md hover:bg-gray-400"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <FontAwesomeIcon icon={['fas', 'bars']} />
                    </button>
                </nav>
                <nav className="items-center w-full max-w-auto h-auto mx-auto flex flex-row">
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
                </nav>
            </nav>
        </nav>
    </>
}