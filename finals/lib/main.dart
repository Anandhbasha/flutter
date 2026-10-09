// // import 'package:flutter/material.dart';

// // void main() {
// //   runApp(MaterialApp(
// //     home:AsyncDemo(),
// //     debugShowCheckedModeBanner: false,
// //   ));
// // }

// // class AsyncDemo extends StatefulWidget {
// //   @override
// //   State<AsyncDemo> createState() => _AsyncDemoState();
// // }
// // class _AsyncDemoState extends State<AsyncDemo> {
// //   String message = "Waiting for data...";

// //   Future<void> loadData() async {
// //     await Future.delayed(Duration(seconds: 3));
// //     setState(() {
// //       message = "Data loaded!";
// //     });
// //   }

// //   @override
// //   void initState() {
// //     super.initState();
// //     loadData();
// //   }

// //   @override
// //   Widget build(BuildContext context) {
// //     return Scaffold(
// //       appBar: AppBar(
// //         title: Text("Async Demo"),
// //       ),
// //       body: Center(
// //         child: Text(
// //           "Message: $message",
// //           style: TextStyle(fontSize: 24),
// //         ),
// //       ),
// //     );
// //   }
// // }


// // // super
// // // 


// import 'package:flutter/material.dart';

// void main() {
//   runApp(MaterialApp(
//     home: JsonDemo(),
//     debugShowCheckedModeBanner: false,
//   ));
// }
// class JsonDemo extends StatelessWidget {
//   @override
//   Map students = {
//     "id": 1,
//     "name": "John Doe",
//     "age": 20,
//     "courses": ["Math", "Science", "History"]
//   };
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: Text("JSON Demo"),
//       ),
//       body: Center(
//         child: Column(
//           mainAxisAlignment: MainAxisAlignment.center,
//           children: [
//             Text("ID: ${students['id']}"),
//             Text("Name: ${students['name']}"),
//             Text("Age: ${students['age']}"),
//             Text("Courses: ${students['courses'].join(', ')}"),
//           ],
//         ),
//       ),
//     );
//   }
// }


import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: JsonDemo(),
    debugShowCheckedModeBanner: false,
  ));
}
class JsonDemo extends StatelessWidget {
  final List students = [
    {
      "id": 1,
      "name": "John Doe",
      "age": 20,
      "courses": ["Math", "Science", "History"]
    },
    {
      "id": 2,
      "name": "Ashok Doe",
      "age": 21,
      "courses": ["Math", "Science", "History"]
    }
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("JSON Demo"),
      ),
      body: Center(
        child: ListView.builder(
          itemCount: students.length,
          itemBuilder: (context, index) {
            final student = students[index];
            return ListTile(
              title: Text("Name: ${student['name']}"),
              subtitle: Text("Age: ${student['age']}"),
              trailing: Text("Courses: ${student['courses'].join(', ')}"),
            );
          },
        ),
      ),
    );
  }
}