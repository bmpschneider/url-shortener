<h1 align="center">URL Shortener Service</h1>

<p align="center">
A URL shortener is a service that receives any URL and returns another URL, usually
smaller than the original.</p>

<!--ts-->
   * [About](#about)
   * [Endpoints](#endpoints)
   * [Installation](#installation)
   * [How to use](#how-to-use)
      * [Local files](#local-files)
      * [Remote files](#remote-files)
      * [Multiple files](#multiple-files)
   * [Tests](#testes)
   * [Technologies](#technologies)
<!--te-->

### About 💡

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

### Installation


coming soon



### Technologies 🛠

The following tools were used in the construction of the project:

- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [Sequelize](https://sequelize.org/)
- [Nodemon](https://nodemon.io/)
- [MySQL](https://www.mysql.com/)