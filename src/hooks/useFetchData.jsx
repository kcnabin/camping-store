import { useEffect, useState } from "react";
import { handleError } from "../helper/handleError";
import { getTokenHeader } from "../helper/getTokenHeader";
import axios from "axios";

export const useFetchData = (path) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(path, getTokenHeader());
        setValue(data);
      } catch (error) {
        return handleError(error);
      }
    };

    fetchData();
  }, [path]);

  return { value, setValue };
};
