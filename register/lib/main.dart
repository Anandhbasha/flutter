import 'package:flutter/material.dart';

void main(){
  runApp(NewApp());
}

class NewApp extends StatelessWidget{
  @override
  Widget build (BuildContext context){
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: StudentRegister(),
    );
  }
}

class StudentRegister extends StatelessWidget{
  final TextEditingController nameController = TextEditingController();
  final TextEditingController ageController = TextEditingController();
  final TextEditingController emailController = TextEditingController();
  final TextEditingController phoneController = TextEditingController();
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text("Student Register"),
      ),
      body: Padding(padding: EdgeInsets.all(20),
      child: Column(
        children: [
          TextField(controller: nameController,decoration: InputDecoration(labelText: "StudentName",hintText: "Enter your name",border: OutlineInputBorder()),),
          SizedBox(height: 20,),
          TextField(controller: ageController,decoration: InputDecoration(labelText: "StudentAge",hintText: "Enter your Age",border: OutlineInputBorder()),),
          SizedBox(height: 20,),
          TextField(controller: emailController,decoration: InputDecoration(labelText: "StudentEmail",hintText: "Enter your email",border: OutlineInputBorder()),),
          SizedBox(height: 20,),
          TextField(controller: phoneController,decoration: InputDecoration(labelText: "StudentMobile",hintText: "Enter your mobile Number",border: OutlineInputBorder()),),
          SizedBox(height: 20,),
          SizedBox(
            width: double.infinity,
            height: 50,
            child: ElevatedButton(onPressed: (){
              print("Name:${nameController.text}");
              print("Age:${ageController.text}");
              print("Email:${emailController.text}");
              print("Mobile:${phoneController.text}");
            },
            child: Text("Register",style: TextStyle(fontSize: 18),),),
          )
        ],
      ),),
    );
  }

}