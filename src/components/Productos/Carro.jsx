import React, { Fragment } from 'react';
import {Badge, Button,  Table} from 'reactstrap'
import {listaCarrito} from './listCarrito.json'
import Productos from "./Productos"


const Cart = ({cart, setearCart})=>{
  console.log(setearCart)
    return (
        <Fragment>
          <div className="container__header__cartDiv">
            {/* <p className="container__header__cartDiv--count">{cart.length}</p> */}
          </div>
          <div className="container__header__cartDiv--list">
            {cart?.length === 0 ? (
              <p>No hay nada por aquí...</p>
            ) : (
              cart?.map((burger) => {
                return<Productos
                  key={burger.id}
                  burger={burger}
                  cart={cart}
                  setearCart={(p)=>setearCart(p)}
                  
                />
              })
            )}
          </div>
        </Fragment>
      );
}



export default Cart; 