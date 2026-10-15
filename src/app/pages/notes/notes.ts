
import { Component } from '@angular/core';

interface JavaTopic {
  title: string;
  description: string;
  content: string;
  code: string;
  output: string;
}

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [],
  templateUrl: './notes.html',
  styleUrl: './notes.css'
})
export class Notes {

  selectedTopic = 0;

  topics: JavaTopic[] = [

    // 1. Introduction to Java
    {
      title: 'Introduction to Java Programming Language',

      description:
        'Learn Java history, features, architecture, JDK, JRE, JVM, and your first program.',

      content: `
1. WHAT IS JAVA?

Java is a high-level, object-oriented, class-based programming language developed by James Gosling and his team at Sun Microsystems. It was officially released in 1995.

Java is widely used to develop web applications, enterprise software, Android applications, desktop applications, and backend systems.


2. WHY IS JAVA USED?

• Platform Independent: Java bytecode runs on compatible platforms using the JVM.
• Object-Oriented: Supports classes, objects, inheritance, polymorphism, abstraction, and encapsulation.
• Secure: Provides security features for executing applications.
• Robust: Supports exception handling and automatic memory management.
• Multithreaded: Supports executing multiple tasks concurrently.
• Portable: Java bytecode can run on different operating systems with a compatible JVM.
• High Performance: The JIT compiler improves execution speed.
• Widely Used: Java is popular for enterprise applications and backend development.


3. HISTORY OF JAVA

1991: Java development started as the Green Project.
1995: Java was officially released.
1996: JDK 1.0 was released.
2010: Oracle acquired Sun Microsystems.
2014: Java 8 introduced lambda expressions and the Stream API.
2017: Java 9 introduced the module system.
2021: Java 17 was released as an LTS version.
2023: Java 21 was released as an LTS version.
2025: Java 25 was released as an LTS version.


4. FEATURES OF JAVA

1. Simple
2. Object-Oriented
3. Platform Independent
4. Portable
5. Secure
6. Robust
7. Multithreaded
8. Architecture Neutral
9. High Performance
10. Distributed
11. Dynamic
12. Automatic Memory Management


5. HOW DOES JAVA WORK?

Step 1: Write source code in a .java file.
Step 2: The Java compiler (javac) compiles the source code.
Step 3: The compiler generates bytecode in a .class file.
Step 4: The JVM executes the bytecode.

Java follows the principle Write Once, Run Anywhere (WORA).

Source Code → Compiler → Bytecode → JVM → Output


6. JDK, JRE, AND JVM

JDK — Java Development Kit
Provides tools needed to develop and compile Java programs.

JRE — Java Runtime Environment
Traditionally refers to the runtime components needed to run Java applications.

JVM — Java Virtual Machine
Executes Java bytecode.

Relationship:
The JDK provides development tools and the components needed to run Java applications. The JVM executes bytecode. Modern Java distributions may package these components differently.


7. FIRST JAVA PROGRAM

Create a file named HelloWorld.java.

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

OUTPUT:
Hello, World!


8. EXPLANATION OF THE PROGRAM

public:
An access modifier.

class:
Declares a class.

HelloWorld:
The name of the class.

main():
The entry point for this traditional Java application.

public static void:
Defines the main method.

String[] args:
Receives command-line arguments.

System.out.println():
Prints text and moves to the next line.

Curly braces { }:
Define a block of code.

Semicolon ;:
Terminates a statement.


9. HOW TO RUN A JAVA PROGRAM

Step 1: Install the JDK.

Step 2: Open a terminal in the directory containing HelloWorld.java.

Step 3: Compile the program:

javac HelloWorld.java

Step 4: Run the program:

java HelloWorld

OUTPUT:
Hello, World!


10. APPLICATIONS OF JAVA

• Web Development
• Backend Development using Spring Boot
• Enterprise Applications
• Banking Systems
• Android Application Development
• Desktop Applications
• Cloud-Based Applications
• Distributed Systems
• E-commerce Platforms
• Big Data Technologies
`,

      code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,

      output: `Hello, World!`
    },

    // 2. Variables
    {
      title: 'Variables ',

      description:
        'Learn how to declare, initialize, and use variables in Java.',

      content: `
1. WHAT IS A VARIABLE?

A variable is a named memory location used to store data in a program.

2. VARIABLE DECLARATION

Syntax:

dataType variableName;

Example:

int age;

3. VARIABLE INITIALIZATION

Initialization means assigning a value to a variable.

Example:

int age = 23;

4. TYPES OF VARIABLES

Local Variable:
Declared inside a method, constructor, or block.

Instance Variable:
Declared inside a class but outside methods, without the static keyword.

Static Variable:
Declared using the static keyword and shared at the class level.

5. NAMING RULES

• A variable name can contain letters, digits, underscores, and dollar signs.
• A variable name cannot begin with a digit.
• Java keywords cannot be used as variable names.
• Variable names are case-sensitive.
• Use meaningful names such as studentName and totalMarks.
`,

      code: `public class Main {

                 // Instance variable
                 String name = "Ali";

                 // Static variable
                 static String college = "University of Sindh";

                 public static void main(String[] args) {

                     // Local variable
                     int age = 23;

                     Main obj = new Main();

                     System.out.println("Name: " + obj.name);
                     System.out.println("College: " + Main.college);
                     System.out.println("Age: " + age);
                 }
             }
}`,

      output: `
                Name:   Ali
               College: University of Sindh
               Age:     23
`
    },

    // 3. Data Types
    {
      title: 'Data Types',

      description:
        'Understand primitive and reference data types in Java.',

      content: `
1. WHAT IS A DATA TYPE?

A data type specifies the kind of value a variable can store.

2. PRIMITIVE DATA TYPES

Java has eight primitive data types:

byte   — Small integer
short  — Short integer
int    — Integer
long   — Large integer
float  — Single-precision decimal
double — Double-precision decimal
char   — Single UTF-16 code unit
boolean — true or false

3. REFERENCE DATA TYPES

Reference types include:

• String
• Arrays
• Classes
• Interfaces
• Enums

4. WHY ARE DATA TYPES IMPORTANT?

• They define what values can be stored.
• They determine valid operations.
• They help the compiler check types.
• They affect memory usage and precision.
`,

      code: `public class Main {
    public static void main(String[] args) {
        int number = 10;
        double price = 99.5;
        char grade = 'A';
        boolean passed = true;
        String name = "Java";

        System.out.println(number);
        System.out.println(price);
        System.out.println(grade);
        System.out.println(passed);
        System.out.println(name);
    }
}`,

      output: `10
99.5
A
true
Java`
    },
 {
   title: 'Operators',

   description:
     'Learn about different types of operators in Java.',

   content: `Operators in Java

 1. Arithmetic Operators
 2. Relational Operators
 3. Logical Operators
 4. Assignment Operators
 5. Unary Operators
 6. Bitwise Operators
 7. Shift Operators
 8. Ternary Operator
 9. instanceof Operator`,

   code: `public class OperatorsExample {
     public static void main(String[] args) {
         int a = 10;
         int b = 5;

         System.out.println("Addition: " + (a + b));
         System.out.println("Subtraction: " + (a - b));
         System.out.println("Multiplication: " + (a * b));
         System.out.println("Division: " + (a / b));
         System.out.println("Remainder: " + (a % b));
     }
 }`,

   output: `Addition: 15
 Subtraction: 5
 Multiplication: 50
 Division: 2
 Remainder: 0`
 },

{
   title: 'Input and Output',

   description:
     'Learn about different types of operators in Java.',

   content: ``,

   code: `
 }`,

   output: ``
 },
{
   title: 'Arrays',

   description:
     'Learn about different types of operators in Java.',

   content: ``,

   code: `
 }`,

   output: ``
 },
{
   title: 'Strings',

   description:
     'Learn about different types of operators in Java.',

   content: ``,

   code: `
 }`,

   output: ``
 },
    {
      title: 'Loops ',

      description:
        'Learn how to repeat statements using a for loop.',

      content: `
1. WHAT IS A FOR LOOP?

A for loop repeatedly executes a block of code while its condition is true.

2. SYNTAX

for (initialization; condition; update) {
    // statements
}

3. COMPONENTS

Initialization:
Executes once before the loop begins.

Condition:
Checked before each iteration.

Update:
Executes after each iteration.

4. WHEN SHOULD YOU USE A FOR LOOP?

Use a for loop when the number of iterations is known or when working with a counter.

5. IMPORTANT

If the condition is initially false, the loop body will not execute.
`,

      code: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }
    }
}`,

      output: `1
2
3
4
5`
    },


    {
      title: 'Control Flow Statements',

      description:
        'Use conditional statements to make decisions in Java.',

      content: `
1. WHAT IS AN IF STATEMENT?

An if statement executes a block of code when a condition is true.

2. WHAT IS AN IF-ELSE STATEMENT?

An if-else statement selects between two blocks of code.

3. SYNTAX

if (condition) {
    // Executes when condition is true
} else {
    // Executes when condition is false
}

4. ELSE-IF LADDER

An else-if ladder checks multiple conditions in sequence.

5. COMMON OPERATORS

==  Equal to
!=  Not equal to
>   Greater than
<   Less than
>=  Greater than or equal to
<=  Less than or equal to
`,

      code: `public class Main {
    public static void main(String[] args) {
        int age = 20;

        if (age >= 18) {
            System.out.println("Adult");
        } else {
            System.out.println("Minor");
        }
    }
}`,

      output: `Adult`
    },

    // 6. Methods
    {
      title: 'Methods ',

      description:
        'Learn how to create and call reusable methods.',

      content: `
1. WHAT IS A METHOD?

A method is a block of code that performs a specific task. Methods help organize code and reduce repetition.

2. METHOD SYNTAX

returnType methodName(parameters) {
    // method body
}

3. TYPES OF METHODS

• Predefined methods: Provided by Java libraries.
• User-defined methods: Created by the programmer.
• Static methods: Belong to the class.
• Instance methods: Called on an object.

4. RETURN TYPES

void:
The method does not return a value.

int, String, double, etc.:
The method returns a value of the specified type.

5. METHOD PARAMETERS

Parameters allow a method to receive input values.

6. METHOD CALL

A method must be called for its body to execute, except for methods invoked automatically by the language or framework.
`,

      code: `public class Main {

    static void greet() {
        System.out.println("Hello Java");
    }

    public static void main(String[] args) {
        greet();
    }
}`,
    output: `Hello Java`
    },
  {
         title: 'Packages and Access Modifiers',

         description:
           'Learn about different types of operators in Java.',

         content: ``,

         code: `
       }`,

         output: ``
       },
     {
        title: 'Exception Handling',

        description:
          'Learn about different types of operators in Java.',

        content: ``,

        code: `
      }`,

        output: ``
      },
    {
       title: 'Java Date and Time API',

       description:
         'Learn about different types of operators in Java.',

       content: ``,

       code: `
     }`,

       output: ``
     },
   {
      title: 'File Handling and I/O',

      description:
        'Learn about different types of operators in Java.',

      content: ``,

      code: `
    }`,

      output: ``
    },
  {
     title: 'Multithreading and Concurrency',

     description:
       'Learn about different types of operators in Java.',

     content: ``,

     code: `
   }`,

     output: ``
   },
 {
    title: 'Generics',

    description:
      'Learn about different types of operators in Java.',

    content: ``,

    code: `
  }`,

    output: ``
  },
{
   title: 'Stream API',

   description:
     'Learn about different types of operators in Java.',

   content: ``,

   code: `
 }`,

   output: ``
 },

  ];

  // Return the currently selected topic
  get currentTopic(): JavaTopic {
    return this.topics[this.selectedTopic];
  }

  // Select a topic by its index
  selectTopic(index: number): void {
    if (index >= 0 && index < this.topics.length) {
      this.selectedTopic = index;
    }
  }

  // Move to the previous topic
  previousTopic(): void {
    if (this.selectedTopic > 0) {
      this.selectedTopic--;
    }
  }

  // Move to the next topic
  nextTopic(): void {
    if (this.selectedTopic < this.topics.length - 1) {
      this.selectedTopic++;
    }
  }

}

