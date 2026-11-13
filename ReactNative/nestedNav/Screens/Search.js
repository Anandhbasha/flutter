import React, { useState } from "react";

import {
  View,
  Text,
  SectionList,
  TextInput,
  Pressable,
  StyleSheet
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useShop } from "../Context/ShopContext";

const Search = () => {

  const [search, setSearch] = useState("");

  const navigation = useNavigation();

  const {
    products,
    loading,
    error
  } = useShop();

  const filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(search.toLowerCase().trim())
  );

  const groupedProducts = Object.values(
    filteredProducts.reduce((groups, product) => {

      const category = product.category;

      if (!groups[category]) {
        groups[category] = {
          title: category,
          data: []
        };
      }

      groups[category].data.push(product);

      return groups;

    }, {})
  );

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Search Products 🔍
      </Text>

      <TextInput
        placeholder="Search by product name..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />

      <SectionList
        sections={groupedProducts}

        keyExtractor={(item) => item.id.toString()}

        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionTitle}>
            {section.title.toUpperCase()}
          </Text>
        )}

        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() =>
              navigation.navigate("ProductDetail", {
                product: item
              })
            }
          >
            <View style={{ flex: 1 }}>
              <Text
                style={styles.productTitle}
                numberOfLines={2}
              >
                {item.title}
              </Text>

              <Text style={styles.price}>
                ${item.price.toFixed(2)}
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </Pressable>
        )}

        ListEmptyComponent={
          <Text style={styles.empty}>
            {loading
              ? "Loading Products..."
              : error
              ? error
              : "No Products Found"}
          </Text>
        }

        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15
  },

  input: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd"
  },

  sectionTitle: {
    backgroundColor: "#2563eb",
    color: "white",
    padding: 12,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 12,
    borderRadius: 8
  },

  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center"
  },

  productTitle: {
    fontSize: 15,
    fontWeight: "bold"
  },

  price: {
    color: "green",
    marginTop: 8,
    fontSize: 17
  },

  arrow: {
    fontSize: 30,
    color: "#2563eb",
    marginLeft: 10
  },

  empty: {
    textAlign: "center",
    marginTop: 60,
    color: "gray",
    fontSize: 18
  }

});

export default Search;