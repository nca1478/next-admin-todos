# Development

1. Renombrar archivo .env.example a .env y rellenar las variables de entorno.
2. Levantar la base de datos: `docker compose up --build -d`
3. Ejecutar el comando `npm install`
4. Ejecutar los comandos para generar la db:

```
npx prisma migrate dev
npx prisma generate
```

6. Ejecutar `npm run dev`
7. Ejecutar el seed para poblar la db: `http://localhost:3000/api/seed`

# Prisma Commands

1. Inicializar un esquema de prisma: `npx prisma init`
2. Ejecutar migración: `npx prisma migrate dev`
3. Generar el cliente de prisma: `npx prisma generate`
