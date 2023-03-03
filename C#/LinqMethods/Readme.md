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
