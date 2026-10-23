export const blogPosts = [
  {
    slug: "getting-started-with-react",
    title: "Getting Started With React: Lessons From My First Projects",
    date: "2024-05-12",
    category: "Web Development",
    readTime: 4,
    excerpt:
      "Building websites for campus organizations taught me more about React than any tutorial. Here is what I wish I knew on day one.",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.",
    ],
  },
  {
    slug: "responsive-design-with-tailwind",
    title: "Making Responsive Layouts Painless With Tailwind CSS",
    date: "2024-06-03",
    category: "Web Development",
    readTime: 5,
    excerpt:
      "Mobile-first utilities changed the way I think about layout. A quick tour of the patterns I reuse in every project.",
    content: [
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.",
      "Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.",
      "Fusce convallis metus id felis luctus adipiscing. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est.",
    ],
  },
  {
    slug: "working-in-a-team-of-nine",
    title: "What Working In A Team Of Nine Taught Me",
    date: "2024-07-21",
    category: "Teamwork",
    readTime: 3,
    excerpt:
      "Communication, code reviews, and a little patience: notes from shipping a website with a large student team.",
    content: [
      "Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Fusce neque. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.",
      "Vivamus aliquet elit ac nisl. Fusce fermentum odio nec arcu. Vivamus euismod mauris. In ut quam vitae odio lacinia tincidunt. Praesent ut ligula non mi varius sagittis.",
    ],
  },
  {
    slug: "my-internship-journey",
    title: "My Internship Journey: From Nervous To Confident",
    date: "2024-08-15",
    category: "Career",
    readTime: 6,
    excerpt:
      "A look back at the internship project that got me into my favorite community, including the mistakes along the way.",
    content: [
      "Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. In ac dui quis mi consectetuer lacinia.",
      "Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.",
      "Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum.",
    ],
  },
  {
    slug: "habits-for-staying-productive",
    title: "Five Habits That Keep Me Productive As A Student Developer",
    date: "2024-09-09",
    category: "Lifestyle",
    readTime: 4,
    excerpt:
      "Balancing classes, organizations, and side projects is hard. These small habits make it manageable.",
    content: [
      "Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.",
      "Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla.",
    ],
  },
  {
    slug: "why-i-love-open-source",
    title: "Why I Am Slowly Falling In Love With Open Source",
    date: "2024-10-02",
    category: "Career",
    readTime: 5,
    excerpt:
      "Reading other people's code is the fastest way to grow. Here is how I started contributing, one small fix at a time.",
    content: [
      "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
      "Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.",
      "Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.",
    ],
  },
];

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
