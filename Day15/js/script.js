"use strict";
// async function getPosts() {
//     try {
//         let response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {method: `GET`});
//         let responseData = await response.json();
//         for (const post of responseData) {
//             let {title, body} = post;
//             console.log(`Title: ${title}\nBody: ${body}`);
//         }
//     } catch (error) {
//         console.log(`An Error: ${error}`);
//     }
// }
// getPosts();

let postsDiv = document.querySelector('.posts');

function displayContent(postsArray) {
    let contentContainer = ``;
    for (const post of postsArray) {
        let {id, title, body} = post;
        contentContainer += `
            <div class="card mb-2 text-center text-bg-dark">
                <div class="card-body">
                    <h4 class="card-title">${title}</h4>
                    <p class="card-text">${body}</p>
                </div>
                <span class="mx-auto">Post ID: ${id}</span>
            </div>
            `
    }

    postsDiv.innerHTML = contentContainer;
}

async function getPosts() {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {method: `GET`});
        let responseData = await response.json();
        displayContent(responseData);
    } catch (error) {
        console.log(`An Error: ${error}`);
    }
}

getPosts();