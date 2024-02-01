import Navbar from "../common/widgets/Navbar/Navbar";
import SideBar from "../common/widgets/SideBar/SideBar";
import Table from "../common/components/Table/Table";
import Filter from "../common/components/Filter/Filter";
import SearchBar from "../common/components/SearchBar/SearchBar";

const ForTest = () => {
  return (
    <div className="flex">
      <SideBar></SideBar>
      <div className="flex-1 ">
        <Navbar name="Complaint’s"></Navbar>
        <SearchBar></SearchBar>
        <Filter></Filter>
        <Table></Table>
      </div>
    </div>
  );
};

export default ForTest;
