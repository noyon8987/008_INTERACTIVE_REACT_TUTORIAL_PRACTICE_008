import "../style.css";
import BioData01 from "./BioData01";

const BioDatas = [
  {
    id:1,
    name: "Noyon",
    age: 22,
    email: "noyon@gmail.com",
    phone: "01585735520",
    github: "https://github.com/noyon8987",
    skills: ["html", "css", "javascript", "bootstrap", "tailwindcss", "react"],
    interests: ["Football", "Travaling", "Cricket", "Gerdening"],
  },
  {
    id:2,
    name: "Asif",
    age: 32,
    email: "asif@gmail.com",
    phone: "0158157850",
    github: "https://github.com/noyon8987",
    skills: ["html", "css", "javascript", "bootstrap", "tailwindcss", "react"],
    interests: ["Football", "Travaling", "Cricket", "Gerdening"],
  },
  {
    id:3,
    name: "Asif",
    age: 32,
    email: "asif@gmail.com",
    phone: "0158157850",
    github: "https://github.com/noyon8987",
    skills: ["html", "css", "javascript", "bootstrap", "tailwindcss", "react"],
    interests: ["Football", "Travaling", "Cricket", "Gerdening"],
  },
  {
    id:4,
    name: "Asif",
    age: 32,
    email: "asif@gmail.com",
    phone: "0158157850",
    github: "https://github.com/noyon8987",
    skills: ["html", "css", "javascript", "bootstrap", "tailwindcss", "react"],
    interests: ["Football", "Travaling", "Cricket", "Gerdening"],
  },
  {
    id:5,
    name: "Asif",
    age: 32,
    email: "asif@gmail.com",
    phone: "0158157850",
    github: "https://github.com/noyon8987",
    skills: ["html", "css", "javascript", "bootstrap", "tailwindcss", "react"],
    interests: ["Football", "Travaling", "Cricket", "Gerdening"],
  },
];

export default function BioData() {
  return (
    <div className="Bio_Data">
      {BioDatas.map((bioData) => (
        <BioData01 key={bioData.id}
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
