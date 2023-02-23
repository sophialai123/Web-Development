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
}
