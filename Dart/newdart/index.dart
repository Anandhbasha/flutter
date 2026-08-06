import 'dart:convert';
import 'package:http/http.dart' as http;

void main (){
  Map Person = {
    'name': 'John Doe',
    'age': 30,
    'email': 'jd@gmail.com'
    };
    // "{
    // 'name': 'John Doe',
    // 'age': 30,
    // 'email': 'jd@gmail.com'
    // };"
    String data = jsonEncode(Person);
    print(data);
    // print(Person['name']);
    Map user = jsonDecode(data);
    print(user['name']);
    // API
    Future <void> getData() async{
      var res = await http.get(Uri.parse("https://fakestoreapi.com/products"));
      print(res.body);
    }
}