import { Alert, Pressable, View ,Image, TouchableOpacity, StyleSheet} from "react-native";
import { useShop } from "../Context/ShopContext";
import { Text } from "react-native";

const ProductCart = ({product})=>{
    const {addToCart,toggleWishlist,wishlist} =useShop() 
    const isFav = wishlist.some((item)=>item.id===product.id)
    return (
        <View style= {Styles.Catd}>
            <Pressable onPress={()=>navigation.navigate("ProductDetails",{product})} onLongPress={()=>Alert.alert(product.title,`Price:$${product.price}`)} style={({pressed})=>{
                opacity:pressed?0.6:1
            }}>
                <Image source={{uri:product.image}} style={Styles.image} resizeMode="contain"/>
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
    title:{
        fontSize:24
    }
})