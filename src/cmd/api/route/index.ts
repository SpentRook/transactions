import { Router } from "express"
import { walletRouter } from "./wallet"
import { healthRouter } from "./health"

export const routes = Router()

routes.use("/wallets", walletRouter)
routes.use("/health", healthRouter)