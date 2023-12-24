#### Arrays
   - Arrays are static in size and type , `all the elements must be the same type`
   - Arrays size  `must be known` when declaration time
   - Arrays can be created in a different way

```
          static void Main(string[] args)
 {
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
 }

```
---
#### Lists
   - Lists are dynamic in size and the size can be increased or decreased
   - Lists are static in type `All list items are must be the same type`
```
 static void Main(string[] args)
 {
     //Lists
     List<string> lists = new List<string>();

     lists.Add("a");
     lists.Add("b");
     lists.Add("c");
     lists.Remove("d");

     // Accessing the elements 
     foreach (var item in lists)
     {
         Console.WriteLine("Each item : " + item);
     }
 }
```
---
#### ArrayList
   - ArrayLists are dynamic in size and the size can be increased or decreased
   - ArrayLists are static in type `All list items can be different types`
     
 ```
 static void Main(string[] args)
 {
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
 }
 ```
---
#### Stacks
- Stacks are dynamic size can be increased or decreased and are dynamic types `All list items can be different types`
- Stacks are the first push item(Add), will get pop (Remove) in the last (First in, Last out)

```
 static void Main(string[] args)
 {
     //Stacks
     Stack stack = new Stack();

     //first pushed item
     stack.Push(1);
     stack.Push(true);
     stack.Push("Hello");

     //will remove the last pushed the item
     var last = stack.Pop();
     Console.WriteLine(last);

     // Accessing the elements, the seques is from the last to the first  
     foreach (var item in stack)
     {
         Console.WriteLine("Each stack item : " + item);
     }
 }

```
---
#### Queues
- Stacks are dynamic size can be increased or decreased and are dynamic types `All list items can be different types`
- Stacks are the first push item(Add), will get pop (Remove) in the first (First in, First out)

```
   static void Main(string[] args)
   {
       //Queues in Dynamic type       
       Queue queue = new Queue();

       //Queues in Static in type
      Queue<string> queueString = new Queue<string>();

       //first pushed item
       queue.Enqueue("a");
       queue.Enqueue(1);
       queue.Enqueue(false);

       // Accessing the elements
       foreach (var item in queue)
       {
           Console.WriteLine("Each different type of items in the arraylist: " + item);
       }           
       Console.ReadLine();
   }
```
---
#### LinkedLists
    - LinkedLists are dynamic in size can be increased or decreased
    - LinkedLists are static type `All the types must be the same`

```
static void Main(string[] args)
{
    //Queues in Dynamic type       
    LinkedList<string> list = new LinkedList<string>(); 

    list.AddFirst("first item");
    list.AddLast("last item");

    //accesss properites
    var firstOnList = list.First;

    //the next Item after the first one
    var next = firstOnList.Next;
    //list.RemoveFirst();

    // Accessing the elements
    foreach (var item in list)
    {
        Console.WriteLine("Each different type of items in the arraylist: " + item);
    }           
    Console.ReadLine();
}
```
---
#### Dictionary 
   - Dictionaries are dynamic in size can be increased or decreased
   - Dictionaries are a static type `All the types must be the same`
   - Dictionaries have a key, value pair and cannot have duplicates keys, but can have different keys with same values

```
static void Main(string[] args)
{
    //Dictionary in Dynamic type       
    Dictionary<int, string> dictionary = new Dictionary<int, string>();

    dictionary.Add(1, "Sophia");
    dictionary.Add(2, "Sophia");
    dictionary.Add(3, "Steven");

    //Access the value
   var sophia =   dictionary[1];

    if(dictionary.ContainsKey(2))
    {
        Console.WriteLine("Dictionary has the valid the key: " + dictionary[2]);
    }

    // Accessing the elements
    foreach (var (key,value) in dictionary)
    {
        Console.WriteLine("Key is : "+ key + " and " + " Value is : " + value);
    }           
    Console.ReadLine();
}
```
---
#### Hashtables
   - Hashtables are dynamic in size can be increased or decreased
   - Hashtables are a dynamic type ``All list items can be different types`
   - Hashtables have a key, value pair and cannot have duplicates keys
     
```
 static void Main(string[] args)
 {
     // Hastables
     Hashtable hashtable = new Hashtable();

     hashtable.Add("key1", "value1");
     hashtable.Add(1,true); 
     hashtable.Add(2,"Hello");

     // Accessing the elements, the seques is from the last to the first  
     foreach (var item in hashtable)
     {
         Console.WriteLine(item);
     }
     Console.ReadLine();
 }
```
---
#### Tuples
   - Tuples are immutable, meaning their values cannot be changed after they are created.
   - Tuples are useful when you need to return multiple values from a method, or when you want to work with a collection of heterogeneous elements.

```
 static void Main(string[] args)
 {
     //Create a Tuple

     var person = Tuple.Create("John", 25, "Male");

     //Accessing the items
     Console.WriteLine(person);
     Console.WriteLine($"First item: { person.Item1}, Second item: {person.Item1},Third item: {person.Item1}");

     // Creating a ValueTuple with named elements
     var person2 = (Name: "Steven", Age: 25, Gender: "Male");

     // Accessing named elements
     Console.WriteLine($"Name: {person2.Name}, Age: {person2.Age}, Gender: {person2.Gender}");


     Console.ReadLine();
 }
```
