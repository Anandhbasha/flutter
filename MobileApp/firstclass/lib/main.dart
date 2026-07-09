import "package:flutter/material.dart";

void main(){
  runApp(MyApp());
}

class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return(MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("Statless Widgets"),
        ),
        body: Center(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text("Hello Flutter", style: TextStyle(fontSize: 30)),
              SizedBox(width: 20),
              Text("This is Second Class of Flutter", style: TextStyle(fontSize: 10)),SizedBox(width: 20),
              Text("We are learning Flutter",style: TextStyle(fontSize: 10),),SizedBox(width: 20),
            ],
          ),
        
        ),
      ),
    ));
  }
}