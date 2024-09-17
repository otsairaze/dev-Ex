import { Prisma } from "@prisma/client";
import { categories, products } from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({ productId }: { productId: number }) => {
  return {
    productId,
    price: randomNumber(24999, 95999),
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User Test",
        email: "user@test.ru",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin Admin",
        email: "admin@test.ru",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.product.createMany({
    data: products,
  });

  await prisma.productItem.createMany({
    data: [
      generateProductItem({
        productId: 1,
      }),
      generateProductItem({
        productId: 2,
      }),
      generateProductItem({
        productId: 3,
      }),
      generateProductItem({
        productId: 4,
      }),
      generateProductItem({
        productId: 5,
      }),
      generateProductItem({
        productId: 6,
      }),
      generateProductItem({
        productId: 7,
      }),
      generateProductItem({
        productId: 8,
      }),
      generateProductItem({
        productId: 9,
      }),
      generateProductItem({
        productId: 10,
      }),
      generateProductItem({
        productId: 11,
      }),
      generateProductItem({
        productId: 12,
      }),
      generateProductItem({
        productId: 13,
      }),
      generateProductItem({
        productId: 14,
      }),
      generateProductItem({
        productId: 15,
      }),
      generateProductItem({
        productId: 16,
      }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "11111",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "22222",
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      cartId: 1,
      productItemId: 1,
      quantity: 1,
    },
  });
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.log(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
