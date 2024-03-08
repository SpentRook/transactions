import { Router } from "express";
import { WalletRepositoryInMemory } from "../../../internal/wallet/adapter/in-memory";
import { WalletController } from "../controller/wallet";

export const walletRouter = Router();

const walletController = new WalletController(new WalletRepositoryInMemory());

/**
 * @swagger
 * /api/v1/wallets:
 *  post:
 *      tags:
 *          - Wallets
 *      description: Create a new wallet
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/walletCreate'
 *      responses:
 *          201:
 *              description: A new wallet created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/walletResponse'
 *          400:
 *              description: Invalid fields or missing fields
 */
walletRouter.post("/", walletController.createWallet);

/**
 * @swagger
 * /api/v1/wallets:
 *  get:
 *      tags:
 *          - Wallets
 *      description: List all wallets
 *      responses:
 *          200:
 *              description: A list of wallets saved in db
 *              content:
 *                  application/json:
 *                      schema:
 *                      type: array
 *                      items:
 *                        $ref: '#/components/schemas/walletResponse'
 *                      example:
 *                         - id: 4a4e3e4e-4e4e-4e4e-4e4e-4e4e4e4e4e4e
 *                           name: Ahorros
 *                           userId: 4c1f-8753-143aa73dd679
 *                           amount: 1000
 *                           createdAt: 2021-10-10T00:00:00.000Z
 *
 */
walletRouter.get("/", walletController.listWallets);

/**
* @swagger
 * /api/v1/wallets/{id}:
 *  get:
 *      tags:
 *          - Wallets
 *      description: Get a wallet by id
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            description: The wallet id
 *            schema:
 *             type: string
 *             example: 4a4e3e4e-4e4e-4e4e-4e4e-4e4e4e4e4e4e
 *              
 *  responses:
 *      200:
 *          description: A wallet found
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/walletResponse'
 *      404:
 *          description: Wallet not found
 */
walletRouter.get("/:id", walletController.getWallet);

/**
* @swagger
 * /api/v1/wallets/{id}:
 *  put:
 *      tags:
 *          - Wallets
 *      description: Update a wallet
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            description: The wallet id
 *            schema:
 *             type: string
 *             example: 4a4e3e4e-4e4e-4e4e-4e4e-4e4e4e4e4e4e
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/walletUpdate'
 *  responses:
 *      200:
 *          description: A wallet updated
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/walletResponse'
 */
walletRouter.put("/:id", walletController.updateWallet);

/**
 * @swagger
 * /api/v1/wallets/user/{userId}:
 *  get:
 *     tags:
 *        - Wallets
 *     description: Get wallets by user id
 *     parameters:
 *          - name: userId
 *            in: path
 *            required: true
 *            description: The user id
 *            schema:
 *              type: string
 *              example: 4c1f-8753-143aa73dd679
 *  responses:
 *      200:
 *          description: A list of wallets saved in db
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/walletResponse'
 *                      example:
 *                          - id: 4a4e3e4e-4e4e-4e4e-4e4e-4e4e4e4e4e4e
 *                            name: Ahorros
 *                            userId: 4c1f-8753-143aa73dd679
 *                            amount: 1000
 *                            createdAt: 2021-10-10T00:00:00.000Z
 */
walletRouter.get("/user/:userId", walletController.getWalletsByUserId);

