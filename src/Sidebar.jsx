import React from 'react';

import './Sidebar.css'
import MusicDisplay from './MusicDisplay';

function Sidebar(props){
  return (
    <aside>
      <SidebarInfoContainer title='Music'/>
    </aside>    
  )
}

function SidebarInfoContainer(props){
  const {
    title,
    children,
  } = props;
  return (
    <div className='container'>
      <h2>{title}</h2>
      {children}
      <MusicDisplay />
    </div>
  )
}


export default Sidebar;
