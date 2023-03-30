const path = require("path");
const jsonData = path.join(__dirname, "../data/webapps.json");
const webApps = require("../data/webapps.json");
const uuid = require("uuid");
const fs = require("fs").promises;
const { dataValidation } = require("./data-validation-helpers");

//Function to gather and return all web app JSON data
const searchWebApps = (query) => {
  return { webApps, status: 200 };
};
//Function to gather one specific web app index
const getWebApp = (id) => {
  return webApps.findIndex((webApp) => webApp.productId === id);
};
//Function to add a new web app to JSON data
const addWebApp = async (newWebApp) => {
  //Error handling for data validation
  const validData = dataValidation(newWebApp);
  if (validData.error) {
    return {
      message: validData.messsage,
      status: 400,
    };
  }

  try {
    //Create new product id (uuid) for web app
    const newProductId = uuid.v4();
    newWebApp["productId"] = newProductId;
    //Add new web app to webApps JSON data
    webApps.push(newWebApp);
    await fs.writeFile(jsonData, JSON.stringify(webApps), {
      encoding: "utf8",
      flag: "w",
    });
    return {
      message: "New web application record created.",
      status: 201,
      webApp: newWebApp,
    };
  } catch (error) {
    console.log(error);
    return {
      message:
        "An error occured while saving your web application record, please try again.",
      status: 500,
    };
  }
};
//Function to update an existing web app
const updateWebApp = async (id, adjustedWebapp) => {
  //Find position of web app that is going to be updated
  const oldWebAppIdx = getWebApp(id);
  //Error handling for web app that does not exist
  if (oldWebAppIdx === -1) {
    return {
      message: `Web application ${id} does not exist. Please provide a valid web application productId.`,
      status: 404,
    };
  }
  //Error handling for data validation
  const validData = dataValidation(adjustedWebapp);
  if (validData.error) {
    return {
      message: validData.messsage,
      status: 400,
    };
  }

  try {
    //Update web app JSON data via replacing the old web app data with the adjusted/revised web app data
    webApps[oldWebAppIdx] = adjustedWebapp;
    await fs.writeFile(jsonData, JSON.stringify(webApps), {
      encoding: "utf8",
      flag: "w",
    });
    return {
      message: `Web application ${id} updated.`,
      status: 200,
      webApp: adjustedWebapp,
    };
  } catch (error) {
    console.log(error);
    return {
      message:
        "An error occured while updating your web application record, please try again.",
      status: 500,
    };
  }
};
//Function to delete an existing web app
const removeWebApp = async (id) => {
  //Find position of web app that is going to be deleted
  const webAppIdx = webApps.findIndex((webApp) => webApp.productId === id);
  //Error handling for web app that does not exist
  if (webAppIdx === -1) {
    return {
      message: `Web application ${id} does not exist. Please provide a valid web application productId.`,
      status: 404,
    };
  }
  try {
    //Remove web app from webApps JSON Data
    webApps.splice(webAppIdx, 1);
    await fs.writeFile(jsonData, JSON.stringify(webApps), {
      encoding: "utf8",
      flag: "w",
    });
    return {
      message: `Web application ${id} deleted.`,
      status: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      message:
        "An error occured while deleting your web application record, please try again.",
      status: 500,
    };
  }
};

module.exports = {
  searchWebApps,
  addWebApp,
  updateWebApp,
  removeWebApp,
  getWebApp,
};
