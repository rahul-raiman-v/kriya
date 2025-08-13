import React from 'react';
import { useComboPageStore } from '../../store/useComboPageStore/index';
import { Hotel, PartyPopper, Ticket, Trophy } from 'lucide-react';
import ComboImage from '/comboImage.png';
import { useNavigate } from 'react-router';
import { cn } from "../../lib/";

export function ComboDetail() {

    const selectedCombo = useComboPageStore((state) => state.selectedCombo);

    const navigate = useNavigate();

    const [isCheck, setIsCheck] = React.useState(false);

    if (!selectedCombo) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans text-xl text-gray-700">
                No combo selected. Please go back and select a combo.
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6 sm:p-10 flex flex-col items-center font-sans">
            <div className="bg-white rounded-3xl border border-gray-200 p-8 w-full max-w-4xl shadow-xl">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-indigo-800 mb-8">
                    {selectedCombo.combo} Details
                </h2>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 rounded-2xl overflow-hidden mb-8">
                        <img
                            src={ComboImage || "https://placehold.co/600x300/E0F2F7/000000?text=Combo+Details+Image"}
                            alt='combo illustration'
                            className="w-full h-auto object-cover"
                            loading='lazy'
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x300/E0F2F7/000000?text=Image+Error" }}
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-2 text-gray-700">
                        <div className="flex items-start gap-2 text-lg">
                            <Ticket size={26} className="text-indigo-600 flex-shrink-0" />
                            <p className="leading-relaxed font-medium">Events:</p>
                            <p className="leading-relaxed">{selectedCombo.events}</p>
                        </div>
                        <div className="flex items-start gap-2 text-lg">
                            <Hotel size={26} className="text-indigo-600 flex-shrink-0" />
                            <p className="leading-relaxed font-medium">Accommodation:</p>
                            <p className="leading-relaxed">{selectedCombo.hostel}</p>
                        </div>
                        {selectedCombo.prize && <div className="flex items-center gap-2 text-lg">
                            <Trophy size={26} className="text-indigo-600 flex-shrink-0" />
                            <p className="leading-relaxed font-medium">Prizes:</p>
                            <p className="leading-relaxed">{selectedCombo.prize}</p>
                        </div>}
                        <div className="flex items-start gap-2 text-lg">
                            <PartyPopper size={26} className="text-indigo-600 flex-shrink-0" />
                            <p className="leading-relaxed font-medium">Tickets for Star Night(Culturals) are included!</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <p className='text-xl font-bold text-gray-800 mb-4'>Rules and regulations</p>
                    <div className="bg-gray-100 p-4 rounded-xl mb-4">
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li>All participants must be currently enrolled students at a recognized educational institution.</li>
                            <li>A valid student ID is required for verification at the event venue.</li>
                            <li>Participants are responsible for their personal belongings.</li>
                            <li>The organizers reserve the right to disqualify any participant for misconduct.</li>
                            <li>All decisions made by the event judges and organizers are final.</li>
                            <li>Please refer to the official event website for a full list of rules and regulations.</li>
                        </ul>
                    </div>
                    <div className='flex gap-2 items-center mb-6'>
                        <input
                            type='checkbox'
                            checked={isCheck}
                            onChange={(e) => setIsCheck(e.target.checked)}
                            className='w-4 h-4 cursor-pointer accent-indigo-600'
                            id="agree-checkbox"
                        />
                        <label htmlFor="agree-checkbox" className="text-gray-700 cursor-pointer">I Agree to the Rules and Regulations</label>
                    </div>
                    <div className="text-center">
                        <button
                            className={cn(
                                'inline-block bg-indigo-600 text-white font-bold py-3 px-12 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 text-lg',
                                !isCheck && 'opacity-50 cursor-not-allowed'
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
        </div>
    );
}