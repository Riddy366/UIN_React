import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'

function App() {
  const [count, setCount] = useState(0)
  
  let name = "Ridwan Abukar"

  return (
    <div id="container">
    <header>
        <img id="logo" src="website_images/LD_logo.svg" alt="LEGOdudes nettbutikk" />
        <button id="carttoggle">
            <span id="cartcount">99</span>
            <img id="carticon" src="website_images/legocart.svg" alt="Din handlevogn" />
        </button>
        <section id="cart">
            <h2>Din handlevogn</h2>
            <ul id="cartlist">
                <li>
                    <span class="title">Produkttittel</span>
                    <span class="price">89,-</span>
                    <span class="quantity">x1</span>
                    <span class="functions">
                        <button>X</button>
                    </span>
                </li>
                <li>
                    <span class="title">Wengestone warriors</span>
                    <span class="price">9989,-</span>
                    <span class="quantity">x333</span>
                    <span class="functions">
                        <button>X</button>
                    </span>
                </li>
            </ul>
        </section>
    </header>
    <nav>
        <ul>
            <li><a href="#">City</a></li>
            <li><a href="#">Ninjago</a></li>
            <li><a href="#">Castles and Knights</a></li>
            <li><a href="#">Marine and Pirates</a></li>
            <li><a href="#">Movie Characters</a></li>
        </ul>
    </nav>
    <main>
        
        
    </main>
</div>
  )
}

export default App
