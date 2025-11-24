import {Footer} from "./components/Footer.jsx";
import {Header} from "./components/Header.jsx";
import {Pagination} from "./components/Pagination.jsx";
import {SearchFormSection} from "./components/SearchFormSection.jsx";
import {JobListings} from "./components/JobListings.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <SearchFormSection />
        <section>
          {/* <JobListings /> */}
          <Pagination currentPage={1} totalPages={10}/>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
