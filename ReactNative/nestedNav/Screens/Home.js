import { StyleSheet, TouchableOpacity, View } from "react-native"
import { useShop } from "../Context/ShopContext"
import { Text } from "react-native"
import { ScrollView } from "react-native"
import { ImageBackground } from "react-native-web"
import { ActivityIndicator } from "react-native"
import { FlatList } from "react-native"
import ProductCart from "../Components/ProductCard"

const Home = ()=>{
    const {products,loading,error,fetchProducts} = useShop()
    const cat = ["Electronics","Mens","Womens","Jewellery"]
    const renderHome = ()=>(
        <View>
            <Text style={Styles.heading}>Welcome to Shopping App</Text>
            <Text style={Styles.subHeading}>Explore Categories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style= {Styles.categoryScroll}>
                {cat.map((c)=>(
                    <View style= {Styles.catCard}>
                        <Text style={Styles.catText}>{c}</Text>
                    </View>
                ))}
            </ScrollView>
            <ImageBackground source= {{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLcm0F91_zXmkyv2uXq7pDP8MTKgnAtp3kfHWMWbXrrg&s=10"}} style = {Styles.banner} imageStyle = {{borderRadius:12}} resizeMode = "cover">
            <View style={Styles.bannerOverlay}>
                <Text style={Styles.bannerTitle}>
                    Discover Amazing Products
                </Text>
            </View>
            </ImageBackground>
            <Text style={Styles.subHeading}>All Products</Text>
        </View>
    )
    if(loading && products.length===0){
        return(
            <View style = {Styles.center} >
                <ActivityIndicator size={"large"} color="2563eb"/>
                <Text style= {Styles.loadingText}>
                    Loading Products....
                </Text>
            </View>
        )
    }
    if(error && products.length===0){
        return(
            <View style= {Styles.center}>
                <Text style={Styles.errorText}>{error}</Text>
                <TouchableOpacity style= {Styles.retryBtn} onPress={fetchProducts}>
                    <Text style = {Styles.retrytext}>Try Again</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return(
        <View style = {Styles.container}>
            <FlatList data={products} keyExtractor={(item)=>item.id.toString()} renderItem={({item})=>(
                <ProductCart product={item}/> 
            )} numColumns={2} columnWrapperStyle={{justifyContent:"space-between"}} ListHeaderComponent={renderHome} ListEmptyComponent={<Text style={Styles.empty}>No Products</Text>} refreshing={loading} onRefresh={fetchProducts} showsVerticalScrollIndicator={false} contentContainerStyle={Styles.listContent}/>
        </View>
    )
}

export default Home

const Styles = StyleSheet.create(
    {
      heading:{
        fontSize:24,
        fontWeight:"bold",
        marginBottom:20
      },
      banner:{
        height:170,
        justifyContent:"center",
        marginBottom:10,
      }  
    }
)