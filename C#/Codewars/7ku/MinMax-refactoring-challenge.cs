using System;
using System.Linq;
using System.Collections.Generic;


/*Using LINQ, refactor the CountOfDogsOfTheOwnerWithMostDogs method.*/

    public class Exercise


    {

        public static void Main(string[] args)
        {


        }

        //TODO implement this method
        public static int CountOfDogsOfTheOwnerWithMostDogs_Refactored(IEnumerable<Person> owners)
        {
            //TODO your code goes here

            return owners.Max(x => x.Pets.Count(x => x.PetType == PetType.Dog));
        }

        //do not modify this method
        public static int CountOfDogsOfTheOwnerWithMostDogs(IEnumerable<Person> owners)
        {
            var maxDogCount = 0;
            foreach (var owner in owners)
            {
                var dogsCount = 0;
                foreach (var pet in owner.Pets)
                {
                    if (pet.PetType == PetType.Dog)
                    {
                        dogsCount++;
                    }
                }
                if (dogsCount > maxDogCount)
                {
                    maxDogCount = dogsCount;
                }
            }

            Console.WriteLine(maxDogCount);
            return maxDogCount;
        }
    

    public class Person
    {
        public int Id { get; }
        public string Name { get; }
        public IEnumerable<Pet> Pets;

        public Person(int id, string name, IEnumerable<Pet> pets)
        {
            Id = id;
            Name = name;
            Pets = pets;
        }
    }

    public class Pet
    {
        public int Id { get; }
        public string Name { get; }
        public PetType PetType { get; }
        public float Weight { get; }

        public Pet(int id, string name, PetType petType, float weight)
        {
            Id = id;
            Name = name;
            PetType = petType;
            Weight = weight;
        }

        public override string ToString()
        {
            return $"Id: {Id}, Name: {Name}, Type: {PetType}";
        }
    }

    public enum PetType
    {
        Cat,
        Dog,
        Fish
    }
}



