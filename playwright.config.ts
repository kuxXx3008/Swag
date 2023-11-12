import { PlaywrightTestConfig } from '@playwright/test';


 
const config: PlaywrightTestConfig = {
  testMatch: ["Swag.ts"],
  use: {
    headless: false,
    screenshot: "on",
    video: "retain-on-failure"
  },
  reporter: [["dot"], ["json",{
    outputFile: "jsonReports/jsonReport.json"
  }], ["html",{
    open: "never"
  }]]
};

export default config
