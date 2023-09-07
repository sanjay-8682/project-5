import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Header.css'
 
 
const Header = () => {
    return (
        <div>
 
           <div className='Headcol'>
            <h3 id='head'>Medico Sales</h3>

            <div id='Dashboard' class="bi bi-microsoft">  Dashboard</div>
            <div id='labtest' class="bi bi-bag-check">  Lab Test</div>
            <div id='appoint' class="bi bi-calendar-check">  Appointment</div>
            <div id='medicine' class="bi bi-bag-plus">  Medicine Order</div>
            <div id='message' class="bi bi-envelope">  Message</div>
            <div id='pay' class="bi bi-credit-card-2-back">  Payment</div>
            <div id='sett' class="bi bi-gear">  Settings</div>

            <div id='help' class="bi bi-question-octagon">  help</div>

           </div>

            
 

                
            </div>


            

            
  
                
      
    
     );
};

export default Header;