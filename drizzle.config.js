/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://NudgeQuest_owner:GITsQp1x0fFd@ep-patient-smoke-a5a1dc32.us-east-2.aws.neon.tech/NudgeQuest?sslmode=require',
    }
  };
  