import EntrepreneurEventPage from "../../components/speakersComp";
import speakersData from './speakersData.json' ;

export const SpeakersPage = () => {

  return (
    <EntrepreneurEventPage speakers={speakersData} />
  )
};