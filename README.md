# AWS Powered Website

A static website project with a simple frontend and AWS Lambda backend functions.

The project is designed to demonstrate how a website can interact with serverless AWS services to manage member data.

## Project Overview

This website is built with HTML, CSS, and JavaScript.  
It includes a frontend interface and backend Lambda functions intended to be deployed on AWS.

The frontend contains multiple pages, including a homepage, a technology page, and a members page.  
The backend contains Python functions that can be used with AWS Lambda and API Gateway to retrieve and insert member data.

## Repository Structure

```text
website-aws-powered/
├── README.md
├── .gitignore
├── docs/
├── frontend/
│   ├── index.html
│   ├── members.html
│   ├── tech.html
│   ├── css/
│   │   ├── style.css
│   │   └── members.css
│   ├── js/
│   │   ├── app.js
│   │   └── scripts.js
│   └── assets/
│       └── images/
│           ├── pic1.svg
│           ├── pic2.jpg
│           ├── pic3.jpg
│           ├── pic4.svg
│           └── pic5.svg
└── backend/
    └── lambda/
        ├── get_members.py
        └── insert_member.py
```

## Features

- Static frontend built with HTML, CSS, and JavaScript
- Responsive navigation menu
- Homepage, technology page, and members page
- Image assets used in the frontend
- AWS Lambda backend functions
- Structure ready for integration with API Gateway and DynamoDB

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Python
- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB

## Frontend

The frontend is located inside the `frontend/` folder.

Main files:

| File | Description |
|---|---|
| `frontend/index.html` | Homepage |
| `frontend/tech.html` | Technology page |
| `frontend/members.html` | Members page |
| `frontend/css/style.css` | Main stylesheet |
| `frontend/css/members.css` | Members page stylesheet |
| `frontend/js/app.js` | Main JavaScript file |
| `frontend/js/scripts.js` | Additional JavaScript logic |
| `frontend/assets/images/` | Website images |

## Backend

The backend is located inside the `backend/lambda/` folder.

| File | Description |
|---|---|
| `get_members.py` | Lambda function used to retrieve members |
| `insert_member.py` | Lambda function used to insert a new member |

These functions are intended to be deployed on AWS Lambda and connected to the frontend through Amazon API Gateway.

## How to Run Locally

To run the frontend locally, open a terminal and use:

```bash
cd ~/Desktop/website-aws-powered/frontend
python3 -m http.server 8000
```

Then open your browser and go to:

```text
http://localhost:8000
```

To stop the local server:

```text
CTRL + C
```

## AWS Architecture

The intended architecture is:

```text
Frontend Website
      |
      v
Amazon API Gateway
      |
      v
AWS Lambda Functions
      |
      v
Amazon DynamoDB
```

The frontend sends requests to API Gateway.  
API Gateway triggers the Lambda functions.  
The Lambda functions can read from or write to DynamoDB.

## Deployment

The frontend can be deployed using:

- GitHub Pages
- Amazon S3 static website hosting
- Amazon CloudFront with S3

The backend can be deployed using:

- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB

## Project Goals

The goals of this project are:

- Build a simple multi-page website
- Organize frontend files clearly
- Separate frontend and backend code
- Use AWS serverless services for backend functionality
- Practice connecting a website to AWS Lambda functions
- Prepare the project for deployment on GitHub and AWS

## Author

Created by **Camillo Nicoletti**.

## License

This project is intended for educational purposes.
```