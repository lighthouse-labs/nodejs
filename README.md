1. clone repo and `npm install` on main directory to grab all dependencies (listed in `package.json`)
2. if you are not working with `mongo`, or don't have mongo installed, replce the `db/index.js` promise being returned as follows:
    ```
    
    // mongoose.connect('mongodb://localhost/test'); // COMMENT OUT
    
    // var db = mongoose.connection; //COMMENT OUT
    
    //this basically fakes a successful databaseConnection so you can continue to load theserver
    
    var promise = new Promise(function(resolve,reject){
        resolve() 
    });
    
    ```
3. If you are working with mongo, ensure the mongo server is running (try `mongod`)
4. to start server `node server/main.js`
5. You require `keys`, view gist added to Compass notes
