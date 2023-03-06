import requests
import json

base_url = "http://127.0.0.1:5000"

#test_case for signIn
response = requests.get(base_url + "/signIn/Varun123&Varun@18")
print(response.content)
print(json.dumps(response.json(),indent=4))


#test_case for signUp




