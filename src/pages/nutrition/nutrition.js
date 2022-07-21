import { useParams } from "react-router-dom";

import Page from "../../components/layout/page";

const Nutrition = () => {
  const { userId } = useParams();

  return (
    <Page>
      <h1>Nutrition: {userId}</h1>
    </Page>
  );
};

export default Nutrition;
