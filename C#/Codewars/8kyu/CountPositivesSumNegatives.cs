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

        if (input.Length == 0 || input == null)
        {
            return new int[0] ;
        }
        var countNA = input.Where(x => x > 0).ToArray().Count();

        var SumN = input.Where(x => x < 0).ToArray().Sum();

        return new int[] { countNA, SumN };

    }
}
