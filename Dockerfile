# ---- Build stage: generate static site (SSG)
FROM node:20-alpine AS builder

# Enable corepack so the pinned pnpm from package.json is used
RUN corepack enable

WORKDIR /app

# Install dependencies with better layer caching
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# Copy the rest of the app source
COPY . .

# Build static output
ENV NODE_ENV=production
ENV NITRO_PRESET=static
RUN pnpm generate

# ---- Runtime stage: serve static with Nginx
FROM nginx:alpine AS runner

# Replace default site with SPA-friendly config
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy generated static files
COPY --from=builder /app/.output/public /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
