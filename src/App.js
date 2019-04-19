import React, {useState} from 'react';
import './App.css';
import MainLayout from './layout/main';
import Navbar from './components/Navbar';
import NavItem from './components/NavItem';
import NavLink from './components/NavLink';
const App = ()=>{
  const [todos, setTodos] = useState([]);
  const items =[{name:"Docs",link:'aaaa'},{name:"Tutorial",link:''},{name:"Help",link:''}];

 


  return (
  
    
      <MainLayout 
      mainSide = {  <div>this is main side</div>  }
      leftSide = {  <div>this is left side</div>  }
      >
        
          <Navbar title="First App"  >
            {items.map((item,key)=>(
              <NavItem key={key}>

                < NavLink name={item.name} href={item.href} key={key} /> 

              </NavItem>
            ))}
          </Navbar>
         
      </MainLayout>

  
  )
}
export default App;
