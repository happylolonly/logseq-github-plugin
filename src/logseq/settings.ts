import "@logseq/libs";
import { SettingSchemaDesc } from "@logseq/libs/dist/LSPlugin.user";

const settings: SettingSchemaDesc[] = [
  // check README.md for more info
  {
    key: "API Key",
    type: "string",
    title: "Github token",
    description: "Enter your personal access token here",
    default: "",
  },
  {
    key: "TargetPage",
    type: "string",
    title: "Target page",
    description:
      "Enter your desired page, to where the blocks will be inserted",
    default: "Github issues",
  },
  {
    key: "SearchQuery",
    type: "string",
    title: "Search query",
    description:
      "Enter your desired search query, separated by commas (:userName, :orgName)",
    default: "cybercongress",
  },

  // {
  //   key: "OranizationName",
  //   type: "string",
  //   title: "Name of the organization",
  //   description: "",
  //   default: "",
  // },

  // {
  //   key: "Block1InsertionTemplate",
  //   type: "string",
  //   title: "Insertion template for block 1",
  //   description:
  //     "Enter your desired template for the parent block, created by default for every return value of the query ",
  //   default: "TODO [Title](URL)",
  // },
  // {
  //   key: "Block2InsertionTemplate",
  //   type: "string",
  //   title: "Insertion template for block 2",
  //   description:
  //     "Enter your desired template for the child block, created by default for every return value of the query ",
  //   default: "{Body}",
  // },
];

logseq.useSettingsSchema(settings);
