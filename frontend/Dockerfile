# Use the official Node.js image
FROM node:16

# Set the working directory
WORKDIR /code

# Install dependencies
COPY frontend/package.json ./
RUN npm install

# Copy the app code
COPY frontend/ ./

# Expose the frontend port
EXPOSE 3000

# Run the React app in development mode
CMD ["npm", "start"]
