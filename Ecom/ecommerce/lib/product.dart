class Product {
  final int id;
  final String title;
  final double price;
  final String description;
  final String category;
  final String image;

  Product({
    required this.id,
    required this.title,
    required this.price,
    required this.description,
    required this.category,
    required this.image,
  });

  factory Product.fromJson(Map<String, dynamic> json) {
    return Product(
      // condition?"trueIt will Print":"false will print"
      // json['id'] is int->correctjson['id'] as int->
      id: (json['id'] is int) ? json['id'] as int : int.parse(json['id'].toString()),
      title: json['title']?.toString() ?? '',
      price: (json['price'] is double)
          ? json['price'] as double
          : double.parse(json['price'].toString()),
      description: json['description']?.toString() ?? '',
      category: json['category']?.toString() ?? '',
      image: json['image']?.toString() ?? '',
    );
  }
}