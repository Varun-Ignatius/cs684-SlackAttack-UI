Test Plan

Introduction: The Test Plan for the fourth sprint is to test the first 3 sprint deliverables (i.e. to test the Sign-In and Sign-Up APIs and well as the UI pages). Also, test the Landing Page for linked tabs to the articles displayed. Along with testing Home links for each category in the settings page, the Test Plan calls for a test of the articles that are displayed on the home page before and after sign-in and sign-out. As part of the fourth Sprint we would be testing the search functionality where the user inputs keywords into the search bar and we should get the relevent news articles displayed in the home tab.

Test objectives: The objectives of this test plan are to ensure the following: 
a. Ensure if Sign in and Signup and logout works fine. 
b. Ensure that the news launched from the home page is correct both before and after logging in. 
c. Ensure that users can get category wise news by choosing each category in the landing page. 
d. Ensure that the news should refresh when the user clicks on the refresh button in the news page. 
e. Ensure Pagination works fine. 
f. Ensure the search news functionality displayes relevent news in home tab.
g. Record each test cases and it's results.

Test scope: This test plan covers testing of the news application and the APIs for populating appropriate news feeds.

Test Environment: The environment for testing the News launched from the home page includes the following: 
a. Operating System: Windows 10, mac, Linux, Mobile, etc. 
b. Browser: Google Chrome etc...
c. Database: MySQL hosted on PlanetScale. 
d. BackEnd: Python flask APIs 
e. Frontend: React Js (Node Js)

Test strategy: The testing strategies followed for this phase is Manual Tests which will be performed on the front end application, to validate all the functionalities.

Approach:
Functional testing: For the manual testing, the approach is to launch the APIs and UIs in the local system and check the UI application if all functionalities which need API response works fine.
Performance testing: Verify that the application can handle a large volume of data without compromising performance or availability, and that the response times are within acceptable limits.
Security testing: Verify that the API provides adequate security measures like allowing only authorized users to fetch data.


Pass/Fail Criteria: The test is considered as Pass if it fulfils the following criteria.

a. The news displayed in each category is correct.
b. If the News is readable.
c. The user can change the settings.
d. The news is up to date when the clicks on the refresh button.
e. User is directed to the accurate news when the user clicks it on the home page.
f. The news page is loaded quickly and working smoothly.
g. If pagination works fine.
h. If searching using keywords brings appropriate results.
If any of these criteria does not get fulfil the test is considered to have failed.

Responsibilities: Full-stack Development: Varun Ignatius (va362), System test:Varun Ignatius (va362), Shreya Ghosh, Rinkal Shah and Jasmin Dhorajia
