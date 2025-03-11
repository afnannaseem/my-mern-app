# Use Node.js official image as base
FROM node:16

# Set the working directory
WORKDIR /code

# Install app dependencies
COPY backend/package.json ./ 
RUN npm install

# Copy the app code
COPY backend/ ./

# Expose the backend port
EXPOSE 5000

# Run the app using nodemon in development mode
CMD ["npm", "run", "dev"]
