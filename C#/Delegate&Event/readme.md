### delegate

1. Simple delegates
  - A type that represents reference to methods
   - An object that know how to call a method
   - Helpful in designing extensibale and flexible applications

```
namespace DelegateAndEvent
{
    class Program
    {
        //create a delegate
        public delegate void DelegateDemo(int number);
        static void Main(string[] args)
        {
            //assign any name to the delegate instance
            DelegateDemo instance = MyMethod;

            //calling the delegate method(instance) with the parameter 
            instance(6);
            Console.ReadLine();
        }
        //create a method for delegate
       public static void MyMethod(int num)
        {
            Console.WriteLine($"Create a new number {num}");
        }

    }
}
```
---
2. Multicast delegates
  - Multiple objects of delegates can be combined together by using + operator
  - Added objects can be removed by using - operator
  - Once multiple objects of delegates are added together, one invoke will call all of those delegates

```

namespace DelegateAndEvent
{
    class Program
    {
        //create a delegate
        public delegate void DelegateDemo(int number);
        static void Main(string[] args)
        {
            //assign multi delegate instance
            DelegateDemo demo1,demo2,demo3;

            //calling the delegate method(instance) with the parameter 

            demo1 = MyMethod1;
            demo2 = MyMethod2;

            demo3 = demo1+ demo2;
            //demo3 will call both demo1 and demo2 method
            demo3(2);

            demo3= demo3 - demo1;
            //demo3 will only demo2 method
            demo3(3);

            Console.ReadLine();
        }

        //create a method for delegate
        public static void MyMethod1(int num)
        {
            Console.WriteLine($"MyMethod1 number {num}");
        }

        //create a method for delegate
        public static void MyMethod2(int num)
        {
            Console.WriteLine($"MyMethod2 number {num}");
        }
    }
}

```
---
3. Using delegates for callback functions

   ```
   
namespace DelegateAndEvent
{
    class Program
    {
        
        static void Main(string[] args)
        {
            Console.WriteLine("The delegate starts here");

            //create an object of the class
            AnotherLibrary obj = new AnotherLibrary();

            //pass the callback function in the parameter
            var t = new Thread(() => obj.DoSomeTimeComsumingWork(DoSomeTimeWork));
 
            t.Start();
            Console.WriteLine("The delegate finishes here");
            Console.ReadLine();
        }


        //create a callback function
        public static void DoSomeTimeWork(int i)
        {
            Console.WriteLine($"The number is {i}");
        }

        // callback in delegeate
        class AnotherLibrary 
           
        {
            //create a delegate
            public delegate void WorkHanlder(int number);

            //pass a call back function(method) in the parameter
            public void DoSomeTimeComsumingWork(WorkHanlder callbackFunction)
            {
                //do some work
                Thread.Sleep(2000);
                //after the work is done call the delegate WorkHanlder method
                callbackFunction(5);
            }
        }
    }
}
   ```
