# Use Node.js LTS version as the base image
FROM node:18

# Create app directory inside container
WORKDIR /app

# Copy package.json and package-lock.json before copying app files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container's working directory
COPY . .

# Expose port (default to 5000)
EXPOSE 5000

# Set environment variable for production
ENV NODE_ENV=production

# Start the application
CMD ["node", "server.js"]
