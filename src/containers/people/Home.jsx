import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layout, Title } from "../../components";
import { Table } from "./components";

const Home = () => {
  const [people, setPeole] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        setPeole(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => setIsLoading(false));
  }, []);

  return (
    <Layout>
      <Title title="People" path="/people/add" />
      {isLoading ? "loading..." : <Table data={people} />}
    </Layout>
  );
};

export default Home;
