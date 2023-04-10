Test Plan

Introduction:
The Test Plan for the third sprint is to test the first and second deliverables (i.e. to test the Sign-In and Sign-Up APIs and well as the UI pages). Also, to test the Landing Page before and after Logging in to display General Category News which was created for the News App. For third sprint we will test the Landing Page for linked tabs to the articles displayed. Along with testing Home links for each category in the settings page, the Test Plan calls for a test of the articles that are displayed on the home page before and after sign-in and sign-out. 

Test objectives: The objectives of this test plan are to ensure the following: 
a.	Ensure if Sign in and Signup and logout works fine. 
b.	Ensure that the news launched from the home page is correct both before and after logging in.
c.	Ensure that users can get category wise news by choosing each category in the landing page.
d.	Ensure that the news should refresh when the user clicks on the refresh button in the news page.
e.	Ensure Pagination works fine.
f.	Create and run Automated Unit Tests which validates the functionality.
g.	Perform Manual Integration tests. 
       
Test scope: This test plan covers testing of the news application and the APIs for populating appropriate news feeds.

Test Environment: The environment for testing the News launched from the home page includes the following: 
a. Operating System: Windows 10, mac, Linux, Mobile, etc.,
b. Browser: Google Chrome etc...,
c. Database: MySQL hosted on PlanetScale.
d. BackEnd: Python flask APIs
e. Frontend: React Js (Node Js)

Test strategy: The testing strategies followed for this phase are automated Unit Tests focused on the API development, where around 5 Unit Test where used for Test Driven Development. 
And Manual Test will be performed on the front end application, to validate all the functionalities as well as to validate if UI and API integration works fine( Integration Testing).

Approach:
1.	For the manual testing which also includes Integration tests, the approach is to launch the APIs and UIs in the local system and check the UI application if all functionalities which need API response works fine.
2.	Run the automated UnitTest each and every time you make any changes in the APIs. 

Pass/Fail Criteria:
The test is considered as Pass if it fulfils the following criteria.
- The news displayed in each category is correct.
- If the News is readable.
- The user can change the settings.
-  The news is up to date when the clicks on the refresh button.
- User is directed to the accurate news when the user clicks it on the home page.
- The news page is loaded quickly and working smoothly.

If any of these criteria does not get fulfil the test is considered to have failed.


Responsibilities:
 Full-stack Development: Varun Ignatius (va362), Unit test and Integration test:Varun Ignatius (va362), Shreya Ghosh, Rinkal Shah and Jasmin Dhorajia
