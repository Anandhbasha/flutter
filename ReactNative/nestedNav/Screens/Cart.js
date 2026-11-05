import { StyleSheet, TouchableOpacity, View } from "react-native"
import { useShop } from "../Context/ShopContext"
import { Text } from "react-native";
import { FlatList } from "react-native";
import { Image } from "react-native";

const Cart = ()=>{
    const {cart,updateQuantity} = useShop()
    console.log(cart);
    
    return(
        <View style= {styles.container}>
            <Text style= {styles.heading}>Your Cart</Text>
            <FlatList data={cart} keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=>(
                <View style= {styles.card}>
                    <Image source={{uri:item.image}} resizeMethod="contain"></Image>
                    <View style={styles.details}>
                        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                        <Text style={styles.price}>{item.price.toFixed(2)}</Text>
                        <Text style={styles.category}>{item.category}</Text>
                        <View style={styles.rtyRow}>
                            <TouchableOpacity style={styles.quandityBtn} onPress={()=>updateQuantity(item.id,-1)}>
                            <Text style= {styles.qtyText}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}/>
        </View>
    )
}
export default Cart

const styles = StyleSheet.create({
    rtyRow:{

    }
})