const {
  searchWebApps,
  addWebApp,
  updateWebApp,
  removeWebApp,
} = require("../helpers/data-helpers");

//GET Controller Function that manages HTTP requests and responses
const getWebApps = async (req, res) => {
  const query = req.query;
  const { status, webApps, message } = searchWebApps(query);
  res.status(status).json(webApps);
};
//POST Controller Function that manages HTTP requests and responses
const createWebApp = async (req, res) => {
  const newWebApp = req.body;
  const { status, message, webApp } = await addWebApp(newWebApp);

  if (status !== 201) {
    return res.status(status).json({ message });
  }
  res.status(status).json({ message, newRecord: webApp });
};
//PUT Controller Function that manages HTTP requests and responses
const editWebApp = async (req, res) => {
  const updatedWebApp = req.body;
  const { productId } = req.params;
  const { status, message, webApp } = await updateWebApp(
    productId,
    updatedWebApp
  );

  if (status !== 200) {
    return res.status(status).json({ message });
  }
  res.status(status).json({ message, udpatedRecord: webApp });
};
//DELETE Controller Function that manages HTTP requests and responses
const deleteWebApp = async (req, res) => {
  const { productId } = req.params;
  const { status, message } = await removeWebApp(productId);

  if (status !== 200) {
    return res.status(status).json({ message });
  }
  res.status(status).json({ message });
};

module.exports = {
  getWebApps,
  createWebApp,
  editWebApp,
  deleteWebApp,
};
