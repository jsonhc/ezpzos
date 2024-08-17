# 使用官方的 Node.js 镜像作为基础镜像
FROM node:18-alpine

# Create and set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files

COPY EZPZOS.Web/ /app/

RUN ls -l /app/src

# Install dependencies
RUN npm install
RUN npm install Buffer
RUN npm run build

# # copy static file into container
COPY EZPZOS.Web/dist/ /app/dist/

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]

