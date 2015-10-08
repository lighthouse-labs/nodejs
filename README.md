1. clone repo and `npm install` on main directory to grab all dependencies (listed in `package.json`)
2. if you are not working with `mongo`, or don't have mongo installed, replce the `db/index.js` promise being returned as follows:
```
//this basically fakes a successful databaseConnection so you can continue to load theserver

var promise = new Promise(function(resolve,reject){
    resolve() 
});

```
