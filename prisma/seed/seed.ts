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

    // First, we create a pool of 5 tags to associate with posts
    const { category } = await seed.category((x) => x(categoriesCount, (ctx) => {
        return {
            name: `Category #${ctx.index}`,
            description: `Category description #${ctx.index}`,
        }
    }))

    // We create 5 users
    await seed.product(
        (x) => x(productsCount, (ctx) => {
            return {
                name: `Product #${ctx.index}`,
                description: `Product description #${ctx.index}`,
                price: Math.floor(Math.random() * (maxPrice - minPrice) + minPrice),
                image: `https://picsum.photos/200/300?random=${ctx.index}`,
                categories: (x) => x({ min: 0, max: 5 })
            }
        }),
        {
            // We provide our pool of tags for the PostTags relationship to choose from
            connect: { category }
        })


    process.exit();
}

main();
