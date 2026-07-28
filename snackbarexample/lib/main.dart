import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: SnackBarExample(),
    debugShowCheckedModeBanner: false,
  ));
}

class SnackBarExample extends StatelessWidget {
  const SnackBarExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("SnackBar"),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(
                content: Text("Data Saved Successfully"),
                duration: Duration(seconds: 2),
                backgroundColor: Colors.green,
              ),
            );
          },
          child: Text("Show SnackBar"),
        ),
      ),
    );
  }
}