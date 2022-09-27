/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layout } from "../../components/Layout";
import { Form } from "./components";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const location = useNavigate();
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => console.log("delete");
  const handleDetail = () => location(`/planet/edit/${id}`);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://swapi.dev/api/planets/${id}`)
      .then((res) => {
        setDetail(res.data);
        setIsLoading(false);
      })
      .catch((err) => setIsLoading(false));
  }, []);

  return (
    <Layout>
      <h1 className="font-bold text-3xl mb-10">Detail Planet</h1>
      {isLoading ? (
        "loading..."
      ) : (
        <Form
          isDetail={true}
          data={detail}
          handleDelete={handleDelete}
          handleDetail={handleDetail}
        />
      )}
    </Layout>
  );
};

export default Detail;
