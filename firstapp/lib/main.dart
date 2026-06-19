import "package:flutter/material.dart";

void main(){
  runApp(Myapp());
}

class Myapp extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Text("Hello Welcome",style: TextStyle(fontSize:30),),
        ),
      ),
    );
  }
}