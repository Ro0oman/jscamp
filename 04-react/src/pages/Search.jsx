import { useState, useEffect } from "react";
import { Pagination } from "../components/Pagination.jsx";
import { SearchFormSection } from "../components/SearchFormSection.jsx";
import { JobListings } from "../components/JobListings.jsx";
import { useRouter } from "../hooks/useRouter.jsx";



const RESULTS_PER_PAGE = 5;

const useFilters = () => {
  const [filters, setFilters] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return {
      technology: params.get("technology") || "",
      location: params.get("location") || "",
      experienceLevel: params.get("experienceLevel") || "",
    };
  });
  const [textToFilter, setTextToFilter] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("text") || "";
  });
  const [currentPage, setCurrentPage] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page"), 10);
    return isNaN(page) || page < 1 ? 1 : page;
  });
  const [jobs, setJobs] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const {navigateTo} = useRouter()

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);

        const params = new URLSearchParams();

        if (textToFilter) {
          params.append("text", textToFilter);
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

        const response = await fetch(
          `https://jscamp-api.vercel.app/api/jobs?${queryParams}`,
        );
        const json = await response.json();
        setJobs(json.data);
        setTotal(json.total);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, [filters, textToFilter, currentPage]);

  useEffect(() => {
    const params = new URLSearchParams();

    if (textToFilter) {
      params.append("text", textToFilter);
    }
    if (filters.technology) {
      params.append("technology", filters.technology);
    }
    if (filters.location) {
      params.append("location", filters.location);
    }
    if (filters.experienceLevel) {
      params.append("experienceLevel", filters.experienceLevel);
    }

    if (currentPage > 1) {
      params.append("page", currentPage);
    }

    const newUrl = params.toString() ?
     `${window.location.pathname}?${params.toString()}`
     :  window.location.pathname;

    navigateTo(newUrl);

  },[filters, textToFilter, currentPage, navigateTo]);


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

  return {
    loading,
    total,
    totalPages,
    currentPage,
    jobs,
    handlePageChange,
    handleSearch,
    handleTextFilter,
    textToFilter,
    filters,
  };
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
    textToFilter,
  } = useFilters();

  const title = loading
    ? "Cargando..."
    : `Resultados : ${total}, Pagina: ${currentPage} - DevJobs`;

  return (
    <main>
      <title>{title}</title>
      <meta
        name="description"
        content="Resultados de búsqueda de empleos en DevJobs"
      />
      <SearchFormSection
        onSearch={handleSearch}
        initialText={textToFilter}
        onTextFilter={handleTextFilter}
      />

      <section>
        <h2 style={{ textAlign: "center" }}>Resultados de búsqueda</h2>
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <JobListings jobs={jobs} />
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
}
