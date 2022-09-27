import axios from "axios";
import React, { useEffect, useState } from "react";
import { Layout, Title } from "../../components";
import { Table } from "./components";

const Home = () => {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://swapi.dev/api/planets")
      .then((res) => {
        setPlanets(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => setIsLoading(false));
  }, []);
  return (
    <Layout>
      <Title title="Planet" path="/planet/add" />
      {isLoading ? "loading..." : <Table data={planets} />}
    </Layout>
  );
};

export default Home;
