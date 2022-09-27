/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layout } from "../../components/Layout";
import { Form } from "./components";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const location = useNavigate();
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleBack = () => location("/people");
  const handleUpdate = (val) => console.log(val);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((res) => {
        setDetail(res.data);
        setIsLoading(false);
      })
      .catch((err) => setIsLoading(false));
  }, []);

  return (
    <Layout>
      <h1 className="font-bold text-3xl mb-10">Edit People</h1>
      {isLoading ? (
        "loading..."
      ) : (
        <Form
          isEdit={true}
          data={detail}
          handleBack={handleBack}
          handleAdd={handleUpdate}
        />
      )}
    </Layout>
  );
};

export default Edit;
