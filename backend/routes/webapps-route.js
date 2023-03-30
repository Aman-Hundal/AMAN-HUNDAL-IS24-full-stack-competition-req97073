const express = require("express");
const router = express.Router();
const {
  getWebApps,
  createWebApp,
  editWebApp,
  deleteWebApp
} = require("../controllers/webapps-controller");

//Swagger Documentation WebApp Schema
/**
 * @swagger
 * components:
 *   schemas:
 *     WebApp:
 *       type: object
 *       required:
 *         - productId
 *         - productName
 *         - productOwnerName
 *         - Developers
 *         - scrumMasterName
 *         - startDate
 *         - methodology
 *       properties:
 *         productId:
 *           type: string
 *           description: The auto-generated uuid for the web app
 *         productName:
 *           type: string
 *           description: The name of the web app
 *         productOwnerName:
 *           type: string
 *           description: The name of the product owner associated with the web app
 *         Developers:
 *           type: array
 *           items:
 *            type: string
 *         scrumMasterName:
 *           type: string
 *           description: The name of the scrum master associated with the web app
 *         startDate:
 *           type: date
 *           description: The start date associated with the web app (EX. YYYY/MM/DD)
 *         methodology:
 *           type: string
 *           description: The methodology associated with the web app (must be either Agile or Waterfall)
 *       example:
 *         productId: 53429c1a-11f3-4c9e-8f37-1c35384dbc32
 *         productName: Expensify
 *         productOwnerName: Elaine Bennis
 *         Developers: [George Costanza, Jerry Seinfeld]
 *         scrumMasterName: JP Peterman
 *         startDate: 2021/03/31
 *         methodology: Agile
 */

//GET ROUTE
/**
 * @swagger
 * /webapps:
 *   get:
 *     summary: Returns an array of all web apps
 *     tags: [WebApps]
 *     responses:
 *       200:
 *         description: An array of all web applications
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/WebApp'
 */
router.get("/", getWebApps);

//POST ROUTE
/**
 * @swagger
 * /webapps:
 *   post:
 *     summary: Create a new web app
 *     tags: [WebApps]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WebApp'
 *     responses:
 *       201:
 *         description: New web application record created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WebApp'
 *       500:
 *         description: An error occured while saving your web application record, please try again
 */
router.post("/", createWebApp);

//PUT ROUTE
/**
 * @swagger
 * /webapps/{productId}:
 *  put:
 *    summary: Update a web app by using the productId
 *    tags: [WebApps]
 *    parameters:
 *      - in: path
 *        name: productId
 *        schema:
 *          type: string
 *        required: true
 *        description: The web app id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/WebApp'
 *    responses:
 *      200:
 *        description: Web application record updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/WebApp'
 *      404:
 *        description: Web application does not exist. Please provide a valid web application productId
 *      500:
 *        description: An error occured while updating your web application record, please try again
 */
router.put("/:productId", editWebApp);

//DELETE ROUTE
/**
 * @swagger
 * /webapps/{productId}:
 *  delete:
 *    summary: Delete a web app by using the productId
 *    tags: [WebApps]
 *    parameters:
 *      - in: path
 *        name: productId
 *        schema:
 *          type: string
 *        required: true
 *        description: The web app id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/WebApp'
 *    responses:
 *      200:
 *        description: Web application record deleted
 *      404:
 *        description: Web application does not exist. Please provide a valid web application productId
 *      500:
 *        description: An error occured while deleting your web application record, please try again
 */
router.delete("/:productId", deleteWebApp);

module.exports = router;
