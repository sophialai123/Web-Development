#### Arrays
   - Arrays are static in size and type , `all the elements must be the same type`
   - Arrays size  `must be known` when declaration time
   - Arrays can be created in a different way

```
          //Array
            // Create an array of four elements, and add values later
            string[] cars = new string[4];
            
            // Create an array of four elements and add values right away 
            string[] cars1 = new string[4] { "Volvo", "BMW", "Ford", "Mazda" };

            // Create an array of four elements without specifying the size 
            string[] cars2 = new string[] { "Volvo", "BMW", "Ford", "Mazda" };

            // Create an array of four elements, omitting the new keyword, and without specifying the size
            string[] cars3 = { "Volvo", "BMW", "Ford", "Mazda" };
            var lastItem = cars3[3];
            var changeFirstItem = cars3[0] = "changed";
            Console.WriteLine(cars3[0]);
            Console.ReadLine();

```
---
#### Lists
   - Lists are dynamic in size and the size can be increased or decreased
   - Lists are static in type `All list items are must be the same type`
```
  //Lists
  List<string> lists = new List<string>();

  lists.Add("a");
  lists.Add("b");
  lists.Add("c");
  lists.Remove("d");
```
---
#### ArrayList
   - ArrayLists are dynamic in size and the size can be increased or decreased
   - ArrayLists are static in type `All list items can be different types`
     
 ```
 //ArrayLists
 ArrayList arrayList = new ArrayList();

 arrayList.Add("a");
 arrayList.Add(1);
 arrayList.Add(true);
 arrayList.Remove(1);

 // Accessing the elements 
 foreach (var item in arrayList)
 {
     Console.WriteLine("Each different type of items in the arraylist: " + item);
 }
 ```
