import { useEffect, useState } from "react";
import axios from "axios";

//Custom hook file to manage API calls, global app state and overall app data
const useAppData = () => {
  //Global App State
  const [webAppState, setWebAppState] = useState([]);
  const [loading, setLoading] = useState(true);

  //Function to gather backend api web app data and configure state for web app data
  const getAllWebApps = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/webapps`
      );
      setWebAppState((prev) => (prev = response.data));
    } catch (error) {
      return error;
    }
  };
  //Function to save new web app data to backend api and to adjust state with new web app data
  const saveWebApp = async (newWebAppData) => {
    //Clean developers array data provided by form by gathering the names of all developers
    const cleanDeveloperData = newWebAppData.Developers.map(
      (developerObj) => developerObj.name
    );
    newWebAppData["Developers"] = cleanDeveloperData;

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/webapps`,
        newWebAppData
      );
      await getAllWebApps();
      return response;
    } catch (error) {
      return error.response;
    }
  };
  //Function to send a put request to update/edit an existing web app and to adjust state with new web app data
  const updateWebApp = async (id, adjustedWebApp) => {
    //Clean developers array data provided by form by removing all instances of undefined or blank strings "" (blank developer names)
    adjustedWebApp["Developers"] = adjustedWebApp.Developers.filter(
      (developer) => developer !== "" && developer !== undefined
    );
    adjustedWebApp["productId"] = id;

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/webapps/${id}`,
        adjustedWebApp
      );
      await getAllWebApps();
      return response;
    } catch (error) {
      return error.response;
    }
  };
  //Function to find specific web app from web app data/state
  const getWebApp = (id) => {
    return webAppState.find((webApp) => webApp.productId === id);
  };
  //Function to find a specific web app from query parameters
  const getQueriedWebApp = async (query) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/webapps?${query}`
      );
      setWebAppState((prev) => (prev = response.data));
      return response;
    } catch (error) {
      return error;
    }
  };
  //Function to delete a specific web app
  const deleteWebApp = async (id) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/webapps/${id}`
      );
      await getAllWebApps();
      return response;
    } catch (error) {
      return error.response;
    }
  };

  //useEffect to load app data on page load (backend api calls etc.)
  useEffect(() => {
    const getAllData = async () => {
      await getAllWebApps();
      setLoading(false);
    };
    getAllData();
  }, []);

  return {
    loading,
    webAppState,
    saveWebApp,
    getWebApp,
    updateWebApp,
    getQueriedWebApp,
    deleteWebApp,
  };
};

export default useAppData;
