import React from 'react'
import Productos from '../Productos/Productos';
import './Desayuno.css';


function Desayuno(params) {

    console.log("Desayuno:",params);
    let arr = [
        { id: 30, titulo: "Café Americano", precio: 500, image: "icon-cafeamericano.png" },
        { id: 31, titulo: "Café con leche", precio: 700, image: "icon-cafeconleche.png"},
        { id: 32, titulo: "Sandwich Jamón y Queso", precio: 1000, image: "icon-sandwich.png"},
        { id: 33, titulo: "Jugo de frutas", precio: 700, image: "icon-jugodefrutas.png"},
    ];
    return (
        <div>
           <div className="container-productos" >
                {arr.map((elemento) => (
                    <Productos key={elemento.id} parametros={elemento} agregarHandler={params.agregarHandler} listaCarrito={params.listaCarrito} />
                ))}
            </div>
        </div>
    );

}

export default Desayuno;
