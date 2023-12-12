import logo from './logo.svg';
import LikeBtn from './LikeBtn';
import AddRemove from './AddRemove';
import './App.css';


function App() {
  return (
    <div className="Shop">
      <Header/>
      <Menu/>
      <Footer/>
     
     
    
    </div>
  )
}

export default App;

const produktArray = [

  {
    ime :"Fruit Mug",
    price:"200 Denars",
    delivery:"2 days",
    img:"sliki/imagesstore/mugone.jpg",
    
  },
  {
    ime :"Coffee Mug",
    price:"290 Denars",
    delivery:"3 days",
    img:"sliki/imagesstore/mugtwo.jpg"

  },
  {
    ime :"Relax Mug",
    price:"350 Denars",
    delivery:"4 days",
    img:"sliki/imagesstore/mugthree.jpg"

  },
]


function Header() {
  return (
    <div>
         <h1 className="naslov" > Mug-Store Skopje</h1> 
    </div>
  )
}

function Menu() {
  return (
    <div className="izbor">
        <h1 className='headMenu'>Product List</h1>
      <ol className='offermain'>
        {produktArray.map((produktArray) => (
          <li className='offer'>
             <img src={`/${produktArray.img}`} alt={produktArray.ime} width={400} height={300} />
            <h3>{produktArray.ime}</h3>
            <p>Price: {produktArray.price}</p>
            <p>Delivery: {produktArray.delivery}</p>
            <div >
            <button className='buy'>Purchase Now</button> 
            <div className='additems'>
            <AddRemove/>
             </div>
            
             <p>  <LikeBtn/> </p> </div>  
          
          </li>
        ))}
      </ol>
    </div>
  )
}

function Footer() {

  const hour=new Date().getHours();
  const openHour=10;
  const closedHour=22;
  const isOpen = hour >= openHour && hour < closedHour;

  if (isOpen) {
    return <p id="end">We are open now, closing in {closedHour}:00</p>;
  } else {
    return <p id="endtwo" >Sorry, we are closed</p>;
  }

 
}

