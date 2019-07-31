# &alpha; ROMANIZER

Written in **NodeJS**, insert numbers from **-9999** to **9999** and receive a JSON of the spelled version of the number.

| Overview  |
| ------------- |
| Concept |
| File Structure|
| Setup and Usage|
| Roadmap|
| References|

### Concept

The choices for this test application were all made with these priorities in mind: 

1. To have the least number of dependencies possible, allowing the maintenance of packages to be lean and simple, while trying to keep the logic the closest possible to vanilla JavaScript.

2. To separate the logic as much as possible, while not modularizing to the point of frivolity. So, the helpers were separated from the main controller based on the domain of data manipulation they were responsible for. *DecimalConvertionHelper.js* would return the translation of the request value upon demand, the *ValidationHelper.js* would contain all the present and future code of integrity and formatting validation, the *ConvertionHelper.js* would take care of the process of issuing the convertion itself for the main controller and the *NumberController.js* would make the pertinent calls to the helpers, while handling the API flow for the convertion of the numbers, being also responsible for the responses.

3. The setup would be as straightforward as possible, allowing for the application to run with the least amount of tweaks as possible (changes in the Dockerfile EXPOSE port or the env port for the running of the JS application). This priority would also allow for an easier setup of the application for running in different environments, such as the aforementioned Docker image or even more environments if desired, like a Heroku server, or any generic linux web server.


#### Other conceptual choices

The choice of focusing all the logic of the *ConvertionHelper.js* around a switch code block was to prevent any rewrites in the event this code was ever expanded upon. Let's say a new feature is needed, one in which the length of the input entered by the user is increased from 5 to 6 (I am, of course, leaving aside the fact that the application currently accepts a sixth character in the form of the minus sign), taking the range to the hundreds of thousands as well. In this case, a switch code bloc with the currently written helpers could be easily expanded upon.   


### File structure
```
|_api
	|_controller
    	|_helpers
        	|ConvertionHelper.js
            |DecimalConvertionHelper.js
            |ValidationHelper.js
        |NumberController.js
    |_dictionaries
    	|_pt-br
        	|NumberDictionary.js
    |_handler
    	|handler.js
    |app.js
    |index.html
    |router.js
|_config
	|_env
    	|config.js
        |development.js
|_node_modules (auto-generated)
|_test
	|_bash
    	|inside-boundary-tests
        |out-of-bounds-tests
    |_postman
    	|LOCALHOST_Romanizer.postman_collection.json
|.dockerignore
|.gitignore
|Dockerfile
|package.json
|package-lock.json
|README.md
|server.js
```

### 1 Setup and Usage

The application can run on a docker container or as a standalone application, granted that you have the dependencies necessary for running a **NodeJS** application in your local environment.  

For that, it is necessary that you have a running javascript/npm environment. This application was built on the npm **6.10.2** version.

For running the requests through the browser, simply run the request through the url. example.: http://localhost:4567/55 should return the request with the **converted_number** as "Cinquenta e Cinco".

For running in the terminal, simply run:
```
curl http://localhost:4567/55
```
to receive the same result as the browser example directly in your terminal.

#### 1.1 Direct usage (no container or image)

1. Download or clone the repository

```
git clone https://github.com/vitorfbs/romanizer.git
```
2. Install the dependencies and then run the application with the nodemon custom command
```
npm install
npm run development
```
3. The application should be available in the url provided in the CMD output
```
Server is now running. 
 Port: 4567 
 Environment: http://localhost:4567
```

#### 1.2 Docker
There is a **Docker** image version of the application available in [Docker Hub](https://hub.docker.com/r/vfbemsilva/romanizer).
<br/>
<a href="https://hub.docker.com/r/vfbemsilva/romanizer">https://hub.docker.com/r/vfbemsilva/romanizer</a>

A simple pull from the repository and running it as a container will run the application in through the ports defined in the **Dockerfile** and **server.js** file.

For reference, these are the commands used to generate and run the **vfbemsilva/romanizer** image:
```
//criar imagem
docker build -f Dockerfile . -t vfbemsilva/romanizer:latest

//image push to the server
docker push vfbemsilva/romanizer:latest

//image push to the server
docker pull vfbemsilva/romanizer:latest

//pra rodar
docker run -dt -p 4567:4567 --name romanizer vfbemsilva/romanizer:latest
```


#### 1.3 Testing

There are two test environments setup for the application, both of which will return JSON responses for both cases inside the bounds of the expected (*things predicted in the normal behaviour of the application*), and some out-of-bounds (*in an effort to predict marginal behaviour of the application*).

##### 1.3.1 Bash

Run the scripts on your terminal to receive a response from a series of curl requests.

##### 1.3.2 Postman

Import the collection to your postman local environment. There are four tests of integrity for each request, and in the case of the invalid requests, it is wanted that the response is a **500 Internal Server Error** error response.

There are two collections, one which will test your localhost version of Romanizer and one which will test the Heroku version of the application.

For more information, refer to the [Postman](https://learning.getpostman.com/docs/postman/api_documentation/intro_to_api_documentation/) documentation.

#### 1.4 Heroku (Live Preview)
Alternatively, you can use the Heroku live version of the application to check out the functionalities without needing to run the code localy:
<br/>
https://vfbs-romanizer.herokuapp.com
<br/>
The functionality is the same as expected, following the guidelines of the **usage** section. 
---

### 2 Roadmap

1. Personalized error responses for each wrong input of the user
>Currently there is only one verification method and one response setup from a negative return of it. Ideally, it would be personalized so the API user could be better guided on it's usage of the application.
2. Remove unused dependencies
>Further removal of unused dependencies, followed by a battery of tests in the integrity of the application
3. Localization for the dictionary (upon demand of extra languages. ex.: EN-US)
>Although not necessary, the appplication was designed thinking of the possibility of adding extra languages by using a dictionary folder that would contain the localized versions of the decimal slot arrays.


### 3 References

These were used as dependencies, references for study or guidelines for the development of this application.

#### 3.1 Dependancy's or Repository Links

##### 3.1.1 Github

[nodeJS](https://github.com/nodejs/node) <br/>
[expressJS](https://github.com/expressjs/express) <br/>
[axios](https://github.com/axios/axios) <br/>
[nodemon](https://github.com/remy/nodemon) <br/>

##### 3.1.2 NPM

[cookie-parser](https://www.npmjs.com/package/cookie-parser) <br />
[jslint](https://www.npmjs.com/package/jslint) <br/>

#### 3.2 Educational and Usage Referral Links

https://www.w3schools.com/nodejs/nodejs_http.asp <br/>
https://nodejs.org/api/http.html <br/>
https://nodejs.org/api/https.html <br/>
https://www.w3schools.com/jsref/jsref_match.asp <br />

