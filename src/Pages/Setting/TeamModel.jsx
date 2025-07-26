import Search from "../../Component/Search";
import add from "../../../Icons/add.svg";

export default function TeamModel(){
    return(
        <div className="w-2/3 h-[219px]">
            <div>
                <Search />
                <RoleDropDown />
            </div>
             <button className="w-[124px] h-[55px] rounded-[15px] bg-[var(--color-primary)] flex justify-center items-center">
                    <img src={add} className="h-6 w-6"/> <span className="text-[16px] ml-1.5">Add</span>
                  </button>

        </div>
    )
}