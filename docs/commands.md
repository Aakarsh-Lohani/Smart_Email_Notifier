# Commands used during development of Smart Email Notifier Project :

#### NOTE : This project is structured using modern JavaScript practices, including ES6 modules. ES6 modules provide a more modular and maintainable approach to JavaScript code by using import and export statements. 

## 1. 16-06-2024
<br>

### 1. To set up the project structure, the following commands were used:

#### 1.1 Create the necessary directories:
```
mkdir frontend, backend, templates, docs
```

- `mkdir frontend`: This command creates the frontend directory.
- `mkdir backend`: This command creates the backend directory.
- `mkdir templates`: This command creates the templates directory.
- `mkdir docs`: This command creates the docs directory.


#### 1.2 Change Directory to Backend
To navigate to the backend directory

```
cd backend 
```

#### 1.3 Create Backend Subdirectories and Files
Within the backend directory, the following commands were executed to create necessary subdirectories and files:

```
mkdir config, controllers, models, routes, utils, tests

mkdir services

ni server.js

ni .env
```

- `mkdir config, controllers, models, routes, utils, tests
mkdir services` : Creates the config, controllers, models, routes, utils, tests directories.
- `mkdir services`: Creates the services directory.
- `ni server.js`: Creates the server.js file.
- `ni .env`: Creates the .env file.

<br>

### 2. Initialize Node.js Project and Install Dependencies

#### 2.1 Initialize Node.js project 
To initialize a new Node.js project and install necessary dependencies, the following commands were executed:

```
npm init -y
```
- `npm init -y`: Initializes a new Node.js project with default settings.

#### 2.2  Install Dependencies
```
npm install express body-parser cors mongoose dotenv
```

- `npm install express body-parser cors mongoose dotenv`: Installs the express, body-parser, cors, mongoose, and dotenv packages.


#### 2.3 Install development dependencies

```
npm install --save-dev nodemon
```

- `npm install --save-dev nodemon` : Install nodemon as a development dependency in the Node.js project.

<br>


### 3. Abstract Email Service

#### 3.1 Create a common interface for email services.

```
Create file : services/emailService.js
```

#### 3.2 Implement the Nodemailer service.
```
npm install nodemailer
```
- `npm install nodemailer`: The command `npm install nodemailer` installs the Nodemailer package in the Node.js project.<br>
Nodemailer is a module for Node.js applications to allow easy email sending.
```
Create file : services/nodemailerService.js
```

#### 3.3 Implement another service SendGrid

```
npm install @sendgrid/mail
```

- `npm install @sendgrid/mail`: This command installs the `@sendgrid/mail` package, which is a helper library for SendGrid's mail service, allowing to send emails from Node.js applications using SendGrid's API.

```
Create file: services/sendgridService.js
```

<br>

### 4. Configure Service Selection

#### 4.1 Create a file to select the email service.

```
Create file : config/emailConfig.js 
```

#### 4.2 Update .env file to include the email service selection

<br><br><br><br><br><br>

## 2. 17-06-2024

<br>

### 5. Update Server Configuration

#### 5.1 Configure server.js to use the selected email service

#### 5.2 Create Route File for sending email

```
Create file : routes/emailRoutes.js
```
#### 5.3 Create Route File for templates
```
Create file : routes/templateRoutes.js 
```
#### 5.4 TESTING EMAIL NOTIFICATION

## 3. 02-07-2024

### 6. Template Model and CRUD operations

#### 6.1 Create the Template Model
```
Create file models/template.js
```

#### 6.2 Create Template Controller Functions

```
Create file controllers/templateController.js 
```

- file to include the necessary functions for fetching and selecting templates

#### 6.3 Create Routes for Templates

```
Create routes/templateRoutes.js file
```

- define the routes for template-related actions

#### 6.4 Create the index.js file for better organization
```
Create file routes/index.js
```

#### 6.5 Update server.js to use index.js

```
Update server.js file
```

### 7. Create Database and Integrate

#### 7.1 Create database ```EmailNotifierDB``` in MongoDB

#### 7.2 Update ```MONGO_URI``` in .env file


#### 7.3 TESTING CONNECTION OF DATABASE : ```EmailNotifierDB```


