import React from 'react';
import { useComboPageStore } from '../../store/useComboPageStore/index';
import { Hotel, PartyPopper, Ticket, Trophy } from 'lucide-react';
import ComboImage from '/comboImage.png';
import { useNavigate } from 'react-router';
import { cn } from "../../lib/";
import { useShallow } from "zustand/react/shallow"

React.lazy(() => import('react'));
React.lazy(() => import('../../store/useComboPageStore/index'));
React.lazy(() => import('lucide-react'));
React.lazy(() => import('/comboImage.png'));
React.lazy(() => import('react-router'));
React.lazy(() => import('../../lib/'));

export function ComboDetail() {
    const selectedCombo = useComboPageStore(useShallow((state) => state.selectedCombo));
    const navigate = useNavigate();
    const [isCheck, setIsCheck] = React.useState(false);

    // If no combo is selected, show fallback message
    if (!selectedCombo) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans text-base sm:text-xl text-gray-700 p-4 text-center">
                No combo selected. Please go back and select a combo.
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-10 flex flex-col items-center font-sans">
            <div className="bg-white rounded-3xl border border-gray-200 p-5 sm:p-8 w-full max-w-4xl shadow-xl">
                
                {/* Combo Title */}
                <h2 className="text-2xl sm:text-4xl font-extrabold text-center text-indigo-800 mb-6">
                    {selectedCombo.combo} Details
                </h2>

                {/* Image + Info */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6">
                    <div className="flex-1 rounded-2xl overflow-hidden">
                        <img
                            src={
                                selectedCombo.image ||
                                ComboImage ||
                                "https://placehold.co/600x300/E0F2F7/000000?text=Combo+Details+Image"
                            }
                            alt={`${selectedCombo.combo} illustration`}
                            className="w-full h-auto object-cover"
                            loading='lazy'
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://placehold.co/600x300/E0F2F7/000000?text=Image+Error";
                            }}
                        />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col gap-3 text-gray-700">
                        <div className="flex items-start gap-3 text-base sm:text-lg">
                            <Ticket size={24} className="text-indigo-600 flex-shrink-0 mt-1" />
                            <p className="leading-relaxed">
                                <span className="font-medium">Events: </span>
                                {selectedCombo.events}
                            </p>
                        </div>
                        <div className="flex items-start gap-3 text-base sm:text-lg">
                            <Hotel size={24} className="text-indigo-600 flex-shrink-0 mt-1" />
                            <p className="leading-relaxed">
                                <span className="font-medium">Accommodation: </span>
                                {selectedCombo.hostel}
                            </p>
                        </div>

                        {selectedCombo.prize && (
                            <div className="flex items-start gap-3 text-base sm:text-lg">
                                <Trophy size={24} className="text-indigo-600 flex-shrink-0 mt-1" />
                                <p className="leading-relaxed">
                                    <span className="font-medium">Prizes: </span>
                                    {selectedCombo.prize}
                                </p>
                            </div>
                        )}
                        {selectedCombo.ticket && (
                            <div className="flex items-start gap-3 text-base sm:text-lg">
                                <PartyPopper size={24} className="text-indigo-600 flex-shrink-0 mt-1" />
                                <p className="leading-relaxed font-medium">{selectedCombo.ticket}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Rules Section */}
                <section aria-labelledby="rules-heading" className="mt-6 sm:mt-8">
                    <p
                        id="rules-heading"
                        className="text-lg sm:text-xl font-bold text-gray-800 mb-3"
                    >
                        Rules and regulations
                    </p>
                    <ul className="bg-gray-100 p-4 rounded-xl mb-4 list-disc list-inside space-y-2 text-sm sm:text-base text-gray-600">
                        {Array.isArray(selectedCombo.rulesData) &&
                            selectedCombo.rulesData.map((item) => (
                                <li key={item.id}>{item.rule}</li>
                            ))}
                    </ul>
                </section>

                {/* Agreement Checkbox */}
                <div className="flex items-center gap-2 mb-6 text-sm sm:text-base">
                    <input
                        type="checkbox"
                        checked={isCheck}
                        onChange={(e) => setIsCheck(e.target.checked)}
                        className="w-4 h-4 cursor-pointer accent-indigo-600"
                        id="agree-checkbox"
                    />
                    <label
                        htmlFor="agree-checkbox"
                        className="text-gray-700 cursor-pointer"
                    >
                        I Agree to the Rules and Regulations
                    </label>
                </div>

                {/* Register Button */}
                <div className="text-center">
                    <button
                        className={cn(
                            'inline-block bg-indigo-600 text-white font-bold py-3 px-6 sm:px-12 rounded-lg shadow-lg transition-all duration-300 text-base sm:text-lg',
                            isCheck
                                ? 'hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300'
                                : 'opacity-50 cursor-not-allowed'
                        )}
                        onClick={() => {
                            if (isCheck) {
                                navigate("/");
                            }
                        }}
                        disabled={!isCheck}
                    >
                        Register Now
                    </button>
                </div>
            </div>
        </div>
    );
}
