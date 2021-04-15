# Delivery App
> This project is a simple implementation of an e-commerce app.

## Prerequisites
You need to have the following installed on your local development system before you can 
go ahead with this project (except you want to develop using docker).

- [Nodejs](https://nodejs.org/en/download/current/) _at least 10.16.0 or later version_
- [MSSQL](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

## Installation

```bash
# server
cd server
npm install
```

## Usage
#### development
For developmental purpose, run the following commands
```bash
# server
npm run start:dev
```
#### test
To run test, run below command
```bash
npm run test
```
#### production
For production, run below command
```bash
# server
npm run build
npm run start:prod
```
#### Docker (recommended)
For docker, run the following commands

```bash
docker-compose up -d
```

## Structure
This project is structured in modules. We have the Categories module, Products module and Suppliers module

### Categories Module
The Categories module contains information about a product category. The files in this module include
category controller, entity, provider, validations and the unit tests.

## Products Module
The Products module contain information about products. The files are also structured exactly the same.

## Suppliers Module
The Suppliers module contain information about suppliers. The files are also structured exactly the same.

## Features
The features of this project include the following.

- Create a new product
- Update a product
- Get all products paginated
- Get a product with its supplier and category
- Search a product
- Create a category
- Get a category with its associated products
- Get a supplier
- Get a supplier with associated products
- Delete a supplier


## API Documentation
The API documentation for testing the endpoints is located <a href="https://documenter.getpostman.com/view/9548350/TzJpjLd5">here</a>

## License
[ISC](https://choosealicense.com/licenses/mit/)