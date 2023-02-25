using System;
using System.Linq;
using System.Text;

/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
 */

public static class Kata
{
    static void Main(string[] args)
    {
        

        var result = Solution("abc", "bc");

        Console.WriteLine(result);

    }

    public static bool Solution(string str, string ending)
    {
        return str.EndsWith(ending) ? true : false;
    }


}
