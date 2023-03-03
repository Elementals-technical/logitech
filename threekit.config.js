
export default {
    credentials: {
        preview: {
            orgId: process.env.THREEKIT_PREVIEW_ORG_ID,
            publicToken: process.env.THREEKIT_PREVIEW_PUBLIC_TOKEN,
        },
        'admin-fts': {
            orgId: process.env.THREEKIT_ADMIN_FTS_ORG_ID,
            publicToken: process.env.THREEKIT_ADMIN_FTS_PUBLIC_TOKEN,
        },
    },
    products: {
        preview: {
            assetId: 'b92dd49a-9c91-465c-a9a1-8e4cccc9c5d8',
            configurationId: undefined,
            stageId: undefined,
        },
        'admin-fts': {
            assetId: 'b92dd49a-9c91-465c-a9a1-8e4cccc9c5d8',
            configurationId: undefined,
            stageId: undefined,
        },
    },
};
