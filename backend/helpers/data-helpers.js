const jsonData = "../data/webapps.json";
const webApps = require("../data/webapps.json");
const uuid = require("uuid");
const fs = require("fs").promises;

//Function to gather and return all web app json data
const getAllWebApps = () => {
  return webApps;
};
//Function to add a new web app to json data
const addWebApp = async (newWebApp) => {
  try {
    //Create new product id (uuid) for web app
    const newProductId = uuid.v4();
    newWebApp.productId = newProductId;
    //Add new web app to webApps data
    webApps.push(newWebApp);
    await fs.writeFile(jsonData, webApps, {
      encoding: "utf8",
      flag: "w",
    });
    return {
      message: "New web application record created",
      status: 201,
    };
  } catch (error) {
    return {
      message: "An error occured while saving your file, please try again.",
      status: 500,
    };
  }
};
//Function to update an existing web app
const updateWebApp = async (id, adjustedWebapp) => {
  //Find position of web app that is going to be updated
  const oldWebAppIdx = webApps.findIndex((webApp) => webApp.id === id);
  //Error handling for web app that does not exist
  if (oldWebAppIdx === -1) {
    return {
      message: `Web application ${id} does not exist. Please provide a valid web app.`,
      status: 404,
    };
  }
  try {
    //Update web app information via replacing the old web app data with the adjusted/revised web app data
    webApps[oldWebAppIdx] = adjustedWebapp;
    await fs.writeFile(jsonData, webApps, {
      encoding: "utf8",
      flag: "w",
    });
    return {
      message: `Web application ${id} updated`,
      status: 204,
    };
  } catch (error) {
    return {
      message: "An error occured while saving your file, please try again.",
      status: 500,
    };
  }
};
//Function to delete an existing web app
const deleteWebApp = async (id) => {
  //Find position of web app that is going to be deleted
  const webAppIdx = webApps.findIndex((webApp) => webApp.id === id);
  //Error handling for web app that does not exist
  if (webAppIdx === -1) {
    return {
      message: `Web application ${id} does not exist. Please provide a valid web app.`,
      status: 404,
    };
  }
  try {
    //Remove web app from webApps data
    webApps.splice(webAppIdx, 1);
    await fs.writeFile(jsonData, webApps, {
      encoding: "utf8",
      flag: "w",
    });
    return {
      message: `Web application ${id} deleted`,
      status: 204,
    };
  } catch (error) {
    return {
      message: "An error occured while saving your file, please try again.",
      status: 500,
    };
  }
};
module.exports = {
  getAllWebApps,
  addWebApp,
  updateWebApp,
  deleteWebApp,
};
