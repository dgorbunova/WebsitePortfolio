let form = document.getElementById('enterPost');
let postList = document.getElementById('items');

function highlight(e) {
    

    let title = document.getElementById('title-for-blog').value;
    let text = document.getElementById('text-for-blog').value;

    let titleField = document.getElementById('title-for-blog');
    let textField = document.getElementById('text-for-blog');

    // Remove any existing error classes
    titleField.classList.remove('error');
    textField.classList.remove('error');

    // Check if title and text fields are empty
    if (title.trim() === '') { // If title is empty, add error class
        titleField.classList.add('error');
        e.preventDefault();
    }

    if (text.trim() === '') {
        textField.classList.add('error');
        e.preventDefault();
    }

    // If any required field is empty, stop execution
    if (title.trim() === '' || text.trim() === '') {
        return;
    }

}


function output(e) {
    e.preventDefault();
    let button = window.confirm('Are you sure you want to reset the form?');
    if (button) {
        document.getElementById('title-for-blog').value = "";
        document.getElementById('text-for-blog').value = "";
    }
}

function goToBlog(){
    window.location.href = 'viewBlog.php';
}




let blogButton = document.getElementById('to-blog');

let resetButton = document.getElementById('reset-button');
//let submitButton = document.getElementById('submit-button');
resetButton.addEventListener("click", output);
//submitButton.addEventListener("click", highlight);
blogButton.addEventListener("click", goToBlog);


