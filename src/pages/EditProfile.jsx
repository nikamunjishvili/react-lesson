import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import { Link, useParams, useSearchParams } from "react-router-dom";

const EditProfile = () => {
//   let [searchParams, setSearchParams] = useSearchParams();

//   let searchParamss = searchParams.getAll("profile:id");

//   console.log(searchParamss);
  return (
    <MainLayout>
      <h1>This is EditProfile Page!!</h1>
      <Link to="/">Go back home</Link>
    </MainLayout>
  );
};

export default EditProfile;
