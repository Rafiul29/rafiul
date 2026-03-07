import { PrismaClient } from "@prisma/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

export const prisma = new PrismaClient();

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
    databaseHooks: {
        user: {
            create: {
                before: async (user) => {
                    // Pre-seeded Admin Only logic!
                    // If user is trying to sign up (Google or Email) 
                    // and their email is not predefined in DB, reject it.

                    const existingUser = await prisma.user.findUnique({
                        where: { email: user.email },
                    });

                    if (!existingUser) {
                        return {
                            data: user,
                            error: {
                                name: "SIGNUP_DISABLED",
                                message: "Only existing admin users are allowed to sign in. Public sign-up is disabled.",
                                status: 403,
                            }
                        };
                    }

                    return { data: user };
                }
            }
        }
    }
});
