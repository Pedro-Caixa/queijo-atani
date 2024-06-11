import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

function Card({ imageSrc, title, subtitle, hasLine }) {
    return (
      <div class="flex items-center">
        <img class="h-10 w-10 mr-4" src={imageSrc} alt="" />
        <div class="flex flex-col">
          <h3 class="text-grey-regular">{title}</h3>
          <h1 class="text-black-regular font-manrope">{subtitle}</h1>
        </div>
        {hasLine && <div class="h-20 w-0.5 mx-3 bg-grey-regular"></div>}
      </div>
    );
  }
  
  function SocialMedia({icon, redirectLink}) {
    return (
        <a class="mx-1 min-w-8 h-8 rounded-full bg-grey-secondary flex items-center justify-center text-white" href={redirectLink}>
        <FontAwesomeIcon className='p-2 text-black-regular' icon={icon} />
    </a>
    );
  }
  

export default function Header() {
    library.add(fab, fas, far)
    return <>
        <nav class="p-6 max-w-5xl mx-auto max-h-30 bg-red-950">
            <nav class="max-w-auto mx-auto min-h-24 max-h-90 bg-white flex items-center space-x-1">
                <img class="h-auto max-h-28" src="https://i.ibb.co/s2c9vY0/atani-logo.png" alt="" />
                <nav class="p-6 justify-center items-center w-full max-w-20 mx-auto flex flex-row h-16 ">
                    <SocialMedia 
                        icon={"fa-brands fa-x-twitter"}
                        redirectLink={"https://twitter.com"}
                    />
                    <SocialMedia 
                        icon={"fa-brands fa-instagram"}
                        redirectLink={"https://instagram.com"}
                    />
                </nav>
                <nav class="items-center w-full max-w-auto h-24 mx-auto flex flex-row">
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