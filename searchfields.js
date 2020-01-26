// SETUP VARIABLES
// =======================================================
let title   = "";
let author  = "";
let keyword = "";
let subject = ["Biography", "Civilization", "Murder", "Athletes", "Fantasy", "Tanks", "Occultism", "Potatoes","Humor", "Isotopes", "Torts", "Pythons"];

// URL Base for API Call
let urlBase = "http://openlibrary.org/search.json?";


// FUNCTIONS
// =======================================================

function runQuery(queryURL){

    //AJAX Function
    $.ajax({url: queryURL, method: "GET"})
        .done(function(response) {
            for (let i=0; i<response.docs.length; i++){
                console.log(response.docs[i].title_suggest);
                console.log(response.docs[i].author_name[0]);
                console.log(response.docs[i].first_publish_year);
                console.log(response.docs[i].subject);

                
                // function bookTemplate(response){
                // return `
                // <div class="book">
                // <img class="book-cover" src = https://covers.openlibrary.org/b/id/${response.docs[i].cover_i}-M.jpg"></img>
                // <h2 class="title-and-author">${response.docs[i].title_suggest} by ${response.docs[i].author_name[0]} </h2>
                // <h3 class="subjects">${response.docs[i].subject}</h3>
                // </div>
                // `
                // }
                
            //     document.getElementById("bookresults").innerHTML = `
            //     <h1 class "book-title">Books: (${response.length} results></h1>
            //     ${response.map(bookTemplate).join('')}
            //     <p class="footer">These ${(response.length)} books are recommended.</p>
            //     `
            // }


            var bookresult = 
            // `<div class ="book">
            // <img class="book-cover" src = https://covers.openlibrary.org/b/id/${response.docs[i].cover_i}-M.jpg></img>
            // <h2 class = "title-and-author">${response.docs[i].title_suggest} by ${response.docs[i].author_name[0]} </h2>
            // <h3 class = "subjects">${response.docs[i].subject}</h3>
            // </div>`;
            `<div class="row bookResult">
            <div class="cover">
              <p><img src = "https://covers.openlibrary.org/b/id/${response.docs[i].cover_i}-M.jpg" alt= "book cover image"></img></p>
            </div>
            <div class="medium-10 columns">
              <h5>${response.docs[i].title_suggest} by ${response.docs[i].author_name[0]}</h5>
              <p>
                  <span><i class="publishDate"> &#9400 ${response.docs[i].first_publish_year}</i></span>
              </p>
              <p>
                <span><i class="fi-description"> Description: </i></span>
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum delectus
                aperiam nesciunt magni facilis ullam.</p>
              <p>
                  <span><i class="fi-subject"> Subject Tags: </i></span>
                  <p><small>${response.docs[i].subject} </small></p>
                </p>
                <div class="row small-12 small-3 columns">
                  <button type="button" class="secondary button search-button" class="preview">
                    Preview
                  </button>
                  <button type="button" class="secondary button search-button" class="amazon">
                    Amazon
                  </button>
                  <button type="button" class="secondary button search-button" class="Library">
                    Library
                  </button>
              </div>
            </div>
          </div>
          <hr>`;
            $("#bookresults").append(bookresult);
        }
        // console.log(queryURL);
        // console.log(response);
    });
}


// MAIN PROCESSES (FUNCTION CALLS)
// =======================================================

$('#searchbtn').on('click', function(){

// // 1. Retrieve user input and convert into variables

    let searchTitle = $('#booktitle').val().trim();
    console.log(searchTitle);

    let searchAuthor = $('#bookauthor').val().trim();
    console.log(searchAuthor);

    let searchKeyword = $('#bookkeyword').val().trim();
    console.log(searchKeyword);

    let searchSubject = $('#booksubject').val().trim();
    console.log(searchSubject);

    
    // let queryURL = '';

    // if (searchTitle !== null) {
    let queryURL = urlBase + "&title=" + searchTitle;
    console.log(queryURL);
    // }

//     if (searchAuthor !== null){
//         let queryURL = urlBase + "&a=" + searchAuthor;
//         console.log(queryURL);
//     }

//     if (searchKeyword !== null){
//         let queryURL = urlBase + "&q=" + searchKeyword;
//         console.log(queryURL);
//     }

//     if (searchSubject !== null){
//         let queryURL = urlBase + "&s=" + searchSubject;
//         console.log(queryURL);
//     }

// 2. Use those variables to run an AJAX call to Open Library
    runQuery(queryURL);

})


// // 3. Break down the Open Library Object into useable fields
// // 4. Dynamically generate html content

// // 5. Dealing with edge cases (bugs or situations)
