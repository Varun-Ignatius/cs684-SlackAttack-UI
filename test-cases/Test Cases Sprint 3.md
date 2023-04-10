					Sprint 3

			UI Testing 

UI201 	Test if login button functions   

	1.Enter correct combination and click the login

UI202    Test if username displayed after logged in 

	1.Enter correct combination and click the login 

UI203    Test if logout button functions well

	1.Click the logout button on the landing page   

UI204   Test the login function 

	1. Enter the correct combination and submit  

UI205    Test if error message displays properly

	1.Enter the wrong combination and submit  

UI206     Test the signup function    

	1.Enter the correct combination and register

UI207    Test if error message displays properly 

	1. Enter the pre existed username and submit

UI208    Test if password displays requirement    

	1.Enter the wrong password and submit 

UI209    Test if fields are required when logging in  

	1. Click the login button with empty fields

UI210    Test if fields are required when registering    

	1.Click the register button with empty fields 

UI211    Test if search field functions  

	1.Click the search button with empty fields  

UI212     Test if display borders are reflecting after refresh   

	1.Click the refresh button  

UI213    Test if categories are filtered to users settings    

	1.Click the refresh button after user logged in

UI214    Test if settings link corresponds with setting page 

	1.Click the setting button  

UI215    Test if setting page check boxes are working properly       

	1. 

UI216    Navbar buttons text appearance test

	1.

UI217     Test if Pagination is reflecting is displaying set limit per page

	1.

UI218    Test if API is interacting with Pagination 

	1. 

UI219    Test if Pagination worksafter login    

	1.

UI220    Test if Landing page loads after start react    

	1. Enter npm start in terminal

UI221    Test if the home page returns prefered articles after logged in 

	1.Click login and dashboard page should load with preferred articles 

UI222    Test if the home page returns prefered articles after logged in

	1.Click login and dashboard page should load with preferred articles



			API TESTING

API 201   Test if API produce correct response

	1. Call the API on postman and check the response     

API 202  Test if API produce correct response

	1. Call the API on postman and check the response     

API 203	 Test login api function

	1.Call the API on postman with correct username and password as parameter and check the response

API 204  Test login api function

	1.Call the API on postman with correct username and password as parameter and check the response

API 205	  Test signup api function

	1.Call the API on postman with a new username/password as parameter and check the response

API 206  Test signup api function  

	1.Signup API return 401 code when the username found in the database and returns duplicate username as the response body

API 207  Test logout api function

	1.Call the logout API and check the response

API 208  Test signup api function  

	1.Setting API return user categories when the username found in the database 

API 209  Test logout api function

	1.Setting API return general categories when the username is not found in the database


Integration test:
|         |                                                                                                                                                                                                                                                      |                                                                          |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Test ID | Test Description                                                                                                                                                                                                                                     | Expected Output                                                          |
|         |                                                                                                                                                                                                                                                      |                                                                          |
| Int101  | Check if UI application able to get customized news feed from [http://127.0.0.1:5000/News/username](http://127.0.0.1:5000/News/username) API by feeding the username.                                                                                | UI app able to get customized news from the API.                         |
| Int102  | Check if UI application able to get general news feed from [http://127.0.0.1:5000/News/noUser](http://127.0.0.1:5000/News/noUser) API by feeding the noUser as username.                                                                             | UI app able to get general news from the API.                            |
| Int103  | Check if UI application able to get general category news from [http://127.0.0.1:5000/News/category/general](http://127.0.0.1:5000/News/category/general) API when user click general category and able to display the news.                         | UI app able to get general news from the API and display the news.       |
| Int104  | Check if UI application able to get business category news from [http://127.0.0.1:5000/News/category/business](http://127.0.0.1:5000/News/category/business) API when user click business category and able to display the news.                     | UI app able to get business news from the API and display the news.      |
| Int105  | Check if UI application able to get entertainment category news from [http://127.0.0.1:5000/News/category/entertainment](http://127.0.0.1:5000/News/category/entertainment) API when user click entertainment category and able to display the news. | UI app able to get entertainment news from the API and display the news. |
| Int106  | Check if UI application able to get health category news from [http://127.0.0.1:5000/News/category/health](http://127.0.0.1:5000/News/category/health) API when user click health category and able to display the news.                             | UI app able to get health news from the API and display the news.        |
| Int107  | Check if UI application able to get science category news from [http://127.0.0.1:5000/News/category/science](http://127.0.0.1:5000/News/category/science) API when user click science category and able to display the news.                         | UI app able to get science news from the API and display the news.       |
| Int108  | Check if UI application able to get sports category news from [http://127.0.0.1:5000/News/category/sports](http://127.0.0.1:5000/News/category/sports) API when user click sports category and able to display the news.                             | UI app able to get sports news from the API and display the news.        |
| Int109  | <br>Check if UI application able to get technology category news from [http://127.0.0.1:5000/News/category/technology](http://127.0.0.1:5000/News/category/technology) API when user click technology category and able to display the news.<br>     | UI app able to get technology news from the API and display the news.    |
|         |                                                                                                                                                                                                                                                      |	
	
