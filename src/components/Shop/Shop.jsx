/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link, useLoaderData } from 'react-router-dom';



const Shop = () => {
    const [products, setProducts]= useState([]);
    const [cart, setCart] =useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const {count}= useLoaderData();

    //const itemsPerPage = 10;
    const numberOfPages = Math.ceil(count / itemsPerPage);
    

     // const pages = []
    // for(let i = 0; i < numberOfPages; i++){
    //     pages.push(i)
    // }
    const pages = [...Array(numberOfPages).keys()];


    console.log(count);

      /**
     * DONE 1: get the total number of products
     * Done 2: number of items per page dynamic
     * TODO 3: get the current page
    */

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [currentPage, itemsPerPage]);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        const storedCartIds = Object.keys(storedCart);
        fetch('http://localhost:5000/productByIds', {
        method: 'POST',
        headers: {
         'content-type': 'application/json'
             },
    body: JSON.stringify(storedCartIds)
})
.then(res=>res.json())
.then(cartProducts=>{
    const savedCart = [];
        //step 1
        for (const id in storedCart){
            //step:2 
        const addedProduct = cartProducts.find(product => product._id === id)
        if(addedProduct){
            //step 3
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            //step 4
            savedCart.push(addedProduct);
            }
       
        }
        //step 5
        setCart(savedCart);

})
        
    },[])

const handleAddToCart = (product) =>{
    let newCart = [];
    //const newCart =[...cart, product];

    const exists = cart.find(pd => pd._id === product._id);

    if(!exists){
        product.quantity =1;
        newCart =[...cart, product];
    }

    else{
        exists.quantity = exists.quantity +1;
        const remaining = cart.filter(pd => pd._id !== product._id);
        newCart = [...remaining,exists]
    }

    setCart(newCart);
    addToDb(product._id)
}
const handleClearCart = () =>{
    setCart([]);
    deleteShoppingCart();
}

const handleItemsPerPage = e => {
    const val = parseInt(e.target.value);
    console.log(val);
    setItemsPerPage(val);
    setCurrentPage(0);
}
    return (
        <>
                <div className='shop-container'>
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key = {product._id}
                            product ={product}
                            handleAddToCart ={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart 
                    cart ={cart}
                    handleClearCart ={handleClearCart}
                    >
                        <Link className='proceed-link' to="/orders">
                            <button className='btn-proceed'>Review Orders
                            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                            </button>
                        </Link>
                    </Cart>
                </div>
            </div>
            <div className='pagination'>
            <p>Current page: {currentPage}</p>
               {
                pages.map(page=><button
                    className={currentPage === page ? 'selected' : undefined}
                key={page}
                onClick={() => setCurrentPage(page)}
                >{page +1 }
                
                </button>)
               }
               <select value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>           
        </>
    );
};

export default Shop;