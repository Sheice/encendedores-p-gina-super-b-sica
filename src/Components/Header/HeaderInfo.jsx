import React from 'react';
import './../../styles/Header/headerInfo.css';

const HeaderInfo = () => {
    return ( 
        <div className="container__header-info">
            <p className="phone-number-header-info">Teléfono: +12 342 234 433</p>
            <p className="email-header-info">email: esteNoEsUnEmail@gmail.com</p>
        </div>
     );
}
 
export default HeaderInfo;