/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { InputField } from "../../../components/InputField";

export const Form = ({
  handleAdd,
  handleBack,
  handleDetail,
  handleDelete,
  isDetail,
  isEdit,
  data,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (data) {
      reset({
        name: data.name,
        model: data.model,
        passengers: data.passengers,
        length: data.length,
        crew: data.crew,
        starshipClass: data.starship_class,
      });
    }
  }, [data]);
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(handleAdd)}>
        <InputField
          label="Name"
          name="name"
          type="text"
          isDisabled={isDetail}
          placeholder="e.g: Eric Erikson"
          {...register("name", {
            required: true,
          })}
          error={errors.name}
          errorWording={{
            required: "This field is required",
          }}
        />
        <InputField
          label="Model"
          name="model"
          type="text"
          isDisabled={isDetail}
          placeholder="e.g: Male"
          {...register("model", {
            required: true,
          })}
          error={errors.model}
          errorWording={{
            required: "This field is required",
          }}
        />
        <InputField
          label="Passengers"
          name="passengers"
          type="text"
          isDisabled={isDetail}
          placeholder="e.g: 180"
          {...register("passengers", {
            required: true,
            pattern: /^[0-9.,]+$/,
          })}
          error={errors.passengers}
          errorWording={{
            required: "This field is required",
            pattern: "Number only",
          }}
        />
        <InputField
          label="Length"
          name="length"
          type="text"
          isDisabled={isDetail}
          placeholder="e.g: 70"
          {...register("length", {
            required: true,
          })}
          error={errors.length}
          errorWording={{
            required: "This field is required",
          }}
        />
        <InputField
          label="Crew"
          name="crew"
          type="text"
          isDisabled={isDetail}
          placeholder="e.g: 70"
          {...register("crew", {
            required: true,
          })}
          error={errors.crew}
          errorWording={{
            required: "This field is required",
          }}
        />
        <InputField
          label="Starship Class"
          name="starshipClass"
          type="text"
          isDisabled={isDetail}
          placeholder="e.g: 70"
          {...register("starshipClass", {
            required: true,
          })}
          error={errors.starshipClass}
          errorWording={{
            required: "This field is required",
          }}
        />
      </form>
      <div className="flex gap-x-2 w-80 mt-20">
        <button
          onClick={isDetail ? handleDelete : handleBack}
          className="w-full focus:outline-none text-white bg-red-400 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-400 dark:hover:bg-red-600 dark:focus:ring-red-700"
        >
          {isDetail ? "Delete" : "Cancel"}
        </button>
        <button
          onClick={isDetail ? handleDetail : handleSubmit(handleAdd)}
          className="w-full text-white bg-blue-400 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-700"
        >
          {isDetail ? "Edit" : isEdit ? "Save" : "Add"}
        </button>
      </div>
    </React.Fragment>
  );
};
