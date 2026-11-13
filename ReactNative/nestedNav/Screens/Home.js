import {
  View,
  Text,
  FlatList,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import { useShop } from "../Context/ShopContext";
import ProductCard from "../Components/ProductCard";

const Home = () => {

  const {
    products,
    loading,
    error,
    fetchProducts
  } = useShop();

  const categories = [
    "Electronics",
    "Jewelery",
    "Men's Clothing",
    "Women's Clothing"
  ];

  const renderHeader = () => (
    <View>

      <Text style={styles.heading}>
        Welcome to Shopping App 🛍️
      </Text>

      <Text style={styles.subheading}>
        Explore Categories
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
      >
        {categories.map((category) => (
          <View
            key={category}
            style={styles.categoryCard}
          >
            <Text style={styles.categoryText}>
              {category}
            </Text>
          </View>
        ))}
      </ScrollView>

      <ImageBackground
        source={{
          uri: "https://picsum.photos/id/20/1000/400"
        }}
        style={styles.banner}
        imageStyle={{ borderRadius: 12 }}
        resizeMode="cover"
      >
        <View style={styles.bannerOverlay}>
          <Text style={styles.bannerTitle}>
            Mega Shopping Sale!
          </Text>

          <Text style={styles.bannerText}>
            Discover Amazing Products
          </Text>
        </View>
      </ImageBackground>

      <Text style={styles.subheading}>
        All Products
      </Text>

    </View>
  );

  if (loading && products.length === 0) {
    return (
      <View style={styles.center}>
        <ActivityIndicator
          size="large"
          color="#2563eb"
        />

        <Text style={styles.loadingText}>
          Loading Products...
        </Text>
      </View>
    );
  }

  if (error && products.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>
          {error}
        </Text>

        <TouchableOpacity
          style={styles.retryButton}
          onPress={fetchProducts}
        >
          <Text style={styles.retryText}>
            Try Again
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <FlatList
        data={products}

        keyExtractor={(item) => item.id.toString()}

        renderItem={({ item }) => (
          <ProductCard product={item} />
        )}

        numColumns={2}

        columnWrapperStyle={{
          justifyContent: "space-between"
        }}

        ListHeaderComponent={renderHeader}

        ListEmptyComponent={
          <Text style={styles.empty}>
            No Products Available
          </Text>
        }

        refreshing={loading}
        onRefresh={fetchProducts}

        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },

  listContent: {
    padding: 15
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },

  subheading: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15
  },

  categoryScroll: {
    marginBottom: 20
  },

  categoryCard: {
    backgroundColor: "#2563eb",
    padding: 15,
    marginRight: 10,
    borderRadius: 10
  },

  categoryText: {
    color: "white"
  },

  banner: {
    height: 170,
    justifyContent: "center",
    marginBottom: 15
  },

  bannerOverlay: {
    backgroundColor: "rgba(0,0,0,0.55)",
    padding: 20,
    marginHorizontal: 15,
    borderRadius: 10
  },

  bannerTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold"
  },

  bannerText: {
    color: "white",
    fontSize: 16,
    marginTop: 8
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },

  loadingText: {
    marginTop: 15,
    fontSize: 18
  },

  errorText: {
    color: "red",
    fontSize: 17,
    textAlign: "center"
  },

  retryButton: {
    backgroundColor: "#2563eb",
    padding: 15,
    marginTop: 20,
    borderRadius: 8
  },

  retryText: {
    color: "white",
    fontWeight: "bold"
  },

  empty: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 40
  }

});

export default Home;