import './App.css';
import { useState, useEffect } from 'react'
import Header from './components/Header'

function App() {

  const [data, setData] = useState([])
  const [url, setUrl] = useState('http://localhost:3000/restaurants')
  const [showMenu, setShowMenu] = useState(false)
  
  console.log(data)

  const openMenu = () => {
    setShowMenu(true)
  }

  function showCarne(){
    setUrl('http://localhost:3000/restaurants?category=carne')
    setShowMenu(false)
  }

  function showPesce(){
    setUrl('http://localhost:3000/restaurants?category=pesce')
    setShowMenu(false)
  }

  function showTutti(){
    setUrl('http://localhost:3000/restaurants')
    setShowMenu(false)
  }

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
  }, [url])

  return (
    <div className="App">
      <div className="header">
        <Header openMenu={openMenu}/>
      </div>
      <div className="content">
        {
          data.map((restaurant) => (
            <div className="restaurant__box" key={restaurant.id}>
              <div className="restaurant__box__background">
                <img src={restaurant.photo} alt="" />
              </div>
              <div className="restaurant__box__content">
                <h3>{restaurant.title}</h3>
                <p>{restaurant.description}</p>
                <h5>{restaurant.category}</h5>
              </div>
            </div>
          ))
        }
      </div>

      {showMenu && <div className="select__restaurants">
        <img className='select__restaurants__logo' src="./img/logo.png" alt="" />
        <h3>Scegli che tipologia di ristorante preferisci</h3>
        <div className="buttons-container">
          <button onClick={() => showCarne()}>Carne</button>
          <button onClick={() => showPesce() }>Pesce</button>
          <button onClick={() => showTutti() }>tutti</button>
        </div>
      </div>}

    </div>
  );
}

export default App;
