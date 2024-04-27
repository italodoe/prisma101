import db from "./db";

export const newUSer = async (
  firstName: string,
  lastName: string,
  emails: string[]
) => {
  return await db.user.create({
    data: {
      firstName: firstName,
      lastName: lastName,
      emails: {
        create: emails.map((email) => ({ email })),
      },
    },
    include: {
      emails: true,
    },
  });
};
