import { useState } from "react";
import {Footer} from "./components/Footer.jsx";
import {Header} from "./components/Header.jsx";
import {Pagination} from "./components/Pagination.jsx";
import {SearchFormSection} from "./components/SearchFormSection.jsx";
import {JobListings} from "./components/JobListings.jsx";

function App() {

  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5


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
          {/* <JobListings /> */}
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
