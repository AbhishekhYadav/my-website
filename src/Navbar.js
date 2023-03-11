import React from 'react';

export default function Nav(){
    return(
        <div>
            <nav>
                <ul className='nav'>
                <li><a href='#home' className='active'>Home</a></li>
                <li><a href='#About' className='active'>About</a></li>
                <li><a href='#contact' className='active'>Contact</a></li>
                <li><a href='#News' className='active'>News</a></li>
             <button className='btnsignin'>   <li><a href='#signin' className='signin'>Sign In</a></li> </button>
                    
                </ul>
            </nav>
        </div>
    )
}