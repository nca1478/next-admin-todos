# Development

1. Renombrar archivo .env.example a .env y rellenar las variables de entorno.
2. Levantar la base de datos: `docker compose up --build -d`

# Prisma Commands

1. Inicializar un esquema de prisma: `npx prisma init`
2. Ejecutar migración: `npx prisma migrate dev`
3. Generar el cliente de prisma: `npx prisma generate`
