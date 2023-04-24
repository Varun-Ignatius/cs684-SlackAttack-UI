
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

U100.       Test home page:
          -  Verify that the home page loads successfully and displays the latest news                      stories.
          -  Verify that the header and footer sections are displayed correctly.
          -  Verify that the navigation bar works correctly and the links lead to the correct               pages.
          
U101.       Test Article page:
            - Verify that each article loads correctly and displays the title, author, date,                and content.
            - Verify that the article includes related images, videos, or audio files as                    applicable.

U102.       Test Search Functionlity:
            - Verify that the search bar works correctly and displays relevant search results.
            - Verify that the search results page displays the correct number of results and                relevant details (such as article title, author, and date).
            - Verify that the search results page is paginated correctly and the pagination                links lead to the correct pages.

U103.       Test Category pages:
            - Verify that each category page loads correctly and displays the relevant news                 stories.
            - Verify that the category page is paginated correctly and the pagination links                 lead to the correct pages.
            - Verify that the category page includes filtering options (such as by date or by               author) and that the filtering works correctly.
            
U104.         Test Site Speed:
            - Verify that the pages loads quickly and does not have any performance issues.
            - Verify that the pages performance meets industry standards and does not cause                 any errors or issues.

U205.       Test User authentication:
            - Verify that users can authenticate themselves on the website and that the                     authentication process works correctly.
            - Verify that users can reset their passwords if they forget them and that the                  password reset process works correctly.
