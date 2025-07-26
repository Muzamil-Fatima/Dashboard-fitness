import { useEffect, useState } from "react";
import Search from "../../Component/Search";
import send from "../../../Icons/send.svg";
import deletes from "../../../Icons/delete.svg";
import arrow from "../../../Icons/arrow-up.svg";
import group from "../../../Icons/group.svg";

export default function Classes() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/clients")
      .then((response) => response.json())
      .then((data) => setClients(data))
      .catch((error) => console.error("Error fetching clients: ", error));
  }, []);
  return (
    <div className="font-secondary font-medium text-[13px]">
      <h2 className="font-bold text-[40px]  mt-4 ">Clients</h2>
      <Search />
      <div className="mt-2 mr-4 border-[1px] border-[var(--color-white)]/15 rounded-[15px] ">
        <div className="flex py-3 px-2 items-center justify-between border-b-[1px] border-b-[var(--color-white)]/15">
          <div className="text-[16px]">All Clients</div>
          <div className="flex gap-3 items-center justify-end">
            <button className=" flex items-center justify-between px-2 w-[132px] h-[34px] rounded-[27px] bg-[var(--color-darker)] gap-1.5">
              Send Email <img src={send} alt="" className="w-[16px] h-[15px]" />
            </button>
            <img
              src={deletes}
              alt=""
              className="px-2.5 border-l-[1px] border-r-[1px]  border-l-[var(--color-white)]/15  border-r-[var(--color-white)]/15 m-1"
            />
            <p className="text-[14px]">
              1-10 <span className="opacity-20">of 50</span>
            </p>
          </div>
        </div>
        <div>
          <div className="text-[13px] font-medium">
            <table className="border-collapse border-spacing-y-3 w-full">
              <thead>
                <tr className="border-b-[1px] border-b-[var(--color-white)]/15">
                  <th className=" px-4 py-3">
                    <div className="flex items-center gap-1">
                      ID
                      <img src={group} className="w-[8px] h-4" />
                    </div>
                  </th>
                  <th className=" px-4 py-3">
                    <div className="flex items-center gap-1">
                      Name
                      <img src={group} className="w-[8px] h-4" />
                    </div>
                  </th>
                  <th className=" px-4 py-3">
                    <div className="flex items-center gap-1">
                      Email
                      <img src={group} className="w-[8px] h-4" />
                    </div>
                  </th>
                  <th className=" px-4 py-3">
                    <div className="flex items-center gap-1">
                      Sessions
                      <img src={group} className="w-[8px] h-4" />
                    </div>
                  </th>
                  <th className=" px-4 py-3">
                    <div className="flex items-center gap-1">
                      Classes
                      <img src={group} className="w-[8px] h-4" />
                    </div>
                  </th>
                  <th className=" px-4 py-3">
                    <div className="flex items-center gap-1">
                      Status
                      <img src={group} className="w-[8px] h-4" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr
                    key={client.id}
                    className=" border-b-[1px] border-b-[var(--color-white)]/15 text-[13px] font-medium"
                  >
                    <td className="px-4 py-3">{client.id}</td>
                    <td className="px-4 py-3 flex items-center gap-2 ">
                      <img
                        src={client.profile}
                        alt={client.name}
                        className="w-6 h-6 rounded-full"
                      />
                      {client.name}
                    </td>

                    <td className="px-4 py-3">{client.email} </td>
                    <td className="px-4 py-3">{client.sessions}</td>
                    <td className="px-4 py-3">{client.classes} </td>
                    <td className="px-4 py-3">
                      {" "}
                      <button className="w-[68px] h-6 rounded-[27px] text-[#14CA74] bg-[#14CA74]/50 border-[0.6px] border-[#14CA74]">
                        {client.status}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <p>
          1-10 <span>of 50</span>
        </p>
        <p>
          Row per Page:
          <select name="" id="">
            <option value="">10</option>
            <option value="">20</option>
            <option value="">50</option>
          </select>
        </p>
        <div>
          <img src={arrow} alt="" />
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
}
