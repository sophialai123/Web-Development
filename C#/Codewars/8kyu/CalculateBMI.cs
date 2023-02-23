/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
 */

public static class Kata
{
    static void Main(string[] args)
    {

        var result = Bmi(56, 1.60);

        Console.WriteLine(result);

    }



    public static string Bmi(double weight, double height)
    {
        double bmi = weight / height * height;

        switch (bmi)
        {
            case double i when bmi <= 18.5:
                return "Underweight";
            case double i when bmi <= 25.0:
                return "Normal";
            case double i when bmi <= 30.0:
                return "Overweight";
            default:
                return "Obese";
        }



       

    }


        public static string Bmi1(double weight, double height)
        {
            double bmi = weight / height * height;

        if (bmi <= 18.5)
        {
            return "Underweight";
        }
        else if (bmi <= 25.0)
        {
            return "Normal";
        }
        else if (bmi <= 30.0)
        {
            return "Overweight";

        }
        else if (bmi > 30)
        {
            return "Obese";
        }
        else
        {
            return "";
        }

    }
    
     public static string Bmi3(double w, double h)
    => (w = w / h / h) > 30 ? "Obese" : w > 25 ? "Overweight" : w > 18.5 ? "Normal" : "Underweight";
   
     public static string Bmi4(double weight, double height)
  {
    var bmi = weight / Math.Pow(height, 2);
    return bmi switch {
        var x when x <= 18.5 => "Underweight",
        var x when x <= 25 => "Normal",
        var x when x <= 30 => "Overweight",
        _ => "Obese"
    };
  }
    
}
