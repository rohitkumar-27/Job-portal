
import React, { useState, useEffect } from "react";

function SearchBar(props) {
  const [jobCriteria, setJobCriteria] = useState({
    title: "",
    type: "",
    location: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobCriteria((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log({ ...jobCriteria, [name]: value });
  };

  // handle Search Button
  const search = async () => {
    console.log(jobCriteria);
    await props.fetchCustomJobs(jobCriteria);
  };

  // Reset the jobCriteria when resetSearchBar changes
  useEffect(() => {
    setJobCriteria({
      title: "",
      type: "",
      location: "",
      experience: "",
    });
  }, [props.resetSearchBar]);

  return (
    <div className="flex flex-wrap gap-4 my-10 justify-center px-4 sm:px-8 md:px-16">
      <select
        onChange={handleChange}
        name="title"
        value={jobCriteria.title}
        className="w-full sm:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option value="" disabled hidden>
          Job Role
        </option>
        <option value="Android Developer">Android Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Mobile Developer">Mobile Developer</option>
      </select>
      <select
        onChange={handleChange}
        name="type"
        value={jobCriteria.type}
        className="w-full sm:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option value="" disabled hidden>
          Job Type
        </option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>
      <select
        onChange={handleChange}
        name="location"
        value={jobCriteria.location}
        className="w-full sm:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option value="" disabled hidden>
          Location
        </option>
        <option value="Remote">Remote</option>
        <option value="In-Office">In-Office</option>
        <option value="Hybrid">Hybrid</option>
      </select>
      <select
        onChange={handleChange}
        name="experience"
        value={jobCriteria.experience}
        className="w-full sm:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option value="" disabled hidden>
          Experience
        </option>
        <option value="Fresher">Fresher</option>
        <option value="Entry Level">Entry Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>
      <button
        onClick={search}
        className="w-full sm:w-64 bg-blue-500 text-white font-bold py-3 rounded-md"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
