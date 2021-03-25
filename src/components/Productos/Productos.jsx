import React, { Component, Fragment, useState } from 'react';
// import {useState} from 'react'
import "./Productos.css"
import { Container } from 'reactstrap';
// import {Modal, ModalHeader, ModalBody,  ModalFooter, Button } from  'reactstrap';
import {listaCarrito} from './listCarrito.json';



const Productos = ({parametros, setearCart}) =>{
    const [bgColor, setbgColor]= useState(false)
    const [carrito, setCarrito] = useState(listaCarrito);
   //   toggle(){
    //     this.setState(prevState => ({
    //         modal: !prevState.modal
    //     }));
    // }

    
     const boxClick = (e) => {
        setearCart({
            "titulo" : parametros.titulo,
            "precio" : parametros.precio,
            "imagen" : parametros.imagen
        })  
        
            setbgColor(prevState => ({
            bgColor: !prevState.bgColor,
            listaCarrito
            // modal: !prevState.modal
         }))
      }

       
         return (

          <Container>
            {parametros && 
            <> <button  className="producto" style={bgColor === false ?{background: "transparent"} : {background:"#F3CC00"}}
            onClick={()=>boxClick()}>
            {/* <img src={parametros.image} alt=""/>     */}
            <h4 className="ItemsOne"> {parametros.titulo}</h4>
            <h5 className="Itemstwo">{parametros.precio}</h5>
            {/* <button id="prueba"  color='primary' onClick={this.toggle}>Agregar</button> */}
            </button>
            </>
               
    
            }
                </Container>
        );
    
}

export default Productos;