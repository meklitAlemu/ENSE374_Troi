## Installing and Running Project Files

This document gives instructions on how to install and run our [Curre]("https://curre-ense.herokuapp.com/about") files locally.

### All Systems(Windows, Mac OS X, and Linux)

**Important**: running the project locally will require the installation of Node.js and Mongodb.
Installation guides can be found below.

1. [Download Node,Js for Windows, Mac OS, and Linux here]("https://nodejs.org/en/download/")
    Check successful download with the following command in `powershell`.
    ```
    node --version
    ```

2. [Download Mongodb here]("https://www.mongodb.com/try/download/community-kubernetes-operator")
    [Install Mongosh here]("https://www.mongodb.com/try/download/shell") and copy the files into your Mongodb bin folder.
    Check successful download with the following command in `powershell`.
    ```
    & "C:\Program Files\MongoDB\Server\6.0\bin\mongosh.exe" --version
    ```

### Installing the Curre files

3. [Download files from the github here directly]("https://github.com/meklitAlemu/ENSE374_Troi.git")
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

5. Run the project via the command below and it will run locally on your system
    ```
    node index.js
    ```

### Note the ENV file...