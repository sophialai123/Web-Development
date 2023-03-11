
/*
It iterates over a collection of words and adds each word to the result list until it hits the "The end" string. 
Then, it adds the "END" string at the end of the result. In other words, 
it replaces the "The end" string with the "END" string and skips all the words that came after this end marker.*/


using System;
using System.Linq;
using System.Collections.Generic;

namespace Coding.Exercise
{
    public class Exercise
    {
        //TODO implement this method
        public static IEnumerable<string> TrimSentenceAndChangeEndMarker_Refactored(IEnumerable<string> words)
        {
            //TODO your code goes here
            return words.TakeWhile(x=> x !="The end").Append("END");
        }
        
        //TODO do not modify this method
        public static IEnumerable<string> TrimSentenceAndChangeEndMarker(IEnumerable<string> words)
        {
            var result = new List<string>();
            foreach(var word in words)
            {
                if(word != "The end")
                {
                    result.Add(word);
                }
                else
                {
                    break;
                }
            }
            result.Add("END");
            return result;
        }
    }
}
