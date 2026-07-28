import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: StackExample(),
    debugShowCheckedModeBanner: false,
  ));
}

class StackExample extends StatelessWidget {
  const StackExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Stack Widget"),
      ),
      body: Center(
        child: Stack(
          children: [

            Container(
              width: 250,
              height: 250,
              color: Colors.blue,
            ),

            Positioned(
              top: 20,
              left: 20,
              child: Container(
                width: 100,
                height: 100,
                color: Colors.red,
              ),
            ),

            Positioned(
              bottom: 20,
              right: 20,
              child: Container(
                width: 80,
                height: 80,
                color: Colors.green,
              ),
            )

          ],
        ),
      ),
    );
  }
}