// document.getElementById('comment-form').addEventListener('submit', function(event) {
//     event.preventDefault();  // Prevent the form from submitting normally

//     const commentText = document.getElementById('comment').value;

//     // Check if the comment is not empty
//     if (commentText.trim()) {
//         // Create a new comment block
//         const commentBlock = document.createElement('div');
//         commentBlock.className = 'comment-block';

//         // Add content to the comment block
//         commentBlock.innerHTML = `
//             <p><strong>New Comment:</strong></p>
//             <p>${commentText}</p>
//             <small>Posted just now</small>
//         `;

//         // Add the new comment to the content area
//         const contentDiv = document.getElementById('content');
//         contentDiv.appendChild(commentBlock);

//         // Reset the form after submitting
//         document.getElementById('comment-form').reset();
//     } else {
//         alert("Please write something before posting!");
//     }
// });

// function postComment(event) {
//     console.log("test");
// }

window.addEventListener("DOMContentLoaded", (event) => {
    const form  = document.getElementById('comment-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            const commentForm = document.getElementById('comment-form');
            const commentValue = commentForm.elements['comment'].value;
            console.log(commentValue)
            const commentContaner = document.getElementById('comment-container');
            const commentBlock = commentContaner.createElement('div');

            // commentBlock.innerHTML = `
            // <ul>
            //     <div>
            //         <img class="avatar" src="/avatars/default.png">
            //         <div>
            //             <form action="/meme-page/2/comment/1" method="post">
            //                 <span class="username text-warning">@Pepe</span>
            //                 <span class="date text-warning">2024-12-08</span>

            //                 <button type="submit" class="btn">
            //                     <img src="/images/delete.svg" alt="delete" style="width: 18px;"
            //                         class="square">
            //                 </button>
            //             </form>
            //             <div class="comment">${commentValue}</div>
            //         </div>
            //     </div>
            // </ul>
            //     `;

            console.log("end");
            event.preventDefault();
        });        
    }
});