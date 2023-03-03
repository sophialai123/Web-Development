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



