/*Average - coding exercise 2
Let's define a Student class. A student has a collection of Marks, which are numbers. We could calculate the average mark for each student, for example, if a student's marks are 3,4,5, the average mark for this student is 4.
Implement the MaxAverageOfMarks method, which will find the maximum average mark for all students.
For example, let's consider students:
Cathy has marks 4,4,6 which gives an average of 4.66
Martin has marks 5,5,5,3 which gives an average of 4.5
Bethy has marks of 6,5,5,3 which gives an average of 4.75
For those students, the MaxAverageOfMarks method shall return 4.75, as this is the maximum average mark.
If the student list is empty, the method shall return 0. If a student has no marks at all, we assume their average mark is 0..*/



using System;
using System.Linq;
using System.Collections.Generic;

namespace Coding.Exercise
{
    public class Exercise
    {
        public static double MaxAverageOfMarks(IEnumerable<Student> students)
        {
            //TODO implement this method
            
            return students.Any() ? students.Max(student => student.Marks.Any() ? student.Marks.Average() : 0 ) : 0 ;
        }
    }
    
    public class Student
    {
        public IEnumerable<int> Marks {get; set;}
    }
}
