using System;
using System.Linq;
using System.Text;

/*
Given an array of integers your solution should find the smallest integer.
Given [34, 15, 88, 2] your solution will return 2
 */

public static class Kata
{
    static void Main(string[] args)
    {
       int [] number = {34, -345, -1, 100};

       var result = FindSmallestInt(number);

        Console.WriteLine(result);

    }

    public static int FindSmallestInt(int[] args) => args.OrderBy(x => x).FirstOrDefault();
    
     public static int FindSmallestInt2(int[] args) => args.Min();

   

}
