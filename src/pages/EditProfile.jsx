import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import { useSearchParams } from "react-router-dom";

const EditProfile = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const names = "gega";
  const handleAddQueryParams = () => {
    setSearchParams({
      set: "shop",
      values:names
    })
  }
  console.log(searchParams);
  return (
    <MainLayout>
      <h1>This is EditProfile Page!!</h1>
      <button onClick={handleAddQueryParams}>click</button>
    </MainLayout>
  );
};

export default EditProfile;
