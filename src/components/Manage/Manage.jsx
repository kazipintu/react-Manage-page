import { FaArrowRight } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

const Manage = () => {
  return (
    <div className="overflow-x-auto bg-stone-100">
      <div className="container mx-auto py-[20px] ps-[20px] pe-[160px]">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-[#07242B]">Manage</h1>
          <input placeholder="All" type="text" name="" className="border-2 border-stone-300 bg-stone-100 min-h-12 rounded-md pl-2 w-[180px]" />
        </div>
      </div>
      <div className="px-[40px]">
        <div className="flex mx-auto ps-[20px] border-2 border-stone-300 rounded-lg bg-white">
          <div className="w-1/5">
            <ul className="text-[#07242B] font-bold pt-[20px]">
              <li className="py-[20px]"> PAGES </li>
              <li className="py-[20px]"> CATEGORIES </li>
              <li className="py-[20px]"> SERVICES </li>
              <li className="py-[20px]"> WALLET </li>
              <li className="py-[20px]"> POINTS </li>
              <li className="py-[20px]"> BADGES </li>
              <li className="py-[20px]"> RANKING </li>
            </ul>
          </div>
          <div className="w-4/5 border-l-2 border-stone-300">
            <div className="flex justify-between items-center pe-[20px]">
              <h1 className="font-bold text-[#07242B] ps-[20px] pt-[40px] pb-[40px]">SERVICES</h1>
              <button className="flex justify-center items-center w-[140px] h-[44px] rounded-md bg-[#07242B] text-white">Add New &nbsp;<FaArrowRight className="size-3" /></button>
            </div>
            <table className="w-full text-[#07242B] text-left">
              <thead className="">
                <tr className="border-b border-t border-stone-300">
                  <th className="w-1/3 ps-[20px] font-bold pb-[10px] pt-[10px]">SERVICE NAME</th>
                  <th colSpan="2" className="w-1/3 font-bold ps-[40px] pb-[10px] pt-[10px]">CATEGORY</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-300">
                  <td className="w-1/3 ps-[20px] pt-[20px] pb-[20px]">OFFICE CLEANING</td>
                  <td className="w-1/3 ps-[40px] pt-[20px] pb-[20px]">CLEANING</td>
                  <td className="w-full pt-[20px] pb-[20px] flex gap-2 pe-[20px] justify-end items-center text-[#FFB946] font-semibold">Edit<MdDelete className="text-[#F22B3E]" /></td>
                </tr>
                <tr className="border-b border-stone-300">
                  <td className="w-1/3 ps-[20px] py-[20px]">WEBSITE DESIGN</td>
                  <td className="w-1/3 ps-[40px] py-[20px]">TECHNOLOGY</td>
                  <td className="w-full pt-[20px] pb-[20px] flex gap-2 pe-[20px] justify-end items-center text-[#FFB946] font-semibold">Edit<MdDelete className="text-[#F22B3E]" /></td>
                </tr>
                <tr className="border-b border-stone-300">
                  <td className="w-1/3 ps-[20px] py-[20px]">BOOK KEEPING SERVICE</td>
                  <td className="w-1/3 ps-[40px] py-[20px]">GENERAL ACCOUNTING</td>
                  <td className="w-full pt-[20px] pb-[20px] flex gap-2 pe-[20px] justify-end items-center text-[#FFB946] font-semibold">Edit<MdDelete className="text-[#F22B3E]" /></td>
                </tr>
                <tr className="border-b border-stone-300">
                  <td className="w-1/3 ps-[20px] py-[20px]">VACUUM CLEANER REPAIR</td>
                  <td className="w-1/3 ps-[40px] py-[20px]">BUSINESS</td>
                  <td className="w-full pt-[20px] pb-[20px] flex gap-2 pe-[20px] justify-end items-center text-[#FFB946] font-semibold">Edit<MdDelete className="text-[#F22B3E]" /></td>
                </tr>
                <tr className="border-b border-stone-300">
                  <td className="w-1/3 ps-[20px] py-[20px]">ENGLISH TEACHER</td>
                  <td className="w-1/3 ps-[40px] py-[20px]">PHOTOGRAPHY</td>
                  <td className="w-full pt-[20px] pb-[20px] flex gap-2 pe-[20px] justify-end items-center text-[#FFB946] font-semibold">Edit<MdDelete className="text-[#F22B3E]" /></td>
                </tr>
                <tr className="border-b border-stone-300">
                  <td className="w-1/3 ps-[20px] py-[20px]">WASHING MACHINE REPAIR</td>
                  <td className="w-1/3 ps-[40px] py-[20px]">REPAIR AND TECHNICAL SUPPORT</td>
                  <td className="w-full pt-[20px] pb-[20px] flex gap-2 pe-[20px] justify-end items-center text-[#FFB946] font-semibold">Edit<MdDelete className="text-[#F22B3E]" /></td>
                </tr>
                <tr className="border-b border-stone-300">
                  <td className="w-1/3 ps-[20px]">EVENT PLANNER</td>
                  <td className="w-1/3 ps-[40px] py-[20px]">ENTERTAINMENT</td>
                  <td className="w-full pt-[20px] pb-[20px] flex gap-2 pe-[20px] justify-end items-center text-[#FFB946] font-semibold">Edit<MdDelete className="text-[#F22B3E]" /></td>
                </tr>
                <tr className="border-b border-stone-300">
                  <td className="w-1/3 ps-[20px]">SHOWER INSTALLATION</td>
                  <td className="w-1/3 ps-[40px] py-[20px]">PLUMBING AND DRAINAGE</td>
                  <td className="w-full pt-[20px] pb-[20px] flex gap-2 pe-[20px] justify-end items-center text-[#FFB946] font-semibold">Edit<MdDelete className="text-[#F22B3E]" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage;