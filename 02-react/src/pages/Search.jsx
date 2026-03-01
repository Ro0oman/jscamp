import { useState, useEffect } from "react";
import { Pagination } from "../components/Pagination.jsx";
import { SearchFormSection } from "../components/SearchFormSection.jsx";
import { JobListings } from "../components/JobListings.jsx";


const RESULTS_PER_PAGE = 5;

const useFilters = () => {
  const [filters, setFilters] = useState({
    technology: "",
    location: "",
    experienceLevel: "",
  });
  const [textToFilter, setTextToFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [jobs, setJobs] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    async function fetchJobs() {
      try{
        setLoading(true);

      const params = new URLSearchParams();

        if (filters.search) {
          params.append("text", filters.search);
        }
        if (filters.technology) {
          params.append("technology", filters.technology);
        }
        if (filters.location) {
          params.append("type", filters.location);
        }
        if (filters.experienceLevel) {
          params.append("level", filters.experienceLevel);
        }

        

        const offset = (currentPage - 1) * RESULTS_PER_PAGE;
        params.append("offset", offset.toString());
        params.append("limit", RESULTS_PER_PAGE.toString());

        const queryParams = params.toString();

        const response = await fetch(`https://jscamp-api.vercel.app/api/jobs?${queryParams}`)
        const json = await response.json();
        setJobs(json.data)
        setTotal(json.total)
      }catch(error){
        console.error('Error fetching jobs:', error);
      }finally{
        setLoading(false);
      }
    }
    fetchJobs()
  },[filters, textToFilter, currentPage])


  const totalPages = Math.ceil(total / RESULTS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log(`Page changed to ${page}`);
  };

  const handleSearch = (filters) => {
    setCurrentPage(1);
    setFilters(filters);
  };

  const handleTextFilter = (newTextToFilter) => {
    setTextToFilter(newTextToFilter);
    setCurrentPage(1);
  };

  return{
    loading,
    total,
    totalPages,
    currentPage,
    jobs,
    handlePageChange,
    handleSearch,
    handleTextFilter,
  }
};

export function SearchPage() {

  const {
    loading,
    totalPages,
    total,
    currentPage,
    jobs,
    handlePageChange,
    handleSearch,
    handleTextFilter,
  } = useFilters();



  const title = loading ? 'Cargando...' : `Resultados : ${total}, Pagina: ${currentPage} - DevJobs`;

  return (
    <main>
      <title>{title}</title>
      <meta name="description" content="Resultados de búsqueda de empleos en DevJobs" />
      <SearchFormSection
        onSearch={handleSearch}
        onTextFilter={handleTextFilter}
      />

      <section>
        {
          loading ? <div  className="spinner"></div> : <JobListings jobs={jobs} />
        }
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
}
