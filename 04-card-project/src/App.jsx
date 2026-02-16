import React from "react";
import Card from "./components/Card";
import "./index.css";

function App() {
  // Array of job opening objects
  const jobOpenings = [
    {
      id: 1,
      company: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png",
      position: "Senior Frontend Developer",
      salary: "$150/hr",
      location: "San Francisco, CA",
      timePosted: "2 days ago",
      jobType: "Full Time",
      level: "Senior Level"
    },
    {
      id: 2,
      company: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
      position: "Product Manager",
      salary: "$130/hr",
      location: "Seattle, WA",
      timePosted: "1 day ago",
      jobType: "Full Time",
      level: "Mid Level"
    },
    {
      id: 3,
      company: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png",
      position: "Senior UI/UX Designer",
      salary: "$120/hr",
      location: "Mumbai, India",
      timePosted: "5 days ago",
      jobType: "Part Time",
      level: "Senior Level"
    },
    {
      id: 4,
      company: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/340px-Netflix_2015_logo.svg.png",
      position: "Full Stack Engineer",
      salary: "$140/hr",
      location: "Los Angeles, CA",
      timePosted: "3 days ago",
      jobType: "Full Time",
      level: "Senior Level"
    },
    {
      id: 5,
      company: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/340px-Meta_Platforms_Inc._logo.svg.png",
      position: "React Developer",
      salary: "$160/hr",
      location: "Menlo Park, CA",
      timePosted: "1 week ago",
      jobType: "Full Time",
      level: "Mid Level"
    },
    {
      id: 6,
      company: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/232px-Apple_logo_black.svg.png",
      position: "iOS Developer",
      salary: "$135/hr",
      location: "Cupertino, CA",
      timePosted: "4 days ago",
      jobType: "Contract",
      level: "Senior Level"
    }
  ];

  return (
    <div className="parent">
      {/* Map through jobOpenings array and pass each job to Card component */}
      {jobOpenings.map((job) => (
        <Card 
          key={job.id} 
          job={job}
        />
      ))}
    </div>
  );
}

export default App;