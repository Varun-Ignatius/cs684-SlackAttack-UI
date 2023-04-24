| | | | | | |
|:----|:----|:----|:----|:----|:----|
|Test ID|Test Description|Expected Output|Actual Output|Result| |
| | | | | | |
|API101|Filter news articles by category:verify that the API returns news articles in the specified category.|API able to return news articles in specified category.|API able to return news articles in specified category.|Pass| |
|API102|Test error handling:verify that the API returns error response. |API able to return a status code to ensure that the body error handling works correctly. |API able to return a status code to ensure that the body error handling works correctly. |Pass| |
|API103|Test Pagination:verify that the API returns the correct page of news articles with the specified number of articles per page and that the results are sorted according to the specified criteria.|API able to return the correct page of news articles with specified number of articles per page. |API able to return the correct page of news articles with specified number of articles per page. |Pass| |
|API104|Test response format:Verify that he API returns news articles in the expected format.|API returns news articles in expected format.  |API returns news articles in expected format.|Pass| |
|API105|Test sorting:Verify that the API returns news articles sorted by the specified field .|API able to short by specified field.|API able to short by specified field.|Pass| |
|API106|Test for security:Verify that the API returns an error response with a status code of 400 or 500.|API able to turn rejection message for security reasons. |API able to turn rejection message for security reasons. |Pass| |
|API107|Test -search by keyword:Verify that the article returned contains the keyword in its title. |API able to return the key if the article returned contains the keyword in its title. |API able to return the key if the article returned contains the keyword in its title. |Pass| |
|API108|Test - verify response status code:Verify that the response status code is 200(OK).  |API able to return that the response request was successful. |API able to return that the response request was successful. |Pass| |
|API109|Test - verify content type header:Verify that the content type header of the response is 'applocation/json'.|json response. |json response.  |Pass| |
|API110|Test - verify that articles have required fields:-	Verify that each article returned in the response has required fields such as title, description, URL, URL to image, published date, and content. |API able to return successful response. |API able to return successful response. |Pass| |
|API111|Test - number of articles returned:-	Verify that at least one article is returned in the response. |API will return number of articles if response is successful. |API will return number of articles if response is successful.  |Pass| |
| | | | | | |