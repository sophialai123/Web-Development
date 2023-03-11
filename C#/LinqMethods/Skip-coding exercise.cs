/*


Using LINQ, implement the GetWordsBetweenStartAndEnd method which given a list of words, will return all words that lay between words "START" and "END".

For example:

for words {"aaa", "START", "bbb", "ccc", "END", "ddd"} the result shall be { "bbb", "ccc"}

for words {"aaa", "START", "END", "ddd"} the result shall be empty

The result shall also be empty if any of those conditions are met:

"START" or "END" words are not present in this collection, or they occur more than once

"START" is placed after "END"

That means, the result shall be empty for all of those collections:

{"aaa", "START", "bbb", "ccc",  "ddd"} - because END is not present

{"aaa",  "bbb", "ccc",  "ddd", "END"} - because START is not present

{"aaa",  "START", "ccc",  "START", "END"} - because START occurs twice

{"aaa",  "START", "ccc",  "END ", "END"} - because END occurs twice

{"aaa",  "END ", "ccc",  "START"} - because START is placed after END

*/

using System;
using System.Collections.Generic;
using System.Linq;

namespace Coding.Exercise
{
    public class Exercise
    {
        public static IEnumerable<string> GetWordsBetweenStartAndEnd(List<string> words)
        {
            //Check if it is validate Collections
            
            const String Start = "START";
            const String End  = "END";
            
            //check if it is only one START and one END string 
            //And index of start is before the end index
            
            var isValidCollection = words.Count(word => word == Start) == 1 && 
                                    words.Count(word => word  == End) == 1 &&
                                    words.IndexOf(Start) < words.IndexOf(End);
                                    
           return isValidCollection ? words.SkipWhile(x => x != Start)
                                      .Skip(1)
                                      .TakeWhile(x => x != End) :
                                       new String[0]; // return empty string
                                      
        }
    }
}
