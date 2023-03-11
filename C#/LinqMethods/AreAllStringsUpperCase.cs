/*

OfType - coding exercise 2
Implement the AreAllStringsUpperCase method which will check if all strings present in the objects collection are upper case.
If there is no string at all in this collection, the result should be true.*/


public static bool AreAllStringsUpperCase(IEnumerable<object> objects)
        {
            //check all string type of is uppercase 
            return objects.OfType<string>().All(c => c.ToUpper() == c);
        }
