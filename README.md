# Express Mongo CRUD

API básica construida con Express y MongoDB que expone endpoints CRUD para productos y autenticación con JWT.

## Requisitos

- Node.js >= 18
- MongoDB en ejecución (local o remota)

## Configuración rápida

```bash
cp .env.example .env
# editar .env con tu cadena de conexión y secretos
npm install
npm run dev
```

## Endpoints disponibles

Autenticación (`/api/auth`)
- `POST /api/auth/register` – registrar un usuario nuevo.
- `POST /api/auth/login` – iniciar sesión y obtener token JWT.

Productos (`/api/products`)
- `GET /api/products` – listar productos (público).
- `POST /api/products` – crear producto (requiere token Bearer).
- `PUT /api/products/:id` – actualizar producto por id (requiere token).
- `DELETE /api/products/:id` – eliminar producto por id (requiere token).

Incluí el header `Authorization: Bearer <token>` para las operaciones protegidas.

## Scripts

- `npm run dev` – levantar el servidor con nodemon.
- `npm start` – ejecutar el servidor en modo producción.
