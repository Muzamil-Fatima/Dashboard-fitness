import search from "../../Icons/search.svg";
export default function Search() {
  return (
    <div className="flex justify-between mt-3">
      <input
        type="text"
        className=" px-2 relative w-[300px] h-[50px] border-1 rounded-[15px] font-secondary font-medium text-[16px] opacity-50"
        placeholder="Search"
       
      />
        <img src={search} alt="" className="absolute left-143 mt-3.5 w-6 h-6 flex justify-center items-center" />
     
    </div>
  );
}
