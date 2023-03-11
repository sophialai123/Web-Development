using System;
using System.Linq;
using System.Collections.Generic;

namespace Coding.Exercise
{
    public class Exercise
    {
        //TODO implement this method
        public static IEnumerable<int> GetAllAfterFirstDividableBy100_Refactored(IEnumerable<int> numbers)
        {
            //TODO your code goes here
            return numbers.SkipWhile(x => x % 100 != 0);
        }
        
        public static IEnumerable<int> GetAllAfterFirstDividableBy100(IEnumerable<int> numbers)
        {
            var result = new List<int>();
            bool startAdding = false;
            foreach(var number in numbers)
            {
                if(!startAdding && number % 100 == 0)
                {
                    startAdding = true;
                }
                if(startAdding)
                {
                    result.Add(number);
                }
            }
            return result;
        }
    }
}
