export interface examp {
  key: number;
  input: string;
  output: string;
  explanation: string;
}
export interface prob {
  problemid: number;
  title: string;
  Statement: string;
  difficulty: string;
  acceptance: string;
  examples: examp[];
}
export interface filterprob {
  problemid: number;
  title: string;
  Statement: string;
  difficulty: string;
  acceptance: string;
}

export const allproblems: prob[] = [
  {
    problemid: 1,
    title: "Two Sum",
    Statement:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n" +
      " You may assume that each input would have exactly one solution, and you may not use the same element twice.\n  " +
      "You can return the answer in any order.",
    difficulty: "Medium",
    acceptance: "42%",
    examples: [
      {
        key: 1,
        input: " nums: [2, 7, 11, 15], target: 9 ",
        output: "[0, 1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        key: 2,
        input: "nums: [3, 2, 4], target: 6",
        output: "[1, 2]",
        explanation: "null",
      },
    ],
  },
  {
    problemid: 2,
    title: "Maximum Subarray",
    Statement:
      "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    difficulty: "Easy",
    acceptance: "50%",
    examples: [
      {
        key: 1,
        input: "nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4] ",
        output: "6",
        explanation: "[4,-1,2,1] has the largest sum = 6.",
      },
      {
        key: 2,
        input: "nums: [1] ",
        output: "1",
        explanation: "null",
      },
    ],
  },
  {
    problemid: 3,
    title: "Merge Two Sorted Lists",
    Statement:
      "Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.",
    difficulty: "Easy",
    acceptance: "53%",
    examples: [
      {
        key: 1,
        input: "l1: [1, 2, 4], l2: [1, 3, 4]",
        output: "[1, 1, 2, 3, 4, 4]",
        explanation: "null",
      },
      {
        key: 2,
        input: "l1: [], l2: []",
        output: "[]",
        explanation: "null",
      },
    ],
  },
  {
    problemid: 4,
    title: "Reverse Integer",
    Statement:
      "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.",
    difficulty: "Easy",
    acceptance: "27%",
    examples: [
      {
        key: 1,
        input: " x: 123 ",
        output: "321",
        explanation: "null",
      },
      {
        key: 2,
        input: "x: -123",
        output: "-321",
        explanation: "null",
      },
    ],
  },
  {
    problemid: 5,
    title: "Binary Search",
    Statement:
      "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.",
    difficulty: "Easy",
    acceptance: "52%",
    examples: [
      {
        key: 1,
        input: "nums = [-1,0,3,5,9,12], target = 9",
        output: "4",
        explanation: "9 exists in nums and its index is 4.",
      },
      {
        key: 2,
        input: "nums = [-1,0,3,5,9,12], target = 2",
        output: "-1",
        explanation: "2 does not exist in nums, so return -1.",
      },
    ],
  },
  {
    problemid: 6,
    title: "Valid Parentheses",
    Statement:
      "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:",
    difficulty: "Easy",
    acceptance: "43%",
    examples: [
      {
        key: 1,
        input: 's = "()"',
        output: "true",
        explanation: "The string contains a pair of valid parentheses.",
      },
      {
        key: 2,
        input: 's = "([)]"',
        output: "false",
        explanation:
          "The string contains an invalid pair of parentheses, so return false.",
      },
    ],
  },

  {
    problemid: 7,
    title: "Median of Two Sorted Arrays",
    Statement:
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
    difficulty: "Hard",
    acceptance: "30%",
    examples: [
      {
        key: 1,
        input: " nums1: [1,3], nums2: [2] ",
        output: "2.00000",
        explanation: "merged array = [1,2,3] and median is 2.",
      },
      {
        key: 2,
        input: "nums1: [1,2], nums2: [3,4]",
        output: "2.50000",
        explanation:
          "merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.",
      },
    ],
  },
  {
    problemid: 8,
    title: "Regular Expression Matching",
    Statement:
      "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:\n\n'.' Matches any single character.\n'*' Matches zero or more of the preceding element.",
    difficulty: "Hard",
    acceptance: "27%",
    examples: [
      {
        key: 1,
        input: "s :aa, p: a ",
        output: "false",
        explanation: "'a' does not match the entire string 'aa'.",
      },
      {
        key: 2,
        input: "s: mississippi, p: mis*is*p*",
        output: "false",
        explanation:
          "The pattern 'mis*is*p*.' does not match the entire string 'mississippi'.",
      },
    ],
  },
  {
    problemid: 9,
    title: "Container With Most Water",
    Statement:
      "Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.",
    difficulty: "Medium",
    acceptance: "51%",
    examples: [
      {
        key: 1,
        input: "[1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The above vertical lines (with arrows) are drawn to scale. The two lines that form the container are between indexes 1 and 8, and contain 49 units of water.",
      },
      {
        key: 2,
        input: "[1,1]",
        output: "1",
        explanation:
          "The above vertical lines (with arrows) are drawn to scale. The two lines that form the container are between indexes 1 and 8, and contain 49 units of water.",
      },
    ],
  },
];
