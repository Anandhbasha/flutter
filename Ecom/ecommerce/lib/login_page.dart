import 'package:flutter/material.dart';
import 'product_page.dart';

class LoginPage extends StatelessWidget {
  const LoginPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Login")),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            // Home / Product Page-ku navigate aagum
            Navigator.pushReplacement(
              context,
              MaterialPageRoute(builder: (context) => const ProductPage()),
            );
          },
          child: const Text("Login"),
        ),
      ),
    );
  }
}