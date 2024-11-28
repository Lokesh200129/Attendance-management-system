const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteProfileCollectionId: String(import.meta.env.VITE_APPWRITE_PROFILE_COLLECTION_ID),
    appwriteAttendanceCollectionId: String(import.meta.env.VITE_APPWRITE_ATTENDANCE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}


export default conf