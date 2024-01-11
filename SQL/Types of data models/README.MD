### Types of data models
1. Conceptual Model --> This type of data model defines **WHAT** the system contains. Business experts and data architects usually develop it. Its aim is to structure, outline, and clarify business concepts and rules. 
2. Logical Data Model --> This type of data model defines **HOW** the system should be implemented regardless of the DBMS. Business Analysts and Data Architects usually develop it. Its aim is to develop a technical map of rules and data structures. 
3. Physical Data Model --> This type of data model defines **HOW** the system will be implemented using a specific DBMS system. Database Administrators (DBAs) and developers usually develop it. Its aim is to implement the database.

#### Scenario: the Conceptual Model

To take a closer look at the Conceptual Data Model, consider this scenario: 

"WheelsRent" is a car rental company based in a tourist-popular city. 

Customers can rent different types of cars for their needs. 
They can register and create profiles with their personal information and driver's license details to use “WheelsRent" services. 
"WheelsRent" maintains a fleet of cars that include various makes, models, and sizes, from compact cars to SUVs, to suit the various needs of their customers.

Customers can log in to the "WheelsRent" website or a mobile app and select the pickup and return dates, specifying the car they want to rent. 
The system will create a rental reservation, generate the total cost, and provide a confirmation to the customer. 
When the customer comes to pick- up the car, they must review and sign the rental agreement. 
This agreement includes information like insurance, terms and conditions, and additional services or charges. The agreement is associated with the reservation and ensures that the customer and "WheelsRent" know their responsibilities and liabilities during the rental period.

How does this scenario translate into a Conceptual Data Model? Open the accordion tabs below.

Conceptual Model: Car Rental System:


  Tables : 
 -. Customer --> Attributes  ---> Customer ID (PK), Name, Contact Information, Driver's License Details.
 -. Car --> Attributes --> Car ID (PK), Make, Model, Year, Rental Rate, Availability Status.
 -. Rental reservation --> Attributes --> Reservation ID (PK), Pick-up Date, Return Date, Total Cost.
 -. Retal agreement --> Attributes --> Agreement ID (PK), Insurance Information, Terms and Conditions.
 -. Business rules --> 
           -.A "Customer" can make multiple "Rental Reservations."

           -. A "Car" can be associated with multiple "Rental Reservations."

           -. Each "Rental Reservation" is linked to one "Customer" and one "Car."

           -. Each "Rental Reservation" corresponds to one "Rental Agreement."

This Conceptual Model captures the core entities, their attributes, and the fundamental relationships in the car rental system. It provides a high-level understanding of how customers make reservations, rent cars, and agree to rental terms and conditions.

