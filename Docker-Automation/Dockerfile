# Use the 22-alpine3.18 version of the Node.js image as the base image
FROM node:22-alpine3.18 

# Set the working directory inside the container to /usr/src/app
WORKDIR /usr/src/app  

# Copy the contents of the local "nodeapp" directory to the WORKDIR(/usr/src/app) of the container (./ means WORKDIR)
COPY nodeapp/* ./  

# Run the npm install command to install the dependencies specified in package.json
RUN npm install  

# Expose port 3000 to allow incoming connections to the container
EXPOSE 3000  

# Start the application by running the "npm start" command
CMD [ "npm", "start" ]  
