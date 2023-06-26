interface CodingLanguage {
    id: number;
    name: string;
    sampleCode: string;
}

export const codingLanguages: CodingLanguage[] = [
    {
        id: 1,
        name: "JavaScript",
        sampleCode: `function greet(name) {
        console.log("Hello, " + name + "!");
      }
  
      greet("John");
    `
    },
    {
        id: 2,
        name: "Python",
        sampleCode: `def greet(name):
          print("Hello, " + name + "!")
      
      greet("John")
    `
    },
    {
        id: 3,
        name: "Java",
        sampleCode: `public class Main {
          public static void greet(String name) {
              System.out.println("Hello, " + name + "!");
          }
      
          public static void main(String[] args) {
              greet("John");
          }
      }
    `
    },
    {
        id: 4,
        name: "C++",
        sampleCode: `#include <iostream>
      using namespace std;
      
      void greet(string name) {
          cout << "Hello, " << name << "!" << endl;
      }
      
      int main() {
          greet("John");
          return 0;
      }
    `
    }
    // Add more coding languages as needed
];
