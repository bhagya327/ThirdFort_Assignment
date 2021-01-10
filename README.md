# ThirdFort_Assignment

## Table of Contents
1. [General Info](#GeneralInfo)
2. [Technologies](#Technologies)
3. [Installation](#installation)
4. [Instruction to the UX Team](#UI/UX)
5. [Improvements](#Improvements)



## General Info
This is an API backend application that can be used to manage personal notes in a multi-user environment. It can

* Save a new note
* Update a previously saved note
* Delete a saved note
* Get all notes
* Archieve a note
* Unarchieved a previously archieved note
* Get all notes that are archieved

## Technologies
Built with **Backend**
1.  **node.js/Express** [version 12.16.1]

    Express is one of the most popular web frameworks for node.js. It is built on top of node.js http module, and adds support for routing, middleware, view system etc. It is very simple and minimal, unlike other frameworks that try do way to much, thereby reducing the flexibility for developers to have their own design choices.

    Alternatives:
 * **Asp .NET**
    It's open source server-side web application framework
* **Spring Boot**
    is an open-source application framework and the Java platform’s inversion of control container. Java applications can utilize the core features of this framework.

**API Testing**
* **Jest** 
    
    It’s easy to setup and watchmode is amazing
* **Superset**

    Alternatives:

* **JMeter** 

    JMeter is an open-source tool. It is created to do load testing but is widely used for functional API testing.

* **Mocha**

    javaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun


## Installation ##

1. git clone 

    https://github.com/bhagya327/ThirdFort_Assignment.git

2. cd ../path/to/the/file

3. install npm packages : 
    * **npm install**


4. run back end : 
    * **npm start**

5. For running Tests: 
    * **npm install jest --save-dev**

6. In the script section of  Package.json:
    * **"test"**: "npm test"**

7. **Go to terminal:**
    * npm test 


## Instruction to the UX Team
## API Methods ##

* **notes/addnew** : Adding a new note record to the mynotes DB.

* **notes/getAll** : Getting All the records in the DB

* **notes/:id** : Filtering out a specific record using the id

* **notes/update/:id** :Updating a given note using its id

* **notes/archieve**: Archiving a note using noteId

* **notes/getAllArchieved** : Retrieving all the Archieved notes

* **notes/getAllUnarchieved** : Retrieving all the UNArchieved  notes

## Improvements ##

* we can add large note Support

* authenicate a particular user before getting access to the notes
* we can modify queries by adding Indexes, StoredProcedures and views and Triggers 











