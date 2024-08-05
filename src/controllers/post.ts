
import { IPostRequest } from "../models/post.models";
import { PostController } from "./post.controllers";
import { BASE_URL } from "./URL-base";

const endpoint: string = 'posts';

const form = document.getElementById('addPost-form') as HTMLFormElement;
const title = document.getElementById('post-title') as HTMLInputElement;
const platform = document.getElementById('post-platform') as HTMLSelectElement;
const body = document.getElementById('post-description') as HTMLInputElement;
const image = document.getElementById('post-image') as HTMLInputElement;
const status = document.getElementById('post-status') as HTMLSelectElement;
const date = document.getElementById('post-date') as HTMLInputElement;

const postController = new PostController(BASE_URL);

form.addEventListener('submit',async (e:Event)=>{
    e.preventDefault();
    
    const data: IPostRequest = {
        title: title.value,
        body: body.value,
        creationDate: new Date(),
        creator: '1',
        estimatedPublicationDate: new Date(date.value),
        status: status.value,
        approvalPercentage: 75,
        corrections: '',
        platform: platform.value,
        postUrl: '',
        multimediaUrl: image.value
    }
    try {
        const postResponse = await postController.CreatePost(data,endpoint);
        localStorage.setItem('post', JSON.stringify(postResponse));
        console.log(postResponse);
    } catch (error) {
        console.log(`error:${error}` );
    }
})