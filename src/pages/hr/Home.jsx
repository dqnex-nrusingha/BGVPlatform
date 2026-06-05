import { useState } from "react";
import Pagination from "../../components/clientAdmin/home/Pagination";
import ProfileHeader from "../../components/hr/ProfileHeader";
import CardSection from "../../components/hr/CardSection";
import TableSection from "../../components/hr/TableSection";
import TableToolbar from "../../components/hr/TableToolbar";

const Home = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("all");

  return (
    <div className="p-4 flex flex-col gap-5">
      <ProfileHeader showExport={false} showAddCandidate={false} />
      <CardSection />
      <TableToolbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <TableSection
        searchTerm={searchTerm}
        sortBy={sortBy}
      />
      <Pagination
        currentPage={page}
        totalPages={9}
        onPageChange={setPage}
      />
    </div>
  );
};

export default Home;