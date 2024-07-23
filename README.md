<h1 align="center">Simple restfull user clean archictecure</h1>

<p align="center">
  <a href="#tech">Technologies</a> •
  <a href="#started">Getting Started</a> •
  <a href="#routes">Api endpoints</a> •
</p>

<p align="center">
  <b>This is a simple project to implement clean architecture</b>
</p>


<h2 id="tech">🧑‍💻 Technologies</h2>

- Typescript
- Nodejs
- Prisma
- SQLite
- Express

<h2 id="started">🚀 Getting started</h2>
<h3>Prerequisites</h3>

- [NodeJS](https://nodejs.org/en/download/package-manager)
- [Git](https://git-scm.com/downloads)

<h3>Cloning</h3>

```bash
git clone https://github.com/IsaacBighi/simple-restfull-user-clean-architecture.git
```

<h3>Config .env variables</h3>
It is not necessary to create environment variables as I am only using SQLite which is a local database, when you create your project, you will have your own database

<h3>Starting</h3>

```bash
cd simple-restfull-user-clean-architecture
npm install
npx prisma migrate dev
npm run start
```

<h3>Api endpoints</h3>
If you don't change the port in the server.ts file, it will start at port 3000 by default 


| route               | description     
| --------------------|---------------------
| <kbd>GET /users</kbd>         | It will show you an array with all created users. [response details](#get-/users)
| <kbd>GET /users/:id</kbd>     | It will show you the information of a specific user. [response details](#get-/users/:id)
| <kbd>POST /users</kbd>        | Creating a user. [request details](#post/users)
| <kbd>PUT /users/:id</kbd>     | Update a user. [request details](#put-users/:id)
| <kbd>Delete /users/:id</kbd>  | Delete a user. 


<h3 id="get-/users">Get /users</h3>

**RESPONSE**
```JSON
[{
  "id": "1234doajd-dapowjda-dapojdda",
  "name": "John Doe 1",
  "email": "JohnDoe1@gmail.com"
},
{
 "id": "1234doajd-dapowjda-dapojdda",
  "name": "John Doe 1",
  "email": "JohnDoe1@gmail.com"
}]
```

<h3 id="get-/users/:id">Get /users/:id</h3>

**RESPONSE**
```JSON
{
  "id": "1234doajd-dapowjda-dapojdda",
  "name": "John Doe 1",
  "email": "JohnDoe1@gmail.com"
}
```

<h3 id="post/users">Post /users</h3>

**REQUEST**
```JSON
{
  "name": "John Doe 3",
  "email": "JohnDoe3@gmail.com",
  "password": "JohnDoe123"
}
```

<h3 id="put-users/:id">Put /users/:id</h3>

**REQUEST**
```JSON
{
  "name": "John Doe 4",
  "email": "JohnDoe3@gmail.com",
}
```
