import React, { useState } from 'react';
import proyecto6 from '../Home/ImgHome/proyecto6.png'
import "./Mesero.css"
import Desayunos from '../Desayuno/Desayuno'
import Almuerzo from '../Almuerzo/Almuerzo';
import Cart from '../Productos/Carro';
import Productos from '../Productos/Productos';


const Mesero = () => {
    const [tipo, setTipo] = useState('Desayuno');
    const [cart, setCart] = useState([]);

function onsetCart (lista) {

}
console.log('el mesero', onsetCart)
    return (
        <div className="Mesero">
            <div className="Mesero-header">
                <img className="Logo-Mesero" src={proyecto6} alt="" />
            </div>
            <div className="Mesero-body">
                <div className="Mesero-datos">
                    <input className="input-mesero" type="text" placeholder="Mesero" />
                    <input className="input-mesa" type="text" placeholder="N° de mesa" />
                    <input className="input-cliente" type="text" placeholder="Cliente" />
                </div>
                <div className="Mesero-options">
                    <div className="Mesero-productos">
                        <div className="btnOptions">
                            <button style={tipo === 'Desayuno' ? {background: "rgba(0, 0, 0, 0.5)"} : {background:"black"}} className="BtnDesayuno" onClick={() => setTipo('Desayuno')}> Desayuno</button>
                        
                            <button style={tipo === 'Almuerzo' ? {background: "rgba(0, 0, 0, 0.5)"} : {background:"black"}} className="BtnAlmuerzo" onClick={() => setTipo('Almuerzo')}> Almuerzo</button>

                        </div>
                    
                        {tipo === 'Desayuno'?  <Desayunos/> : <Almuerzo/>}
                        
                  
                    </div>
                    <div className="Mesero-pedido">
                        <div className="Mesero-listado">
                        {/* <Navegacion/> */}

                        <Cart cart={cart} setearCart={onsetCart} />
                        </div>
                        <div className="btns-pedido">
                            <button className="enviar-cocina">Enviar a Cocina</button>
                            <button className="cancelar-pedido">Cancelar Pedido</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Mesero;