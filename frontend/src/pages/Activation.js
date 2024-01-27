import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";

const Activation = () => {
  const { activation_token } = useParams();

  useEffect(() => {
    const activateUser = async () => {
      try {
        axios
          .post(`${server}/user/activate-user`, { token: activation_token })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
    };
    activateUser();
  }, [activation_token]);
  return <div>Activation</div>;
};

export default Activation;
