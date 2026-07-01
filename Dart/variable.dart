
void main() {
    // datatype variable = value;
// int 
int age = 25;
// float
double height = 5.9;
// String
String name = "John";
// bool
bool isStudent = true;
// double
double salary = 50000.50;
// non predefined data types
// List
List nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,1,2];
// index -> 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  print(nums[0]);
  print(nums[1]);
  print(nums[2]);
  print(nums[3]);
  print(nums[4]);
  print(nums[5]);
  print(nums[6]);
  print(nums[7]);
  print(nums[8]);
  print(nums[9]);
  print(nums[10]);
  print(nums[11]);
  nums.add(650);
  print(nums);
  // Set
Set nums1 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10,1,2};
nums1.add(11);
print(nums1);
// Map
    Map person = {
        "name": "John",
        "age": 25
    };
    print(person["name"]);
    // arrow function
    int add(int a, int b) => a + b;
    print(add(5, 10));
}
