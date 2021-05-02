const db = require('../database/online-store-db');

class UserController {

    static async all(ctx) {
        try {
            return new Promise((resolve, reject)=> {
                const query = 'SELECT * FROM CL_User;'
                db.query(query, (err, res)=>{
                    if(err){
                        reject(err)
                    }
                    ctx.body = res;
                    ctx.status = 200;
                    resolve();
                });
            });
        } catch (error){
        
            console.log('Error in UserController.');
        }
    }

    
    static async byUID(ctx) {
        try {
            return new Promise((resolve, reject)=> {
                const query = 'SELECT * FROM CL_User WHERE UID = ?;'
                db.query({
                    sql: query,
                    values: [ctx.paramas.UID]
                }, (err, res)=>{
                    if(err){
                        reject(err)
                    }
                    ctx.body = res;
                    ctx.status = 200;
                    resolve();
                });
            });
        } catch (error){
        
            console.log('Error in UserController.');
        }
    }

}

module.exports = UserController;