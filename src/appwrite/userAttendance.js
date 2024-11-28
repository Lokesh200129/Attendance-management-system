import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class UserAttendance {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    // creating attendance
    async createAttendence(id, { name, phoneNumber, image, location, date, time, type, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id,
                {
                    name,
                    phoneNumber,
                    image,
                    location,
                    date,
                    time,
                    type,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

   
    async deleteAttendence(id) {
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

    async getAttendence(id) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id

            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,


            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    // file upload service

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


const userAttendance = new UserAttendance()
export default userAttendance