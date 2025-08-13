import { Mail, Phone } from 'lucide-react';
import PropTypes from 'prop-types';
import React from 'react';

export const TeamsCard = ({
  variant,
  name = 'Rajkumar',
  designation = 'Event Organizer',
  phone = '+91 1234567890',
  email = 'rajkumar@bitsathy.ac.in',
  image = '/inauguration.jpg',
}) => {
  if (variant?.trim() === 'chairman') {
    return (
      <div className="shadow-xl max-w-[317.45px] w-full rounded-lg px-8 py-12 h-full border  flex flex-col gap-y-2.5 bg-white ">
        <div className="flex items-center flex-col">
          <img
            src={image}
            alt=""
            className="size-30 rounded-full shadow-2xl"
            loading="lazy"
          />
          <div className=" mt-3 ">
            <p className="leading-tight text-2xl text-center text-gray-800 truncate max-md:text-xl max-sm:text-lg">
              {name}
            </p>
            <p className="leading-tight text-lg text-center text-gray-700 max-md:text-md max-sm:text-sm">
              {designation}
            </p>
          </div>
        </div>
      </div>
    );
  } else if (variant?.trim() === 'code') {
    return (
      <div className="shadow-xl rounded-lg px-6 py-5 border w-full flex flex-col gap-y-2.5 bg-white max-w-[317.45px] h-full">
        <div className="flex items-center flex-col">
          <img
            src={image}
            alt=""
            className="size-30 rounded-full shadow-2xl object-cover"
            loading="lazy"
          />
          <div className="flex flex-col gap-y-1 mt-1.5">
            <p className="leading-tight text-2xl text-center text-gray-800 truncate max-md:text-xl max-sm:text-lg">
              {name}
            </p>
            <p className="leading-tight text-lg text-center text-gray-700 max-md:text-md max-sm:text-sm">
              {designation}
            </p>
          </div>
        </div>
        {phone.trim() && email.trim() && <hr className="border-gray-400" />}
        <div className="flex flex-col gap-y-1 items-center">
          {phone.trim() && (
            <div className="flex items-center gap-x-4">
              <Phone className="size-6 text-gray-600" />
              <p className="text-gray-600 text-lg">{phone}</p>
            </div>
          )}
          {email.trim() && (
            <div className="">
              <p className="text-gray-600 text-lg text-ellipsis overflow-hidden font-semibold text-center">
                {email}
              </p>
              <p className="text-gray-800 text-lg text-ellipsis overflow-hidden font-bold text-center">
                Code Circle
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="shadow-xl rounded-lg px-6 py-5 border w-full flex flex-col gap-y-2.5 bg-white max-w-[317.45px] h-full">
      <div className="flex items-center flex-col">
        <img
          src={image}
          alt=""
          className="size-30 rounded-full shadow-2xl"
          loading="lazy"
        />
        <div className="flex flex-col gap-y-1 mt-1.5">
          <p className="leading-tight text-2xl text-center text-gray-800 truncate max-md:text-xl max-sm:text-lg">
            {name}
          </p>
          <p className="leading-tight text-lg text-center text-gray-700 max-md:text-md max-sm:text-sm">
            {designation}
          </p>
        </div>
      </div>
      {phone.trim() && email.trim() && <hr className="border-gray-400" />}
      <div className="flex flex-col gap-y-1">
        {phone.trim() && (
          <div className="flex items-center gap-x-4">
            <Phone className="size-6 text-gray-600" />
            <p className="text-gray-600 text-lg">{phone}</p>
          </div>
        )}
        {email.trim() && (
          <div className="flex items-center gap-x-4">
            <Mail className="size-6 text-gray-600" />
            <p className="text-gray-600 text-lg text-ellipsis overflow-hidden">
              {email}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

TeamsCard.propTypes = {
  variant: PropTypes.String,
  name: PropTypes.String,
  designation: PropTypes.String,
  phone: PropTypes.String,
  email: PropTypes.String,
  image: PropTypes.String,
};
