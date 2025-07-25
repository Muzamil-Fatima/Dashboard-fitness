import search from "../../Icons/search.svg";
export default function Search() {
  return (
    <div className="flex justify-between">
      <input
        type="text"
        className="relative w-[308px] h-[55px] border-1 rounded-[15px] font-secondary font-medium text-[16px] opacity-50"
        placeholder="Search"
      />
      <img src={search} alt="" className="absolute mt-3 w-6 h-6" />
    </div>
  );
}
