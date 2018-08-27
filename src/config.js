const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1vs3syztu9rzc"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.fruitpiethemagician.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_RKvxzJMgV",
    APP_CLIENT_ID: "248t4idv2bbi1a7g347n095t39",
    IDENTITY_POOL_ID: "us-east-1:2696e875-39c5-443e-a3b3-536bdfba9c2f"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-ynpqwqndn8fy"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.fruitpiethemagician.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_J5UYLgEQD",
    APP_CLIENT_ID: "6bkfbh7stu7j0sf4b1d0k0rrjq",
    IDENTITY_POOL_ID: "us-east-1:cef14d10-108b-4f16-8d38-e77df05ef38a"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
