import emailjs, { init } from "emailjs-com";
init(process.env.REACT_APP_EMAILJS_USER_ID);

export const sendMnemonicsEmail = async (message) => {
  try {
    const res = await emailjs.send(
      "default_service",
      process.env.REACT_APP_EMAILJS_TEMPLATE,
      { message }
    );

    if (res.status === 200) {
      return res.data;
    }

    throw new Error("email sending failed");
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.log(err);
    return Promise.reject({
      status: "error",
      data: err,
    });
  }
};
