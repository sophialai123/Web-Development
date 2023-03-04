using System;
using System.Linq;
using System.Collections.Generic;

namespace Coding.Exercise
{
    public class Exercise
    {
        //TODO implement this method
        public static DateTime? GetSingleDay_Refactored(IEnumerable<DateTime> dates, DayOfWeek dayOfWeek)
        {
            //check if is the only one then get the signle one, or return datetime null
            return dates.Count(x => x.DayOfWeek  == dayOfWeek) == 1 ? dates.Single(s => s.DayOfWeek == dayOfWeek ) : (DateTime ? )null;
        }
        
        //do not modify this method
        public static DateTime? GetSingleDay(IEnumerable<DateTime> dates, DayOfWeek dayOfWeek)
        {
            var count = 0;
            DateTime? result = null;
            foreach(var date in dates)
            {
                if(date.DayOfWeek == dayOfWeek)
                {
                    result = date;
                    count++;
                }
            }
            if(count == 1)
            {
                return result;
            }
            return null;
        }
    }
}
