export const walletCreate = {
    type: "object",
    properties: {
        name: {
            type: "string",
            example: "Ahorros"
        },
        userId: {
            type: "string",
            example: "4c1f-8753-143aa73dd679"
        },
        amount: {
            type: "number",
            example: 1000
        }
    },
}

export const walletUpdate = {
    type: "object",
    properties: {
        name: {
            type: "string",
            example: "Ahorros"
        },
        amount: {
            type: "number",
            example: 1000
        }
    },
}

export const walletResponse = {
    type: "object",
    properties: {
        id: {
            type: "string",
            example: "4c1f-8753-143aa73dd679"
        },
        name: {
            type: "string",
            example: "Ahorros"
        },
        userId: {
            type: "string",
            example: "9a5d-2423-143dd32dd679"
        },
        amount: {
            type: "number",
            example: 1000
        },
        createdAt: {
            type: "string",
            example: "2021-10-10T00:00:00.000Z"
        }
    },
}