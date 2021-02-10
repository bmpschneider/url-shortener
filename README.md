<h1 align="center">URL Shortener Service</h1>

<p align="center">
A URL shortener is a service that receives any URL and returns another URL, usually
smaller than the original.</p>

<!--ts-->
   * [About](#about)
   * [Endpoints](#endpoints)
   * [Requirements](#requirements)
   * [Installation](#installation)
   * [How to use](#how-to-use)
   * [Technologies](#technologies)
<!--te-->


### About

A URL shortener is a service that receives any URL and returns another URL, usually
smaller than the original.


### Endpoints

- GET /urls/:id
- POST /users/:userid/urls
- GET /stats
- GET /users/:userId/stats
- GET /stats/:id
- DELETE /urls/:id
- POST /users
- DELETE /user/:userId


### Requirements

- [Node.js](https://nodejs.org/en/)


### Installation

1.In AWS server settings, release port 80.
- Access AWS panel> Security Groups> Inbound Rules
- Custom TCP> Port 80> Source Anywhere> Save Rules

2.Enter the Server Shell

3.Clone Github Project
-$git clone https://github.com/bmpschneider/url-shortener.git

4.Access Application Folder
-$cd url-shortener

5.Run 'install.sh' File
-$sh install.sh

6.Change Nodejs Version to 14.15.4
-$sudo apt install wget
-$wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
-$source ~/.profile
-$curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
-nvm install 14.15.4

7.Install Dependencies
-$npm install

8.Install MySQL
-$sudo apt install mysql-server
-Enter

9.To Configure MySQL Settings
-$sudo mysql_secure_installation
-enter
-root
-root
-enter
-enter
-enter
-enter
-$sudo mysql
-ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
-FLUSH PRIVILEGES;
-exit;

10.Create Database
-$sudo mysql -uroot -proot
-CREATE USER urlshortener@localhost IDENTIFIED BY 'urlshortener';
-CREATE DATABASE urlshortener;
-GRANT ALL ON urlshortener.* TO urlshortener@localhost IDENTIFIED BY 'urlshortener';
-FLUSH PRIVILEGES;
-exit;

11.Start Migrations
-npx sequelize-cli db:migrate

12.Start UrlShortener Service
-$sh start.sh

13.Install Process Manager pm2 (optional)
-$sudo npm install pm2 -g
-$pm2 start start.sh --name=deploy_test


### Technologies

The following tools were used in the construction of the project:

- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [Sequelize](https://sequelize.org/)
- [Nodemon](https://nodemon.io/)
- [MySQL](https://www.mysql.com/)