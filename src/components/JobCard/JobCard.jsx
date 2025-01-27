import React from "react";
import dayjs from "dayjs";

function JobCard(props) {
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff(props.postedOn, "day");

  return (
    <div className="mx-4 mb-4 sm:mx-8 md:mx-16 lg:mx-40">
      <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 bg-zinc-300 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103">
        <div className="flex flex-col items-start gap-3 mb-4 sm:mb-0">
          <h1 className="text-lg font-semibold">
            {props.title} - {props.company}
          </h1>
          <p className="text-sm sm:text-base">
            {props.type} &#x2022; {props.experience} &#x2022; {props.location}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {props.skills.map((skill, i) => (
              <p
                key={i}
                className="text-gray-500 py-1 px-2 rounded-md border border-black text-xs sm:text-sm"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <p className="text-gray-500 text-sm">
            Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`} ago
          </p>
          <a href={props.job_link}>
            <button className="text-blue-500 border border-blue-500 px-6 py-2 rounded-md text-sm sm:text-base">
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default JobCard;

