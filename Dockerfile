FROM node:14.17.5-alpine
ARG WORKSPACE=/apps/loadtester
# create app directory
RUN mkdir -p ${WORKSPACE}

# install node_modules
WORKDIR ${WORKSPACE}
COPY ./package.json .
RUN npm install

# install application
COPY . .

# Expose port
EXPOSE 3000

CMD [ "node", "server.js" ]