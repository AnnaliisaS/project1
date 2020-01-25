// SETUP VARIABLES
// =======================================================
let title   = "";
let author  = "";
let keyword = "";
let subject = "";

// URL Base for API Call
let urlBase = "http://openlibrary.org/search.json?";


// FUNCTIONS
// =======================================================

function runQuery(queryURL){

    //AJAX Function
    $.ajax({url: queryURL, method: "GET"})
        .done(function(OLData) {
            for (let i=0; i<OLData.response.docs.length; i++){
                console.log(OLData.response.docs[i].title_suggest);
                console.log(OLData.response.docs[i].author_name[0]);
                console.log(OLData.response.docs[i].first_publish_year);
                console.log(OLData.response.docs[i].subject);
            }
   
        // console.log(queryURL);
        // console.log(OLData);
    })
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
//         console.log(newURL);
//     }

//     if (searchKeyword !== null){
//         let queryURL = urlBase + "&q=" + searchKeyword;
//         console.log(newURL);
//     }

//     if (searchSubject !== null){
//         let queryURL = urlBase + "&s=" + searchSubject;
//         console.log(newURL);
//     }

// 2. Use those variables to run an AJAX call to Open Library
    runQuery(queryURL);

})


// // 3. Break down the Open Library Object into useable fields
// // 4. Dynamically generate html content

// // 5. Dealing with edge cases (bugs or situations)
