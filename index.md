# Resolved promises quiz

1. What is a promise (in your own words)?
a promise is a proxy for a value not yet known. While you move on with your coding and the api is fetching the promise is pending. Then it is either fulfilled or rejected.

A promise that an operation that normally takes a bit of time
will eventually finish running. I.O.U.


2. Which part of the code we have so far is a promise?
The fetch request returns a promise object.


3. What are the three states a promise can be in?
pending, fulfilled or rejected


4. What does it mean when a promise is "resolved" (or fulfilled)?
The task we wanted to perform finished successfully. It means that you got an answer. It doesnt mean it was the data that you were looking for. It could be an error. But you got an answer.

5. How do we tell the code to do something only AFTER a
   promise is resolved?
   .then() method