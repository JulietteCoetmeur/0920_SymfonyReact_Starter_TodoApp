# [Symfony & React Starter App]

### > To start TodoApp, clone this repo somewhere on your computer : 

- ``` ➜ git clone git@github.com:JennyViannay/0920_SymfonyReact_Starter_TodoApp.git ``` 
- ``` ➜ cd 0920_SymfonyReact_Starter_TodoApp ``` 
- ``` ➜ code . ``` 
- Open terminal in VSCODE

### > Database : 

Create `.env.local` > `DATABASE_URL="mysql://user:password@127.0.0.1:3306/db-name?serverVersion=5.7"`

- ``` bin/console d:d:c ``` 
- ``` bin/console make:migration ``` 
- ``` bin/console doctrine:migration:migrate ``` 

Table `todo` was created with this attributes :
> id <br>
> title string NOT NULL <br>
> description text CAN BE NULL <br>
> todoBefore datetime NOT NULL <br> 
> isDone boolean defaultValue=false <br>

### > Install Dependencies
- ``` composer install ```
- ``` yarn install ```

### > Build React App :
- ``` yarn encore dev --watch ```


### > Start Symfony Server :
- ``` symfony server:start ```


### [TODO APP IS READY] 🤌 
<img src="public/screenshots/Home.png"
     alt="List todo desktop view"
     style="margin: auto;" />

> [https://localhost:8000](https://localhost:8000)

### [TIME TO ADD YOUR FIRST TODO] 📆
<img src="public/screenshots/DesktopCreate.png"
     alt="Create todo desktop view"
     style="margin: auto;" />

> [https://localhost:8000/todo/add](https://localhost:8000/todo/add)

#### > In this application you will be able to :
- Create Todo with title description and datetime
- Read a Todo
- Update a Todo
- Delete a Todo
- List Todo by Datetime ASC not done
- List Todo by Datetime ASC done
- List All Todo by Datetime ASC 


#### > In this project :
  
> In src/controller/DefaultController, index method return the default template view where React can take hand (`<div id="root"></div>`) for displaying front app to the client

#### > About REACT : 
> /assets diresctory contain React app <br>
> /assets/index.js is the entry point <br>
  Take a look in /assets/index.js at L:11 : 
  <pre><code>
  ReactDOM.render([...],
    document.getElementById('root')
  );
</code></pre>
> It's here where React communicate with the template from DefaultController.php <br>
> This connection is only here to take the hand on the front displaying <br>
> I can use this template in an another route if I need it like for TodoController::add <br>
> React is able to communicate with php controllers with Axios <br>

> Follow the code in assets/App.jsx who imports ./components/Home.jsx who describes method fetchTodos with axios gets data from url '/todo/' (L:11), this is the route declared in our src/controller/TodoController.php index method qui returns json result from $todoRepository->findAll() at the L:30. <br> 
  After axios get response, Home.jsx loop on todos and inject todo in new component named TodoAlert.jsx. <br> 
  Read the code and try to understand how it works, follow the logic and bidouille 🔧 <br>

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

### > Screenshots Mobile version :

#### - Todo list
<img src="public/screenshots/ListTodo.png"
     alt="List todo"
     style="margin: auto;" />

#### - Menu
<img src="public/screenshots/Menu.png"
     alt="Menu todo"
     style="margin: auto;" />

#### - Create todo
<img src="public/screenshots/CreateTodo.png"
     alt="Create todo"
     style="margin: auto;" />

#### - Edit todo
<img src="public/screenshots/EditTodo.png"
     alt="Edit todo"
     style="margin: auto;" />

#### - Todo not done 
<img src="public/screenshots/SeeTodoNotDone.png"
     alt="Todo not done"
     style="margin: auto;" />

#### - Todo done 
<img src="public/screenshots/SeeTodoDone.png"
     alt="Todo done"
     style="margin: auto;" />