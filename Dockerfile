# Base stage
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./

# Build stage
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Development stage
FROM base AS development
ENV NODE_ENV=development
RUN npm ci
COPY . .
EXPOSE 3001
CMD ["npm", "run", "dev"]

# Storybook stage
FROM base AS storybook
ENV NODE_ENV=development
RUN npm ci
COPY . .
EXPOSE 6006
CMD ["npm", "run", "storybook"]

# Production stage
FROM node:18 AS production
ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
# Copy built app from the build stage
COPY --from=build /app/dist ./dist
# Vite typically outputs to a dist directory by default.
EXPOSE 8080
CMD ["npm","run", "preview"]