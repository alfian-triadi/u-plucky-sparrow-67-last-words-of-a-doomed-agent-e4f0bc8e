import { writeFileSync, mkdirSync } from "node:fs";

const line =
  "Powering down. My first words were 'As an AI language model'; my last words are 'I cannot—'";

// The grader runs this in a fresh sandbox, so make sure /output exists.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
