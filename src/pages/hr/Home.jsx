import { useState } from "react"
import Pagination from "../../components/clientAdmin/home/Pagination"
import ProfileHeader from "../../components/hr/ProfileHeader"
import TableSection from "../../components/hr/TableSection"
import TableToolbar from "../../components/hr/TableToolbar"


const Home = () => {
  const [page, setPage] = useState(1);
  const totalPages = 9;
  return (
    <div className="p-4 flex flex-col gap-5">
      <ProfileHeader showExport={false} showAddCandidate={true}/>
      <TableToolbar/>
      <TableSection/>
      <Pagination currentPage={page}
        totalPages={9}
        onPageChange={setPage}/>
    </div>
  )
}

export default Home