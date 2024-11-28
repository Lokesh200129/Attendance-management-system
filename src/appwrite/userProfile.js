import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class UserProfile {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);

    }
    // create route
    async createProfile(id, { name, phoneNumber, image, address, userId ,role}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id,
                {
                    name,
                    phoneNumber,
                    image,
                    address,
                    userId,
                    role
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }
 //  update route
    async updateProfile(id, { name, phoneNumber, image, address }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id,
                {
                    name,
                    phoneNumber,
                    image,
                    address
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }
    // delete route
    async deleteProfile(id) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id

            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

   
    // user profile photo route

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

    
}    

const userProfile = new UserProfile 
export default userProfile;