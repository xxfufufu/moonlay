import React from "react";
import { Layout } from "../../components";
import { Form } from "./components";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const location = useNavigate();
  const handleAdd = (val) => console.log(val);
  const handleBack = () => location("/starship");

  return (
    <Layout>
      <h1 className="font-bold text-3xl mb-10">Add Starship</h1>
      <Form handleAdd={handleAdd} handleBack={handleBack} />
    </Layout>
  );
};

export default Add;
