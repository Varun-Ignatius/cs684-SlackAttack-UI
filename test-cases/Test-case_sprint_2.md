Test cases for sprint-2

1. test cases for handling missing resources:
      -creste a Get request to the '    ' endpoint with an invalid article.
      -assert that the response ststus code is 404 not found.
      -assert that the response body contains an error message that explains the missing resource.
      
2. test case for handling authorization:
      -assert that the response status code is 401 Unauthorized
      -assert that the response body contains an error message that explains the missing authorization.
      
3.test cases for handling invalid requests:
      -Create GET resquest
      -Assert that the response status code is 400 Bad Request.
      -Assert that the response body contains an error message that explains the invalid request.
      
4. Test cases for changing the page layout:
      -Create a Get request to the 'landing_page_settings' endpoint ans retrieve the current page layout setting.
      -update the pag layout setting to new value using a PUT request to the same endpoint.
      -assert that the response status code is 200 ok.
      -create another GET request to the 'landing_page_settings' endpoint and verify that the page layout setting has been updated to the new value.
 
 5. Test case for changing the news categories displayed:
      -Create a GET request to the 'landing_page_settings' endpoint and retrieve the current news categories setting.
      -update the news categories setting to a new value using a PUT request to the same endpoint.
      -Assert that the response status code is 200 ok.
      -Create another GET request to the 'landing_page_settings' endpoint and verify that the news categories setting has been updated to the new value.
 
 6. Test case for resetting the landing page setting:
      -Create a GET request to the 'landing_page_settings' endpoint and retrieve the current landing page settings.
      -Update some of the setting to new values using PUT requests to the same endpoint.
      -Create a Delete request to the 'land_page_settings' endpoint to reset the settings to their default values.
      -assert that the response status code is 24 NO Content.
      -Create another GET request to the 'landing_page_settings' endpoint and verify that the settings have been reset to their default values.
      
