
// URL Base for API Call
let urlBase = "http://openlibrary.org/";

// FUNCTIONS
// =======================================================

function runQuery(queryURL){

    //AJAX Function
    $.ajax({url: queryURL, method: "GET"})
        .done(function(response) {
                console.log(queryURL);
                console.log(response);
            for (let i=0; i<response.docs.length; i++){
                console.log(response.docs[i].title_suggest);
                console.log(response.docs[i].author_name);
                console.log(response.docs[i].first_publish_year);
                console.log(response.docs[i].subject);
                console.log(response.docs[i].author_name);


                if (response.docs[i].subject == undefined) {
                    pSubjectTags.innerHTML = "<i>Information Not Available</i>";
                } else {
                    var subjectLink = document.createElement("a");
                    var subjects = json[bookInfo[0]].details.subjects;
                    console.log(subjects);
                    // // var links = "";
                    // for (var i = 0; i < subjects.length; i++) {
                    // // subjects.forEach(function(subs) {
                    //     var subjectSearch = "https://openlibrary.org/subjects/" + json[bookInfo[0]].details.subjects[i];
                    //     console.log("https://openlibrary.org/subjects/" + json[bookInfo[0]].details.subjects[0])
                    //     console.log(subjectSearch);
                    //     subjectLink.setAttribute("href", subjectSearch);
                    //     subjectLink.innerHTML = json[bookInfo[0]].details.subjects[i];
                    //     console.log(subjectLink);
                    //     pSubjectTags.innerHTML += "<a href=\"" + subjectLink + "\">" + json[bookInfo[0]].details.subjects[i] + "</a>" + ", ";
                    // }
                }


            // var subjectLinks = "";
            //     for (var j = 0; j < response.docs[i].subject.length; j++) {
            //         var subjectLink = response.docs[i].subject[j];


            //     } 
// APPEND EACH BOOK FROM THE RESPONSE AS NEW HTML ELEMENT
            var bookresult = 
            `<div class="row bookResult">
            <div class="cover">
              <p><img src = "https://covers.openlibrary.org/b/id/${response.docs[i].cover_i}-M.jpg" alt= "book cover image"></img></p>
            </div>
            <div class="medium-10 columns">
              <h5>${response.docs[i].title_suggest} by ${response.docs[i].author_name[0]}</h5>
              <p>
                  <span><class="publishDate"> <b>Published:</b> ${response.docs[i].first_publish_year}</span>
              </p>
              <p>
                <span><class="fi-firstline"> <b>First Line: </b></span>
              </p>
              <p>${response.docs[i].first_sentence}</p>
              <p>
                  <span><class="fi-subject"> <b>Subject Tags:</b></span>
                  <p><small>${response.docs[i].subject} </small></p>
                </p>
                <div class="row small-12 small-3 columns">
                  <button type="button" class="secondary button search-button" class="preview">
                    Preview
                  </button>
                  <a href="http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=${response.docs[i].title_suggest}"><button type="button" class="secondary button search-button" class="amazon">
                    Amazon
                  </button>
                  <button type="button" class="secondary button search-button" class="Library">
                    Library
                  </button>
                  <button type="small button-group-option" data-grouptype="OR">
                  <a href="#" class="button success radius">Save</a>
                  <a href="#" class="button primary radius">Hide</a>
                  </button>
              </div>
            </div>
          </div>
          <hr>`;
            $("#bookresults").append(bookresult);
        }
    });
}

// MAIN PROCESSES (FUNCTION CALLS)
// =======================================================

$('#searchbtn').on('click', function(){

    // // 1. Retrieve user input and convert into variables
    
            let searchSubject = $('#booksubject').val().trim();
            console.log(searchSubject);
    
    // //Use user input to build queryURL
    
            let queryURL = urlBase + "subjects/" + searchSubject + ".json?details=true";
            console.log(queryURL);
    




    runQuery(queryURL)});

