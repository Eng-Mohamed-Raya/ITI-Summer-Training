function Cart({product:{name,price,quantity},increment,decrement,Delete}) {
    return ( 
        <div className="container w-50">
            <div className="row gap-2 align-items-center">
            <div className="fs-1 text-capitalize col">{name}</div>
            <div className="fs-3 col">{quantity}</div>
            <div className="fs-3 col">{price}$</div>
            <button onClick={increment} className="btn px-3 btn-success col">+1</button>
            <button onClick={decrement} className="btn px-3 btn-warning col">-1</button>
            <i onClick={Delete} className="fa-solid fa-trash text-danger fs-3 col"></i>
         </div>
        </div>
        
     );
}

export default Cart;