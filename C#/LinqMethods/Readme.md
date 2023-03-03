## LINQ Methods
#### 1. `Any()`: 
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


