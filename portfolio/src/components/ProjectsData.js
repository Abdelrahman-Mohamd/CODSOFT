import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Public Transportation Guidance",
    image: projectOne,
    description: (
      <>
        <p>
           This was my graduation project, it was meant to facilitate the use of public transportaion in Cairo
           , it simply takes you current location and your desired destination and tells you exactly how to reach 
           your destintion using public transportation, the results are ordered by you preference wether it is Cost, Distnce,
           or Time, this project is also available for the blind using speech recognition.
        </p>
      </>
    ),
    github: "https://github.com/HaidyGamal/GP-WebApp",
    demo: "https://netlify.com",
  },
  2: {
    title: "Productivity App",
    image: projectTwo,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
  3: {
    title: "Food Delivery App",
    image: projectThree,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
};

export default projects;