## LINQ Methods
####  `Any()` 
- Determines whether any element of a sequence exists or satisfies a condition. 
- Return `true ` if the source sequence contains any elements; otherwise return `false`;
- Also checks the ArgumentNullException 

```
using System;
using System.Collections.Generic;
using System.Linq;

namespace Coding.Exercise
{
    public class Exercise
    {
        public static bool IsAnyNumberNegative(IEnumerable<int> numbers)
        {
            //TODO you code goes here
         
           bool IsAnyNumberNegative = numbers.Any(number => number < 0);
           Console.WriteLine(IsAnyNumberNegative);
           return IsAnyNumberNegative;
        }
        
        
        //Check null exception 
        public static int[] CountPositivesSumNegatives(int[] input)
       {
        //check the null and empty array
        if(input == null || !input.Any())
        {
            return new int[] {};
        }
        
        int countPositives = input.Count(n => n > 0);
        int sumNegatives = input.Where(n => n < 0).Sum();

        return new int[] { countPositives, sumNegatives };

      }
    
    }
}

```

---

####  `All()` 
- Determines whether all elements of a sequence satisfy a condition.
- Returns `true` if every element of the source sequence passes the test in the specified predicate, or if the sequence is empty; otherwise, `false`.
- A function to test each element for a condition.

```
       public static bool AreAllNumbersDivisibleBy10(int[] numbers)
        {
            //TODO your code goes here
            return numbers.All(number => number % 10 == 0);
        }


```
---
####  `Count()` 
- Returns the number of elements in a sequence.(How many)
```
     public static int CountAllLongWords(IEnumerable<string> words)
        {
          
           return words.Count(word => word.Length > 10);
        }
  
```
---
####  `Contains()` 
- Determines whether a sequence contains a specified element.
- Returns `true` if the source sequence contains an element that has the specified value; otherwise, `false`.

```
string[] fruits = { "apple", "banana", "mango", "orange", "passionfruit", "grape" };

string fruit = "mango";

bool hasMango = fruits.Contains(fruit); //return True

```
---
####  `OrderBy()` 
- Sorts the elements of a sequence in ascending order.

####  `OrderByDescending()` 
- Sorts the elements of a sequence in descending order.
```
 public static IEnumerable<string> OrderFromLongestToShortest(IEnumerable<string> words)
        {
            //TODO your code goes here
            return words.OrderByDescending( word => word.Length);
        }
```
#### `ThenByDescending()`
- User `OrderBy()` first Then 
- Performs a subsequent ordering of the elements in a sequence in descending order.

```
public static void ThenByDescendingEx1()
{
    string[] fruits = { "apPLe", "baNanA", "apple", "APple", "orange", "BAnana", "ORANGE", "apPLE" };

    // Sort the strings first ascending by their length and
    // then descending using a custom case insensitive comparer.
    IEnumerable<string> query =
        fruits
        .OrderBy(fruit => fruit.Length)
        .ThenByDescending(fruit => fruit, new CaseInsensitiveComparer());

    foreach (string fruit in query)
    {
        Console.WriteLine(fruit);
    }
}

```
---
#### `ElementAt()`
- Returns the element at a specified index in a sequence. ( return index)
- If `index` is less than 0 or greater than or equal to the number of elements in source, will through `ArgumentOutOfRangeException`

```
 public static bool IsTheNumberAtIndexTheLargest(IEnumerable<int> numbers, int index)
        {
            //TODO your code goes here
           if(index < 0 || index >= numbers.Count())
           {
               return false;
           }
           return numbers.All(x => x <= numbers.ElementAt(index)); // return true if the all numbers is greater than the index number 
        }
```

```
 public static string FormatPetDataAtIndex(IEnumerable<Pet> pets, int index)
        {
            //TODO your code goes here
            if(pets.ElementAtOrDefault(index) != null ){
                
                return $"Pet name: {pets.ElementAtOrDefault(index).Name}"; // To get index value pet name
            }
            
            return $"Pet data is missing for index {index}";//return 0 
        }
    }
    
    public class Pet
    {
        public string Name {get; set;}
    }
```

---
#### `ElementAtOrDefault()`
- Returns the element at a specified index in a sequence or a default value if the index is out of range.
- Returns `0` if it is index out of range
- If no such index is present in the collection, the ElementAtOrDefault method will return the default for the string type. which is "0" ;
- The default for string is null. The string.IsNullOrEmpty method will return true for null, so this is the same result as in the original method.
- If such an index is present, we return true if the string at this index is null or empty, and false otherwise. Again, this is the same behavior as in the original method. (As below)



```
public static bool IsEmptyAtIndex_Refactored(IEnumerable<string> words, int index)
        {
            // string.IsNullOrEmpty method will return true for null, so this is the same result as in the original method.         
            return string.IsNullOrEmpty(words.ElementAtOrDefault(index));
        }
```
---

#### `First()`
- Returns the first element of a sequence.
- Throws an `ArgumentNullException` exceptions if the predicate is `null`.


#### `FirstOrDefault()`
- Returns the first element of a sequence, or a default value if no element is found.(returns null)

```
public static string FindFirstNameInTheCollection(IEnumerable<string> words)
        {
          
         // returns if the words is longer than 1 and first letter is uppercase and all other letters are lower case
           return words.FirstOrDefault(x => x.Length > 1  && (char.IsUpper(x.First()) && x.Count(c => char.IsUpper(c)) == 1));
        }

```
---

#### `Last()`
- Returns the last element of a sequence.
- Throws an `ArgumentNullException` exceptions if the predicate is `null`.


#### `LastOrDefault()`
- Returns the last element of a sequence, or a default value if no element is found.(returns null)

```
public static Person GetYoungest(IEnumerable<Person> people)
        {
            //return the youngest person from this collection.
            return people.OrderBy(x => x.DateOfBirth).LastOrDefault();
        }
        
         public class Person
    {
        public string Name {get; set;}
        public DateTime DateOfBirth {get; set;}
        
        public override string ToString()
        {
            return $"Name: {Name}, DateOfBirth: {DateOfBirth}";
        }
    }

```
---
#### `Single（）`
- Returns **Only** one and specific element of a sequence.
- Throw exceptions if more than one element satisfies the condition in predicate.
- Throw exceptions if the source sequence is empty or null.
- Throw exceptions if no elements satisfiesthe condition in predicate.

```
public static IEnumerable<int> GetSingleElementCollection(IEnumerable<IEnumerable<int>> numberCollections)
        {
            //only have one element in the nested numberCollections
            return numberCollections.Single(x => x.Count() == 1);
        }

```


#### `SingleOrDefault()`
- Returns a single(ONLY one), specific element of a sequence, or a default value if that element is not found.
- Throw exceptions if more than one element satisfies the condition in predicate.

```
 public static string GetTheOnlyUpperCaseWord(IEnumerable<string> words)
        {
            // returns only uppercase string
           return words.SingleOrDefault(x => x.ToUpper() == x);
            
        }

```
---

#### `Where()`
- Filters a sequence of values based on a predicate.
- No exceptions will be throw if no conditions match.
- 
```
 public class Exercise
    {
        public static IEnumerable<Student> GetScholarshipCandidates(IEnumerable<Student> students)
        {
            //return average mark is above 4.6
           return students.Where(x => (x.Marks.Any() ? x.Marks.Average() : 0) > 4.6);
            
        }
    }
    
    public class Student
    {
        public string Name {get; set;}
        public IEnumerable<int> Marks {get; set;}
        
        public override string ToString()
        {
            return $"{Name} with marks ({string.Join(", ", Marks)})";
        }
    }
```
- Filters a sequence of values based on a predicate. Each element's index is used in the logic of the predicate function.
- for words {"1.AAA", "2.BBB", "invalidWord", "4.DDD"} the result should be {"1.AAA", "2.BBB", "4.DDD"}
- for words {"1.AAA", "2.BBB",  "4.DDD"} the result should be {"1.AAA", "2.BBB"}  because "4.DDD" has an invalid index (it is the third word in the collection, so it's index should be 3)

```


 public static IEnumerable<string> GetProperlyIndexedWords (IEnumerable<string> words)
        {
            //returns only those words, that start with a proper index
            return words.Where((word,index) => word.StartsWith($"{index + 1}"));
        }

```
---
#### `Take()`
- Returns a specified number of contiguous elements from the start of a sequence.
- Does not throw an exception if the index is out of range or null.

```
 public static IEnumerable<int> TakeSome(IEnumerable<int> numbers)
    {
        //Return the first 3 numbers
        if (numbers.Count() < 10)
        {
            return numbers.Take(3);
        }

        //return the first 30 numbers
        if (numbers.Count() < 100)
        {
            return numbers.Take(30);
        }

        return numbers;
        //use Ternary operator
        return numbers.Count() < 10 ? numbers.Take(3) : numbers.Count() < 100 ? numbers.Take(30) : numbers;

    }
```

#### `TakeLast()`
- Returns a new enumerable collection that contains the last count elements from source (take the last count)

```
 var numbers = new[] { 1, 2, 3,100,200 };

        var secondLargestNum =  numbers.OrderBy(x => x).TakeLast(2).First();
        Console.WriteLine(secondLargestNum); //return 100
```

#### `TakeWhile()`
- Returns elements from a sequence as long as a specified condition is true, and then skips the remaining elements.
- usually use with `OrderBy()`

---

#### `Skip()`
- Bypasses a specified number of elements in a sequence and then returns the remaining elements.
- Skip the passing numbers then return the rest items
- Does not throw exceptions if it skips more than the items in the collection, return null 

```
int[] grades = { 59, 82, 70, 56, 92, 98, 85 };

var skip5numbers = grades.Skip(5);  //return 98, 85 as it will skip the first 5 numbers

```
#### `SkipLast()`
- Returns a new enumerable collection that contains the elements from source with the last count elements of the source collection omitted.
- Returns all the items apart from the last passing numbers

```
int[] grades = { 59, 82, 70, 56, 92, 98, 85 };

var skipLast5numbers = grades.SkipLast(5);  //return 59, 82 as it will skip the last 5 numbers

```
#### `SkipWhile()`
- Bypasses elements in a sequence as long as a specified condition is true and then returns the remaining elements.
- Usually use with `OrderBy()`
```
  public static IEnumerable<int> GetAllAfterFirstDividableBy100_Refactored(IEnumerable<int> numbers)
        {
            //it skips the numbers until we hit a number divisible by 100.
            return numbers.SkipWhile(x => x % 100 != 0);
        }
```
---
#### `OfType()`
- Filters the elements of an IEnumerable based on a specified type.
- Returns An IEnumerable<T> that contains elements from the input sequence of type TResult.
    
```
     public static int? GetTheFirstInteger(IEnumerable<object> objects)
        {
            //will return the first integer from this collection. If no integer is present, it shall return null.
            //FirstOrDefault,will return null if is no interger
    
            return objects.OfType<int?>().FirstOrDefault();
        }
```
---

#### `Distinct()`
- Returns distinct elements from a sequence.(remove duplicate items)
- So if the count of the result returned by the Distinct method is equal to the count of all elements, 
- it means each element in the collection is unique:
```
 public static bool AreAllUnique<T>(IEnumerable<T> collection)
        {
            //return true if all the collection are unique
            return collection.Distinct().Count() == collection.Count();
        }
```

---
#### `Prepend()`
 - Adds a value to the **beginning** of the sequence.
 - Returns a new sequence that begins with element.( Does not change the exsiting collection)

#### `Append()`
 - Appends a value to the **end** of the sequence..
 - Returns a new sequence that begins with element.( Does not change the exsiting collection)
 
 ```
 public static IEnumerable<int> RemoveDuplicatesFromStartAndEnd(IEnumerable<int> numbers)
        {
            
            //will remove the duplicate occurrences of the first and the last number in the collection.
            if(numbers.Count() < 2){
                return numbers;
            }
             
             var firstNumber = numbers.First();
             var lastNumber = numbers.Last();
             
             return numbers.Where(x => x != firstNumber)
                            .Prepend(firstNumber)
                            .Where(x => x != lastNumber)
                            .Append(lastNumber);
           
        }
 ```
    
---

#### `Contat()`
- Concatenates two sequences.
- Returns an IEnumerable<T> that contains the concatenated elements of the two input sequences.
- Does not remove dupilcate elements

```
//for input "f_o!_!x" the result will be "fox_!".

public static string CleanWord(string word)
        {
            var wordAarr = word.ToCharArray();
            
            return new string(wordAarr.Where(x => char.IsLetter(x)).Concat(wordAarr.Where(c=> !char.IsLetter(c)).Distinct()).ToArray());
        }
```

---
#### `Union()`
- Produces the set union of two sequences.(Concatenates)
- An IEnumerable<T> that contains the elements from both input sequences, excluding duplicates.
- Removes the duplicate elements
---
#### `ToArray()`
- Creates an array from a `IEnumerable<T>`
- Returns an array that contains the elements from the input sequence.


#### `ToList()`
- Creates a `List<T>` from a `IEnumerable<T>`
- Returns a `List<T>` that contains the elements from the input sequence.
---

#### `ToDictionary()`
- Creates a `Dictionary<TKey,TValue>` from an `IEnumerable<T>`.
- Returns a `Dictionary<TKey,TValue>` that contains values of type `TElement` selected from the input sequence.
- The key is **unique**, one key is only one value
    
```
    public static Dictionary<string, int?> ParseToNumbersAndStoreInDictionary(IEnumerable<string> words)
        {
            //return a dictionary where each of the words is the key, and the value is either an integer parsed from this string or null
            return words.Distinct()
                        .ToDictionary(
                        w => w,
                        w => { 
                            int result; 
                            return int.TryParse(w, out result) ? result : (int?) null;
                        });
        }
```
#### `ToLookup()`
- Creates a `Lookup<TKey,TElement>` from an `IEnumerable<T>` according to specified key selector and element selector functions.
- A `Lookup<TKey,TElement>` that contains values of type `TElement` selected from the input sequence.
- One key can contains mutiple values, 

---
#### `AsEnumerable()`
- Returns the input typed as `IEnumerable<T>`.
- usually use with Class methods
    
    
---
#### `Cast()`
- Casts the elements of an IEnumerable to the specified type.
- Returns an `IEnumerable<T>` that contains each element of the source sequence cast to the specified type.
---
