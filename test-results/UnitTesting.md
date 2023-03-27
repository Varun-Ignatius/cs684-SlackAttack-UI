---Test error responses: Test that checks for a 404 Not Found error---

pm.test("status code id 404",()=>{
    pm.response.to.have.status(404);
});

pm.test("response includes error message",()=>{
    pm.expect(pm.response.text()).to.include('Not Found');
});

Test Results: 

FAIL  status code id 404 | AssertionError: expected response to have status code 404 but got 200
FAIL  response includes error message | AssertionError: expected '{"Code":200,"Message":"Signed In Succ…' to include 'Not Found'

<img width="695" alt="image" src="https://user-images.githubusercontent.com/114790536/227985734-10ffe7d0-56c3-4845-b5aa-7132f48654f1.png">

---Test endpoint response time----

const responseTime1= 
pm.response.responseTime;
pm.test("Response time is less than 500ms",()=>{
    pm.expect(responseTime1).to.be.below(500);
});

Test Results:

PASS  Response time is less than 500ms

<img width="693" alt="image" src="https://user-images.githubusercontent.com/114790536/227988561-d02f58b0-ca12-4a38-8ebc-18ca637278d9.png">



----Testing a POST request: In this test just checking the response status, indicating that the new user was created successfully----
pm.test("New user is created successfully",
function(){
    pm.response.to.have.status(200);
});

Test Results:

PASS New user is created successfully
<img width="690" alt="image" src="https://user-images.githubusercontent.com/114790536/228016651-cf35e081-87c7-4a52-8a42-06ea5333b703.png">


-----Testing a delete request: In this test we were checking that the user was successfully deleted----
pm.test("User is deleted successfully",function(){
    pm.response.to.have.status(200);
});

Test Results:

PASS User is deleted successfully
<img width="659" alt="image" src="https://user-images.githubusercontent.com/114790536/228021777-73cee451-d5d6-46ed-a22e-c98f13423e6f.png">


---Testing a PUT resquest: Checking that the user was successfully updated---
pm.test("User is updated successfully",function(){
    pm.response.to.have.status(200);
});

Test Results:

PASS User is updated successfully

<img width="648" alt="image" src="https://user-images.githubusercontent.com/114790536/228023287-a8dbb9a4-4690-41da-9f6e-6738af64c732.png">
