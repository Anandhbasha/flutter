import React, { createContext,useContext,useState } from 'react'
import { View } from 'react-native'

const ShopContextPro = createContext(null);

const ShopContext = ({children}) => {
  const [products,setProducts] = useState([]);
  const [cart,setCart] = useState([]);
  const [wishlist,setWishlist] = useState([]);
  const[loading,setLoding] = useState(true);
  const[error,setError] = useState("");
  const fetchProducts = async()=>{
    try{
      setLoding(true);
      setError("");
      const res = await fetch("https://fakestoreapi.com/products");
      if(!res.ok){
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      if(!Array.isArray(data)){
        throw new Error("Invalid data format");
      }
    }catch(err){
      setError(err.message||"Something went wrong");
    }finally{
      setLoding(false);
    }
  }
  useEffect(()=>{
    fetchProducts();
  },[])

  const addToCart = (product)=>{
    setCart((prev)=>{
      const existingProduct = prev.find((item)=>item.id === product.id);
      if(existingProduct){
        return prev.map((item)=>item.id === product.id ? {...item,quantity:item.quantity+1}:item);
    }})
    return [...prev,{...product,quantity:1}];
  }
  const removeFromCart = (productId)=>{
    setCart((prev)=>prev.filter((item)=>item.id !== productId));
  }
  const updateQuantity = (id,change)=>{
    setCart((prev)=>{
      prev.map((item)=>
        item.id === id ? {...item,quantity:item.quantity+change}:item).filter((item)=>item.quantity>0)
    })
  }
  const toggleWishlist = (product)=>{
    setWishlist((prev)=>{
      const existingProduct = prev.some((item)=>item.id === product.id);
      return existingProduct ? prev.filter((item)=>item.id !== product.id):[...prev,product]})
  const cartCount = cart.reduce((sum,item)=>sum+item.quantity,0);
  const cartTotal = cart.reduce((sum,item)=>sum+item.price*item.quantity,0);
    }
  return (
    <ShopContextPro.Provider value={{products,cart,wishlist,loading,error,addToCart,removeFromCart,updateQuantity,toggleWishlist,cartCount,cartTotal}}>{children}</ShopContextPro.Provider>
  )
}
export default ShopContext

export const useShop = ()=>{
  const context = useContext(ShopContextPro);
  if(!context){
    throw new Error("useShop must be used within a ShopContext");
  }
  return context;
}