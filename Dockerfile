# 使用官方的 Node.js 镜像作为基础镜像
FROM node:18-alpine

# Create and set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files

COPY EZPZOS.Web /app/EZPZOS.Web
COPY EZPZOS.Core /app/EZPZOS.Core

RUN ls -l /app/EZPZOS.Core
RUN ls -l /app

# Install dependencies
# RUN npm install
# RUN npm install Buffer
# RUN npm run build
RUN cd /app/EZPZOS.Core && npm install && npm run build
RUN cd /app/EZPZOS.Web && npm install && npm install Buffer && npm run build
RUN ls -l /app/EZPZOS.Web
RUN cp -a /app/EZPZOS.Web/* /app/
RUN ls -l /app/webpack.config.js
RUN ls -l /app/node_modules
# # copy static file into container
#COPY EZPZOS.Web/dist/ /app/dist/

# Expose the application port
EXPOSE 3000

# Command to run the application

CMD ["npm", "start"]
