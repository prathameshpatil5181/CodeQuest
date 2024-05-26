export const directoryPath = __dirname;

interface CodingLanguage {
  id: number;
  name: string;
  sampleCode: string;
}

export const codingLanguages: CodingLanguage[] = [
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
    `,
  },
  {
    id: 1,
    name: "JavaScript",
    sampleCode: `function greet(name) {
        console.log("Hello, " + name + "!");
      }
  
      greet("John");
    `,
  },
  {
    id: 2,
    name: "Python",
    sampleCode: `def greet(name):
          print("Hello, " + name + "!")
      
      greet("John")
    `,
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
    `,
  },

  // Add more coding languages as needed
];

export const problems: { input: string; output: string }[][] = [
  [
    {
      input: "9 3 2 7 11 15",
      output: "0 1",
    },
    {
      input: "6 3 3 2 4",
      output: "1 2",
    },
    {
      input: "8 1 2 3 4",
      output: "-1",
    },
    {
      input: "10 2 5 5 2",
      output: "0 1",
    },
  ],
  [
    {
      input: "9 -2 1 -3 4 -1 2 1 -5 4",
      output: "6",
    },
    {
      input: "1 1",
      output: "1",
    },
    {
      input: "5 5 4 -1 7 8",
      output: "23",
    },
    {
      input: "4 -1 -2 -3 -4",
      output: "-1",
    },
    {
      input: "9 0 -3 1 1 5 -1 6 -7 4",
      output: "12",
    },
  ],
  [
    {
      input: "3 1 2 4 3 1 3 4",
      output: "1 1 2 3 4 4 ",
    },
    {
      input: "0 0",
      output: "",
    },
    {
      input: "3 2 4 6 3 1 3 5",
      output: "1 2 3 4 5 6 ",
    },
    {
      input: "4 1 3 5 7 4 2 4 6 8",
      output: "1 2 3 4 5 6 7 8 ",
    },
    {
      input: "3 1 1 1 3 2 2 2",
      output: "1 1 1 2 2 2 ",
    },
  ],
  [
    {
      input: "3 123",
      output: "321",
    },
    {
      input: "4 -123",
      output: "-321",
    },
    {
      input: "3 120",
      output: "21",
    },
    {
      input: "1 0",
      output: "0",
    },
    {
      input: "10 1534236469",
      output: "0", // Overflow case
    },
  ],
  [
    {
      input: "10 1 2 3 4 5 6 7 8 9 5",
      output: "4",
    },
    {
      input: "10 1 2 3 4 5 6 7 8 9 10",
      output: "-1",
    },
    {
      input: "7 2 3 5 7 11 13 17 7",
      output: "3",
    },
    {
      input: "6 1 3 5 7 9 11 1",
      output: "0",
    },
    {
      input: "5 10 20 30 40 50 50",
      output: "4",
    },
  ],
  [
    {
      input: "2 ()",
      output: "true",
    },
    {
      input: "6 ()[]{}",
      output: "true",
    },
    {
      input: "2 (]",
      output: "false",
    },
    {
      input: "4 ([)]",
      output: "false",
    },
    {
      input: "4 {[]}",
      output: "true",
    },
  ],
  [
    {
      input: "3 1 3 2",
      output: "2.0",
    },
    {
      input: "4 1 2 3 4",
      output: "2.5",
    },
    {
      input: "4 0 0 0 0",
      output: "0.0",
    },
    {
      input: "1 1",
      output: "1.0",
    },
    {
      input: "1 2",
      output: "2.0",
    },
  ],
  [
    {
      input: "3 aa a",
      output: "false",
    },
    {
      input: "4 aa a*",
      output: "true",
    },
    {
      input: "4 ab .*",
      output: "true",
    },
    {
      input: "6 aab c*a*b",
      output: "true",
    },
    {
      input: "12 mississippi mis*is*p*.",
      output: "false",
    },
  ],
  [
    {
      input: "9 1 8 6 2 5 4 8 3 7",
      output: "49",
    },
    {
      input: "2 1 1",
      output: "1",
    },
    {
      input: "5 4 3 2 1 4",
      output: "16",
    },
    {
      input: "3 1 2 1",
      output: "2",
    },
    {
      input: "9 1 8 100 2 100 4 8 3 7",
      output: "200",
    },
  ],
];
