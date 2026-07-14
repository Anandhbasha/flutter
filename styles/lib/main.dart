import "package:flutter/material.dart";

void main(){
  runApp(MyApp());
}

class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext Context){
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text("Student Card"),
        ),
        body: Container(
          
          margin: EdgeInsets.all(150),
          child: Container(
            padding: EdgeInsets.all(20),
            decoration: BoxDecoration(color: Colors.greenAccent,borderRadius: BorderRadius.circular(20)),
            child: Column(
              children: [
                Align(
                  alignment: Alignment.topLeft,
                  child: Text(
                    "Student Details",
                    style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
                  ),
                ),
                SizedBox(height: 20),
                Center(
                  child: CircleAvatar(
                    radius: 50,
                    child: Icon(Icons.person, size: 50),
                  ),
                ),
                SizedBox(height: 25),
                // symmetric Padding
                Padding(
                  padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
                  child: Text(
                    "Pradeep",
                    style: TextStyle(fontWeight: FontWeight.bold),
                  ),
                ),
                Padding(padding: EdgeInsets.only(top:10,left: 20,right: 30,bottom: 15 ),
                child: Text("Flutter Developer",style: TextStyle(fontWeight: FontWeight.bold),),
                ),
                Row(
                  children: [
                    Icon(Icons.email),
                    SizedBox(height: 20,),
                    Expanded(child: Text("pradeep@gmail.com",overflow: TextOverflow.ellipsis,),
                  )
                  ],
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}





// void main(){
//   runApp(
//     MaterialApp(
//       home: Scaffold(
//         appBar: AppBar(
//           title: Text("Hello"),
//         ),
//         body: Center(
//           child: Column(
//             children: [
//               Text("data")
//             ],
//           ),
//         ),
//       ),
      
//     )
//   );
// }