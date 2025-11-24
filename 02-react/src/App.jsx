import { useState } from "react";
import {Footer} from "./components/Footer.jsx";
import {Header} from "./components/Header.jsx";
import {Pagination} from "./components/Pagination.jsx";
import {SearchFormSection} from "./components/SearchFormSection.jsx";
import {JobListings} from "./components/JobListings.jsx";
import jobsData from "./data.json";

const RESULTS_PER_PAGE = 5

function App() {

  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(jobsData.length / RESULTS_PER_PAGE)


  const pageResults = jobsData.slice(
    (currentPage-1) * RESULTS_PER_PAGE, //Pagina 1 -> 0, Pagina 2 -> 5, Pagina 3 -> 10
    currentPage * RESULTS_PER_PAGE //Pagina 1 -> 5, Pagina 2 -> 10, Pagina 3 -> 15
  )

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log(`Page changed to ${page}`);
  }

  return (
    <>
      <Header />
      <main>
        <SearchFormSection />
        <section>
          <JobListings jobs={pageResults} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
