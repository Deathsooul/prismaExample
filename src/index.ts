import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      id: "user-1",
      name: "Wallace Bescrovaine",
      email: "wbescrovaine@gmail.com",
      groups: {
        connectOrCreate: {
          where: {
            id: "group-1",
          },
          create: {
            id: "group-1",
            titles: "Group 01",
          },
        },
      },
    },
  });
}

main()
