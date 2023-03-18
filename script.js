let movie = document.querySelector('#movie')

let changeBorder = document.querySelector('#changeBorder')

changeBorder.addEventListener('click', function() {
    if (movie.style.borderRadius ==  "0px") {
        movie.style.borderRadius  = "25px"
    }
    else {
        movie.style.borderRadius  = "0px"
    }
})