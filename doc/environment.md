# Environment Variables

set this values on a `.env` file at the root

| Variable | Value | Explanation | 
|----------|-------|-------------| 
| PORT | 3331 | Port number on which the application will run | 
| DB_USERNAME | 'general_user' | Username used to connect to the database | 
| DB_PASSWORD | 'general_password' | Password used to authenticate the database user | 
| DB_DATABASE | 'vn_stake' | Name of the database to connect to | 
| DB_HOST | '127.0.0.1' | Host address where the database is located | 
| DB_PORT | '33062' | Port number on which the database server is running | 
| DB_LOGGING | 'false' | Controls whether database logging is enabled or disabled | 
| JWT_SECRET | "aaabbbccddeedd" | Secret key used for signing JWT tokens |

These environment variables are essential for configuring the application's database connection settings, server port, and JWT token security. Remember to keep sensitive information like passwords and secret keys secure and not exposed to unauthorized users.