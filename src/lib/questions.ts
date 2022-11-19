export const questions = [
  {
    q: "What is the height of Mount Everest?",
    a: "8,849 m",
    b: "9,849 m",
    c: "5,849 m",
    d: "6,849 m",
    ans: "a",
  },
  {
    q: "How many months have 28 days?",
    a: "2",
    b: "1",
    c: "12",
    d: "11",
    ans: "c",
  },
  { q: "What is 1+2 ?", a: "5", b: "3", c: "12", d: "2", ans: "b" },
  {
    q: "Which is our national animal",
    a: "Elephant",
    b: "Lion",
    c: "Tiger",
    d: "Cow",
    ans: "c",
  },
  {
    q: "What is 'K' in \"KFC\"",
    a: "Kerala",
    b: "Karnataka",
    c: "Kansas",
    d: "Kentucky",
    ans: "d",
  },
  {
    q: "Jimmy's father has three sons, Paul I and Paul II. Can you guess the name of the third son?",
    a: "Paul III",
    b: "Jerin",
    c: "Jimmy",
    d: "None",
    ans: "c",
  },
];

type Question = typeof questions[number];

export type { Question };
