import React from 'react';
import { IoFilterSharp } from 'react-icons/io5';
import { RiMapPin5Fill } from 'react-icons/ri';

const Demo = () => {
  return (
    <div>
      <div className="overflow-x-auto w-full mt-5">
        {/* Table header */}
        <table className="min-w-full leads-table">
          <thead className="text-black text-[15px] border-y border-black">
            <tr>
              <th className="py-3 px-3 text-left font-semibold">Username</th>
              <th className="py-3 px-3 text-left font-semibold">Project Title</th>
              <th className="py-3 px-3 text-left font-semibold">Location</th>
              <th className="py-3 px-3 text-right font-semibold">
                <div className="flex justify-end gap-2 items-center">
                  <h5 className="flex gap-2 items-center">Filter By: <IoFilterSharp className="size-[20px] text-black" /></h5>
                  {/* Date/Time Picker */}
                  <div className="flex items-center space-x-2 border border-gray-300 rounded-md w-[200px] xl:w-[254px] py-1 px-2">
                    <label htmlFor="dateTime" className="text-gray-700">Date/Time:</label>
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateTimeChange}
                      showTimeSelect
                      timeFormat="hh:mm aa"
                      timeIntervals={15}
                      dateFormat="dd/MM/yyyy | hh:mm aa"
                      placeholderText="Select Date | Time"
                      className="p-1 w-full font-normal outline-none"
                      id="dateTime"
                    />
                  </div>

                  {/* Location Picker */}
                  <div className="flex items-center space-x-2 border border-gray-300 rounded-md w-[200px] xl:w-[254px] py-1 px-2">
                    <label htmlFor="location" className="text-gray-700">Location:</label>
                    <select defaultValue="Select" name="location" id="location" className="font-normal w-full capitalize py-1 outline-none" onChange={handleLocationChange}>
                      <option value="Select" disabled>Select location</option>
                      {
                        uniqueLocations?.map((data: any, i: number) => (
                          <option key={i} value={data}>{data}</option>
                        ))
                      }
                    </select>
                  </div>
                </div>
              </th>
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            <tr className="h-4"></tr>
            {
              filteredData.map((data: any, i: number) => (
                <tr key={i} className="bg-[#07242B] text-white border-y-8 border-white">
                  {/* Username column */}
                  <td className="py-3 px-3 text-[20px] xl:text-[25px] font-semibold capitalize">
                    {data?.userDisplayName}
                  </td>
                  {/* Project title column */}
                  <td className="py-2 px-3 text-[15px] xl:text-[20px] text-[#ACACAC] capitalize">
                    {data?.projectTitle}
                  </td>
                  {/* Location column */}
                  <td className="py-2 px-3 text-[15px] xl:text-[20px] text-[#ACACAC] capitalize">
                    <div className="flex gap-3 items-center">
                      <RiMapPin5Fill className="text-[#FFBE00]" />
                      <p>{data?.location}</p>
                    </div>
                  </td>
                  {/* Date/Time and Responses column */}
                  <td className="py-2 px-3 text-right">
                    <div className="text-[12px] xl:text-[15px] text-[#ACACAC] flex items-center justify-between">
                      <p>Date/Time: {data?.date} | {data?.time}</p>
                      <p className="text-[#FFBE00]">{data?.pendingResponse} of {data?.totalResponse} Responses</p>
                      <button onClick={() => openModal(data)} className="py-[5px] px-5 bg-[#FFBE00] rounded-md text-black font-semibold hover:bg-[#d3a416] transition-all duration-300">View</button>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>

        {/* modal */}
        {modalData && (
          <LeadsModal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            content={
              <div className="py-3 px-2">
                <div className="flex pb-2">
                  <img className="w-[60px] h-[60px] object-cover" src={modalData?.userPhoto} alt="work alat" />

                  <div className="px-2">
                    <h2 className="capitalize font-semibold text-[15px]">{modalData?.userDisplayName} <span className="text-sm font-thin lowercase">{modalData?.username}</span></h2>
                    <p className="text-sm font-semibold capitalize">Project title: {modalData.projectTitle}</p>
                  </div>
                </div>
                <p className="text-[15px] pb-3">{modalData?.projectDescription}</p>
                <div className="flex flex-col sm:flex-row justify-center items-center w-full bg-[#F3F3F3] py-2 mx-auto">
                  <div className="flex gap-2 w-[40%] justify-center items-center">
                    <FaPhone className="size-[15px] text-[#FFBE00]" />
                    <p className="text-[15px]"><MaskedPhoneNumber phoneNumber={modalData?.userPhoneNumber} /></p>
                  </div>
                  <div className="w-[2px] bg-[#ABABAB] h-[19px] sm:block hidden"></div>
                  <div className="flex w-[40%] justify-center items-center">
                    <MaskedEmail email={modalData.userEmail} />
                  </div>
                  <p className="text-[15px] font-semibold text-[#FFBE00]">reveal</p>
                </div>

                {/* here will be action buttons for approve and reject which will be connect to the backend */}
                <div className="flex justify-center gap-3 pt-5">
                  <button className="flex items-center justify-center gap-2 bg-[#FFBE00] px-8 text-[15px] font-semibold py-2 rounded-md hover:bg-[#e8b418] transition-all duration-300"><RiCloseLargeFill className="size-[15px] text-black" /> Reject</button>
                  <button className="flex items-center justify-center gap-2 bg-[#07242B] px-8 text-[15px] font-semibold text-white rounded-md hover:bg-[#07242be8] transition-all duration-300"><BiSolidChat className="size-[15px] text-white" /> Approve</button>
                </div>
              </div>
            }
          />)}
      </div>
    </div>
    </div >
  );
};

export default Demo;