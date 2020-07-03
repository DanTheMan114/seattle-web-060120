## Today's Lesson
- We'll talk about cookies/sessions 
- 10 minute break
- We will talk about real life authentication
- We will talk about authentication in Rails
- First lab -> Cookies and Sessions First lab
-> .build
- how to connect form_for without a model

# Discussion
1. What do mean when we say http is stateless.
  - not associated with a verb -> no get/post/patch/delete
  - anything you put in dissapears after it calls.
  - params
2. What are the 3 hash-like structures that Rails provides us.
  - `sessions` -> you can set key value pairs, session is a cookie. but it will ecrypt your data. 
  - .build -> Active Record, build off of instances and work with nested attributes.
  - `cookies` -> you can set a key value pair -> but it will not get reset until you clear your cookies.
  - `params` -> this is from rack
    - assign a key value pair to this hash and anywhere we want.
    - only catch is that it gets reset with each request call.
    - not really any limit for how many key-> calue you can creates.
  - `flash` -> you can also assign key -> value pairs.
    - after one redirect ( one request call.) it will get reset.


# Rails Quest
We have a pre-built trivia app which presents the user with questions in succession, and allows them to answer.
We can check in our controller whether the user answered correctly or not, but how can we get the server to 'remember' how many questions a user has answered  correctly for as long as they are on the site?

## Deliverables
* Add a feature which displays the number of questions a user has answered correctly
* Add a message which tells the user whether or not they got the last answer correct

## External Resources:
- [Rails Docs on Sessions](https://guides.rubyonrails.org/security.html#sessions)
- [Wiki Page on HTTP Headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [Edit my Cookie](https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg?hl=en)