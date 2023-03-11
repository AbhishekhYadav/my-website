import React from 'react';
import Nav from './Navbar';
import Header from './Header';
import './style.css';
import Side from './Leftside';
import Footer from './Footer';
function App(){
    return(
        <div>
            
            <Header/>
           <Nav/>
           <Side/>
           <Footer/>
        </div>
    )
}

export default App;