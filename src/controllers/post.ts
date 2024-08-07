
import swal from "sweetalert";
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

const post = { 
    title,platform,body,image,status,date
}

console.log(post);

let creator = sessionStorage.getItem('email');
let creatorName: string = (creator?.split('@')[0]) ??  '';

form.addEventListener('submit',async (e:Event)=>{
    e.preventDefault();
    
    const data: IPostRequest = {
        title: title.value,
        body: body.value,
        creationDate: formatDate(new Date()),
        creator: creatorName,
        estimatedPublicationDate: date.value,
        status: "pending",
        approvalPercentage: 75,
        corrections: '',
        platform: platform.value,
        multimediaUrl: image.value,
        postUrl: "http://example.com/post"
    }
    console.log(data);
    
    try {
        const postResponse = await postController.CreatePost(data,endpoint);
        localStorage.setItem('post', JSON.stringify(postResponse));
        swal({
            title: 'Post created',
            text: 'Your post was created successfully',
            icon: 'success'
        });
        console.log(postResponse);
    } catch (error) {
        console.log(`error:${error}` );
    }
})

function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}