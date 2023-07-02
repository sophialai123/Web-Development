using System.Collections.Concurrent;
using static LinqExamples.Program;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace LinqExamples
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Employee> employeeList = Data.GetEmployees();
            List<Department> departmentList = Data.GetDepartments(employeeList);

            //Select to nested Employee record
            var results = departmentList.Select(x => x.Employees);
           
            foreach (var result in results)
            
                foreach (var employee in result)

                     Console.WriteLine($"Select Method: {employee.Id},{employee.FirstName}, {employee.LastName}  ");


            //SelectMany can run the nested foreach loop
             var selectMany = departmentList.SelectMany(x => x.Employees).OrderBy(x => x.DepartmentId);


            foreach (var employee in selectMany)

                Console.WriteLine($"Select Many: {employee.Id},{employee.FirstName}, {employee.LastName}  ");


            Console.ReadLine();

            //GroupBy() query 
            var groupResult = from employee in employeeList
            orderby employee.DepartmentId descending
                              group employee by employee.DepartmentId;


            foreach(var emp in groupResult)
            {
                //Console.WriteLine($"Department Id : {emp.Key} ");

                foreach(Employee employee in emp)
                {
                    Console.WriteLine($"\t Employee Full Name : {employee.FirstName} {employee.LastName}");
                }

            }
           
            //GroupBy() Method
            var groupList = employeeList.GroupBy(x => x.DepartmentId);


            //ToLookup() method

            var lookupGroup = employeeList.OrderBy(x => x.DepartmentId).ToLookup(x=> x.DepartmentId);


            foreach (var emp in lookupGroup)
            {
                Console.WriteLine($"ToLookup Method Department Id : {emp.Key} ");

                foreach (Employee employee in emp)
                {
                    Console.WriteLine($"\t ToLookup Method Employee Full Name : {employee.FirstName} {employee.LastName}");
                }

            }
           
            Console.ReadLine();

        }

        //Employee records
        public class Employee 
        
        {

            public int Id { get; set; }
            public int DepartmentId { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public bool IsManager  { get; set; }
            public decimal AnnualSalary { get; set; }

        }

        //Department Records
        public class Department 
        { 
        
          public int Id { get; set; }
           public string ShortName { get; set; }
           public string LongName { get; set; }

            //One Department to Many Employee Relationship 
            public IEnumerable<Employee> Employees { get; set; }

        }

        public static class Data 
  
        {
        
         public static List<Employee> GetEmployees()
            {

                List<Employee> employees = new List<Employee>();

                //Create a new employee record
                Employee employee = new Employee()
                {

                    Id= 1,
                    FirstName = "Bob",
                    LastName ="Jones",
                    IsManager = true,
                    AnnualSalary = 6000.3m,
                    DepartmentId= 1,
                };


                //add employee into the Employee record
                employees.Add(employee);

                employee = new Employee
                {
                    Id = 2,
                    FirstName = "Sarah",
                    LastName = "Jameson",
                    AnnualSalary = 80000.1m,
                    IsManager = true,
                    DepartmentId = 3
                };
                employees.Add(employee);
                employee = new Employee
                {
                    Id = 3,
                    FirstName = "Douglas",
                    LastName = "Roberts",
                    AnnualSalary = 40000.2m,
                    IsManager = false,
                    DepartmentId = 1
                };
                employees.Add(employee);
                employee = new Employee
                {
                    Id = 4,
                    FirstName = "Jane",
                    LastName = "Stevens",
                    AnnualSalary = 30000.2m,
                    IsManager = false,
                    DepartmentId = 3
                };
                employees.Add(employee);

                return employees;

            }


            public static List<Department> GetDepartments( IEnumerable<Employee> employees)
            {
                List<Department> departments = new List<Department>();

                //create Department Records
                Department department = new Department
                {
                    Id = 1,
                    ShortName = "HR",
                    LongName = "Human Resources",
                    Employees = employees.Where(x => x.DepartmentId== 1).Select(s => s),
                };
                departments.Add(department);
                department = new Department
                {
                    Id = 2,
                    ShortName = "FN",
                    LongName = "Finance",
                    Employees = employees.Where(x => x.DepartmentId == 2).Select(s => s),
                };
                departments.Add(department);
                department = new Department
                {
                    Id = 3,
                    ShortName = "TE",
                    LongName = "Technology",
                    Employees = employees.Where(x => x.DepartmentId == 3).Select(s => s),
                };
                departments.Add(department);

                return departments;
            }

        }
    }
}
