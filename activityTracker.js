const myWeek = [
  {
    day: "Monday",
    activity: "Practice Exam for Core 2 + Miles IT training for Certification",
    category: "technical",
    hoursSpent: 3.5,
    enjoyment: 6,
    timeOfDay: "morning"
  },
  {
    day: "Tuesday",
    activity: "Searching for practice questions & reviewing answers of Practice Exam of Core 2",
    category: "technical",
    hoursSpent: 2,
    enjoyment: 5,
    timeOfDay: "morning"
  },
  {
    day: "Wednesday",
    activity: "Miles IT training for certification",
    category: "career",
    hoursSpent: 2,
    enjoyment: 6,
    timeOfDay: "afternoon"
  },
  {
    day: "Thursday",
    activity: "Term memorization with Quizlet & light review",
    category: "technical",
    hoursSpent: 2.5,
    enjoyment: 4,
    timeOfDay: "evening"
  },
  {
    day: "Friday",
    activity: "Mental break and light organizing",
    category: "personal",
    hoursSpent: 1,
    enjoyment: 7,
    timeOfDay: "afternoon"
  },
  {
    day: "Saturday",
    activity: "SMC Classwork day + rest",
    category: "semi - technical",
    hoursSpent: 3.5,
    enjoyment: 6,
    timeOfDay: "afternoon"
  },
  {
    day: "Sunday",
    activity: "Mostly rest with brief review",
    category: "personal",
    hoursSpent: 1,
    enjoyment: 8,
    timeOfDay: "evening"
  }
];

// Predictions
//1: I’ll enjoy Sunday as I try not to do much on Sunday therefore it's the only day of the week that I really look forward to.
//2: Technical activities will take up the majority of my week as I have been trying my best to chase some career certifications.
//3: Afternoons will be the most productive time because they're usually the blocks on my days that I have reserved for career activities .


// Analysis 1 – Total hours spent this week
const totalHours = myWeek.reduce((sum, day) => sum + day.hoursSpent, 0);
console.log("Total Hours This Week:", totalHours);

// Analysis 2 – Most common category
const categoryCounts = myWeek.reduce((acc, day) => {
  acc[day.category] = (acc[day.category] || 0) + 1;
  return acc;
}, {});
const mostFrequentCategory = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])[0][0];
console.log("Most Frequent Category:", mostFrequentCategory);

// Custom higher-order function – Find all sessions under 2 hours but rated 6 or higher
function filterEfficientSessions(testFn) {
  return myWeek.filter(testFn);
}
const shortButEffective = filterEfficientSessions(
  day => day.hoursSpent < 2 && day.enjoyment >= 6
);
console.log("Short but Enjoyable Sessions:", shortButEffective);


