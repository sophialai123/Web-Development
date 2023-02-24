using System;
using System.Linq;
using System.Text;


/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]
 */

public static class Kata
{
    static void Main(string[] args)
    {
       int [] number = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15};

       var result = CountPositivesSumNegatives(number);

        Console.WriteLine(result);

    }

   
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
    
    
    //Other solutions:
    private static readonly int[] Empty = new int[0];
    
    public static int[] CountPositivesSumNegatives1(int[] input)
    {
        if (input == null || input.Length == 0)
        {
            return Empty;
        }
        
        int count = 0;
        int sum = 0;
        
        foreach (var element in input)
        {
            if (element > 0)
            {
                count += 1;
            }
            else if (element < 0)
            {
                sum += element;
            }
        }
        
        return new int[] { count, sum };
    }
    
    
    private static readonly int[] Empty = new int[0];
    
    public static int[] CountPositivesSumNegatives2(int[] input)
    {
        if (input == null || input.Length == 0)
        {
            return Empty;
        }
        
        return new int[]
        {
            input.Count(x => x > 0),
            input.Sum(x => Math.Min(0, x)),
        };
    }
    
    
    public static int[] CountPositivesSumNegatives3(int[] input)
  {
    return input?.Length > 0
        ? new[] {input.Count(i => i > 0), input.Where(i => i < 0).Sum()}
        : new int[0];
  }
    
    public static int[] CountPositivesSumNegatives4(int[] input)
    {
        return (input == null || !input.Any()) ? new int[]{} :
        new int[] {input.Where(x => x > 0).Count(), input.Where(x => x < 0).Sum()};
    }
}
