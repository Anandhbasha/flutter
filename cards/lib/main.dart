import "package:flutter/material.dart";

void main() {
  runApp(
    MaterialApp(
      debugShowCheckedModeBanner: false,
      home: GridExample(),
    ),
  );
}

class GridExample extends StatelessWidget {
  final List<Map<String, dynamic>> products = [
    {
      "name": "Laptop",
      "price": "₹65,999",
      "image": "https://picsum.photos/200?1"
    },
    {
      "name": "Phone",
      "price": "₹24,999",
      "image": "https://picsum.photos/200?2"
    },
    {
      "name": "Watch",
      "price": "₹3,499",
      "image": "https://picsum.photos/200?3"
    },
    {
      "name": "TV",
      "price": "₹39,999",
      "image": "https://picsum.photos/200?4"
    },
    {
      "name": "AC",
      "price": "₹29,999",
      "image": "https://picsum.photos/200?5"
    },
    {
      "name": "Camera",
      "price": "₹54,999",
      "image": "https://picsum.photos/200?6"
    },
    {
      "name": "Speaker",
      "price": "₹2,999",
      "image": "https://picsum.photos/200?7"
    },
    {
      "name": "Keyboard",
      "price": "₹999",
      "image": "https://picsum.photos/200?8"
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("E-Commerce"),
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.all(10),
        child: GridView.builder(
          itemCount: products.length,
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            crossAxisSpacing: 10,
            mainAxisSpacing: 10,
            childAspectRatio: 0.68,
          ),
          itemBuilder: (context, index) {
            return Card(
              elevation: 6,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(15),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Expanded(
                    flex: 6,
                    child: ClipRRect(
                      borderRadius: const BorderRadius.only(
                        topLeft: Radius.circular(15),
                        topRight: Radius.circular(15),
                      ),
                      child: Image.network(
                        products[index]["image"],
                        width: double.infinity,
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),

                  Padding(
                    padding: const EdgeInsets.all(8),
                    child: Text(
                      products[index]["name"],
                      style: const TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),

                  const Padding(
                    padding: EdgeInsets.symmetric(horizontal: 8),
                    child: Row(
                      children: [
                        Icon(Icons.star, color: Colors.orange, size: 18),
                        Icon(Icons.star, color: Colors.orange, size: 18),
                        Icon(Icons.star, color: Colors.orange, size: 18),
                        Icon(Icons.star, color: Colors.orange, size: 18),
                        Icon(Icons.star_half,
                            color: Colors.orange, size: 18),
                        SizedBox(width: 5),
                        Text("4.5"),
                      ],
                    ),
                  ),

                  Padding(
                    padding: const EdgeInsets.all(8),
                    child: Text(
                      products[index]["price"],
                      style: const TextStyle(
                        color: Colors.green,
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),

                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 8),
                    child: SizedBox(
                      width: double.infinity,
                      child: ElevatedButton.icon(
                        onPressed: () {},
                        icon: const Icon(Icons.shopping_cart),
                        label: const Text("Add"),
                      ),
                    ),
                  ),
                ],
              ),
            );
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          print("Cart");
        },
        child: const Icon(Icons.shopping_cart),
      ),
    );
  }
}