import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text("Card"),
        ),
        body: Center(
          child: Container(
            width: 300,
            height: 600,
            padding: EdgeInsets.all(15),
            decoration: BoxDecoration(color: Colors.grey,
            border:Border.all(color: Colors.red,width: 2),
            borderRadius:BorderRadius.circular(15),
            boxShadow: [BoxShadow(color: Colors.black87),]),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                
              ],
            ),
          ),
      
        ),
      ),
    );
    }
    }
      