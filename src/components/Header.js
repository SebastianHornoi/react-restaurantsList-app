import './Header.css'

export default function header({openMenu}) {
  return (
    <div className='header-component-container'>
       <div className="logo-container">
         <img src="./img/logo.png" alt="" />
         <h2>Antonello Food</h2>
       </div>
       <div className="menu"></div>
       <img onClick={openMenu} className='menu-icon' src="./img/menu.png" alt="" />
    </div>
  )
}
