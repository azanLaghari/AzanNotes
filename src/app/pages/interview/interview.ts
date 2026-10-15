
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface InterviewQuestion {
  question: string;
  answer: string;
  category: string;
  difficulty: string;
}

@Component({
  selector: 'app-interview',
  imports: [FormsModule],
  templateUrl: './interview.html',
  styleUrl: './interview.css'
})
export class Interview {
  searchText = '';
  selectedCategory = 'All';
  openQuestions: number[] = [];

  categories = [
    'All',
    'Core Java',
    'OOP',
    'Collections',
    'Exception Handling'
  ];

  questions: InterviewQuestion[] = [
    {
      question: 'What is Java?',
      category: 'Core Java',
      difficulty: 'Easy',
      answer: 'Java is a high-level, class-based programming language. It compiles source code into bytecode, which can run on a Java Virtual Machine (JVM).'
    },
    {
      question: 'What is the JVM?',
      category: 'Core Java',
      difficulty: 'Easy',
      answer: 'JVM stands for Java Virtual Machine. It executes Java bytecode and provides a runtime environment for Java applications.'
    },
    {
      question: 'What is the difference between JDK, JRE, and JVM?',
      category: 'Core Java',
      difficulty: 'Medium',
      answer: 'JVM executes bytecode. JRE traditionally refers to the JVM and runtime libraries needed to run Java applications. JDK includes development tools, such as the compiler, along with the runtime components.'
    },
    {
      question: 'What is OOP?',
      category: 'OOP',
      difficulty: 'Easy',
      answer: 'Object-Oriented Programming organizes programs around objects and classes. Its four commonly taught principles are encapsulation, inheritance, polymorphism, and abstraction.'
    },
    {
      question: 'What is inheritance in Java?',
      category: 'OOP',
      difficulty: 'Medium',
      answer: 'Inheritance allows a class to extend another class and reuse or specialize its accessible behavior. Java classes use the extends keyword for class inheritance.'
    },
    {
      question: 'What is polymorphism?',
      category: 'OOP',
      difficulty: 'Medium',
      answer: 'Polymorphism means one interface or parent type can represent different implementations. In Java, common examples include method overloading and method overriding.'
    },
    {
      question: 'What is the difference between ArrayList and LinkedList?',
      category: 'Collections',
      difficulty: 'Medium',
      answer: 'ArrayList uses a resizable array and provides fast indexed access. LinkedList uses linked nodes and supports efficient insertion or removal at known positions, although locating those positions can take time.'
    },
    {
      question: 'What is a HashMap?',
      category: 'Collections',
      difficulty: 'Medium',
      answer: 'HashMap stores key-value pairs. It allows one null key and multiple null values, does not guarantee iteration order, and is not synchronized.'
    },
    {
      question: 'What is exception handling?',
      category: 'Exception Handling',
      difficulty: 'Easy',
      answer: 'Exception handling manages exceptional conditions using constructs such as try, catch, finally, throw, and throws.'
    },
    {
      question: 'What is the difference between throw and throws?',
      category: 'Exception Handling',
      difficulty: 'Medium',
      answer: 'throw is used to explicitly throw a throwable object. throws appears in a method declaration to specify exceptions that the method may pass to its caller.'
    }
  ];

  get filteredQuestions(): InterviewQuestion[] {
    const query = this.searchText.toLowerCase().trim();

    return this.questions.filter(item => {
      const matchesSearch =
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query);

      const matchesCategory =
        this.selectedCategory === 'All' ||
        item.category === this.selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }

  toggleAnswer(index: number): void {
    if (this.openQuestions.includes(index)) {
      this.openQuestions = this.openQuestions.filter(i => i !== index);
    } else {
      this.openQuestions = [...this.openQuestions, index];
    }
  }
}
