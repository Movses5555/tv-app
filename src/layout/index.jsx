import React from 'react';
import { Menu } from '@/components/Menu.jsx';
import { Homepage } from '@/pages/homepage.jsx';


export const Layout = () => {
   return (
      <div className='w-full h-full flex relative'>
         <div className='h-full fixed z-50'> 
            <Menu />
         </div>
         <div className='bg-black h-full pb-24'>
            <Homepage />
         </div>
      </div>
   )
}

