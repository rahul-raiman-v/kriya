import EntrepreneurEventPage from "../../components/teamsCard";

export const TeamsPage = () => {

  const handleViewProfile = (name) => {
    alert(`Viewing ${name}'s profile`);
  };

  return (
    <EntrepreneurEventPage/>
  )
};