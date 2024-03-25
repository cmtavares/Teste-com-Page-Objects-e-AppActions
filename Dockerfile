FROM cypress/base:latest

WORKDIR /home/cypress/

COPY . /home/cypress/

VOLUME [ "/home/cypress/mochawesome-report" ]

RUN npm install

CMD ["npx", "cypress", "run"]