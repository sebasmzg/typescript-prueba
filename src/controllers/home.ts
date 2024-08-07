import Swal from 'sweetalert2';
import { PostTemplate } from './post.template';
import { PostController } from './post.controllers';
import { BASE_URL } from './URL-base';

const postContainer = document.getElementById('post-container') as HTMLDivElement;
const endpoint:string = 'posts'
const postController = new PostController(BASE_URL);
postController.getAllPosts(endpoint);


//render posts

async function renderPosts(){
    try {
        const response = await postController.getAllPosts(endpoint);
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
renderPosts();



















/* logout function */
export function logout(){
    const logout = document.getElementById('logout') as HTMLButtonElement;
    logout.addEventListener('click',()=>{
        Swal.fire({
            title: "Logout",
            text: "Are you sure",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            background: '#181818',
            color: '#fff'
        }).then((result) => {
            if (result.isConfirmed) {
                sessionStorage.removeItem('token');
                window.location.href = '/';
            }
        })
                
    })
}

logout();