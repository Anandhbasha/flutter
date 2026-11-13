import React from "react";

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import { useShop } from "../Context/ShopContext";

const ProductDetails = ({ route }) => {

  const { product } = route.params || {};

  const { addToCart } = useShop();

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product Not Found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>

      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        {product.title}
      </Text>

      <Text style={styles.category}>
        {product.category}
      </Text>

      <Text style={styles.price}>
        ${product.price.toFixed(2)}
      </Text>

      <Text style={styles.rating}>
        ⭐ {product.rating?.rate ?? "N/A"}
      </Text>

      <Text style={styles.heading}>
        Product Description
      </Text>

      <Text style={styles.description}>
        {product.description}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => addToCart(product)}
      >
        <Text style={styles.buttonText}>
          Add to Cart 🛒
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white"
  },

  image: {
    width: "100%",
    height: 270,
    marginBottom: 20
  },

  title: {
    fontSize: 23,
    fontWeight: "bold"
  },

  category: {
    color: "gray",
    fontSize: 16,
    marginTop: 10
  },

  price: {
    color: "green",
    fontSize: 26,
    fontWeight: "bold",
    marginVertical: 15
  },

  rating: {
    fontSize: 17,
    marginBottom: 20
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },

  description: {
    fontSize: 16,
    lineHeight: 25,
    color: "#444"
  },

  button: {
    backgroundColor: "#2563eb",
    padding: 16,
    borderRadius: 10,
    marginVertical: 30
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold"
  }

});

export default ProductDetails;