/**
 * ! Executing this script will delete all data in your database and seed it with products and categories.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx ts-node seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from "@snaplet/seed";

const productsCount = 10;
const minPrice = 10;
const maxPrice = 1000;
const categoriesCount = 10;

async function main() {
    const seed = await createSeedClient();

    // Truncate all tables in the database
    await seed.$resetDatabase();


    await seed.product((x) => x(productsCount, (ctx) => ({
        name: `Product #${ctx.index}`,
        description: `Product description #${ctx.index}`,
        price: Math.floor(Math.random() * (maxPrice - minPrice) + minPrice),
        image: `https://picsum.photos/200/300?random=${ctx.index}`,
        categories: (x) => x({ min: 1, max: 5 })
    })))


    process.exit();
}

main();
