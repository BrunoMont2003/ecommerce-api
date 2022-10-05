# ecommerce-api

## ER MODEL
![ER MODEL](/assets/er-model.jpg)

## API DOCUMENTATION

### API ENDPOINTS

| Verb   	| URI                          	| Action                                   	| Auth  	|
|--------	|------------------------------	|------------------------------------------	|-------	|
| POST   	| `/register `                 	| create user                            	| none  	|
| POST   	| `/login    `                 	| login                                    	| none  	|
| GET    	| `/users    `                 	| get all users                            	| admin 	|
| GET    	| `/users/:user`               	| get one user                             	| admin 	|
| DELETE 	| `/users/:user`               	| delete user                              	| admin 	|
| GET    	| `/products`                  	| get all products                         	| both  	|
| GET    	| `/products/:product`         	| get one product                          	| both  	|
| POST   	| `/products`                  	| create product                           	| admin 	|
| PUT    	| `/products/:product`         	| update product                           	| admin 	|
| DELETE 	| `/products/:product`         	| delete product                           	| admin 	|
| GET    	| `/orders`                    	| get all orders                           	| admin 	|
| GET    	| `/mycart`             	    | get items from user's cart                | customer 	|
| POST    	| `/mycart`             	    | add items to user's cart                  | customer 	|
| DELETE    | `/mycart/:product`            | remove a product from user's cart         | customer 	|
| DELETE    | `/mycart`                     | remove all products from user's cart      | customer 	|
| POST      | `/buy`                        | create an order with the cart's content   | customer 	|
| GET    	| `/users/me`             	    | get user's own information                | customer 	|
| UPDATE  	| `/users/me`             	    | update user's own information             | customer 	|
| GET    	| `/myorders`             	    | get user's shopping history               | customer 	|