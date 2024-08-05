import { IPostRequest, IPostResponse } from "../models/post.models";

export class PostController {
    url: string
    constructor(url: string) {
        this.url = url;
    }
    async CreatePost(data: IPostRequest): Promise<IPostResponse> {
        const headers: Headers = new Headers({
            "Content-Type": "application/json",
            "Content-Length": "<calculated when request is sent>",
            "Host": "<calculated when request is sent>",
            "User-Agent": "PostmanRuntime/7.37.3",
            "accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "connection": "keep-alive"
        }); 
        const reqOptions: RequestInit = {
            method: "POST",
            headers,
            body: JSON.stringify(data)
        };
        const res: Response = await fetch(`${this.url}posts`, reqOptions);
        console.log(res.status);
        if (res.status !== 201) {
            throw new Error(`Error: ${res.status}`);
        }
        const postResponse: IPostResponse = await res.json();
        return postResponse;
    }

    async PostsByUser(creator:string): Promise<IPostResponse[]> {
        const res: Response = await fetch(`${this.url}posts/by-creator/${creator}`);
        console.log(res.statusText);
        if(res.status !== 200){
            throw new Error(`Error: ${res.status}`);
        }
        const postResponse: IPostResponse[] = await res.json();
        return postResponse;
    }

    async getAllPosts(endpoint: string): Promise<IPostResponse[]> {
        const res: Response = await fetch(`${this.url}${endpoint}`);
        if (res.status !== 200) {
            throw new Error(`Error: ${res.status}`);
        }
        const postsResponse: IPostResponse[] = await res.json();
        console.log(postsResponse);
        
        return postsResponse;
    }
}