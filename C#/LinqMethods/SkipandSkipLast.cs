

/*
Let's define a Student class. A student has a collection of Marks, which are numbers. 
Implement the CalculateAverageMark method, which will calculate the average mark for a student,
but it will ignore the lowest and the highest mark. Let's assume a student with less than 3 marks has an average mark of 0.

*/


 public class Exercise
    {
        public static double CalculateAverageMark(Student student)
        {
            //TODO your code goes here
            return  student.Marks.Count() > 2?
                    student.Marks.OrderBy(x => x)
                   .Skip(1).SkipLast(1)
                   .Average() : 0 ;
        }
    }
    
    public class Student
    {
        public IEnumerable<int> Marks {get; set;}
    }
