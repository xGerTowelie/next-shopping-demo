# Scripts

## Starting dev server
Dev server is for hotreload while in development for faster feedback loop.
```
    "dev": "next dev",
```

## Starting Prisma Studio
Prisma studio is for database management, testing and debugging.
```
    "studio": "npx prisma studio",
```

## Prisma Seeding
Prisma seeding is for populating the database with sample data.
```
    "seed": "npx prisma db seed",
```

## Prisma Migration
Prisma migration is for migrating the current prisma schema to the database.
```
    "migrate": "prisma migrate dev",
```

## Prisma Post-Migration
Autoruns after the migration to synchronize the snaplet client.
```
    "postmigrate": "npx @snaplet/seed sync",
```

## Build
Building the whole application to deploy it to production.
```
    "build": "next build",
```

## Start a build
Starting the application which was build in `next build`.
```
    "start": "next start",
```
