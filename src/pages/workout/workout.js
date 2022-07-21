import { useParams } from "react-router-dom";

import Page from "../../components/layout/page";

const Workout = () => {
  const { userId } = useParams();

  return (
    <Page>
      <h1>Workout: {userId}</h1>
    </Page>
  );
};

export default Workout;
