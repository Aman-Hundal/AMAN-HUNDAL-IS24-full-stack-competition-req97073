//Function to handle web app data validation
const dataValidation = (webApp) => {
  if (webApp.Developers.length < 1) {
    return {
      error: true,
      messsage: "Developers assigned to a web app must range from 1 to 5",
    };
  }
  if (webApp.Developers.length > 5) {
    return {
      error: true,
      messsage: "Developers assigned to a web app must range from 1 to 5",
    };
  }
  if (
    webApp.methodology.toLowerCase() !== "agile" &&
    webApp.methodology.toLowerCase() !== "waterfall"
  ) {
    return {
      error: true,
      messsage: "Methodology must be either Agile or Waterfall",
    };
  }
  if (!webApp.productName) {
    return {
      error: true,
      messsage: "Product Name is required",
    };
  }
  if (!webApp.productOwnerName) {
    return {
      error: true,
      messsage: "Product Owner Name is required",
    };
  }
  if (!webApp.scrumMasterName) {
    return {
      error: true,
      messsage: "Scrum Master Name is required",
    };
  }
  if (!webApp.startDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
    return {
      error: true,
      messsage: "Start date must follow pattern of YYYY/MM/DD",
    };
  }
  return { error: false };
};

module.exports = {
  dataValidation,
};
