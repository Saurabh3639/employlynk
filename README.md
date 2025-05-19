# Employlynk App


## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Dependencies

```bash
npm install daisyui@latest
npm install next-auth prisma @prisma/client @auth/prisma-adapter bcryptjs axios
```


## Prisma setup

```bash
npx prisma init
npx prisma db push
npx prisma generate
```


## Environment Variables

```bash
# Database Configuration
DB_URL = "mysql://root:password@localhost:3306/mydatabase"

# Google Configuration
GOOGLE_CLIENT_ID = ""
GOOGLE_CLIENT_SECRET = ""

# NextAuth Configuration
NEXTAUTH_SECRET = ""

NODE_ENV = "development"
```
