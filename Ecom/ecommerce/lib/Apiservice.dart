import 'dart:convert';
import 'package:http/http.dart' as http;

import 'product.dart';

class Apiservice {
  Future<List <Product>> getProducts()async{
  final res = await http.get(Uri.parse("https://fakestoreapi.com/products",
  ),);
  if(res.statusCode ==200){
    List data = jsonDecode(res.body);
    return data
    .map((item)=>
      Product.fromJson(item),
    ).toList();
    print(data);
  }else{
    throw Exception("Failed to load Products");
  }
}
}