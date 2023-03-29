import { useEffect, useState } from "react";
import axios from "axios";

//Custom hook file to manage API calls, global app state and overall app data
const useAppData = () => {
  //Global App State
  const [webAppState, setWebAppState] = useState([]);
  const [loading, setLoading] = useState(true);

  //Function to gather backend api web app data and configure state for web app data
  const getWebAppData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/webapps");
      setWebAppState((prev) => (prev = response.data));
    } catch (error) {
      return error;
    }
  };
  //Function to save new web app data to backend api and to adjust state with new web app data
  const saveWebAppData = async (newWebAppData) => {
    //Clean developers array data provided by form
    const cleanDeveloperData = newWebAppData.Developers.map(
      (developerObj) => developerObj.name
    );
    newWebAppData.Developers = cleanDeveloperData;

    try {
      const response = await axios.post(
        "http://localhost:3000/api/webapps",
        newWebAppData
      );
      await getWebAppData();
      return response;
    } catch (error) {
      return error.response;
    }
  };
  //Function to send a put request to updated/edit an existing web app
  const updateWebApp = (id, adjustedWebApp) => {
    return;
  };
  //Function to find specific web app from web app data/state
  const getWebApp = (id) => {
    return webAppState.find((webApp) => webApp.productId === id);
  };

  //useEffect to load app data (backend api calls etc.)
  useEffect(() => {
    const getAllData = async () => {
      await getWebAppData();
      setLoading(false);
    };
    getAllData();
  }, []);

  return {
    loading,
    webAppState,
    saveWebAppData,
    getWebApp,
  };
};

export default useAppData;
