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
