# Stage 1: Build React app
FROM node:18-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Serve app using Nginx
FROM nginx:alpine

# Copy the build output to Nginx's public folder
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom Nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
