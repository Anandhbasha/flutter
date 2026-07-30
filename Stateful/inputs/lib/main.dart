import "package:flutter/material.dart";

void main(){
  runApp(
    MaterialApp(
      debugShowCheckedModeBanner: false,
      home: FormInputDemo(),
    )
  );
}

class FormInputDemo extends StatefulWidget{
  @override
  State<FormInputDemo>createState()=>_FormInputDemoState();
}

class _FormInputDemoState extends State<FormInputDemo>{
  TextEditingController nameController = TextEditingController();
  bool notification = false;
  bool agree = false;
  String gender = "Male";
  double age = 20;
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text("Forms Widgest"),backgroundColor: Colors.blue,
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(20),child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,children: [
            TextField(controller: nameController,decoration: InputDecoration(labelText: "Enter the name:",hintText: "Type your name",border: OutlineInputBorder(),prefixIcon: Icon(Icons.person),),),
            SizedBox(height: 25,),
            Text("Switch",style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold),),
            SwitchListTile(title: Text("Enable Notification"),value: notification,onChanged: (value){
              setState(() {
                notification=value;
              });
            },),
            SizedBox(height: 25,),
            CheckboxListTile(title: Text("Never ask for this Device"),value: agree, onChanged: (value){
              setState(() {
                agree = value!;
              });
            }),
            SizedBox(height: 25,),
            Text("Radio Button",style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold),),
            RadioListTile(title: Text("Male"),value: "Male",groupValue: gender,onChanged: (value){
              setState(() {
                gender= value.toString();
              });
            },),
            RadioListTile(title: Text("Female"),value: "Female",groupValue: gender,onChanged: (value){
              setState(() {
                gender= value.toString();
              });
            },),
            RadioListTile(title: Text("Others"),value: "Others",groupValue: gender,onChanged: (value){
              setState(() {
                gender= value.toString();
              });
            },),SizedBox(height: 25,),
            Text("Slider",style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold),),
            Slider(min:0,max:100,divisions: 100,label: age.round().toString(), value: age, onChanged: (value){
              setState(() {
                age=value;
              });
            }),
            Text("Selected Age:${age.round()}",style: TextStyle(fontSize:18),),
            SizedBox(height: 20,),
            Center(
              child: ElevatedButton(onPressed: (){
                showDialog(context: context, builder: (_){
                  return AlertDialog(
                    title: Text("User Details"),
                    content: Text("Name:${nameController.text}\n\n"
                    "Notification:$notification \n\n"
                    "Agree:$agree\n\n"
                    "Gender:$gender\n\n"
                    "Age:${age.round()}"),
                  );
                });
              }, child: Text("Submit")),
            )
          ],
        ),
      ),
    );
  }
}
