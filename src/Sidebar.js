import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'

import './Sidebar.css'

function Sidebar(props){
  const info1 = [
    ["Coffee", faCoffee],
    ["Something"],
    ["Something else"]
  ];

  return (
    <aside>
      <SidebarInfoContainer title='Interests' info={info1}  />
    </aside>    
  )
}

function SidebarInfoContainer(props){
  const items = [];
  for (const [value,fa] of props.info) {
    items.push(
      <p key={value}><FontAwesomeIcon icon={fa} /> {value}</p>
    );
  }
  return (
    <div className='container'>
      <h2>{props.title}</h2>
      {items}
    </div>
  )
}


export default Sidebar;
