
//Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 


using System;
using System.Linq;


public static class Kata
{
    static void Main(string[] args)
    {
        int[] numbers = { 1, 2, 2 };

        var result = forEachSquareSum(numbers);
        Console.WriteLine(result);
      
      var linqRes = SquareSumLinq(numbers);
        Console.WriteLine(linqRes);

    }


    public static int SquareSum1(int[] numbers)
    {
        int sum = 0;

        for (var i = 0; i < numbers.Length; i++)
        {
            sum += numbers[i] * numbers[i];
        }
        return sum;
    }


    //Different solutions 

    public static int SquareSum2(int[] n) => n.Sum(i => i * i);

    public static int SquareSum3(int[] n)
    {
        return n.Sum(x => x * x);
    }

    public static int SquareSum4(int[] n)
    {
        return (int)n.Sum(i => Math.Pow(i, 2));
    }

    //Use foreach

    public static int forEachSquareSum(int[] numbers)
    {
        int sum = 0;
        foreach (var num in numbers)
        {
            sum += num * num;
        }

        return sum;
    }
  
  //use Linq
   public static in SquareSumLinq(int [] numbers)
   {
      return numbers.Select(x => x * x).Sum(s => s);
   }

}


