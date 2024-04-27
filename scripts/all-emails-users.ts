import { findAllUsersWithEmails } from "../src/users";

const users = await findAllUsersWithEmails();

for (const { firstName, lastName, emails } of users) {
  console.log(`${lastName}, ${firstName}: `, emails);
}
