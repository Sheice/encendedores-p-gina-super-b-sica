import React from 'react';
import '../../styles/Main/main.css';
 
const Main = ({clas, title, info}) => {
    return (
            <div className="container-main-info">
                <h2 className={clas}>{title}</h2>
                <p className="info-main">{info}</p>  
            </div>
     );
}
 
export default Main;
