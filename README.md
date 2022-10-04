# ecommerce-api

## ER MODEL
![ER MODEL](/db/er-model.jpeg)

## API DOCUMENTATION

### API ENDPOINTS

| Verb   | URI                    | Action                              |
|--------|------------------------|-------------------------------------|
| POST   | `/register `           | create no admin user                |
| POST   | `/login    `           | login                               |
| GET    | `/users    `           | get all users                       |
| GET    | `/users/:id`           | get one user                        |
| POST   | `/users/   `           | create user                         |
| PUT    | `/users/:id`           | update user                         |
| DELETE | `/users/:id`           | delete user                         |
| GET    | `/products`            | get all products                    |
| GET    | `/products/:id`        | get one product                     |
| POST   | `/products`            | create product                      |
| PUT    | `/products/:id`        | update product                      |
| DELETE | `/products/:id`        | delete product                      |
| POST   | `/user/cart/:productId`| add product to user's shopping cart |
| DELETE | `/user/cart/:productId`| remove product from user's shopping cart |
| GET    | `/orders`              | get all orders                      |
| GET    | `/orders/:id`          | get one order                       |
| POST   | `/orders`              | generate an order                   |
| PUT    | `/orders/:id`          | update an order                     |
| DELETE | `/orders/:id`          | delete an order                     |