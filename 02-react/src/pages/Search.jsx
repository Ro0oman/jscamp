import { useState } from "react";
import {Pagination} from "../components/Pagination.jsx";
import {SearchFormSection} from "../components/SearchFormSection.jsx";
import {JobListings} from "../components/JobListings.jsx";
import jobsData from "../data.json";

const RESULTS_PER_PAGE = 5

export function SearchPage() {
  const [filters, setFilters] = useState({
    technology: "",
    location: "",
    experienceLevel: "",
  });
  const [textToFilter, setTextToFilter] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const jobsFilteredByFilters = jobsData.filter((job) => {
    return (
      (filters.technology === "" || job.data.technology === filters.technology)
      && (filters.location === "" || job.data.modalidad === filters.location)
      && (filters.experienceLevel === "" || job.data.nivel === filters.experienceLevel)
    )
  })

  const jobsWithTextFilter = textToFilter === ''
    ? jobsFilteredByFilters
    : jobsFilteredByFilters.filter((job) => {
      return job.titulo.toLowerCase().includes(textToFilter.toLowerCase()) 
    })
    
  const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE)


  const pageResults = jobsWithTextFilter.slice(
    (currentPage-1) * RESULTS_PER_PAGE, //Pagina 1 -> 0, Pagina 2 -> 5, Pagina 3 -> 10
    currentPage * RESULTS_PER_PAGE //Pagina 1 -> 5, Pagina 2 -> 10, Pagina 3 -> 15
  )

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log(`Page changed to ${page}`);
  }

  const handleSearch = (filters) => {
    setCurrentPage(1)
    setFilters(filters)
  }

  const handleTextFilter = (newTextToFilter) => {
    setTextToFilter(newTextToFilter)
    setCurrentPage(1)
  }



  return (
      <main>
        <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter} />
        <section>
          <JobListings jobs={pageResults} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </section>
      </main>
  );
}
