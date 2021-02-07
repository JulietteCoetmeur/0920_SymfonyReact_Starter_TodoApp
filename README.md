# Symfony & React Starter App

## To start with TodoApp, clone this repo  

- ```➜ cd 0920_SymfonyReact_Starter_TodoApp``` 

### Database : one table todo with > id > title not null > description can be null > todoBefore datetime not null > isDone boolean defaultValue=false
- Create `.env.local` > `DATABASE_URL="mysql://user:password@127.0.0.1:3306/db-name?serverVersion=5.7"`then run : 
- ``` bin/console d:d:c ``` 
- ``` bin/console make:migration ``` 
- ``` bin/console doctrine:migration:migrate ``` 

### Dependencies
- ``` composer install ```
- ``` yarn install ```

### Build React App :
- ``` yarn encore dev --watch ```


### Start Symfony :
- ``` symfony server:start ```


### <TodoApp/> is ready 🤌


#### In this project >

> /assets for React app
> /assets/index.js is the entry point
  
* in src/controller/DefaultController > index method return the default template where React take hand to display front app to client
* in assets/App.jsx import > ./components/Home.jsx > fetchTodos with axios who gets data from url '/todo/' (L:11), this is the route declared in our src/controller/TodoController.php index method qui return json result from $todoRepository->findAll() at the L:30. After axios get response, Home.jsx loop on todos and inject todo in new component named TodoAlert.jsx. <br> 
Read the code and try to understand how it works, follow the logic and bidouille 🔧𓀄  

* in src/controller/TodoController > you will find all routes available in app

#### In this application you will be able to :
- Create Todo with title description and datetime
- Read a Todo
- Update a Todo
- Delete a Todo
- List Todo by Datetime ASC not done
- List Todo by Datetime ASC done
- List All Todo by Datetime ASC 