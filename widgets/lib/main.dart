import "package:flutter/material.dart";

void main(){
  runApp(MaterialApp(home:Basic()));
}

class Basic extends StatelessWidget{
  final Students = ["Rajan","John","Ravi","Parveen","Prakash"];
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text("Linear"),
      ),
      drawer: Drawer(
            child: ListView(
              children: [DrawerHeader(child: Text("Welcome")),ListTile(title: Text("Home"),),ListTile(title: Text("Profile"),),ListTile(title: Text("Contact"),),ListTile(title: Text("Service"),),],
            ),
           )
           ,
      body: Center(
        child: SizedBox(width: 250,
        child: Column(
          children:[
          LinearProgressIndicator(value: 0.5,color: Colors.green,backgroundColor: Colors.grey[300],),
          SizedBox(height: 100,),
          CircularProgressIndicator(), SizedBox(height: 100,),
          Expanded(
            child: ListTile(
            leading: Icon(Icons.person),title: Text("Anandh"),subtitle: Text("Flutter Developer"),trailing: Icon(Icons.arrow_forward_ios),
          ),
          )
          
          //  InkWell(onTap: (){print("tapped");},
          //  child: Container(
          //   padding: EdgeInsets.all(20),
          //   color: Colors.blue,child: Text("ClickMe",style: TextStyle(color: Colors.white),),
          //  ),),SizedBox(height: 100,),
          //  GestureDetector(
          //   onDoubleTap: () {
          //     print("Doble");
          //   },
          //   child: Container(
          //   padding: EdgeInsets.all(20),
          //   color: Colors.blue,child: Text("ClickMe",style: TextStyle(color: Colors.white),),
          //  ),
          //  ),SizedBox(height: 100,),
          //  Card(
          //   elevation: 10,
          //   child: Padding(padding: EdgeInsets.all(20)
          //   ,child: Text("Flutter Card"),),
          //  ),
           
           ListView.builder(
            itemCount:Students.length,itemBuilder: (context,index){
              return ListTile(title: Text(Students[index]),);
            },
           )
        ],
        ),
        
        
      ),
    ),);
  }
}