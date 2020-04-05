# covid-19-tracker
Program grabs JSON date from https://corona.lmao.ninja/states, using a Get Request it transforms the data into an Array of Objects.
The select box is populated with the state names from the objects.
The user's choice is stored in a variable called user.
The user variable is iterated over the array of objects, once the correct objects is found matching the state name data, inner html date is displayed that shows the data for the chosen state. 
