import React from 'react';
import logo from '../img/logo.png';
const Logoalta = () => {
    return (
        <div className="logoalta">
            <div className="group">
                <div className='logo'>
                    <img src={logo} alt="Logo" className='logo-fit'/>
                    {/* Các thẻ <img> khác */}
                </div>

            </div>
        </div>
    )
}

export default Logoalta;