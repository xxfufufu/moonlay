import axios from "axios";
import React, { useEffect, useState } from "react";
import { Layout, Title } from "../../components";
import { Table } from "./components";

const Home = () => {
  const [starship, setStarship] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://swapi.dev/api/starships")
      .then((res) => {
        setStarship(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => setIsLoading(false));
  }, []);
  return (
    <Layout>
      <Title title="Starship" path="/starship/add" />
      {isLoading ? "loading..." : <Table data={starship} />}
    </Layout>
  );
};

export default Home;
