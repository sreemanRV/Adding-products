import React from 'react'
import { useState } from 'react'

const AddProducts = () => {
    const[products,setProducts] = useState({id:'',brand:'',price:Number,quantity:Number,title:'',src:Image})
    let name, value;
    const data = (e)=>{
      name = e.target.name;
      value = e.target.value;
      setProducts({...products,[name]:value})
      console.log(products)
    }
    const getdata = (e)=>{
        const {id,brand,price,title,src} = products;
        e.preventDefault();
        const options = {
        method:'POST',
        Headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({id,brand,price,title,src})
    }
        const res = fetch(
        `https://authreact-fea17-default-rtdb.firebaseio.com/products.json`,
        options
        )
        if(res){
            alert(`${products.title} added`);
        }
        else{
            alert("error")
        }
        
    }
  return (
        <>
        <div className='container'>
            <div className='formcontainer'>
                <p style={{textAlign:"center",backgroundColor:"#fff",fontSize:"22px"}}>Add Your Products</p>
            <form className='form' method='POST'>
                <input id='form-input' type='number' placeholder='Enter Product ID' name='id' value={products.id} onChange={data} required />
                <input id='form-input' type='text' placeholder='Enter the Brand' name='brand' value={products.brand} onChange={data} required/>
                <input type='number' placeholder='Enter the Price' name='price' value={products.price} onChange={data} required/>
                <input id='form-input' type='text' placeholder='Enter Product name' name='title' value={products.title} onChange={data} required/>
                <input id='form-input' type='text'placeholder='Product image source' name='src' onChange={data} />
                <button className='btn btn-warning p-0' onClick={getdata}>Add</button>
            </form>
            </div>
            </div>
        </>
  )
}

export default AddProducts
