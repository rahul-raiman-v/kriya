import React from 'react';
import { EntrepreneurSpeakersPage } from '../../components';
import speakersData from './speakersData.json';

export const SpeakersPage = () => {
  return <EntrepreneurSpeakersPage speakers={speakersData} />;
};
