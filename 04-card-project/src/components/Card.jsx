import React from 'react'
import {Bookmark} from 'lucide-react';

const Card = ({ job }) => {
  return (
    <div className="card">
      <div className="top">
        <img 
          src={job.logo} 
          alt={`${job.company} logo`}
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/40x40/4A90E2/ffffff?text=${job.company.charAt(0)}`;
          }}
        />
        <button>Save <Bookmark /></button>
      </div>
      <div className="center">
        <h3>{job.company}<span>{job.timePosted}</span></h3>
        <h2>{job.position}</h2>
        <div>
          <h4>{job.jobType}</h4>
          <h4>{job.level}</h4>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{job.salary}</h3>
          <p>{job.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default Card
