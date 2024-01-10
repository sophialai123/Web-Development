using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
            //Return results index of 3 are: [2,4]
            FindAll2(new int[] { 6, 9, 3, 4, 3, 82, 11 }, 3);
            FindAll(new int[] { 6, 9, 3, 4, 3, 82, 11 }, 3);
        }

        //x is current element, i is index
        //from array select if current element x is n, return index, else -1
        //from previous selected elements, get all elements that is not -1, convert to array and return the result.
        public static int[] FindAll2(int[] array, int n) =>
       array.Select((x, i) => x == n ? i : -1).Where(x => x != -1).ToArray();
    
       public static int[] FindAll(int[] array, int n)
        {
            // your code here
            if (array.Length  == 0 || array == null)
            {
                return new int[] { };
            }       
            List<int> mylist = new List<int>();

            for (int i = 0; i < array.Length; i++)
            {
                int idx = array.ToList().IndexOf(array[i]);
                if (array[i] == n)
                {
                    mylist.Add(i);
                }
            }
            return mylist.ToArray();
        }
    }
}
