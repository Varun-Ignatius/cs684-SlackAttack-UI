| | | | | | |
|:----|:----|:----|:----|:----|:----|
|Test ID|Test Description|Expected Output| |
| | | | | | |
|API101|Filter news articles by category:Choose different cateogories in the landing page and verify that the application returns news articles in the specified category.|Application able to return news articles in specified category. |
|API102|Test error handling:Input incorrect username and password and verify if the application returns error response. |Application able to return a status code to ensure that the body error handling works correctly.  |
|API103|Test Pagination:Choose different page numbers in the bottom of the page and verify that the Application returns the correct page of news articles with the specified number of articles per page and that the results are sorted according to the specified criteria.|Application able to return the correct page of news articles with specified number of articles per page.  |
|API104|Test response format:Verify that he API returns news articles in the expected format.|API returns news articles in expected format.  |
|API105|Test sorting:Verify that the API returns news articles sorted based on time .|API able to sort by time field. |
|API106|Test for security:Input incorrect Username and password and Verify that the API returns an error response with a status code of 400 or 500.|API able to turn rejection message for security reasons.  |
|API107|Test -search by keyword: Input keywords onto the search bar and Verify that the article returned contains the keyword in its title. |Application able to return the key if the article returned contains the keyword in its title.  |
|API108|Test - verify response status code:Verify that the response status code is 200(OK).  |API able to return that the response request was successful.  |
|API109|Test - verify content type header:Verify that the content type header of the response is 'applocation/json'.|json response.  |
|API110|Test - verify that articles have required fields:-	Verify that each article returned in the response has required fields such as title, description, URL, URL to image, published date, and content. |API able to return successful response.  |
|API111|Test - number of articles returned:-	Verify that at least one article is returned in the response. |API will return number of articles if response is successful.  |