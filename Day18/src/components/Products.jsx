import { useState } from "react";
import Cart from "./Cart";
import ResetAll from "./Rest";

const data=[{
    id:1,
    name:"product1",
    price:10,
    quantity:0
},{
    id:2,
    name:"product2",
    price:150,
    quantity:4
},{
    id:3,
    name:"product3",
    price:50,
    quantity:2
}]
function Products() {
    const [products,setProducts]=useState(data);
    const handelIncrement=(pro)=>{
        const newArr=[...products];
        let i=newArr.indexOf(pro);

        newArr[i].quantity++;
        setProducts(newArr)
    }
    const handelDecrement=(pro)=>{
        const newArr=[...products];
        let i=newArr.indexOf(pro);
        if(newArr[i].quantity>0){
            newArr[i].quantity--;
            setProducts(newArr)
        }
    }
    const handelDelete=(pro)=>{
        const newArr=products.filter((product)=>product!=pro)
        setProducts(newArr)
       
    }

    const handelReset=()=>{
          const newArr=products.map((product)=>{
            return {...product,quantity:0}
          })
        setProducts(newArr)
        
    }

    return (
    <div className="d-flex flex-column align-items-center ">
        {
            products.map((product)=>{
                console.log(product)
                return <Cart key={product.id} product={product} increment={()=>handelIncrement(product)} decrement={()=>handelDecrement(product)} Delete={()=>handelDelete(product)}/>
            })
        }
        {
              products.length==0 && <h2>No list to render</h2>
        }
        {
           products.length!=0 &&<ResetAll handelReset={handelReset}/>
        } 
    </div>  
    );
}

export default Products;