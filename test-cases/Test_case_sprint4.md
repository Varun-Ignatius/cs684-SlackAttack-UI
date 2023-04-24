
Sprint - 4 test cases:

API Testing:

A100.    Test - Filter news articles by category:
            verify that the API returns news arricles in the specified category

A101.    Test - Filter news articles by location:
            verify that the API returns news articles from the specified location
    
A102.    Test error handling:
            verify that the API returns error response.
                Check that response status code and body to sensure that the error handling works                 correctly.
        
A103.    Test Pagination:
            verify that the API returns the correct page of news articles with the specified               number of articles per page and that the results are sorted according to the specified criteria
    
A104.    Test sorting:
            verify that the API returns news articles sorted by the specified field
    
A105.    Test response format:
             Verify thatt he API returns news articles in the expected format.
             
A106.    Test for caching:
            Verify that the API returns a cached response with a status code of 304,                       indicating that the resource has not been modified.
            
A107.    Test for API versioning:
            verify that the API returns the ecpected version of the API and that the response             format and content have not changed unexpectedly.

A108.    Test for security:
            Verify that the API returns an error response with a status code of 400 or 500,               indicating that the request was rejected for security reasons.
            
A109.    Test - search by keyword
            Verify that the article returned contains the keyword in its title.
            
A110.    Test - verify response status code
            Verify that the response status code is 200(OK).

A110.    Test - verify content type header
            Verify that the content type header of the response is 'applocation/json'

A111.    Test - verify that articles have required fields
            Verify that each article returned in the response has required fields such as                 title, description, URL, URL to image, published date, and conent.

A112.    Test - number of aricles returned
            Verify that at least one artilce is returned in the response.
            
UI Testing:


        
