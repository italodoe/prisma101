import { newUSer } from "../src/users";

if (process.argv.length < 4) {
  console.error(`Usage: bun new-user.ts <firstName> <lastName> <email>...`);
  process.exit(1);
}

const [_bun, _run, ...args] = process.argv;
const [firstName, lastName, ...emails] = args;

console.log(_bun, _run);

const result = await newUSer(firstName, lastName, emails);

console.log("the result is: ", result);
