const express = require("express");
const router = express.Router();
const {
  getAllWebApps,
  addWebApp,
  updateWebApp,
  deleteWebApp,
} = require("../helpers/data-helpers");

//GET ROUTE
router.get("/", (req, res) => {
  const webApps = getAllWebApps();
  res.status(200).json(webApps);
});
//POST ROUTE
router.post("/", async (req, res) => {
  const resultObj = await addWebApp(req.body.data);
  res.status(resultObj.status).json({ message: resultObj.message });
});
//PUT ROUTE
router.put("/:productId", async (req, res) => {
  const data = req.body.data;
  const { productId } = req.params;
  const resultObj = await updateWebApp(productId, data);
  res.status(resultObj.status).json({ message: resultObj.message });
});
//DELETE ROUTE
router.delete("/:productId", async (req, res) => {
  const { productId } = req.params;
  const resultObj = await deleteWebApp(productId);
  res.status(resultObj.status).json({ message: resultObj.message });
});

module.exports = router;
