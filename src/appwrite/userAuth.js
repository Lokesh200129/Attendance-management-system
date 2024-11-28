import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class UserAuth {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);

    }
    // Account creation 
    async createAccount({ email, password, name }) {
        // eslint-disable-next-line no-useless-catch
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    // User login
    async login({ email, password }) {

        // eslint-disable-next-line no-useless-catch
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    // Current user
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }
    // User logout
    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }

    // reset password   
    // async resetPassword({ email }) {
    //     try{
    //         const response = await this.account.createRecovery(email, 'https://example.com')
    //         .then(function(response) {
    //             const promise = account.updateRecovery(
    //                 '[USER_ID]',
    //                 '[SECRET]',
    //                 'password',
    //                 'password'
    //             );
    //         }, function(error) {
    //             console.log(error); // Failure
    //         });
    //     }
    //     catch(error){
    //         console.log("Appwrite serive :: resetPassword :: error", error);
    //     }

    // }
    

   

   
    
}

const userAuth = new UserAuth();

export default userAuth