import React, { Component } from 'react';
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";
import {ButtonContainer} from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value)=>{
        const {id,company,img,info,price,title,inCart} = value.detailProduct;
        return(
          <div className="container py-5">
          {/*title*/}
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
              <h1>{title}</h1>
              </div>
            </div>
            {/* Product img*/}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 text-capitalize my-3">
              <img src={img} className="img-fluid" alt={title}></img>
              </div>
              {/* product text*/}
              <div className="col-10 mx-auto col-md-6 text-capitalize my-3">
                <h2>Model : {title}</h2>
                <h4 className="text-title text-uppercase text-muted mt-3 mt-2">
                made by : <span className="text-uppercase">{company}</span>
                </h4>
                <h4 className="text-blue">
                  <strong>
                    price: <span>$</span>
                    {price}
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                some info about product
                </p>
                <p className="text-muted lead">{info}</p>
                {/* buttons */}
                <div>
                  <Link to="/">
                    <ButtonContainer>
                      back to products
                    </ButtonContainer>
                  </Link>
                  <ButtonContainer 
                  disabled={inCart?true:false} 
                  cart={true}
                    onClick={()=>{
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                  {inCart?"in cart":"add to cart"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
            {/* Product info*/}
            <div className="row">
              
            </div>

          </div>
        )
        }}
      </ProductConsumer>
    )
  }
}
