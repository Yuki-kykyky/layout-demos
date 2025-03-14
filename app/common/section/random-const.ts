const getRandom = (array: string[]) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const getRandomDate = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // 获取当前日期
  const today = new Date();
  // 获取一年前的日期
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  // 生成一个随机时间戳，范围在一年前到现在之间
  const randomTimestamp =
    oneYearAgo.getTime() +
    Math.random() * (today.getTime() - oneYearAgo.getTime());
  const randomDate = new Date(randomTimestamp);

  const month = months[randomDate.getMonth()];
  const day = randomDate.getDate();
  const year = randomDate.getFullYear();

  return `${month} ${day}, ${year}`;
};

export const ImageSet = [
  "/goooose9.jpg",
  "/goooose14.jpg",
  "/goooose18.jpg",
  "/goooose20.jpg",
  "/goooose30.jpg",
];

export const getRandomImage = () => {
  return getRandom(ImageSet);
};

export const TitleSet = [
  "Default",
  "More Complex Than Default Title",
  "Short Title",
  "Maybe you can set this as a title",
  "Oh! This title is too long, it will be cut off in the middle I guess",
];

export const getRandomTitle = () => {
  return getRandom(TitleSet);
};

export const NameSet = [
  "Ava Doe",
  "Jane Smith",
  "Olivia Wilson",
  "Matthew Taylor",
  "Anderson Martinez",
  "Maximilian Zachariah",
  "Montgomery Bartholomew",
];

export const getRandomName = () => {
  return getRandom(NameSet);
};

export const JobSet = [
  "Surveyor",
  "Economist",
  "Sales Manager",
  "Product Manager",
  "Customer Support",
  "Software Engineer",
  "Recreational Therapist",
  "Public Relations Specialist",
  "Maintenance & Repair Worker",
  "Computer Systems Administrator",
];

export const getRandomJob = () => {
  return getRandom(JobSet);
};

export const TextSet = [
  "Sales dashboards are a common example of analytical dashboards.",
  "For designers, mastering dashboard design principles is crucial.",
  "This can be achieved through the use of clear visual cues and consistent design elements.",
  "In contrast to operational dashboards, they aren't time-sensitive and don't require immediate action.",
  "Operational dashboards provide frequent data updates and should be comprehensive enough at first glance.",
  "It empowers you to create user-friendly interfaces that prioritize user needs and enhance overall usability.",
  "To avoid this, you can start by understanding what kind of information your users want to see on the dashboard.",
  "Operational dashboards focus on displaying real-time critical data that constantly change their values and statuses.",
  "They must communicate information so clearly that users can quickly spot critical parameter deviations and take action",
  "As the name implies, analytical dashboards provide information for analysis, investigation, research, and thoughtful decision-making.",
  "They provide thought information for sales managers about fluctuating sales data that may require thoughtful analysis rather than rapid intervention.",
];

export const getRandomText = () => {
  return Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () =>
    getRandom(TextSet)
  ).join(" ");
};
