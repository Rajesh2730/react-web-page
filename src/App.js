import './App.css';
import NavBar from './pages/NavBar';
import pro from './assets/product-1.jpeg';
import pro1 from './assets/product-2.jpeg';
import pro2 from './assets/product-3.jpeg';
import { FaStar } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from 'react';



function App() {
  const [position, setPosition] = useState(0);
  const productWidth = 150; // Width of each product in pixels
  const step = productWidth + 10; // Width + margin (adjust as needed)
  const totalProducts = 11; // Total number of products (adjust as needed)

  const moveLeft = () => {
    if (position < 0) {
      setPosition(position + step);
    }
  };

  const moveRight = () => {
    if (position > -step * (totalProducts - 1)) {
      setPosition(position - step);
    }
  };

  
  return (
    <div className="App">
      <NavBar/>
      <div className='content1'>
        <span>Gift & Bundles</span>
        <label >SHOP ALL</label>
        <div className='products'>
          <div className='pro-1' id='slidebar'  style={{ transform: `translateX(${position}px)` }}>
              <img src={pro} className='pro-1-i' alt='img'/>
              <div className='pro-name'>
              <p>THE WHOLE SHEBANG</p>
              </div>
              <div className='pro-footer'>
                <p>EveryThing You Need</p>
                <div className='rate'>
                <p className='price'>from:$20</p>
                <p className='ratings'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </p>
                </div>
              </div>
          </div>
          <div className='pro-1' id='slidebar'  style={{ transform: `translateX(${position}px)` }}>
              <img src={pro1} className='pro-1-i' alt='img'/>
              <div className='pro-name'>
              <p>THE WHOLE HEBANG</p>
              </div>
              <div className='pro-footer'>
                <p>EveryThing You Need</p>
                <div className='rate'>
                <p className='price'>from:$40</p>
                <p className='ratings'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </p>
                </div>
              </div>
          </div>
          <div className='pro-1' id='slidebar'  style={{ transform: `translateX(${position}px)` }}>
              <img src={pro2} className='pro-1-i' alt='img'/>
              <div className='pro-name'>
              <p>THE MAKEUPKIT</p>
              </div>
              <div className='pro-footer'>
                <p>EveryThing You Need</p>
                <div className='rate'>
                <p className='price'>from:$35</p>
                <p className='ratings'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </p>
                </div>
              </div>
          </div>
          <div className='pro-1' id='slidebar'  style={{ transform: `translateX(${position}px)` }}>
              <img src={pro} className='pro-1-i' alt='img'/>
              <div className='pro-name'>
              <p>THE WHOLE SHEBANG</p>
              </div>
              <div className='pro-footer'>
                <p>EveryThing You Need</p>
                <div className='rate'>
                <p className='price'>from:$20</p>
                <p className='ratings'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </p>
                </div>
              </div>
          </div>
          <div className='pro-1' id='slidebar'  style={{ transform: `translateX(${position}px)` }}>
              <img src={pro1} className='pro-1-i' alt='img'/>
              <div className='pro-name'>
              <p>THE WHOLE SHEBANG</p>
              </div>
              <div className='pro-footer'>
                <p>EveryThing You Need</p>
                <div className='rate'>
                <p className='price'>from:$40</p>
                <p className='ratings'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </p>
                </div>
              </div>
          </div>
          <div className='pro-1' id='slidebar'  style={{ transform: `translateX(${position}px)` }}>
              <img src={pro2} className='pro-1-i' alt='img'/>
              <div className='pro-name'>
              <p>THE WHOLE SHEBANG</p>
              </div>
              <div className='pro-footer'>
                <p>EveryThing You Need</p>
                <div className='rate'>
                <p className='price'>from:$35</p>
                <p className='ratings'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </p>
                </div>
              </div>
          </div>
          <div className='pro-1' id='slidebar'  style={{ transform: `translateX(${position}px)` }}>
              <img src={pro} className='pro-1-i' alt='img'/>
              <div className='pro-name'>
              <p>THE WHOLE SHEBANG</p>
              </div>
              <div className='pro-footer'>
                <p>EveryThing You Need</p>
                <div className='rate'>
                <p className='price'>from:$20</p>
                <p className='ratings'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </p>
                </div>
              </div>
          </div>
          <div className='pro-1' id='slidebar'  style={{ transform: `translateX(${position}px)` }}>
              <img src={pro1} className='pro-1-i' alt='img'/>
              <div className='pro-name'>
              <p>THE WHOLE HEBANG</p>
              </div>
              <div className='pro-footer'>
                <p>EveryThing You Need</p>
                <div className='rate'>
                <p className='price'>from:$40</p>
                <p className='ratings'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </p>
                </div>
              </div>
          </div>
          <div className='pro-1' id='slidebar'  style={{ transform: `translateX(${position}px)` }}>
              <img src={pro2} className='pro-1-i' alt='img'/>
              <div className='pro-name'>
              <p>THE MAKEUPKIT</p>
              </div>
              <div className='pro-footer'>
                <p>EveryThing You Need</p>
                <div className='rate'>
                <p className='price'>from:$35</p>
                <p className='ratings'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </p>
                </div>
              </div>
          </div>
          <div className='pro-1' id='slidebar'  style={{ transform: `translateX(${position}px)` }}>
              <img src={pro} className='pro-1-i' alt='img'/>
              <div className='pro-name'>
              <p>THE WHOLE SHEBANG</p>
              </div>
              <div className='pro-footer'>
                <p>EveryThing You Need</p>
                <div className='rate'>
                <p className='price'>from:$20</p>
                <p className='ratings'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </p>
                </div>
              </div>
          </div>
          <div className='pro-1' id='slidebar'  style={{ transform: `translateX(${position}px)` }}>
              <img src={pro1} className='pro-1-i' alt='img'/>
              <div className='pro-name'>
              <p>THE WHOLE SHEBANG</p>
              </div>
              <div className='pro-footer'>
                <p>EveryThing You Need</p>
                <div className='rate'>
                <p className='price'>from:$40</p>
                <p className='ratings'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </p>
                </div>
              </div>
          </div>
          <div className='pro-1' id='slidebar'  style={{ transform: `translateX(${position}px)` }}>
              <img src={pro2} className='pro-1-i' alt='img'/>
              <div className='pro-name'>
              <p>THE WHOLE SHEBANG</p>
              </div>
              <div className='pro-footer'>
                <p>EveryThing You Need</p>
                <div className='rate'>
                <p className='price'>from:$35</p>
                <p className='ratings'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </p>
                </div>
              </div>
          </div>
        </div>
        <button className='left-btn' onClick={moveLeft}> <FaArrowLeft/> </button>
        <button className='right-btn' onClick={moveRight}> <FaArrowRight/> </button>
      </div>
    </div>
  );
}

export default App;
