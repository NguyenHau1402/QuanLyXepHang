import React from 'react';
import logo from '../Logo alta.svg'
import '../Logo-Login/Logo.css'
const Logoalta = () => {
    return (
        <div className="logoalta">
            
                <div className='logo'>
                    <img src={logo} alt="Logo" className='logo-fit'/>
                    {/* Các thẻ <img> khác */}
                    
                </div>
        </div>
    )
}

export default Logoalta;