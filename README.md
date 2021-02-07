# Symfony & React Starter App

## To start with TodoApp, clone this repo  

- ``` ➜ cd 0920_SymfonyReact_Starter_TodoApp ``` 

### Database : 

One table todo with 
> id <br>
> title string NOT NULL <br>
> description text CAN BE NULL <br>
> todoBefore datetime NOT NULL <br> 
> isDone boolean defaultValue=false <br>

Create `.env.local` > `DATABASE_URL="mysql://user:password@127.0.0.1:3306/db-name?serverVersion=5.7"`

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


### TodoApp is ready 🤌


#### In this project >

> /assets for React app <br>
> /assets/index.js is the entry point
  
> in src/controller/DefaultController <br> 
  index method return the default template where React takes hand to display front app to client <br>

> in assets/App.jsx import ./components/Home.jsx <br> 
   method fetchTodos with axios gets data from url '/todo/' (L:11), this is the route declared in our src/controller/TodoController.php index method qui return json result from $todoRepository->findAll() at the L:30. <br> 
   After axios get response, Home.jsx loop on todos and inject todo in new component named TodoAlert.jsx. <br> 
   Read the code and try to understand how it works, follow the logic and bidouille 🔧𓀄 <br>

> All routes availaible : ``` bin/console debug:router ```
```
  default                    ANY        ANY      ANY    /                                  
  todo_todo                  GET        ANY      ANY    /todo/                             
  todo_done                  GET        ANY      ANY    /todo/done                         
  todo_all                   GET        ANY      ANY    /todo/all                          
  todo_add                   GET|POST   ANY      ANY    /todo/add                          
  todo_data                  GET        ANY      ANY    /todo/data/{id}                    
  todo_todo_show             GET        ANY      ANY    /todo/see/{id}                     
  todo_edit                  GET|POST   ANY      ANY    /todo/edit/{id}                    
  todo_delete                DELETE     ANY      ANY    /todo/delete/{id}                  
  todo_is_done               PATCH      ANY      ANY    /todo/is-done/{id}
```

#### In this application you will be able to :
- Create Todo with title description and datetime
- Read a Todo
- Update a Todo
- Delete a Todo
- List Todo by Datetime ASC not done
- List Todo by Datetime ASC done
- List All Todo by Datetime ASC 