using System;
using System.Linq;
using System.Collections.Generic;

namespace Coding.Exercise
{
    public class Exercise
    {
        //TODO implement this method
        public static IEnumerable<int> GetPerfectSquares_Refactored(IEnumerable<int> numbers1, IEnumerable<int> numbers2)
        {
            //TODO your code goes here
             return numbers1.Where(x => Math.Sqrt(x) % 1 == 0).Union(numbers2.Where(x => Math.Sqrt(x) % 1 == 0)).OrderBy( n => n);
        }
        
        //do not modify this method
        public static IEnumerable<int> GetPerfectSquares(IEnumerable<int> numbers1, IEnumerable<int> numbers2)
        {
            var result = new List<int>();
            foreach(var number in numbers1)
            {
                if(Math.Sqrt(number) % 1 == 0 && !result.Contains(number))
                {
                    result.Add(number);
                }
            }
            foreach(var number in numbers2)
            {
                if(Math.Sqrt(number) % 1 == 0 && !result.Contains(number))
                {
                    result.Add(number);
                }
            }
            result.Sort();
            return result;
        }
    }
}
