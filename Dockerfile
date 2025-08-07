# ---- Base Image ----
FROM node:20-alpine AS base

# Create app directory
WORKDIR /app

# Needed for some native modules
RUN apk add --no-cache libc6-compat

# ---- Install Dependencies ----
FROM base AS deps

# Copy dependency files
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# ---- Build Application ----
FROM base AS builder

# Copy installed modules and source
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED=1

# Build Next.js app with standalone output
RUN npm run build

# ---- Production Image ----
FROM node:20-alpine AS runner

WORKDIR /app

# Use non-root user
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=4000
ENV HOSTNAME=0.0.0.0

# Copy only the necessary files from the standalone build
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Set permissions for cache folder
RUN mkdir .next && chown nextjs:nodejs .next

# Run as non-root user
USER nextjs

# Expose port
EXPOSE 4000

# Start the server
CMD ["node", "server.js"]
