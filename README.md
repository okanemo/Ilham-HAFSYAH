<h1 align="center">OKANEMO-NOZOMU Investment RESTful API</h1>

## Built With

[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.12.13-green.svg?style=rounded-square)](https://nodejs.org/)

## Requirements

1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. Node_modules
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server (ex. localhost)

## How to run the app ?

1. Open app's directory in CMD or Terminal
2. git clone https://github.com/okanemo/Ilham-HAFSYAH.git
3. Type `npm install`
4. Make new file a called **.env**, set up first [here](#set-up-env-file)
5. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
6. Create a database with the name #database_name, and Import file sql to **phpmyadmin**
7. Open Postman desktop application or Chrome web app extension that has installed before
8. Choose HTTP Method and enter request url.(ex. localhost:3000/)
9. You can see all the END POINT [here](https://documenter.getpostman.com/view/13449265/TzJoDLDo) (POSTMAN DOCUMENTATION)

## Set up .env file

Open .env file on your favorite code editor, and copy paste this code below :

```
PORT = 3000
DB_HOST = localhost
DB_USER = root
DB_PASSWORD = ''
DB_NAME = okanemo
```

## EXTRA
1. Multer middleware for user profile picture
2. dotenv
3. Implementing pagination for get member feature


## License

© [Mohammad Ilham Nurdhi Hafsyah](https://github.com/IlhamHafsyah)
