import React from 'react';
import Sidebar from './sidebar';

const layout = ({children}) => {
  return (
    <div className='flex flex-row justify-start'>
        <Sidebar/>
        <div className='flex-1'>
            {children}
        </div>
    </div>
  )
}
export default layout;
