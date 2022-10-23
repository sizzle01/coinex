import React from "react";
import Layout from "../components/globals/Layout";
import { Blocks } from "react-loader-spinner";

const Loading = () => {
  return (
    <Layout>
      <div className="bg-primary text-white pt-2 px-3 h-60 grid place-items-center">
        <Blocks
          height="100"
          width="100"
          color="#00f6ff"
          ariaLabel="audio-loading"
          wrapperStyle={{}}
          wrapperClass="wrapper-class"
          visible={true}
        />
      </div>
    </Layout>
  );
};

export default Loading;
