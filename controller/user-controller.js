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
                    values: [ctx.params.UID]
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


    static async deleteUser(ctx) {
        try {
            return new Promise((resolve, reject)=> {
                const query = 'DELETE FROM CL_User WHERE UID = ?;'
                db.query({
                    sql: query,
                    values: [ctx.params.UID]
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



    static async addUser(ctx) {
        console.log('route hit!');
        try {
            return new Promise((resolve, reject)=> {
                const user = ctx.request.body;
                const query = `INSERT INTO CL_User VALUES (?,?,?,?,?,?);`
                db.query({
                    sql: query,
                    values: [user.UID, user.first_name, user.last_name, user.city, user.zip, user.street]
                }, (err, res)=>{
                    if(err){
                        ctx.body = err;
                        ctx.status = 500;
                        reject(err)
                    }
                    ctx.body = user;
                    ctx.status = 200;
                    resolve();
                });
            });
        } catch (error){
        
            console.log('Error in UserController.');
        }
    }














    static async showUserCart(ctx) {
        try {
            return new Promise((resolve, reject)=> {
                const query = 'CALL cl_showCart(?);;'
                db.query({
                    sql: query,
                    values: [ctx.params.UID]
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