## LINQ Methods
#### 1. `Any()`: 
Determines whether any element of a sequence exists or satisfies a condition. 
Return `true ` if the source sequence contains any elements; otherwise return false;

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
    }
}


```
