
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  searchText = '';

  topics = [
    {
      title: 'Core Java',
      description: 'Learn variables, data types, loops and methods.',
      icon: '☕',
      link: '/notes'
    },
    {
      title: 'Object-Oriented Programming',
      description: 'Understand classes, objects, inheritance and polymorphism.',
      icon: '🧩',
      link: '/oops'
    },
    {
      title: 'Collections Framework',
      description: 'Explore List, Set, Map, Queue and their implementations.',
      icon: '📚',
      link: '/collection-framework'
    },
    {
      title: 'Data Structures & Algorithms',
      description: 'Practice searching, sorting and problem-solving.',
      icon: '⚙️',
      link: '/dSA'
    },

    {
          title: 'JDBC',
          description: 'Connect Java applications to databases using JDBC, Connection, PreparedStatement and ResultSet.',
          icon: '🗄️',
          link: '/jdbc'
        },
  {
        title: 'Servlets',
        description: 'Learn server-side Java, servlet lifecycle, HttpServlet, request, response and sessions.',
        icon: '🌐',
        link: '/servlets'
      },
    {
          title: 'JSP',
          description: 'Learn JavaServer Pages, JSP directives, expressions, JSTL and dynamic web pages.',
          icon: '📄',
          link: '/jsp'
        },
      {
            title: 'Hibernate ORM',
            description: 'Learn ORM, entities, mappings, HQL, relationships and database persistence.',
            icon: '🔄',
            link: '/hibernate'
          },
         {
              title: 'Spring Framework',
              description: 'Understand IoC, dependency injection, beans, application context and AOP.',
              icon: '🌱',
              link: '/spring'
            },
                {
                  title: 'Java Interview Questions',
                  description: 'Prepare for technical interviews with Core Java, OOP, collections, algorithms and Spring questions.',
                  icon: '💡',
                  link: '/interview'
                }
  ];

  get filteredTopics() {
    const query = this.searchText.toLowerCase().trim();

    return this.topics.filter(topic =>
      topic.title.toLowerCase().includes(query) ||
      topic.description.toLowerCase().includes(query)
    );
  }
}
