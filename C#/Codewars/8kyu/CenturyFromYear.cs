
/*
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, 
etc.

 1705 --> 18
 1900 --> 19
 
 */


public static class Kata
{
    static void Main(string[] args)
    {

        var centuryYear = СenturyFromYear(1700);
        Console.WriteLine(centuryYear);
        
        var centuryYear2 = CenturyFromYear2(2000);
        Console.WriteLine(centuryYear2);
    }

    public static int СenturyFromYear(int year)
    {
        return (int)(year / 100) + ((year % 100 == 0) ? 0 : 1);
    }

  public static int CenturyFromYear2(int year) => (year - 1) / 100 + 1;

}
