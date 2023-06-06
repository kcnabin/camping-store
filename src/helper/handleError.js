import { toast } from "react-toastify";

export const handleError = (error) => {
  console.log("error :", error);

  if (error?.response) {
    return toast.error(error.response.data.err);
  }

  toast.error(`Can't connect to Server`);
};
