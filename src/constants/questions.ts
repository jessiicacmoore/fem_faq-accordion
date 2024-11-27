export type Question = {
  id: number;
  question: string;
  answer: string;
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'What does this platform do, and how will it help me?',
    answer:
      "We provide front-end challenges that include professional web designs. These allow you to practice building websites in a realistic workflow. Taking these challenges will help you improve your skills, gain experience creating websites, and build up an incredible project portfolio. We also have a large community of developers, so it's a great way to meet other devs!",
  },
  {
    id: 2,
    question: 'Is it free?',
    answer:
      "The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it's easy to tell the difference.",
  },
  {
    id: 3,
    question: 'Can I use these projects in my portfolio?',
    answer:
      'Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!',
  },
  {
    id: 4,
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      'The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it\'s a great place to ask questions. We even have a dedicated "help" channel!',
  },
];
