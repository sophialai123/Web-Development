using System;
using System.Linq;
using System.Text;

/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
 */

public static class Kata
{
    static void Main(string[] args)
    {
        int[][] input = new[] { new int [] { 45, 12 }, new int [] { 55, 21 }, new int[] { 19, 2 }, new int[] { 104, 20 } };

        var result = OpenOrSenior(input);

        Console.WriteLine(result);

    }

    //Using Linq method
    public static IEnumerable<string> OpenOrSenior(int[][] data)
    {
        
        return data.Select(x => (x[0] > 55 && x[1] > 7) ? "Senior" : "Open");

    }
    
    
    //use for loop
    
    
    public static IEnumerable<string> OpenOrSenior1(int[][] data)
    {
        //initial an empty array
        String[]  strArr = new string[data.GetLength(0)];


        for(int i= 0; i< data.GetLength(0); i++)
        {

            if (data[i][0] >= 55 && data[i][1] > 7 )
            {
                strArr[i] = "Senior";
            }
            else
            {
                strArr[i] = "Open";
            }
        }
        return strArr;
    }
    
    //foreach method
     public static IEnumerable<string> OpenOrSenior2(int[][] data)
    {

        List<string> newStrArr = new List<string>();
        
         foreach(var num in data)
        {
           if(num[0] >= 55 && num[1] > 7)
            {
                newStrArr.Add("Senior");
            }
            else
            {
                newStrArr.Add("Open");
            }

           
        }

         return newStrArr;
       
    }
}
