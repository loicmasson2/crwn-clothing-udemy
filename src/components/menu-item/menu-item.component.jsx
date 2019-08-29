import React from 'react'
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl}) => {
    return (
        <div  className={`${size} menu-item`}>
          <div className="background-image" styles={{
            backgroundImage: `url(${imageUrl})`
          }}>

          </div>
          <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOW NOW</span>
          </div>
        </div>
    )
}

export default MenuItem
