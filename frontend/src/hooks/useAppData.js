import { useEffect, useState } from "react";
import axios from "axios";
//Custom hook file to manage API calls, global app state and overall app data
const useAppData = () => {
  //Global App State
  const [webAppState, setWebAppState] = useState([]);
  const [loading, setLoading] = useState(true);

  //Function to gather backend api web app data
  const getWebAppData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/webapps");
      setWebAppState((prev) => (prev = response.data));
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  //useEffect to load app data (backend api calls etc.)
  useEffect(() => {
    getWebAppData();
  }, []);

  return {
    loading,
    webAppState,
  };
};

export default useAppData;
