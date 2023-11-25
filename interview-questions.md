# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. Tip: if you don't know the answer try answering a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: RAS

INSTRUCTOR EXAMPLE: What is a conditional statement?

    Your answer:

    Researched answer:

1. What is git? What is the difference between git and Github?

    Your answer:
        Git is the system that allows for organizations and programers to work together to build or change code and then submit it as truth to be used again. I look at this as a behive and bee relationship. 
        GitHub is the platform that allows a user friendly interaction for the organization and the programer. I see this like how an iphone relates to apple's IOS. The operating system is IOS and the Iphone allows it to run by users in a simpler way. 

    Researched answer:
        Git is the open source control system that allows developers to work separetly but on the same project. It is independent from computer operating systems and proogramming languages. It works by sharing and receiving copoes of work that the organization determines as true or part of the main source. Then developers can pull the information and make changes that will be submitted back to the organization for approval which will then become the new base source. 
        GitHub is the web based platform that makes using Git streamlined. It hosts Git repositories remotely, so multiple developers can access and work on the same project. GitHub has many tools that promote better collaboration between programmers and the organization, such as project management tools that help track tasks and code review tools too.

2. What is the difference between an array's index and its value?

    Your answer:
        I am struggling with definitions in the course. I can honestly say that I am confused on most terms and incorrectly use them interchangeably. I believe that in order for this assessment to be useful, I need to be honest on where I am and admit that I had to use chatGPT and other resources in order to answer the rest of the questions. My answers from here on out are in my own words of how I summarized the responses I received. I realize that understanding the difference between vocabulary before the assessment / job interview is crucial to my success. I enjoyed how those resources broke down the information and feel that I gained a lot from using chatGPT and w3schools. I have decided to utilize them concurrently with lecture, instead of just thinking I can discern the difference automatically when they are presented. 

    Researched answer:
        An array's INDEX is the element's** numerical position in the array. It usually starts at 0. 
        An array's VALUE is actual data/content that is stored in a particular position in the array. 
        chatGPT's example + my understanding - array is the neighborhood, index is the address of a house, element is the house, value is the person(s) in the house, and high order function would be a city planner. 

3. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

    Your answer:
        Same as "Your Answer" in #2

    Researched answer:
        Similarities: They are both data structures and they both are stored through sequential numerical order. They both use elements and characters, respectively, to access their indexes (labeled with their respective names, for example, `array[0]`). They both can be solved or mathmatically manipulated (iterated) using loops. 

        Differences:
            data types, mutability, operations, representation and literal representation. 
                1. Data types: 
                    Arrrays- Can hold ELEMENTS of ANY data type like integers (whole numbers), floats (decimal numbers) and objects. 
                    Strings- Strings can hold SPECIFIC sequences of CHARACTERS. Strings can be treated as arrays of characters but they usually have additonal operations that are specific to the strings (in some languages).

                2. Mutability: 
                    Arrays- Elements** can either be changed or fixed which means it will be unable to be modified after creation (depending on the language). 
                    Strings- Usually cannot be changed once created (immutable). Usually needs a new string to be created. 

                3. Operations:
                    Arrays- used for a variety of supporting operations (adding/removing elements**, sorting, and reversing). 
                    Strings- usually focuses on searching and manipulation. 
                        Manipulation examples: 
                            Concatenation -merging and linking things that would normally not be linked.
                            Substring Extraction -using the substring or slice methods (in javascript). Which extracts a portion of a string by specifying the number of characters** and specifying the position in the original array.
                        Searching examples:
                            indexOf method- which finds a position of a substring within a string. (in javascript)
                4. Representation: 
                    Arrays- A general purpose data structure used to represent a wider collection of various types of data.
                    Strings- Specialize in handling text and are treated as distinct data types. 

                5. Literal Representation: 
                    Arrays- Use square brackets to initalize and provide values. ( Example- [1, 2, 3] )
                    Strings- Use quotations marks to be initalized. ( Example- "Definetly A!, often B, sometimes C?" )

4. STRETCH: What are the four pillars of object oriented programming? (OOP)

    Researched answer:
        Encapsulation, Inheritance, Abstraction, and Polymorphism - Are FUNDEMENTAL concepts, which guide the design and implementation of object oriented software (OOS).  Collectively are the framework for building modular(moveable), maintainable, and extensible (more capable/functional) software systems by encouraging the reuse of code**,  flexability**, and simplified mainenance. 

        1.  Encapsulation- is the bundling of DATA** (attributes or properties) & METHODS** (functions and procedures) into a single item/unit making what is called a class**
            Purpose: To organize, structure, and protect the integrity of code by restricting access to and hiding internal details of how an object works. (show only whats neccessary)

        2. Inheritance- is a mechanism that allows a NEW class** of SUBCLASS/DERIVED class** to "inherit" properties** and behaviors** of an EXISTING class**.
            Purpose: It promotes the reuse of code because once defined by BASE class** the attributes** (DATA) & methods** (PROCEDURES) can be inherited by MULTIPLE subclasses**. It also allows for multiforms** because objects from the DERIVED class** (new class) can be treated as the BASE class** (think *Git-organization-repsitory-branch-developer* relationship)

        3. Abstraction- allows for management of complex systems by organizing classes based on important/essential characteristincs, while ignoring unimportant/not relevant details/characteristics.
            Purpose: Lets programers simplify complex systems by focusing/ignoring important/unimportant details/characteristics. Also helps create a model that represents real world entities(organizations?)

        4. Polymorphism- Objects of different classes can be treated as objects of a common BASE class** utilizing *Method OVERLOADING* and *Method OVERRIDING* 
                *Method OVERLOADING*- Is giving MUTIPLE METHODS (functions/procedures) with the SAME name but having different boundaries/parameters. 
                *Method OVERRIDING*- is when you provide SPECIFIC implementations/rules of a METHOD (functions/procedures) to a SUBCLASS
            Purpose: enables/promotes new capabilities/functionality (flexability and extensibility) in code. Also allows one program to communicate and represent different types of objects. Which makes it easier to write code that works with various classes** without knowing their specific types. 

## Looking Ahead: Terms for Next Week

Research and define the following terms. Hint: use the syllabus!

1. Higher-order Functions: 
        Functions that take one or more functions as arguments or return a function as its result. example -analogy city planners can interact with the entire neighborhood. They allow for the breakdown of functions, abstraction (organizing byb focusing/ignoring), and more modular(moveable) reusable code, Examples-functions map filter and reduce. these examples are functions that are arguments AND operate arrays

2. Jest:
        A javascript testing framework that is designed for simplicity and ease of use. It is used to test code for apps using the frameworks like  REACT and ANGULAR. *It is developed and maintained by facebook*
        Jest supports tests, provides BUILT IN assertion functions for test validations, offers a MOCKING system for simulation of dependencies,  includes features for SELF TESTING, and supports SNAPSHOT testing for "easily detected" changes in UI componets. 

3. Objects:
        A "composite data type" that ENCAPSULATES (bundles/hides/protects only showing what is neccessary) DATA and METHODS that operate on that data. Objects are *Intsances* of classes that serve as templates for creating objects. 
        <!-- I still dont understand this based off the definition -->
        Can be created using Literal Notation** OR Constructor Functions** 
            Literal Notation-
                 example
                <!-- let car = { 
                make: 'Toyota',
                model: 'Camry',
                year: 2022,
                drive: function() {
                    console.log('Vroom!')
                 }
              } -->
                Car*** is an object w/ attributes (make model year) AND a method (drive)
            Constructor Functions- 
                functions named with an UPPERCASE first** letter to distinguish from other functions. 
                They construct* and initialize* objects. 
                <!-- Invoking a constructor function with a `new` (backticks) keyword it creates a new instance of an object. -->
                <!-- unsure of ^ this definition but i understand the example  -->
                <!-- using `this` keyword inside the constructor function refers to the newly created** object -->
                example
                <!--*** creating a 'person' object***** -->
                <!-- function Person (name,age) {
                    ***properties***
                    this.name = name;
                    this.age =age;
                    ***method***
                    this.sayHello -function () {
                        console.log (`Hello, my name is ${this.name} and I am ${this.age}vyears old.`)
                    }
                 }
                ***creating instances of a 'person'vobject using the constructor*** -->
                <!-- let person1 = new Person("John, 30)
                let person2 = new Person("Jane, 25)
                *** invoking the sayHello method
                person1.sayHello() -> output = `Hello, my name is ${this.name} and I am ${this.age}vyears old.` ***person1***
                person2.sayHello() -> output = `Hello, my name is ${this.name} and I am ${this.age}vyears old.` ***person2*** -->

                example Person*** is a constructor function that defines a blueprint for creating Person objects. When invoked with new***, it creates instances of the Person*** object with specific property values. 
                Each instance has its own set of properties and can have methods defined in the constructor.
