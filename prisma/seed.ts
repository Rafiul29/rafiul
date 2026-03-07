import { auth } from '@/lib/auth'; // Import your SERVER auth instance, not the client
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function

    main() {
    const adminEmail = 'rafiulislamcse29@gmail.com';

    // 1. Cleanup
    await prisma.user.deleteMany({ where: { email: adminEmail } });

    // 2. Use the SERVER-SIDE API to create the user
    // Better Auth's server API creates the user AND the account entry correctly
    const user = await auth.api.signUpEmail({
        body: {
            name: "Rafiul Islam",
            email: adminEmail,
            password: "12345678",
        }
    });

    console.log('✅ Admin seeded:', user);
}

main()
    .then(async () => await prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });