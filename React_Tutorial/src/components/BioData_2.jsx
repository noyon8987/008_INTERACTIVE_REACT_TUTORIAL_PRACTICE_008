import "../style.css";
import BioData_1 from "./BioData_1";

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

export default function BioData_2() {
  return (
    <div className="Bio_Data">
      {bioDataInformation.map((bioData) => (
        <BioData_1
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
