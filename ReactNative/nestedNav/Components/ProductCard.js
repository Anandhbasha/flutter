import { Alert, Pressable, View ,Image, TouchableOpacity, StyleSheet} from "react-native";
import { useShop } from "../Context/ShopContext";
import { Text } from "react-native";

const ProductCart = ({product})=>{
    const {addToCart,toggleWishlist,wishlist} =useShop() 
    const isFav = wishlist.some((item)=>item.id===product.id)
    return (
        <View style= {Styles.Card}>
            <Pressable onPress={()=>navigation.navigate("ProductDetails",{product})} onLongPress={()=>Alert.alert(product.title,`Price:$${product.price}`)} style={({pressed})=>{
                opacity:pressed?0.6:1
            }}>
                <Image source={{uri:product.image}} style={{width:"100%",height:"150px",marginBottom:"12px"}} resizeMode="contain"/>
                <Text style={Styles.title} numberOfLines={2}>{product.title}</Text>
                <Text style={Styles.price}>{product.price.toFixed(2)}</Text>
                <Text style={Styles.category}>{product.category}</Text>
            </Pressable>
            <TouchableOpacity style={Styles.CartButton} activeOpacity={0.6} onPress={()=>addToCart(product)}>
                <Text style = {Styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
            <Pressable style = {Styles.wishlistButton} onPress={()=>toggleWishlist(product)}>
                <Text>{isFav?"Whishlisted":"Whishlist"}</Text>
            </Pressable>
        </View>
    )
}

export default ProductCart;

const Styles = StyleSheet.create({
    Card:{
        width:"48%",
        backgroundColor:"white",
        padding:12,
        marginBottom:15,
        elevation:3,
        borderRadius:10
    },
    
    title:{
        fontSize:24,
        fontWeight:"bold",
        minHeight:40
    },
    price:{
        fontSize:14,
        color:"green",
        fontWeight:"bold",
        marginVertical:8
    },
    category:{
        fontSize:12,
        color:"gray",
        marginBottom:10,
    },
    CartButton:{
        backgroundColor:"#2563eb",
        padding:10,
        borderRadius:8
    },
    buttonText:{
        color:"white",
        textAlign:"center",
        fontWeight:"bold",
        fontSize:14
    },
    wishlistButton:{
        padding:10,
        alignItems:"center"
    }
})