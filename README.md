#FolderStructure


In src folder, there's main Components folder which is the parent folder for Individual Animes folder for individual anime details files, Filter for filter details, Search folder, Drag and Drop folder


#libraries
I have used bootstrap framework for styling, react icons for icon and react-router-dom for routing, react-draggable for drag and drop feature

#StateManagament
I have used useState hook for state management


#Homepage
In Home page, I have declared the 3 states one is to track of all animes, second one is to track of filtereddata, thirdone is for loading symbol, initially the loading set to true, after getting the data, the loading will be setting again to false. so that data is successfully displaying on the page and fourth one is to keep track of genre 

filtered results state is to keep track of filtered data

I have used asynchronous way of getting fetch api calls. and called that function in useEffect hook, so that the data will be displayed one time after component rerenders


I have passed states as a prop to the search and filter components through the home page

And i have written the condition like if loading is true, then I have to display the loading symbol then if loading is false, then data has to be displayed.

again to display the data, I have written the condition with the ternary operator,

if seachinput length has > 1, then the filtered data has to be displayed, and then looped filtered data passed as a prop to the animecard component then in that component i have get the values directly

else if condition: if seachinput length has < 1, then the another state named as filterbasedongenre data has to be displayed, and then looped filtered data passed as a prop to the same animecard component 


i wrote the condition for search animes based on the title, filtered data based on the user input,  if user types caps in input, then it's converted to lowercase 


and for each individual anime details, i get the id with useparams hook, so that dynamically for each individual anime data i have got with animeid

for filtered data based on the genre, first i have filtered the genres with filter menthod and then i loop through the every element in the array with map method, and at final it checks, if includes active genre in that everyAnime state or not





