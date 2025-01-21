## Database connection : 
```
host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecommerce'
```
## Test
```
usernaem: test
password: 123456
```


## Using packed version :

```bash
"node" -"v20.17.0"
"body-parser": "^1.20.3",
    "cors": "^2.8.5",
    "express": "^4.21.2",
    "knex": "^3.1.0",
    "mysql2": "^3.12.0" 
``` 



## Api Endpoint

```python
# Login
http://localhost:5000/auth/login

# cart add 
http://localhost:5000/cart/add

# checkout
http://localhost:5000/cart/checkout

#remove
http://localhost:5000/cart/remove

#product 
http://localhost:5000/cart?userId=${userId}
```