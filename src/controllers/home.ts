import Swal from 'sweetalert2';

import { PostController } from './post.controllers';
import { BASE_URL } from './URL-base';

const endpoint:string = 'posts'
const postController = new PostController(BASE_URL);
postController.getAllPosts(endpoint);

//render posts

async function renderPosts(){
    try {
        
    } catch (error) {
        
    }
}



















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