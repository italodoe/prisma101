import { findAllUsers, findAllUsersWithEmails } from "../src/users";

const users = await findAllUsers();

for (const { firstName, lastName } of users) {
  console.log(`${lastName}, ${firstName}`);
}
