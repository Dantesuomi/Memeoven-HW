document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('comment-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        console.log("Event triggered");
        const commentContaner = document.getElementById('comment-container');
        const comment = document.createElement('div');
        const commentForm = document.getElementById('comment-form');
        const commentValue = commentForm.elements['comment'].value;

        comment.innerHTML = `
            <ul>
                <img class="avatar" src="images/peepo_happy.png">
                <div>
                    <span class="username text-warning">@User</span>
                    <span class="date text-warning">${new Date().toLocaleString('lv-LV')}</span>
                    <div class="comment">${commentValue}</div>
                </div>
            </ul>
        `
        commentContaner.appendChild(comment);
    });
});