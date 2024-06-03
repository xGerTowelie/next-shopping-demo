/**
 * ! Executing this script will delete all data in your database and seed it with 10 users.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from "@snaplet/seed";

async function main() {
    const seed = await createSeedClient();

    // Truncate all tables in the database
    await seed.$resetDatabase();

    // Seed the database with 10 users
    await seed.user((createMany) => createMany(10, {
        // Create 10 posts for each of those users
        posts: (createMany) => createMany(10),
    }))

    console.log("Database seeded successfully!");

    process.exit();
};

main();
