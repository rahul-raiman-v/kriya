import React from "react";
import { EntrepreneurSpeakersPage } from "../../components";
import speakersData from './speakersData.json' ;

React.lazy(()=> import('react'));

React.lazy(()=> import('../../components'));

React.lazy(()=> import('./speakersData.json'));


export const SpeakersPage = () => {

  return (
    <EntrepreneurSpeakersPage speakers={speakersData} />
  )
};