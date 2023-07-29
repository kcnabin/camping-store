import { useEffect, useState } from "react";
import { handleError } from "../helper/handleError";
import { getTokenHeader } from "../helper/getTokenHeader";
import axios from "axios";

export const useFetchData = (path, dep1 = '',) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(path, getTokenHeader());
        setValue(res?.data);
      } catch (error) {
        return handleError(error);
      }
    };

    fetchData();
  }, [path, dep1]);

  return { value, setValue };
};

