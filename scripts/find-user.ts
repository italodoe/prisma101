import { findUserById } from "../src/users";

if (process.argv.length < 3) {
  console.error(`Usage: bun find-user.ts <userId>`);
  process.exit(1);
}

const [_bun, _run, ...args] = process.argv;
const [userId] = args;
console.log(_bun, _run);

const user = await findUserById(parseInt(userId));
console.log(user);
