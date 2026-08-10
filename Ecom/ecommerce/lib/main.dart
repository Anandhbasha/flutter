import 'package:flutter/material.dart';
import 'Apiservice.dart';
import 'product.dart';
void main(){
  runApp(
    const MyApp()
  );
}

class MyApp extends StatelessWidget{
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner:false,
      title: "Fake Store",
      theme: ThemeData(colorSchemeSeed: Colors.blue,useMaterial3: true),
      home: const ProductPage(),);
  }
}

class ProductPage extends StatefulWidget {
  const ProductPage({super.key});

  @override
  State<ProductPage> createState() => _ProductPage();
}

class _ProductPage extends State<ProductPage> {
  final Apiservice apiservice = Apiservice();

  late Future<List<Product>> products;

  @override
  void initState() {
    super.initState();
    products = apiservice.getProducts();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Products"),
      ),
      body: FutureBuilder<List<Product>>(
        future: products,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(child: Text('Error: \\${snapshot.error}'));
          } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return const Center(child: Text('No products'));
          }
          final items = snapshot.data!;
          return ListView.builder(
            itemCount: items.length,
            itemBuilder: (context, index) {
              final p = items[index];
              return ListTile(
                title: Text(p.title ?? ''),
                subtitle: Text(p.price != null ? '\\$${p.price}' : ''),
              );
            },
          );
        },
      ),
    );
  }
  }
