using System;
using System.Linq;
using System.Collections.Generic;

namespace Coding.Exercise
{
    public class Exercise
    {
        //TODO implement this method
        public static Person FindOwnerOf_Refactored(Pet pet, IEnumerable<Person> people)
        {
            //if the person's pet contains pet
             return people.FirstOrDefault(x=> x.Pets.Contains(pet));      
        }
        
        //do not modify this method
        public static Person FindOwnerOf(Pet pet, IEnumerable<Person> people)
        {
            foreach(var person in people)
            {
                foreach(var personsPet in person.Pets)
                {
                    if(personsPet == pet)
                    {
                        return person;
                    }
                }
            }
            return null;
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
            return $"Id: {Id}, Name: {Name}, Type: {PetType}, Weight: {Weight}";
        }
    }
    
    public enum PetType
    {
        Cat,
        Dog,
        Fish
    }
}
