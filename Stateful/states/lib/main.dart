// import 'package:flutter/material.dart';

// void main(){
//   runApp(MaterialApp(
//     debugShowCheckedModeBanner:false,
//     home:CounterDemo(),
//   ));
// }

// class CounterDemo extends StatefulWidget{
//   @override
//   State<CounterDemo>createState() =>_CounterDemoState();
// }
// class _CounterDemoState extends State<CounterDemo>{
//   int count = 0;
//   @override
//   Widget build(BuildContext context){
//     return Scaffold(
//       appBar: AppBar(
//         title: Text("Counter"),
//       ),
//       body: Center(
//         child: Column(
//           mainAxisAlignment:MainAxisAlignment.center,
//           children: [
//             Text("$count",style: TextStyle(fontSize: 40),),
//             SizedBox(height: 20,),
//             ElevatedButton(onPressed: (){
//               setState(() {
//                 count++;
//               },);   
//             }, child: Text("Increment"))
//           ],
//         ),
//       ),
//     );
//   }
// }



import 'package:flutter/material.dart';

void main(){
  runApp(MaterialApp(
    debugShowCheckedModeBanner:false,
    home:BgDemo(),
  ));
}

class BgDemo extends StatefulWidget{
  @override
  State<BgDemo>createState() =>_BgDemoState();
}
class _BgDemoState extends State<BgDemo>{
  Color bg = Colors.white;
  @override
  Widget build(BuildContext context){
    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        title: Text("Counter"),
      ),
      body: Center(
          child:ElevatedButton(onPressed: (){
              setState(() {
                bg = Colors.deepOrange;
              },);   
            }, child: Text("Change Color"))  
            
          ,
        ),
      );
  }
}