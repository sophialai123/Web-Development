using System;
using System.Linq;
using System.Collections.Generic;

namespace Coding.Exercise
{
    public class Exercise
    {
        //TODO implement this method
        public static Dictionary<string, double> GetStudentsAverageMarks_Refactored(IEnumerable<Student> students)
        {
            //TODO your code goes here
            return students.ToDictionary(
                
                //the keys
                student => $"{student.FirstName} " +
                    $"{student.LastName} born on" +
                    $" {student.DateOfBirth.ToString("d")}", 
                //the values    
              student => student.Marks.Any() ? student.Marks.Average() : 0);
        }

        //do not modify this method
        public static Dictionary<string, double> GetStudentsAverageMarks(IEnumerable<Student> students)
        {
            var result = new Dictionary<string, double>();
            foreach(var student in students)
            {
                var studentData = $"{student.FirstName} " +
                    $"{student.LastName} born on" +
                    $" {student.DateOfBirth.ToString("d")}";

                var marksSum = 0;
                foreach(var mark in student.Marks)
                {
                    marksSum += mark;
                }
                var marksCount = student.Marks.Count();
                var averageMark = marksCount == 0 ?
                    0 :
                    marksSum / (float)marksCount;
                result[studentData] = averageMark;
            }
            return result;
        }
    }
    
    public class Student
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public IEnumerable<int> Marks { get; set; }
        
        public override string ToString()
        {
            return $"{FirstName} {LastName}, {DateOfBirth.ToString("d")}, Marks = {string.Join(", ", Marks)}";
        }
    }
}
