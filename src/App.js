import React, { Fragment} from "react";
import './styles/styles.css';
import HeaderInfo from './Components/Header/HeaderInfo';
import HeaderMain from './Components/Header/HeaderMain';
import Main from './Components/Main/Main';
import MainTypes from './Components/Main/MainTypes';
import Footer from './Components/Footer/Footer';




function App() {
  return (
    <Fragment>
      <header>
        <HeaderInfo />
        <HeaderMain />
      </header>
      <main>
      <div className="container-main">
        <Main 
        clas="title-main what-is"
        title="¿ Qué es un encendedor ?"
        info="Un encendedor, también llamado mechero, candela, fosforera, briquet, bricket, chisquero, fuego, lighter o yesquero, es un reactor químico portátil usado para generar una llama. El carburante necesario, generalmente gasolina o butano a presión —una mecha en los primitivos mecheros—, está contenido en su depósito, y el comburente es el oxígeno del aire. Además del depósito, cuenta con un dispositivo de ignición y otro de extinción de la llama."
        />
        <Main 
        clas="title-main history"
        title="Historia"
        info="La forma más primitiva de encendedor consistía en lo que se llamaba pedernal, eslabón y yesca. Puede considerarse como tal porque todos los elementos se llevaban juntos en un recipiente. La piedra era pedernal, que se golpeaba con un trozo de hierro (generalmente un eslabón de una cadena) produciendo chispas que encendían un manojito de fibras vegetales secas (yesca). Se apagaba cuando se consumía la yesca. 

        Los primeros mecheros que merecieron tal nombre, consistían en un tubo, de unos 9 milímetros de diámetro (generalmente de latón) por el que discurría una mecha de algodón. En otro tubo paralelo había un pedernal mantenido con un muelle y un tornillo contra una rueda estriada que, haciéndola girar con un dedo, producía chispas que encendían la mecha. Una vez utilizada la brasa producida en la mecha, se retraía en el interior de su tubo con una tapadera enganchada con un alambre, que apagaba la brasa por sofocación, falta de oxígeno para la combustión. Son muy útiles en el campo, por mantenerse encendidos con ráfagas de aire, que avivan la brasa."
        />
        <MainTypes />
        </div>

      </main>
      <footer>
          <Footer />  
      </footer>
    </Fragment>
  );
}



export default App;
