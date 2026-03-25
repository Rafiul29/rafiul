import { auth } from '@/lib/auth'; // Import your SERVER auth instance, not the client
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    try {
        const adminEmail = 'raficse00@gmail.com';

        console.log('🌱 Starting seed process...');

        // 1. Cleanup
        await prisma.user.deleteMany({ where: { email: adminEmail } });
        console.log('🗑️  Cleaned up existing admin user');

        // 2. Use the SERVER-SIDE API to create the user
        // Better Auth's server API creates the user AND the account entry correctly
        const response = await auth.api.signUpEmail({
            body: {
                name: "Rafiul Islam",
                email: adminEmail,
                password: "12345678",
            }
        });

        await prisma.user.update({
            where: { id: response.user.id },
            data: {
                emailVerified: true,
            }
        })

        const updatedUser = await prisma.user.findUnique({
            where: { id: response.user.id }
        });

        console.log('✅ Admin seeded successfully:', updatedUser);
    } catch (error) {
        console.error('❌ Error during seeding:', error);
        throw error;
    }
}

main()
    .then(async () => await prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });