import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: AlertExample(),
    debugShowCheckedModeBanner: false,
  ));
}

class AlertExample extends StatelessWidget {
  const AlertExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Alert Dialog"),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            showDialog(
              context: context,
              builder: (context) {
                return AlertDialog(
                  title: Text("Delete"),
                  content: Text("Are you sure you want to delete?"),
                  actions: [
                    TextButton(
                      onPressed: () {
                        Navigator.pop(context);
                      },
                      child: Text("Cancel"),
                    ),
                    ElevatedButton(
                      onPressed: () {
                        Navigator.pop(context);
                      },
                      child: Text("Delete"),
                    ),
                  ],
                );
              },
            );
          },
          child: Text("Open Dialog"),
        ),
      ),
    );
  }
}