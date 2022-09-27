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
        diameter: data.diameter,
        climate: data.climate,
        gravity: data.gravity,
        terrain: data.terrain,
        rotationPeriode: data.rotation_period,
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
          placeholder="e.g: Tatooine"
          {...register("name", {
            required: true,
          })}
          error={errors.name}
          errorWording={{
            required: "This field is required",
          }}
        />
        <InputField
          label="Diameter"
          name="diameter"
          type="text"
          isDisabled={isDetail}
          placeholder="e.g: 10465"
          {...register("diameter", {
            required: true,
            pattern: /^[0-9.,]+$/,
          })}
          error={errors.diameter}
          errorWording={{
            required: "This field is required",
            pattern: "Number only",
          }}
        />
        <InputField
          label="Climate"
          name="climate"
          type="text"
          isDisabled={isDetail}
          placeholder="e.g: Frozen"
          {...register("climate", {
            required: true,
          })}
          error={errors.climate}
          errorWording={{
            required: "This field is required",
          }}
        />
        <InputField
          label="Gravity"
          name="gravity"
          type="text"
          isDisabled={isDetail}
          placeholder="e.g: 1 standart"
          {...register("gravity", {
            required: true,
            pattern: /^[0-9.,]+$/,
          })}
          error={errors.gravity}
          errorWording={{
            required: "This field is required",
            pattern: "Number only",
          }}
        />
        <InputField
          label="Terrain"
          name="terrain"
          type="text"
          isDisabled={isDetail}
          placeholder="e.g: desert"
          {...register("terrain", {
            required: true,
          })}
          error={errors.terrain}
          errorWording={{
            required: "This field is required",
          }}
        />
        <InputField
          label="Rotation Periode"
          name="rotationPeriode"
          type="text"
          isDisabled={isDetail}
          placeholder="e.g: 70"
          {...register("rotationPeriode", {
            required: true,
          })}
          error={errors.rotationPeriode}
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
