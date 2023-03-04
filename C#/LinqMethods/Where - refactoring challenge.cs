using System;
using System.Linq;
using System.Collections.Generic;

namespace Coding.Exercise
{
    public class Exercise
    {
        //TODO implement this method
        public static IEnumerable<Person> GetMultipleFishOwners_Refactored(IEnumerable<Person> people)
        {
            //TODO your code goes here
            return people.Where(x => x.Pets.Count(c=> c.PetType == PetType.Fish) > 1);
        }
        
        //don't modify this method
        public static IEnumerable<Person> GetMultipleFishOwners(IEnumerable<Person> people)
        {
            var result = new List<Person>();
            foreach(var person in people)
            {
                var count = 0;
                foreach(var pet in person.Pets)
                {
                    if(pet.PetType == PetType.Fish)
                    {
                        count++;
                    }
                }
                if(count > 1)
                {
                    result.Add(person);
                }
            }
            return result;
        }
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
        public override string ToString()
        {
            return $"{Name} owns ({string.Join(", ", Pets)})";
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
            return $"pet's name: {Name}, Type: {PetType}";
        }
    }
    
    public enum PetType
    {
        Cat,
        Dog,
        Fish
    }
}
