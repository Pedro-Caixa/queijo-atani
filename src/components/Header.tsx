import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

export default function Header() {
    library.add(fab, fas, far)
    return <>
        <nav class="p-6 max-w-5xl mx-auto max-h-30 bg-red-950">
            <nav class="max-w-auto mx-auto min-h-24 max-h-90 bg-white flex items-center space-x-1">
                <img class="h-auto max-h-28" src="https://i.ibb.co/s2c9vY0/atani-logo.png" alt="" />
                <nav class="p-6 justify-center items-center w-full max-w-20 mx-auto flex flex-row h-16 ">
                    <a class="mx-1 min-w-8 h-8 rounded-full bg-grey-secondary flex items-center justify-center text-white" href="https://your-second-link.com">
                        <FontAwesomeIcon className='p-2 text-black-regular' icon="fa-brands fa-instagram" />
                    </a>
                    <a class="mx-1 min-w-8 h-8 rounded-full bg-grey-secondary flex items-center justify-center text-white" href="https://facebook.com">
                        <FontAwesomeIcon className='p-2 text-black-regular' icon="fa-brands fa-x-twitter" />
                    </a>
                </nav>
                <nav class="items-center w-full max-w-auto h-24 mx-auto flex flex-row">
                    <div class="flex items-center">  
                        <img class="h-10 w-10 mr-4" src="https://i.ibb.co/W0ZQKG3/cellphone.png" alt="" />
                        <div class="flex flex-col">  
                            <h3 class="text-grey-regular ">Whatsapp</h3>
                            <h1 class="text-black-regular font-manrope">(45) 99832-8886</h1>
                        </div>
                        <div class="h-20 w-0.5 mx-3 bg-grey-regular"></div>
                    </div>
                </nav>
            </nav>
        </nav>
    </>
}