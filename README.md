
#Poll Simulator

###Assignment for subject 'Enterprise Computing'  
###Student ID:202012007  

**Description**  
Simulates a polling application. Does not use a data storage therefor user needs to first add some   
candidates and then vote different candidates. Specific user ID can vote only once.  

####Frontend  
**frontend** folder contains all the frontend code. It uses services provided by backend  
to display different information. It is simple frontend built using HTML and JavaScript.
Used fecth API to call different backend services.

####Business logic  
**backend/api** folder has different controllers used to manipulate data fetched from storage, and  
return the appropriate values.

####Data Access Component
**backend/DataAccess** folder has code which deals with data access from storage. Currently not using any database  
therefore store the voters who already voted and different candidates information in different arrays locally.
These arrays act as storage.
