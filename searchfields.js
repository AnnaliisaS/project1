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
        console.log(queryURL);
        console.log(OLData);
    })
}


// MAIN PROCESSES (FUNCTION CALLS)
// =======================================================

$('#searchbtn').on('click', function(){

    let searchTitle = $('#booktitle').val().trim();
        console.log(searchTitle);
    
    let newURL = urlBase + "&title=" + searchTitle;
        console.log(newURL);
        
        runQuery(newURL);
})

// 1. Retrieve user input and convert into variables
// 2. Use those variables to run an AJAX call to Open Library
// 3. Break down the Open Library Object into useable fields
// 4. Dynamically generate html content

// 5. Dealing with edge cases (bugs or situations)
