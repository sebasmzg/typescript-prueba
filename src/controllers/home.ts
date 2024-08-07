import Swal from 'sweetalert2';
import { PostTemplate } from './post.template';
import { PostController } from './post.controllers';
import { BASE_URL } from './URL-base';
import { logout } from './logout';

const postContainer = document.getElementById('post-container') as HTMLDivElement;
const postController = new PostController(BASE_URL);

const id = sessionStorage.getItem('id');
console.log(id);


async function renderPosts(){
    try {
        const userId = id || '';
        const response = await postController.PostsByUser(userId);
        const posts = response;
        console.log('posts:',posts);
        postContainer.innerHTML = '';
        posts.forEach(async(data)=>{
            const postTemplate = new PostTemplate(postContainer);
            postTemplate.PostTemplate(data, '#f1f1f1', '75');
        })
    } catch (error) {
        console.log(error);
    }   
}
renderPosts();





logout();


//const endpoint:string = 'posts'
/* postController.getAllPosts(endpoint); */


//render posts

/* 
    ALL POSTS

    async function renderPosts(){
    try {
        const response = await postController.PostsByUser(endpoint);
        const posts = response;
        postContainer.innerHTML = '';
        posts.forEach(async(data)=>{
            const postTemplate = new PostTemplate(postContainer);
            postTemplate.PostTemplate(data, '#f1f1f1', '75');
        })
    } catch (error) {
        console.log(error);
    }   
}
renderPosts(); */