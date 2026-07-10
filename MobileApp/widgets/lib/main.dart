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
            title: Text("Basic Widgets"),
            centerTitle: true,
          ),
          body: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Image.network("data:image/jpeg;base64,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",width: 100,height: 150),
                SizedBox(height: 20),
                // Icon
                Icon(Icons.favorite,color: Colors.redAccent,size: 50),
                SizedBox(height: 20),
                // Button
                ElevatedButton(onPressed:(){ print("Button Clicked");
                }, child: Text("Click")),
                TextButton(onPressed:(){ 
                  print("Button Clicked");
                }, child: Text("Click")),
                OutlinedButton(onPressed:(){ 
                  print("Button Clicked");
                }, child: Text("Click")),
                IconButton(onPressed:(){ 
                  print("Button Clicked");
                }, icon: Icon(Icons.thumb_up,color:Color.fromARGB(255, 189, 162, 31),size: 35,))
              ],
            ),
          ),
        ),
      );
  }
}

