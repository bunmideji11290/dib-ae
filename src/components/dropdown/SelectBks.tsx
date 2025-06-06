'use client';

import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';

interface Bks {
  id: number;
  name: string;
  resize?: boolean;
}

interface SelectBksProps {
  selectedBank: Bks | null;
  setSelectedBank: (bank: Bks) => void;
}

const SelectBks: React.FC<SelectBksProps> = ({ selectedBank, setSelectedBank }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSelectBank = (bks: Bks) => {
    setSelectedBank(bks);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full">
      <div className="flex relative items-center justify-between w-full">
        <div className="flex relative w-full items-center gap-1">
          <input
            type="text"
            readOnly
            value={selectedBank ? selectedBank.name : ''}
            onClick={() => setIsModalOpen(true)}
            placeholder="Select a bank"
            // className={`w-full p-3 my-2 min-h-[60px] bg-[#f8f8f8] rounded-lg border-none text-[#2e2e2e] focus:outline-none ${selectedBank ? "pl-[55px]" : ""} ${selectedBank.resize ? "pl-[65px]" : ""}`}
            className={`w-full p-3 my-2 min-h-[60px] bg-[#f8f8f8] rounded-lg border-none text-[#2e2e2e] focus:outline-none ${selectedBank ? (selectedBank.resize ? 'pl-[65px]' : 'pl-[55px]') : ''}`}
          />
        </div>
        <IoIosArrowForward className="text-[#2e2e2e] absolute right-4" />
      </div>

      <div className={`fixed z-20 w-full top-0 right-0 left-0 ${isModalOpen ? 'block' : 'hidden'}`}>
        <div className="bg-white rounded shadow-lg w-full h-screen">
          <div className="bg-[#d71e28] text-[#ffffff] sticky top-0 z-10 p-3 py-5 flex items-center justify-between gap-1">
            <div className="flex items-center gap-2">
              <IoClose className="relative text-xl top-[1px]" onClick={handleCloseModal} />
              <span className="font-semibold">Select Bank</span>
            </div>
          </div>
          <div className="relative p-4">
            <FiSearch className="absolute text-[#d71e28] text-2xl left-[28px] top-[42px]" />
            <input
              type="text"
              placeholder="Search Bank Name"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-12 p-3 my-2 mb-4 min-h-[60px] bg-[#f8f8f8] rounded-lg border-none text-[#2e2e2e] focus:outline-none"
            />
            <div className="max-h-[500px] py-4 border rounded-lg shadow-sm overflow-y-auto">
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectBks;
