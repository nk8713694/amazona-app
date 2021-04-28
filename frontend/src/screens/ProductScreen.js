import React from "react";
import data from "../data";
import Rating from '../components/Rating'
import { Link } from 'react-router-dom';
export default function ProductScreen(props) {

    console.log(props.match.params.id);
    
  const product = data.products.find((x) => x._id == props.match.params.id);
  if (!product) {
    return <div>product not found baby</div>;
  }
  return (
    <div>
    <Link to="/">Back to result</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </li>
            <li>Price: ${product.price}</li>
            <li>
              Descripion:
              <p> {product.description} </p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>price</div>
                  <div className="price"> ${product.price}</div>
                </div>
              </li>

              <li>
                <div className="row">
                  <div>status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">IN STOCK</span>
                    ) : (
                      <span className="danger">unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li >
                  <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
