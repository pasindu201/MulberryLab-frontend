# Stage 1: Build Vite app
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy the rest of the codebase
COPY . .

# Build the Vite app (Vite outputs to /dist by default)
# RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev","--host", "0.0.0.0"]

# Stage 2: Serve with Nginx
# FROM nginx:alpine

# # Copy build output from Vite
# COPY --from=builder /app/dist /usr/share/nginx/html

# # Optional: custom nginx config
# # COPY nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80

# # Run Nginx
# CMD ["nginx", "-g", "daemon off;"]
