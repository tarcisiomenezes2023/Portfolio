import React from 'react'
import "./navbar.scss"
const navbar: React.FC = () => {
  return (
    <div className='navbar'>
      {/* sidebar */}
      <div className='wrapper'>
        <span>Tarcísio Menezes</span>
        <div className='social'>
            <a href=''><img src='/github.png' alt='github'/></a>
            <a href=''><img src='/linkedin.png' alt='linkedln'/></a>
            <a href=''><img src='/instagram.png' alt='instagram'/></a>
            <a href=''><img src='/facebook1.png' alt='facebook'/></a>
            <a href=''><img src='/outlook.png' alt='e-mail'/></a>
        </div>
      </div>
    </div>
  )
}

export default navbar
