import {
  siFigma,
  siGit,
  siJira,
  siJson,
  siNotion,
  siOpenapiinitiative,
  siPostman,
} from "simple-icons";

// The component and animation stay unchanged. This list shifts the emphasis
// from design software to the technical-functional foundation used in the
// implementation and support cases.
const databasePath =
  "M4 4c0-1.1 3.6-2 8-2s8 .9 8 2v16c0 1.1-3.6 2-8 2s-8-.9-8-2V4zm2 0c.6.5 2.7 1 6 1s5.4-.5 6-1c-.6-.5-2.7-1-6-1s-5.4.5-6 1zm0 4v3c.6.5 2.7 1 6 1s5.4-.5 6-1V8c-1.5.7-3.7 1-6 1s-4.5-.3-6-1zm0 7v3c.6.5 2.7 1 6 1s5.4-.5 6-1v-3c-1.5.7-3.7 1-6 1s-4.5-.3-6-1z";

const relationsPath =
  "M5 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm14 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM5 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm14 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM8 4h8v2H8V4zm-4 4h2v8H4V8zm14 0h2v8h-2V8zM8 18h8v2H8v-2z";

const spreadsheetPath =
  "M3 2h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm1 4v4h4V6H4zm6 0v4h4V6h-4zm6 0v4h4V6h-4zM4 12v4h4v-4H4zm6 0v4h4v-4h-4zm6 0v4h4v-4h-4zM4 18v2h4v-2H4zm6 0v2h4v-2h-4zm6 0v2h4v-2h-4z";

export const TOOLKIT_ICONS = [
  { name: "SQL", color: "#336791", path: databasePath },
  { name: "Relational data", color: "#5B6B7A", path: relationsPath },
  { name: "REST APIs", color: `#${siOpenapiinitiative.hex}`, path: siOpenapiinitiative.path },
  { name: "HTTP / JSON", color: "#5B6B7A", path: siJson.path },
  { name: "Postman", color: `#${siPostman.hex}`, path: siPostman.path },
  { name: "Git", color: `#${siGit.hex}`, path: siGit.path },
  { name: "Jira", color: `#${siJira.hex}`, path: siJira.path },
  { name: "Excel", color: "#217346", path: spreadsheetPath },
  { name: "Figma", color: `#${siFigma.hex}`, path: siFigma.path },
  { name: "Notion", color: `#${siNotion.hex}`, path: siNotion.path },
];
