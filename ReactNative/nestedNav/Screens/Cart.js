import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import { useShop } from "../Context/ShopContext";

const Cart = () => {

  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal
  } = useShop();

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        My Cart 🛒
      </Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}

        renderItem={({ item }) => (
          <View style={styles.card}>

            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="contain"
            />

            <View style={styles.details}>

              <Text
                style={styles.title}
                numberOfLines={2}
              >
                {item.title}
              </Text>

              <Text style={styles.price}>
                ${item.price.toFixed(2)}
              </Text>

              <View style={styles.quantityRow}>

                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() =>
                    updateQuantity(item.id, -1)
                  }
                >
                  <Text style={styles.quantityText}>−</Text>
                </TouchableOpacity>

                <Text style={styles.quantity}>
                  {item.quantity}
                </Text>

                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() =>
                    updateQuantity(item.id, 1)
                  }
                >
                  <Text style={styles.quantityText}>+</Text>
                </TouchableOpacity>

              </View>

              <TouchableOpacity
                onPress={() => removeFromCart(item.id)}
              >
                <Text style={styles.remove}>
                  Remove
                </Text>
              </TouchableOpacity>

            </View>

          </View>
        )}

        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🛒</Text>

            <Text style={styles.empty}>
              Your Cart is Empty!
            </Text>
          </View>
        }
      />

      {cart.length > 0 && (
        <View style={styles.footer}>

          <Text style={styles.total}>
            Total: ${cartTotal.toFixed(2)}
          </Text>

          <TouchableOpacity style={styles.checkout}>
            <Text style={styles.checkoutText}>
              Proceed to Checkout
            </Text>
          </TouchableOpacity>

        </View>
      )}

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f5f5f5"
  },

  heading: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20
  },

  card: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    elevation: 2
  },

  image: {
    width: 100,
    height: 120
  },

  details: {
    flex: 1,
    marginLeft: 15
  },

  title: {
    fontSize: 16,
    fontWeight: "bold"
  },

  price: {
    color: "green",
    fontSize: 18,
    marginVertical: 10
  },

  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },

  quantityButton: {
    backgroundColor: "#2563eb",
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },

  quantityText: {
    color: "white",
    fontSize: 22
  },

  quantity: {
    fontSize: 18,
    marginHorizontal: 15
  },

  remove: {
    color: "red",
    fontWeight: "bold"
  },

  footer: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12
  },

  total: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 15
  },

  checkout: {
    backgroundColor: "#16a34a",
    padding: 15,
    borderRadius: 10
  },

  checkoutText: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold"
  },

  emptyContainer: {
    alignItems: "center",
    marginTop: 100
  },

  emptyIcon: {
    fontSize: 60
  },

  empty: {
    fontSize: 21,
    color: "gray",
    marginTop: 15
  }

});

export default Cart;