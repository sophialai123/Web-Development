/*
 You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.
  uniTotal("a") == 97
  uniTotal("aaa") == 291
https://www.ascii-code.com/
 */

public static class Kata
{
    static void Main(string[] args)
    {

        var result = UniTotal("aaa");
        Console.WriteLine(result);

        var str = "aa";

        Console.WriteLine(TotalSun(str)); 


    }

    public static int UniTotal(string str)
    {
   
        int total = 0;

        foreach (char c in str)
        {
            total += ((int)c);
        }
        return total;
    }
       

    static int TotalSun( string str)
    {
        
        return str.Sum(x => x);
    }
    
    
    public static int UniTotal2(string str)
     => str.Sum(x=>(int)x);
 
 public static int UniTotal3(string str)
  {
     return str.Select(x => Convert.ToInt32(x)).Sum();
  }

}
