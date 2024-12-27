import {Client, ID, Databases, Storage, Query} from "appwrite";
import conf from "../conf/config";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.bucket);
    }
}

const service = new Service();

export default service;