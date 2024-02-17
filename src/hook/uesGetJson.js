import { useState, useEffect, useCallback } from "react";

const useGetJson = (func) => {
  const [values, setValues] = useState([]);

  const HandleLoad = useCallback(async () => {
    let results;
    try {
      results = await func();
      // await console.log(results);
    } catch (error) {
      console.log(error);
    }

    if (!results) return;
    setValues(results);
  }, [func]);

  useEffect(() => {
    HandleLoad();
  }, [HandleLoad]);

  return values;
};

export default useGetJson;
