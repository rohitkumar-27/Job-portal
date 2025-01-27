import "./App.css";
import Header from "./components/Header/Header";
import JobCard from "./components/JobCard/JobCard";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
// import jobdata from './DummyData'
import {collection, query, orderBy, getDocs, where, writeBatch, doc} from "firebase/firestore";
import { db } from "./firebase.config";
import { useEffect, useState } from "react";
import dummyData from "./UploadDummyData";
import { Timestamp } from "firebase/firestore";

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);
  const [resetSearchBar, setResetSearchBar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  //  Function to upload multiple documents using batch write
  const uploadDummyData = async () => {
    setLoading(true);
    setMessage("");

    const batch = writeBatch(db); // Initialize a batch write
    const jobsCollection = collection(db, "jobs"); // Reference to the 'jobs' collection

    dummyData.forEach((job) => {
      const jobRef = doc(jobsCollection); // Create a new document reference for each job
      batch.set(jobRef, job); // Add the set operation to the batch
    });

    try {
      // Commit the batch write operation
      await batch.commit();
      setMessage("All dummy data uploaded successfully");
      // Set a flag in localStorage to indicate that data has been uploaded
      localStorage.setItem("dummyDataUploaded", "true");
    } catch (error) {
      setMessage(`Error uploading dummy data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Check if the data has already been uploaded before attempting to upload again
  useEffect(() => {
    const isDataUploaded = localStorage.getItem("dummyDataUploaded");
    if (!isDataUploaded) {
      uploadDummyData(); // Upload the dummy data only once
    } else {
      setMessage("Dummy data has already been uploaded.");
    }

    fetchJobs(); // Fetch jobs when the component mounts
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  // for data get from firebase server
  const fetchJobs = async () => {
    setCustomSearch(false);
    const tempJobs = [];
    const jobRef = query(collection(db, "jobs"));
    // for descending order
    const q = query(jobRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);
    req.forEach((job) => {
      const jobdata = job.data();
      // Check if postedOn is a Timestamp and convert it to a Date
      const postedOn =
        jobdata.postedOn instanceof Timestamp
          ? jobdata.postedOn.toDate()
          : null;
      // console.log(doc.id, '--', doc.data());
      tempJobs.push({
        // here job is new variable that describe in useState
        ...jobdata,
        id: job.id,
        postedOn: postedOn,
      });
    });
    setJobs(tempJobs);
  };

// fetch filtered  Data from firebase DataBase
  const fetchCustomJobs = async (jobCriteria) => {
    try {
      setCustomSearch(true);
      const tempJobs = [];
  
      let q = query(collection(db, "jobs"));
  
      // Apply filters based on the provided job criteria.
      if (jobCriteria.title) {
        q = query(q, where("title", "==", jobCriteria.title)); // Filter by job title
      }
      if (jobCriteria.type) {
        q = query(q, where("type", "==", jobCriteria.type)); // Filter by job type
      }
      if (jobCriteria.experience) {
        q = query(q, where("experience", "==", jobCriteria.experience)); // Filter by experience level
      }
      if (jobCriteria.location) {
        q = query(q, where("location", "==", jobCriteria.location)); // Filter by location
      }
  
      // Add ordering by posted date.
      q = query(q, orderBy("postedOn", "desc"));
      // Fetch the filtered documents
      const req = await getDocs(q);
      req.forEach((job) => {
        const jobdata = job.data();
        // Check if postedOn is a Timestamp and convert it to a Date
        const postedOn =
          jobdata.postedOn instanceof Timestamp
            ? jobdata.postedOn.toDate()
            : null;
        tempJobs.push({
          ...jobdata,
          id: job.id,
          postedOn: postedOn,
        });
      });
  
      setJobs(tempJobs); // Set the filtered jobs to state
    } catch (error) {
      console.log("Error fetching custom jobs:", error);
    }
  };
  


  // handle reset searchbar and clear filter
  const handleClearFilters = () => {
    fetchJobs();
    setResetSearchBar((prev) => !prev); // Trigger reset in search bar
  };

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <SearchBar
          fetchCustomJobs={fetchCustomJobs}
          resetSearchBar={resetSearchBar}
        />
        {customSearch && (
          <button
            onClick={handleClearFilters}
            className="flex pl-[1250px] mb-2"
          >
            <p className="bg-blue-500 px-10 py-2 rounded-md text-white">
              Clear Filters
            </p>
          </button>
        )}
        {loading
          ? console.log("uploading Dummy data....")
          : console.log(message)}
        {jobs.map((job) => (
          <JobCard key={job.id} {...job} />
          // console.log(job)
        ))}
      </div>
    </>
  );
}

export default App;
