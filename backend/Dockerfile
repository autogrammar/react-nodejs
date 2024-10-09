FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY ../.env .

# Install MySQL client
RUN apt-get update && apt-get install -y default-mysql-client

# Make scripts executable
RUN chmod +x backup-db.sh restore-db.sh

EXPOSE ${BACKEND_PORT}

CMD ["node", "server.js"]