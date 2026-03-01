import { JobCard } from "./JobCard.jsx";

export function JobListings({jobs}) {
  return (
    <>
      <div className="jobs-listings">
        {
          jobs.length === 0 && 
          <p style={{textAlign:"center"}}>No se encontraron resultados</p>
        }
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}
