import swaggerJSDoc from "swagger-jsdoc";
import { walletCreate, walletUpdate, walletResponse } from "./schema/wallet";

const endpointsFiles = ["src/cmd/api/route/*.ts", "dist/cmd/api/route/*.js"];

const options = {
        definition: {
            openapi: "3.0.0",
            info: {
            title: "API Transactions",
            version: "1.0.0",
            description: "API for manage transactions among clients",
            },
        servers: [
            {
                url: "http://localhost:8081",
                description: "Development server",
            },
        ],
        components: {
            schemas: {
                walletCreate,
                walletResponse,
                walletUpdate
            }
        }
    },
    apis: endpointsFiles,
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;