test results

1.SignendIn with correct username and password:
Input: http://127.0.0.1:5000/signIn/Varun123&Varun@18
Output: {
    "Code": 200,
    "Message": "Signed In Successfully"
}


 

2. signedIn failed with incorrect password:
Input :http://127.0.0.1:5000/signIn/Varun123&Varun@15
Output: 
{
    "Code": 401,
    "Message": "Invalid UserName or Password"
}
 




3. SIgnedUp with username, user_pass and email in JSON format:
   Input :
{
    "userName":"Shreya1238",
    "user_pass": "Shreya@15",
    "email":"shreya@xyz.com"
}

Output: 
{
    "Code": 200,
    "Message": "Signed Up Successfully"
}
