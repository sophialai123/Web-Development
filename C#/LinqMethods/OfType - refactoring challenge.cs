
/*
First, let's understand what this method does. It iterates over a collection of objects and tries to cast each of them to DateTime? type. 
If the cast was successful, it checks if this date is after the date stored in the lastDate variable.
If so, it replaces the lastDate with the new date. In other words, 
this method finds the latest date from all dates present in the collection of objects.

It's quite simple to implement this with LINQ by using OfType and Max methods.*/


using System;
using System.Linq;
using System.Collections.Generic;

namespace Coding.Exercise
{
    public class Exercise
    {
        //TODO implement this method
        public static DateTime? GetTheLatestDate_Refactored(IEnumerable<object> objects)
        {
            //return the latest date which is th max()
            return objects.OfType<DateTime?>().Max();
            
        }
        
        //do not modify this method
        public static DateTime? GetTheLatestDate(IEnumerable<object> objects)
        {
            DateTime? lastDate = null;
            foreach(var obj in objects)
            {
                var dateTime = obj as DateTime?;
                if(dateTime != null)
                {
                    if(lastDate == null || lastDate < dateTime)
                    {
                        lastDate = dateTime;
                    }
                }
            }
            return lastDate;
        }
    }
}
