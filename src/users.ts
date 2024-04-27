import type { Prisma } from "@prisma/client";
import db from "./db";

export type UserOutput = Prisma.UserCreateInput;

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

export const findUserById = async (
  userId: number
): Promise<UserOutput | null> => {
  return await db.user.findFirst({
    where: { userId },
  });
};
