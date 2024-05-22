import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader =  async () => {

    const storedCart = getShoppingCart();
    const storedCartIds = Object.keys(storedCart)
    console.log( storedCartIds)

//  const loadedProducts = await fetch ('http://localhost:5000/products');
 const loadedProducts = await fetch('http://localhost:5000/productByIds', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(storedCartIds)
});
 const products = await loadedProducts.json();
 


 const savedCart = [];
 for (const id in storedCart){
  
const addedProduct = products.find(pd => pd._id === id)
if(addedProduct){
    const quantity = storedCart[id];
    addedProduct.quantity = quantity;
    savedCart.push(addedProduct);
    }

}
return savedCart;
//step 5
// setCart(savedCart);
// },[products])



}

export default cartProductsLoader;