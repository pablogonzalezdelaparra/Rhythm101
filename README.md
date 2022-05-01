# Rhythm101 API - User's manual
## Group 402 - CEM - Team 4
This API was written and developed using NestJS (Version: 8.2.5), TypeORM (Version: 0.3.6) and MySQL database

## Dashboard
In order to acces the Tableau Dashboard which contains a sample of the data collected from players information and progress on the videogame [Rhythm101](https://github.com/pablogonzalezdelaparra/Rhythm101-game), refer to this [webpage](https://rhythm101-pas-muwxy.ondigitalocean.app/).
<br />
username: pas
<br />
password: admin

## Edit or modify the API.
1. Download this repository as zip or fork and then clone this repository in your local machine.
2. Open the folder using an IDE that supports NodeJS projects and modules (recommended: Visual Studio Code).
3. Open the terminal.
4. Build the app using the command.
```
npm run build
```
5. Start the app (recommended: Development mode) using the command.
```
npm run start:dev
```
6. Write http://localhost:3000/ in your prefered browser. You should see the next message displayed.
> Hello World
7. In order to modify the database connection, go to src -> app.module.ts, where you could modify.
    * Type
    * Host (IP address)
    * Port
    * Username
    * Password
    * Database
8. Use the IDE to edit (add, delete, or modify) the API components.
9. Save your changes.

## Elements to consider
* The API is currently running on a digital web server (DigitalOcean) that is directly linked to this current repository. [API on Web Server](https://rhythm101-oxy65.ondigitalocean.app/)
* If this repository is modified, then the app will be rebuilt according to said changes.
* The MySQL database is also hosted in the same digital web server. The TypeORM module used for development creates the database inside the NestJS, so the creation of tables and relationships on said database are done automatically.
* In order to use another web server hosting, we recommend forking this repository in order to have full ownership and editing capabilities.
* If the API is changed to another web server, the links in the Unity Videogame should be changed accordingly in Assets -> Scripts

## Additional Comments
If there are any questions or comments about this API, its details and characteristics, please contact the development team in the respective Slack channel.

## Credits
### Aleny Sofía Arévalo Magdaleno - [Github Profile](https://github.com/A01751272)
### Luis Humberto Romero Pérez - [Github Profile](https://github.com/A01752789)
### Valeria Martínez Silva - [Github Profile](https://github.com/ValeriaMartinez22)
### Pablo González de la Parra - [Github Profile](https://github.com/pablogonzalezdelaparra)