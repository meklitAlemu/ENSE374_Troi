## Installing and Running Project Files

This document gives instructions on how to install and run our [Curre](https://curre-ense.herokuapp.com/about) files locally.

### All Systems (Windows, Mac OS X, and Linux)

**Important**: running the project locally will require the installation of Node.js and Mongodb.
Installation guides can be found below.

1. [Download Node.Js for Windows, Mac OS, and Linux here.](https://nodejs.org/en/download/)<br>
    Check successful download with the following command in `powershell`.
    ```
    node --version
    ```

2. [Download Mongodb here](https://www.mongodb.com/try/download/community-kubernetes-operator)
    [Install Mongosh here](https://www.mongodb.com/try/download/shell) and copy the files into your Mongodb bin folder.<br>
    Check successful download with the following command in `powershell`.
    ```
    & "C:\Program Files\MongoDB\Server\6.0\bin\mongosh.exe" --version
    ```

### Installing the Curre files

3. [Download files from the github here directly.](https://github.com/meklitAlemu/ENSE374_Troi.git)<br>
    Or run the following command in the `Github CLI`
    ```
    gh repo clone meklitAlemu/ENSE374_Troi
    ```

4. Dependencies can be found in the Package.Json and can be installed the following ways. The first way should automatically install all the dependencies but in the case not all are installed, use the second command instead.
    ```
    npm i
    npm install dotenv ejs express express-session mongoose nodemon passport passport-local passport-local-mongoose
    ```
    The following are the dependencies outlined in the Package.json file.
    * dotenv
    * ejs
    * express
    * express-session
    * mongoose
    * nodemon
    * passport
    * passport-local
    * passport-local-mongoose

5. Create an `.env` file with the following environment variables.<br>
    Sample env file:
    ```
    DB_HOST=
    DB_USER=
    SECRET=
    ```

6. Run the project via the command below and it will run locally on your system.
    ```
    node index.js
    ```

## Advanced

In order to work with our remote database and website host, follow the instructions below. Please note that passwords to these resources must be requested from us directly.

### Remote Servers (Mongodb Atlas and Heroku)

1. [Install Heroku here]() <br>
    Check successful download with the following command in `powershell` note that you may need to restart your.
    ```
    heroku --version
    ```
    Create an account and log in to begin making deployments.

2. Request permission to collaborate on the project and clone our files from heroku to begin deployment.
    ```
    heroku git:clone -a curre-ense 
    cd curre-ense
    ```

### Procfiles are Heroku configuration files
Sample Procfile:

