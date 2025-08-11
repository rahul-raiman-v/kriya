import EntrepreneurSpeakersPage from "../../components/speakersComp";
import speakersData from './speakersData.json' ;

export const SpeakersPage = () => {

  return (
    <EntrepreneurSpeakersPage speakers={speakersData} />
  )
};