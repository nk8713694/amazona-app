import React from 'react';

export default function CartScreen(props) {
    const productId=props.match.params.id;
    // const qty=props.location.search?Number(props.location.search.split('=')[1]):1;
    const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  return (
    <>
    <div>
        <h1>cart screen</h1>
        <p>add to cart : productId : {productId} quantity {qty}</p>
    </div>
    </>
  );
}
