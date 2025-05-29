import "./style.css";
import BioData from "./components/BioData";

const bioDataInformation = [
  {
    name: "Noyon",
    age: 22,
    email: "noyon@gmail.com",
    phone: "01585735520",
    github: "https://github.com/noyon8987",
    skills: ["html", "css", "javascript", "bootstrap", "tailwindcss", "react"],
    interests: ["Football", "Travaling", "Cricket", "Gerdening"],
  },
  {
    name: "Asif",
    age: 32,
    email: "asif@gmail.com",
    phone: "0158157850",
    github: "https://github.com/noyon8987",
    skills: ["html", "css", "javascript", "bootstrap", "tailwindcss", "react"],
    interests: ["Football", "Travaling", "Cricket", "Gerdening"],
  },
  {
    name: "Asif",
    age: 32,
    email: "asif@gmail.com",
    phone: "0158157850",
    github: "https://github.com/noyon8987",
    skills: ["html", "css", "javascript", "bootstrap", "tailwindcss", "react"],
    interests: ["Football", "Travaling", "Cricket", "Gerdening"],
  },
  {
    name: "Asif",
    age: 32,
    email: "asif@gmail.com",
    phone: "0158157850",
    github: "https://github.com/noyon8987",
    skills: ["html", "css", "javascript", "bootstrap", "tailwindcss", "react"],
    interests: ["Football", "Travaling", "Cricket", "Gerdening"],
  },
  {
    name: "Asif",
    age: 32,
    email: "asif@gmail.com",
    phone: "0158157850",
    github: "https://github.com/noyon8987",
    skills: ["html", "css", "javascript", "bootstrap", "tailwindcss", "react"],
    interests: ["Football", "Travaling", "Cricket", "Gerdening"],
  },
];

export default function App() {
  return (
    <div className="Bio_Data">
      {bioDataInformation.map((bioData) => (
        <BioData
          name={bioData.name}
          age={bioData.age}
          email={bioData.email}
          phone={bioData.phone}
          github={bioData.github}
          skills={bioData.skills}
          interests={bioData.interests}
        />
      ))}
    </div>
  );
}
