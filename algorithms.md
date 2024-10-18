research problem
define terms
design UI
carry out and style the design
create input fields for email, password and confirm password
access the input field values in the js file using their ids
create a boolean variable called isLogedin to check if users are login or not and innitialize to false
save isLogedin to localstorage
create a function that validates( checks if the input feilds are empty, checks if the password includes at least on Uppercase letter, checks if it also includes on special character and finally checks of the confirmation password and the password are identical)
if the validation is fufilled set isLogedin to false and update isLogedin in localstorage
creates the error messeges and display according
create a function that handles login
create two buttons for login and log out
and access the values in the js file using their id
add an event listener to the buttons that calls both the validation and handle login function once the buttons are clicked
in the logout addeventlisters function set isLogedin to false and update the value in localstorage
fetch isLogedin in localstorage and conditionally render the login page and the welcome page depending on the value of the stored isLogedin 
