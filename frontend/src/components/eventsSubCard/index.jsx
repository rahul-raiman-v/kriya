import React from 'react';
import { Phone, UserCircle, Award, BookOpen, Users, Mic } from 'lucide-react';
import PropTypes from 'prop-types';

export const MinCard = (props) => {
  const { title, contacts, rounds, rules, rewards, prerequisites, speakers } =
    props;

  if (title === 'rounds') {
    return <RoundsCard rounds={rounds} />;
  } else if (title === 'rules') {
    return <RulesCard rules={rules} />;
  } else if (title === 'rewards') {
    return <RewardsCard rewards={rewards} />;
  } else if (title === 'prerequisites') {
    return <PrerequisitesCard prerequisites={prerequisites} />;
  } else if (title === 'speakers') {
    return <SpeakersCard speakers={speakers} />;
  } else {
    return <ContactCard contacts={contacts} />;
  }
};

MinCard.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.array,
  rounds: PropTypes.array,
  rules: PropTypes.array,
  rewards: PropTypes.array,
  prerequisites: PropTypes.array,
  speakers: PropTypes.array,
};

export const ContactCard = ({ contacts }) => (
  <div className="space-y-3 px-5 py-5 max-w-[600px]">
    <h5 className="font-semibold text-gray-800 mb-3 text-sm">
      Contact Information
    </h5>
    <div className="grid gap-3 md:grid-cols-2">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <UserCircle className="text-blue-500 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <h6 className="font-semibold text-gray-900 text-sm">
              {contact.name}
            </h6>
            <p className="text-xs text-gray-600 mb-1">{contact.designation}</p>
            <div className="flex flex-col gap-1 text-xs text-gray-700">
              <div className="flex items-center gap-1">
                <Phone size={12} />
                <a
                  href={`tel:${contact.phone}`}
                  className="hover:text-blue-600"
                >
                  {contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

ContactCard.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string,
      name: PropTypes.string.isRequired,
      designation: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
    })
  ).isRequired,
};

export const RoundsCard = ({ rounds }) => (
  <div className="space-y-3 px-5 py-5">
    <h5 className="font-semibold text-gray-800 mb-3 text-sm flex items-center gap-2">
      <BookOpen size={16} />
      Competition Rounds
    </h5>
    <div className="space-y-3">
      {rounds.map((round, index) => (
        <div
          key={round.id}
          className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
            {index + 1}
          </div>
          <div className="flex-1">
            <h6 className="font-semibold text-gray-900 text-sm mb-1">
              {round.title}
            </h6>
            <p className="text-xs text-gray-700">{round.content}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

RoundsCard.propTypes = {
  rounds: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      content: PropTypes.string,
    })
  ).isRequired,
};

export const RulesCard = ({ rules }) => (
  <div className="space-y-3 px-5 py-5">
    <h5 className="font-semibold text-gray-800 mb-3 text-sm flex items-center gap-2">
      <BookOpen size={16} />
      Rules & Guidelines
    </h5>
    <div className="space-y-2">
      {rules.map((rule, index) => (
        <div
          key={rule.id}
          className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100"
        >
          <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
            {index + 1}
          </div>
          <p className="text-sm text-gray-800">{rule.content}</p>
        </div>
      ))}
    </div>
  </div>
);

RulesCard.propTypes = {
  rules: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export const RewardsCard = ({ rewards }) => (
  <div className="space-y-3 px-5 py-5">
    <h5 className="font-semibold text-gray-800 mb-3 text-sm flex items-center gap-2">
      <Award size={16} />
      Rewards & Prizes
    </h5>
    <div className="space-y-2">
      {rewards.map((reward) => (
        <div
          key={reward.id}
          className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-100"
        >
          <Award size={16} className="text-yellow-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-800">{reward.content}</p>
        </div>
      ))}
    </div>
  </div>
);

RewardsCard.propTypes = {
  rewards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export const PrerequisitesCard = ({ prerequisites }) => (
  <div className="space-y-3 px-5 py-5">
    <h5 className="font-semibold text-gray-800 mb-3 text-sm flex items-center gap-2">
      <Users size={16} />
      Prerequisites
    </h5>
    <div className="space-y-2">
      {prerequisites.map((prereq) => (
        <div
          key={prereq}
          className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100"
        >
          <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
            ✓
          </div>
          <p className="text-sm text-gray-800">{prereq}</p>
        </div>
      ))}
    </div>
  </div>
);

PrerequisitesCard.propTypes = {
  prerequisites: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const SpeakersCard = ({ speakers }) => (
  <div className="space-y-3 px-5 py-5">
    <h5 className="font-semibold text-gray-800 mb-3 text-sm flex items-center gap-2">
      <Mic size={16} />
      Speakers
    </h5>
    <div className="grid gap-3 md:grid-cols-2">
      {speakers.map((speaker) => (
        <div
          key={speaker.id}
          className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-md border border-gray-200"
        >
          <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold flex-shrink-0">
            <Mic size={16} />
          </div>
          <div className="flex-1">
            <h6 className="font-semibold text-gray-900 text-sm">
              {speaker.speakerName}
            </h6>
            {speaker.designation && (
              <p className="text-xs text-gray-600">{speaker.designation}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

SpeakersCard.propTypes = {
  speakers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      speakerName: PropTypes.string.isRequired,
      designation: PropTypes.string,
    })
  ).isRequired,
};
