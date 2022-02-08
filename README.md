### Application Setup
- composer install
- npm install && npm run dev (optional)
- cp .env.example .env
- php artisan key:generate
- modify database credentials in .env
- modify mail credentials in .env to send mail
- modify QUEUE_CONNECTION in .env to database (or) other
- add SLACK_WEBHOOK_URL in .env to get notifications when user registered
- php artisan migrate
- php artisan serve

### Postman Collection
- Please import postman collection inside root directory.