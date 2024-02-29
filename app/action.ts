"use server";
import { FormFields, authSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import bycrypt from "bcrypt";

export async function createUser(body: FormFields) {
  const validate = authSchema.safeParse(body);

  try {
    if (!validate.success) {
      throw new Error(validate.error.errors[0].message);
    }
    const hashedPassword = await bycrypt.hash(body.password, 10);

    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: hashedPassword,
      },
    });
    return user;
  } catch (err) {
    return err;
  }
}

export async function getUser(body: FormFields) {
  try {
    const validate = authSchema.safeParse(body);
    if (!validate.success) {
      throw new Error(validate.error.errors[0].message);
    }

    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (!user) throw new Error("No user found");
    const isPasswordCorrect = await bycrypt.compare(
      body.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Incorrect password!");
    return { user, error: "" };
  } catch (err) {
    return { user: null, error: (err as Error).message };
  }
}
