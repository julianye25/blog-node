# API REST Blog Node

API REST construida con Node.js, Express y MongoDB (Mongoose) para gestionar artículos.

## Tecnologías

- Node.js
- Express
- MongoDB + Mongoose
- dotenv
- cors
- morgan
- validator

## Estructura del proyecto

```text
.
├── index.js
├── package.json
├── database/
│   └── connection.js
└── src/
		├── controllers/
		│   └── article.js
		├── models/
		│   └── Article.js
		├── routes/
		│   └── article.js
		└── services/
				└── article.js
```

## Requisitos

- Node.js 18 o superior
- MongoDB disponible (local o en la nube)

## Instalación

1. Instala dependencias:

```bash
npm install
```

2. Crea un archivo `.env` en la raíz del proyecto con la cadena de conexión:

```env
uri=mongodb://127.0.0.1:27017/blogdb
```

Nota: la variable se llama `uri` en minúsculas porque así se usa en el código.

## Ejecución

Modo desarrollo (con recarga):

```bash
npm run dev
```

Modo normal:

```bash
npm start
```

La API queda disponible en:

- `http://localhost:3000` (o el puerto definido por `PORT`)

## Endpoints

Prefijo base: `/api`

1. Crear artículo

- Método: `POST`
- Ruta: `/api/articles`
- Body (JSON):

```json
{
  "title": "Mi primer artículo",
  "content": "Contenido del artículo",
  "img": "portada.jpg"
}
```

2. Obtener todos los artículos

- Método: `GET`
- Ruta: `/api/articles`

3. Obtener un artículo por id

- Método: `GET`
- Ruta: `/api/article/:id`

4. Actualizar un artículo

- Método: `PUT`
- Ruta: `/api/article/:id`
- Body (JSON):

```json
{
  "title": "Título actualizado",
  "content": "Contenido actualizado"
}
```

5. Eliminar un artículo

- Método: `DELETE`
- Ruta: `/api/article/:id`

## Modelo de datos

Colección: `article`

- `title`: string
- `content`: string
- `date`: date (automática)
- `img`: string (por defecto: `degault.png`)

## Respuestas y validaciones actuales

- La creación valida:
  - `title` no vacío y con mínimo 5 caracteres.
  - `content` no vacío.
- En varias rutas, el formato de error no es uniforme y depende del servicio/controlador.
- Algunas respuestas devuelven mensajes simples (`"not found"`, `"internal error"`) en lugar de objetos estandarizados.

## Ejemplo rápido con curl

Crear artículo:

```bash
curl -X POST http://localhost:3000/api/articles \
	-H "Content-Type: application/json" \
	-d "{\"title\":\"Articulo demo\",\"content\":\"Texto de ejemplo\"}"
```

Listar artículos:

```bash
curl http://localhost:3000/api/articles
```
