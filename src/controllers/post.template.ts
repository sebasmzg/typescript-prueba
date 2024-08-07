import {IPostResponse } from "../models/post.models";

export class PostTemplate {
    //propiedad para el contenedor
    private container: HTMLDivElement;
    //constructor para el contenedor recibe un div
    constructor(container: HTMLDivElement){
        this.container = container;
    } 

    //metodo para crear la tarjeta
    PostTemplate(data: IPostResponse, color: string, quality: string){
        //creacion de elementos, agrefar clases y contenido

        //post container
        const postContainer = <HTMLDivElement> document.createElement('figure');
        postContainer.classList.add('post');
        postContainer.style.setProperty('--post-color', color);

        //post image
        const imageDiv = <HTMLDivElement> document.createElement('div');
        imageDiv.classList.add('post-div-image');

        const image = <HTMLImageElement> document.createElement('img');
        image.classList.add('post-image');
        image.src = data.multimediaUrl;


        //info container
        const infoContainer = <HTMLDivElement> document.createElement('div');
        infoContainer.classList.add('post-info-container');

        //quality container
        const qualitycontainer = <HTMLDivElement> document.createElement('div');
        qualitycontainer.classList.add('post-quality-container');
        //dont allowed words
        const dontallowedWordcontainer = <HTMLDivElement> document.createElement('div');
        dontallowedWordcontainer.classList.add('post-quality-container-div'); 
        //word with errors
        const wordWithErrorcontainer = <HTMLDivElement> document.createElement('div');
        wordWithErrorcontainer.classList.add('post-quality-container-div');

        //post title
        const title = <HTMLHeadingElement> document.createElement('h3');
        title.classList.add('post-title');
        title.textContent = data.title;

        //post platform
        const platform = <HTMLParagraphElement> document.createElement('p');
        platform.classList.add('post-platform');
        platform.textContent = data.platform;

        //post quality
        const qualityPost = <HTMLParagraphElement> document.createElement('p');
        qualityPost.classList.add('post-quality');
        qualityPost.textContent = `${(quality)}%`;

        //publication date
        const publicationDate = <HTMLParagraphElement> document.createElement('p');
        publicationDate.classList.add('post-publicationDate');
        publicationDate.textContent = `Publication date: ${data.estimatedPublicationDate}`

        //creation date
        const creationDate = <HTMLParagraphElement> document.createElement('p');
        creationDate.classList.add('post-creationDate');
        creationDate.textContent = `Creation date: ${data.creationDate}`;

        //buttons container
        const buttonsDiv = <HTMLDivElement> document.createElement('div');
        buttonsDiv.classList.add('post-div-buttons');

        //edit button
        const editButton = <HTMLButtonElement> document.createElement('button');
        editButton.classList.add('post-button');
        editButton.id = 'edit-button';
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        editButton.dataset.id = data.id.toString(); 
        //delete button
        const deleteButton = <HTMLButtonElement> document.createElement('button');
        deleteButton.classList.add('post-button');
        deleteButton.id = 'delete-button';
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.dataset.id = data.id.toString();
        deleteButton.dataset.action = 'delete';
        //info button
        const infoButton = <HTMLButtonElement> document.createElement('button');
        infoButton.classList.add('post-button');
        infoButton.id = 'info-button';
        infoButton.textContent = 'Info';
        infoButton.dataset.id = data.id.toString();
        infoButton.dataset.action = 'info';

        //image container
        imageDiv.appendChild(image);

        //quality container elements
        qualitycontainer.appendChild(dontallowedWordcontainer);
        qualitycontainer.appendChild(wordWithErrorcontainer);

        //info container elements
        infoContainer.appendChild(creationDate);
        infoContainer.appendChild(qualitycontainer);

        //agregar botones al contenedor
        postContainer.appendChild(buttonsDiv);

        //buttons container
        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(deleteButton);        

        //post container elements
        postContainer.appendChild(buttonsDiv)
        postContainer.appendChild(title);
        postContainer.appendChild(imageDiv);
        postContainer.appendChild(platform);
        postContainer.appendChild(publicationDate);
        postContainer.appendChild(creationDate)
        postContainer.appendChild(qualityPost);
        postContainer.appendChild(infoButton);
        postContainer.appendChild(infoContainer);

        //agregar contenedor al contenedor principal
        this.container.appendChild(postContainer);
    }
}