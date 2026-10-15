import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CollectionFW {
  title: string;
  description: string;
  content: string;
  code: string;
  output: string;
}

@Component({
  selector: 'app-collection-frame-work',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './collection-frame-work.html',
  styleUrl: './collection-frame-work.css'
})
export class CollectionFrameWork {

  selectedTopic = 0;

  collectionFW: CollectionFW[] = [

    {
      title: 'List',
      description:
        'Learn how the List interface stores ordered elements and allows duplicates.',

      content:
        'The List interface maintains insertion order, allows duplicate elements, and provides index-based access.',

      code: `import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        List<String> names = new ArrayList<>();

        names.add("Ali");
        names.add("Ahmed");
        names.add("Ali");

        System.out.println(names);
    }
}`,

      output: `[Ali, Ahmed, Ali]`
    },

    {
      title: 'ArrayList',
      description:
        'Learn how ArrayList stores elements dynamically and provides fast index-based access.',

      content:
        'ArrayList is a resizable array implementation of the List interface. It maintains insertion order and allows duplicate elements.',

      code: `import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {

        ArrayList<String> names = new ArrayList<>();

        names.add("Ali");
        names.add("Ahmed");
        names.add("Sara");

        System.out.println(names);
    }
}`,

      output: `[Ali, Ahmed, Sara]`
    },

    {
      title: 'LinkedList',
      description:
        'Learn how LinkedList stores elements using linked nodes.',

      content:
        'LinkedList is a doubly linked list implementation of the List and Deque interfaces. It is useful when frequent insertion and deletion operations are required.',

      code: `import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {

        LinkedList<String> names = new LinkedList<>();

        names.add("Ali");
        names.add("Ahmed");
        names.addFirst("Sara");

        System.out.println(names);
    }
}`,

      output: `[Sara, Ali, Ahmed]`
    },

    {
      title: 'Set',
      description:
        'Learn how the Set interface stores unique elements.',

      content:
        'The Set interface does not allow duplicate elements. It is commonly used when you need to store unique values.',

      code: `import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {

        Set<String> names = new HashSet<>();

        names.add("Ali");
        names.add("Ahmed");
        names.add("Ali");

        System.out.println(names);
    }
}`,

      output: `Duplicate "Ali" is ignored.
Set contains only unique elements.`
    },

    {
      title: 'HashSet',
      description:
        'Learn how HashSet stores unique elements without guaranteeing insertion order.',

      content:
        'HashSet is an implementation of the Set interface. It does not allow duplicate elements and does not guarantee a specific iteration order.',

      code: `import java.util.HashSet;

public class Main {
    public static void main(String[] args) {

        HashSet<Integer> numbers = new HashSet<>();

        numbers.add(10);
        numbers.add(20);
        numbers.add(10);

        System.out.println(numbers);
    }
}`,

      output: `[20, 10]`
    },

    {
      title: 'LinkedHashSet',
      description:
        'Learn how LinkedHashSet maintains insertion order while storing unique elements.',

      content:
        'LinkedHashSet is a Set implementation that maintains the insertion order of elements and does not allow duplicates.',

      code: `import java.util.LinkedHashSet;

public class Main {
    public static void main(String[] args) {

        LinkedHashSet<String> names = new LinkedHashSet<>();

        names.add("Ali");
        names.add("Ahmed");
        names.add("Sara");
        names.add("Ali");

        System.out.println(names);
    }
}`,

      output: `[Ali, Ahmed, Sara]`
    },

    {
      title: 'TreeSet',
      description:
        'Learn how TreeSet stores unique elements in sorted order.',

      content:
        'TreeSet is an implementation of the NavigableSet interface. It stores unique elements in ascending sorted order by default.',

      code: `import java.util.TreeSet;

public class Main {
    public static void main(String[] args) {

        TreeSet<Integer> numbers = new TreeSet<>();

        numbers.add(50);
        numbers.add(10);
        numbers.add(30);
        numbers.add(10);

        System.out.println(numbers);
    }
}`,

      output: `[10, 30, 50]`
    },

    {
      title: 'Map',
      description:
        'Learn how the Map interface stores data using key-value pairs.',

      content:
        'The Map interface stores data as key-value pairs. Each key must be unique, while values can be duplicated.',

      code: `import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {

        Map<Integer, String> students = new HashMap<>();

        students.put(1, "Ali");
        students.put(2, "Ahmed");
        students.put(3, "Sara");

        System.out.println(students);
    }
}`,

      output: `{1=Ali, 2=Ahmed, 3=Sara}`
    },

    {
      title: 'HashMap',
      description:
        'Learn how HashMap stores key-value pairs using hashing.',

      content:
        'HashMap is an implementation of the Map interface. It stores data using key-value pairs and allows one null key and multiple null values.',

      code: `import java.util.HashMap;

public class Main {
    public static void main(String[] args) {

        HashMap<Integer, String> students = new HashMap<>();

        students.put(1, "Ali");
        students.put(2, "Ahmed");
        students.put(3, "Sara");

        System.out.println(students);
    }
}`,

      output: `{1=Ali, 2=Ahmed, 3=Sara}`
    },

    {
      title: 'LinkedHashMap',
      description:
        'Learn how LinkedHashMap maintains insertion order of key-value pairs.',

      content:
        'LinkedHashMap is a Map implementation that maintains the insertion order of entries.',

      code: `import java.util.LinkedHashMap;

public class Main {
    public static void main(String[] args) {

        LinkedHashMap<Integer, String> students =
                new LinkedHashMap<>();

        students.put(1, "Ali");
        students.put(2, "Ahmed");
        students.put(3, "Sara");

        System.out.println(students);
    }
}`,

      output: `{1=Ali, 2=Ahmed, 3=Sara}`
    },

    {
      title: 'TreeMap',
      description:
        'Learn how TreeMap stores key-value pairs in sorted key order.',

      content:
        'TreeMap is a Map implementation that stores entries according to the natural ordering of keys or a supplied Comparator.',

      code: `import java.util.TreeMap;

public class Main {
    public static void main(String[] args) {

        TreeMap<Integer, String> students = new TreeMap<>();

        students.put(3, "Sara");
        students.put(1, "Ali");
        students.put(2, "Ahmed");

        System.out.println(students);
    }
}`,

      output: `{1=Ali, 2=Ahmed, 3=Sara}`
    },

    {
      title: 'Queue',
      description:
        'Learn how Queue stores elements for processing in a specific order.',

      content:
        'Queue is an interface used to hold elements before processing. A common queue follows FIFO: First In, First Out.',

      code: `import java.util.LinkedList;
import java.util.Queue;

public class Main {
    public static void main(String[] args) {

        Queue<String> queue = new LinkedList<>();

        queue.add("Ali");
        queue.add("Ahmed");
        queue.add("Sara");

        System.out.println(queue);
        System.out.println(queue.poll());
    }
}`,

      output: `[Ali, Ahmed, Sara]
Ali`
    },

    {
      title: 'PriorityQueue',
      description:
        'Learn how PriorityQueue processes elements according to priority.',

      content:
        'PriorityQueue is a queue in which elements are processed according to their priority. For numbers, the smallest element has the highest priority by default.',

      code: `import java.util.PriorityQueue;

public class Main {
    public static void main(String[] args) {

        PriorityQueue<Integer> numbers =
                new PriorityQueue<>();

        numbers.add(30);
        numbers.add(10);
        numbers.add(20);

        System.out.println(numbers.poll());
    }
}`,

      output: `10`
    },

    {
      title: 'Deque',
      description:
        'Learn how Deque allows insertion and removal from both ends.',

      content:
        'Deque stands for Double Ended Queue. It allows elements to be added or removed from both the front and rear.',

      code: `import java.util.ArrayDeque;
import java.util.Deque;

public class Main {
    public static void main(String[] args) {

        Deque<String> names = new ArrayDeque<>();

        names.addFirst("Ali");
        names.addLast("Ahmed");
        names.addFirst("Sara");

        System.out.println(names);
    }
}`,

      output: `[Sara, Ali, Ahmed]`
    },

    {
      title: 'Iterator',
      description:
        'Learn how Iterator is used to traverse collection elements.',

      content:
        'Iterator provides a standard way to traverse elements in a collection one by one.',

      code: `import java.util.ArrayList;
import java.util.Iterator;

public class Main {
    public static void main(String[] args) {

        ArrayList<String> names = new ArrayList<>();

        names.add("Ali");
        names.add("Ahmed");
        names.add("Sara");

        Iterator<String> iterator = names.iterator();

        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }
}`,

      output: `Ali
Ahmed
Sara`
    },

    {
      title: 'Comparable',
      description:
        'Learn how Comparable is used to define natural ordering of objects.',

      content:
        'Comparable is used when a class wants to define its own natural sorting order. The compareTo() method is implemented.',

      code: `import java.util.ArrayList;
import java.util.Collections;

class Student implements Comparable<Student> {

    int age;

    Student(int age) {
        this.age = age;
    }

    public int compareTo(Student other) {
        return this.age - other.age;
    }

    public String toString() {
        return String.valueOf(age);
    }
}

public class Main {
    public static void main(String[] args) {

        ArrayList<Student> students = new ArrayList<>();

        students.add(new Student(25));
        students.add(new Student(20));
        students.add(new Student(22));

        Collections.sort(students);

        System.out.println(students);
    }
}`,

      output: `[20, 22, 25]`
    },

    {
      title: 'Comparator',
      description:
        'Learn how Comparator is used to define custom sorting logic.',

      content:
        'Comparator allows you to create custom sorting logic separately from the class being sorted.',

      code: `import java.util.ArrayList;
import java.util.Comparator;

public class Main {
    public static void main(String[] args) {

        ArrayList<Integer> numbers = new ArrayList<>();

        numbers.add(30);
        numbers.add(10);
        numbers.add(20);

        numbers.sort(Comparator.reverseOrder());

        System.out.println(numbers);
    }
}`,

      output: `[30, 20, 10]`
    },

    {
      title: 'Stream API',
      description:
        'Learn how to process collection data using Java Streams.',

      content:
        'The Stream API processes collection data using operations such as filter(), map(), sorted(), and forEach().',

      code: `import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        List<Integer> numbers =
                Arrays.asList(1, 2, 3, 4, 5);

        numbers.stream()
               .filter(n -> n % 2 == 0)
               .forEach(System.out::println);
    }
}`,

      output: `2
4`
    }

  ];

  get currentTopic(): CollectionFW {
    return this.collectionFW[this.selectedTopic];
  }

  selectTopic(index: number): void {
    if (index >= 0 && index < this.collectionFW.length) {
      this.selectedTopic = index;
    }
  }
}
