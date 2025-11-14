# Next.js App - reda-haddan

This is a Next.js project located at `nextjs-app/reda-haddan`, bootstrapped with create-next-app and styled with Tailwind CSS.

## Prerequisites
- Node.js 18+ and npm (or yarn/pnpm/bun)
- Docker (optional, for containerized run)

## Run Locally (npm run dev)
1. Install dependencies:
   ```bash
   cd nextjs-app/reda-haddan
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000 in your browser.

Edits in `src/app/page.tsx` hot-reload automatically.

## Run with Docker
This repo includes a development Dockerfile at `nextjs-app/reda-haddan/Dockerfile.dev`.

1. Build the image:
   ```bash
   cd nextjs-app/reda-haddan
   docker build -f Dockerfile.dev -t nextjs-app-reda-haddan .
   ```

Stop and remove the container:
```bash
docker stop reda-haddan && docker rm reda-haddan
```

## License
See LICENSE.md at the repository root.
