import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  Alert,
  StyleSheet
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useShop } from "../Context/ShopContext";

const ProductCard = ({ product }) => {

  const navigation = useNavigation();

  const {
    addToCart,
    toggleWishlist,
    wishlist
  } = useShop();

  const isFavorite = wishlist.some(
    (item) => item.id === product.id
  );

  return (
    <View style={styles.card}>

      <Pressable
        onPress={() =>
          navigation.navigate("ProductDetail", {
            product
          })
        }

        onLongPress={() =>
          Alert.alert(
            product.title,
            `Price: $${product.price}`
          )
        }

        style={({ pressed }) => ({
          opacity: pressed ? 0.6 : 1
        })}
      >

        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
        />

        <Text
          style={styles.title}
          numberOfLines={2}
        >
          {product.title}
        </Text>

        <Text style={styles.price}>
          ${product.price.toFixed(2)}
        </Text>

        <Text style={styles.category}>
          {product.category}
        </Text>

      </Pressable>

      <TouchableOpacity
        style={styles.cartButton}
        activeOpacity={0.6}
        onPress={() => addToCart(product)}
      >
        <Text style={styles.buttonText}>
          Add to Cart
        </Text>
      </TouchableOpacity>

      <Pressable
        style={styles.wishlistButton}
        onPress={() => toggleWishlist(product)}
      >
        <Text>
          {isFavorite ? "❤️ Wishlisted" : "🤍 Wishlist"}
        </Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({

  card: {
    width: "48%",
    backgroundColor: "white",
    padding: 12,
    marginBottom: 15,
    borderRadius: 12,
    elevation: 3
  },

  image: {
    width: "100%",
    height: 130,
    marginBottom: 12
  },

  title: {
    fontSize: 14,
    fontWeight: "bold",
    minHeight: 40
  },

  price: {
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
    marginVertical: 8
  },

  category: {
    fontSize: 12,
    color: "gray",
    marginBottom: 10
  },

  cartButton: {
    backgroundColor: "#2563eb",
    padding: 10,
    borderRadius: 8
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 12
  },

  wishlistButton: {
    padding: 10,
    alignItems: "center"
  }

});

export default ProductCard;