Client React Native App
This is a client-side React Native app that includes login, navigation, and multiple screens, and makes requests to multiple APIs using Axios.

Features
Login: Includes a login form with email and password.

Example credentials:

Email: alxlxa@gmai.com

Password: 12345Alx

Navigation: Used to navigate between screens.

Screen 1: Login page.

Screen 2: Category list page (e.g. winner categories).

Screen 3: Winner details page.

API Requests: The app makes requests to multiple APIs using Axios to retrieve data such as user information, winners, categories, and other entities.

API requests
The application makes the following requests via Axios:

Authentication: Sending login data (email and password) to the /auth/login endpoint.

Registration: Sending data for registering a new user to the /auth/register endpoint.

Categories: Getting a list of categories of laureates from the API.

Laureates: Getting a list of laureates for the selected category.

Sample request for authorization:

javascript
Copy
Edit
const res = await API.post("/auth/login", data);
Sample request for getting a list of categories:

javascript
Copy
Edit
const res = await API.get("/categories");
Installation
To install the app, follow these steps:

Clone the repository:

bash
Copy
Edit
git clone https://your-repository-link.git
cd your-project-directory
Install dependencies:

bash
Copy
Edit
npm install
Run the app:

bash
Copy
Edit
npm start
Or, if you want to run on an Android emulator:

bash
Copy
Edit
npx react-native run-android
To run on iOS (requires macOS):

bash
Copy
Edit
npx react-native run-ios
Testing
To run tests, use the command:

bash
Copy
Edit
npm test
