# Development

1. Renombrar archivo .env.example a .env y rellenar las variables de entorno.
2. Levantar la base de datos: `docker compose up --build -d`
3. Ejecutar el comando `npm install`
4. Ejecutar los comandos para generar la db:

```
   npx prisma migrate dev
   npx prisma generate
```

5. Ejecutar `npm run dev`
6. Ejecutar el seed para poblar la db: `http://localhost:3000/api/seed`

# Prisma Commands

1. Inicializar un esquema de prisma: `npx prisma init`
2. Crear una migracion con nombre: `prisma migrate dev --name nombre_migracion`
3. Ejecutar migraciones existentes (dev): `npx prisma migrate dev`
4. Ejecutar migraciones existentes (prod): `npx prisma migrate deploy`
5. Generar el cliente de prisma: `npx prisma generate`
6. Crear un esquema a partir de una db existente: `npx prisma db pull`
7. Crear db sin migracion: `npx prisma db push`
