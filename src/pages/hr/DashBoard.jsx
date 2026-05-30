import { useState } from "react"
import CandidateOverviewSection from "../../components/clientAdmin/candidate/CandidateOverviewSection"
import Pagination from "../../components/clientAdmin/home/Pagination"
import ProfileHeader from "../../components/hr/ProfileHeader"
import TableSection from "../../components/hr/TableSection"



const DashBoard = () => {
  const [page, setPage] = useState(1);
  const totalPages = 9;

  return (
    <div className="p-4 flex flex-col gap-5">
        <ProfileHeader showExport={true} showAddCandidate={true}/>
        <CandidateOverviewSection />
        <TableSection isToolBarRequired = {false} />
        <Pagination currentPage={page}
        totalPages={9}
        onPageChange={setPage}/>
    </div>
)
}

export default DashBoard;