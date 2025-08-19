import React from 'react';
import { useNavigate } from 'react-router';
import { Calendar, Hotel, IndianRupee, Ticket, Trophy } from 'lucide-react';
// import ComboImage from '/comboImage.png';
import { useComboStore } from '../../store/useComboStore/index';
import { useComboPageStore } from '../../store/useComboPageStore/index';
import { useShallow } from 'zustand/react/shallow';

export function ComboPage() {
  const ComboData = useComboStore(useShallow((state) => state.ComboData));
  const ComboDeligatesData = useComboStore(
    useShallow((state) => state.ComboDeligatesData)
  );
  const ComboStallsData = useComboStore(
    useShallow((state) => state.ComboStallsData)
  );
  const setSelectedCombo = useComboPageStore(
    useShallow((state) => state.setSelectedCombo)
  );
  const navigate = useNavigate();

  const renderComboCards = (data) => {
    return data.map((item) => (
      <div
        className="bg-white rounded-3xl border border-blue-100 p-6 sm:p-8 w-full max-w-sm md:max-w-md shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
        key={item.id}
      >
        <div className="rounded-2xl overflow-hidden mb-6">
          <img
            // src={ComboImage || "https://placehold.co/380x200/F0F8FF/000000?text=Combo+Image"}
            src={
              item.image ||
              'https://placehold.co/380x200/F0F8FF/000000?text=Combo+Image'
            }
            alt="Combo Image"
            className="w-full h-[200px] object-cover transform transition-transform duration-300 hover:scale-110 bg-blue-50"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                'https://placehold.co/380x200/F0F8FF/000000?text=Image+Error';
            }}
          />
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-indigo-600 text-center mb-6">
          {item.combo}
        </h3>
        <div className="flex flex-col gap-4 sm:gap-4 text-gray-600">
          <div className="flex items-start gap-3 sm:gap-3 text-base sm:text-lg">
            <Ticket size={24} className="text-blue-500 flex-shrink-0 mt-1" />
            <p className="leading-relaxed">{item.events}</p>
          </div>
          <div className="flex items-start gap-3 text-base sm:text-lg">
            <IndianRupee
              size={24}
              className="text-indigo-600 flex-shrink-0 mt-1"
            />
            <p className="leading-relaxed">
              <span className="font-medium">Registration Fee: &#8377;</span>
              {item.fee}
              {item.prize && ' per Person (including GST)'}
              {!item.prize &&
                item.isTrue &&
                ' per Person / Day (including GST)'}
              {!item.prize && !item.isTrue && ' for 3 days (including GST)'}
            </p>
          </div>
          {item.date && (
            <div className="flex items-start gap-3 sm:gap-3 text-base sm:text-lg">
              <Calendar
                size={24}
                className="text-blue-500 flex-shrink-0 mt-1"
              />
              <p className="leading-relaxed">Date: {item.date}</p>
            </div>
          )}
          <div className="flex items-start gap-3 sm:gap-3 text-base sm:text-lg">
            <Hotel size={24} className="text-blue-500 flex-shrink-0 mt-1" />
            <p className="leading-relaxed">{item.hostel}</p>
          </div>
          {item.prize && (
            <div className="flex items-start gap-3 sm:gap-3 text-base sm:text-lg">
              <Trophy size={24} className="text-blue-500 flex-shrink-0 mt-1" />
              <p className="leading-relaxed">{item.prize}</p>
            </div>
          )}
        </div>
        <div className="text-center mt-8 sm:mt-4">
          <button
            className="inline-block bg-blue-600 text-white font-bold py-2.5 px-8 sm:py-3 sm:px-10 rounded-[8px] shadow-md hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 text-base sm:text-lg cursor-pointer"
            onClick={() => {
              setSelectedCombo(item);
              navigate('/combo-detail');
            }}
          >
            Know More
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="bg-gradient-to-br from-pink-100 via-blue-50 to-purple-100 p-6 sm:p-10 font-sans">
      <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-12">
        Choose Your Perfect Combo!
      </h2>

      <div className="mb-12">
        <h3 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Students and Participants
        </h3>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {renderComboCards(ComboData)}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            Delegates (Researchers, Innovators, Incubatees, Startups and
            Entrepreneurs)
          </h3>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {renderComboCards(ComboDeligatesData)}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            Stall Registration
          </h3>
          <p className="text-transparent text-3xl">S</p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {renderComboCards(ComboStallsData)}
          </div>
        </div>
      </div>
    </div>
  );
}
