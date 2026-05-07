// Probelm-1
const filterEvenNumbers = (arrayOfNumber: number[]): number[] => {
    return arrayOfNumber.filter(x => x%2 == 0); 
}

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Problem-2
const reverseString = (str: string): string => {
    return str.split('').reverse().join('');
}

// console.log(reverseString("typescript"));

// Problem-3
type StringOrNumber = string | number;
const checkType = (input: StringOrNumber): string => {
    if(typeof input === 'string')   return "String";
    else if(typeof input === 'number')   return "Number";

    return "Unknown";
}

// console.log(checkType("Hello"));
// console.log(checkType(42));

// Problem-4
const getProperty = <T, K extends keyof T>(inputObject: T, key: K): T[K] => {
    return inputObject[key];
}

// const user = { id: 1, name: "John Doe", age: 21 };
// console.log(getProperty(user, "name"));

// Problem-5
interface Book {
   title: string,
   author: string,
   publishedYear: number
}

const toggleReadStatus = (inputBookObject: Book) => {
    return {
        ...inputBookObject,
        isRead: true
    }
}

// const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
// console.log(toggleReadStatus(myBook))

// Problem-6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age); 
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// const student = new Student("Alice", 20, "A");
// console.log(student.getDetails()); 

// Problem-7
const getIntersection = (arrayOfNumber1: number[], arrayOfNumber2: number[]): number[] => {
    return arrayOfNumber1.filter(x => arrayOfNumber2.includes(x));
}

console.log(getIntersection([1, 2, 3, 4, 5], [6, 7]));