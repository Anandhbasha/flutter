import "package:flutter/material.dart";

void main(){
  runApp(
    MaterialApp(
      home: GridExample(),debugShowCheckedModeBanner: false,
    )
  );
}

class GridExample extends StatelessWidget{  
  final List product = ["Laptop","Phone","Watch","TV","AC","Washing Machine","Camera","Speaker","Keyboard"];
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text("GridView"),
      ),
      body:GridView.builder(itemCount: product.length,gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2,crossAxisSpacing: 10,mainAxisSpacing: 10),itemBuilder: (context, index) {
        return Card(
          elevation: 5,
          child: Center(
            child: Text(product[index],style: TextStyle(fontSize: 18),),
            
          ),
        );
        
        
      },),
      floatingActionButton:FloatingActionButton(onPressed: () { 
        print("Button Clicked");
        },
        child:Icon(Icons.add)
        ),
      
    );
  }
}