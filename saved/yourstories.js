// need to add a button to each of the returned results. 




// need to add an event listener to each of the buttons so that the isbn number if saved to localstorage. 


// 

var savedStories = JSON.parse(localStorage.getItem("saved-stories"));
var hiddenStories = JSON.parse(localStorage.getItem("hidden-stories"));
console.log(savedStories)


if (savedStories == null) {
    savedStories = [];
}

if (hiddenStories == null) {
    hiddenStories = [];
}

$(".saved-stories").on("click", function() {
    $("#show-info").empty();
    for (var i = 0; i < savedStories.length; i++) {
        var url = "https://openlibrary.org/api/books?bibkeys=" + savedStories[i] + "&jscmd=details&format=json";
        fetch(url)
        .then(function(response) {
            console.log(response)
            return response.json();
        })
        .then(function(json) {
            console.log(json)

            var containerDiv = document.getElementById("show-info")
            // var createDiv = document.createElement("div");
            var mainDiv = document.createElement("div");
            var leftDiv = document.createElement("div");
            // var createP = document.createElement("p");
            var pImg = document.createElement("p");
            var image = document.createElement("img")
            var pTitle = document.createElement("span");
            var pAuthor = document.createElement("p");
            var rightDiv = document.createElement("div");
            var pDescription1 = document.createElement("span");
            var pDescription2 = document.createElement("p");
            var spanSubjectsTags = document.createElement("span")
            var pSubjectTags = document.createElement("p");
            var spanPublishDate = document.createElement("span");
            var pPublishDate = document.createElement("p");
            var createButton = document.createElement("button");
            var buttonPreview = document.createElement("button");
            var buttonAmazon = document.createElement("button");
            var buttonLibrary = document.createElement("button");
            var buttonSave = document.createElement("button");
            var buttonHide = document.createElement("button");
            var bookInfo = Object.keys(json);
            // console.log(json, "keys to my json")

            mainDiv.setAttribute("class", "row");
            leftDiv.setAttribute("class", "medium-2 columns left-div");
            
            if (json[bookInfo[0]].details.isbn_10 !== undefined) {
                image.setAttribute("src", "http://covers.openlibrary.org/b/isbn/" + json[bookInfo[0]].details.isbn_10[0] + "-M.jpg");
            } else if (json[bookInfo[0]].details.isbn_13 !== undefined) {
                image.setAttribute("src", "http://covers.openlibrary.org/b/isbn/" + json[bookInfo[0]].details.isbn_13[0] + "-M.jpg");
            } else {
                image.setAttribute("src", "https://pngimage.net/wp-content/uploads/2018/06/image-not-found-png-5.png");
            };
            pTitle.innerHTML = "\"<strong>"  + json[bookInfo[0]].details.title + "</strong>\"";
            if (json[bookInfo[0]].details.authors == undefined) {
                pAuthor.innerHTML = "By: " + "<i>Information Not Available</i>";
            } else {
                pAuthor.innerHTML = "By: " + json[bookInfo[0]].details.authors[0].name;
            }
            rightDiv.setAttribute("class", "medium-8 columns right-div alert-callout-border");
            pDescription1.innerHTML = "Description: ";
            if (json[bookInfo[0]].details.description.value == undefined) {
                pDescription2.innerHTML = "<i>Information Not Available</i>";
            } else if (json[bookInfo[0]].details.description == undefined){
                pDescription2.innerHTML = "<i>Information Not Available</i>";
            } else {    
                pDescription2.innerHTML = json[bookInfo[0]].details.description;
            }
            spanSubjectsTags.innerHTML = "Subject tags: "
            if (json[bookInfo[0]].details.subjects == undefined) {
                pSubjectTags.innerHTML = "<i>Information Not Available</i>";
            } else {
                var subjectLink = document.createElement("a");
                var subjects = json[bookInfo[0]].details.subjects;
                for (var i = 0; i < subjects.length; i++) {
                    var subjectSearch = 
                    pSubjectTags.innerHTML = json[bookInfo[0]].details.subjects;
                }
            }
            spanPublishDate.innerHTML = "Publish date: "
            pPublishDate.innerHTML = json[bookInfo[0]].details.created.value.substring(0,10);
            buttonPreview.setAttribute("class", "secondary button search-button preview book-button")
            buttonAmazon.setAttribute("class", "secondary button search-button amazon book-button")
            buttonLibrary.setAttribute("class", "secondary button search-button library book-button")
            buttonSave.setAttribute("class", "primary button search-button save-isbn book-button");
            buttonHide.setAttribute("class", "secondary button search-button hide-isbn book-button");
            buttonPreview.innerHTML = "Preview";
            buttonAmazon.innerHTML = "Amazon";
            buttonLibrary.innerHTML = "Library";
            buttonSave.innerHTML = "Save"
            buttonHide.innerHTML = "Hide"

            pImg.appendChild(image);
            leftDiv.appendChild(pImg);
            leftDiv.appendChild(pTitle);
            leftDiv.appendChild(pAuthor);
            mainDiv.appendChild(leftDiv);
            rightDiv.appendChild(pDescription1);
            rightDiv.appendChild(pDescription2);
            rightDiv.appendChild(spanSubjectsTags);
            rightDiv.appendChild(pSubjectTags);
            rightDiv.appendChild(spanPublishDate);
            rightDiv.appendChild(pPublishDate);
            rightDiv.appendChild(buttonPreview);
            rightDiv.appendChild(buttonAmazon);
            rightDiv.appendChild(buttonLibrary);
            rightDiv.appendChild(buttonSave);
            rightDiv.appendChild(buttonHide);
            mainDiv.appendChild(rightDiv);

            containerDiv.appendChild(mainDiv);
        })
}})

$(".hidden-stories").on("click", function() {
    $("#show-info").empty();
    for (var i = 0; i < hiddenStories.length; i++) {
    var url = "https://openlibrary.org/api/books?bibkeys=" + hiddenStories[i] + "&jscmd=details&format=json";
    fetch(url)
    .then(function(response) {
        console.log(response)
        return response.json();
    })
    .then(function(json) {
        console.log(json)

        var containerDiv = document.getElementById("show-info")
        // var createDiv = document.createElement("div");
        var mainDiv = document.createElement("div");
        var leftDiv = document.createElement("div");
        // var createP = document.createElement("p");
        var pImg = document.createElement("p");
        var image = document.createElement("img")
        var pTitle = document.createElement("span");
        var pAuthor = document.createElement("p");
        var rightDiv = document.createElement("div");
        var pDescription1 = document.createElement("span");
        var pDescription2 = document.createElement("p");
        var spanSubjectsTags = document.createElement("span")
        var pSubjectTags = document.createElement("p");
        var spanPublishDate = document.createElement("span");
        var pPublishDate = document.createElement("p");
        var createButton = document.createElement("button");
        var buttonPreview = document.createElement("button");
        var buttonAmazon = document.createElement("button");
        var buttonLibrary = document.createElement("button");
        var buttonSave = document.createElement("button");
        var buttonHide = document.createElement("button");
        var bookInfo = Object.keys(json);
        // console.log(json, "keys to my json")

        mainDiv.setAttribute("class", "row");
        leftDiv.setAttribute("class", "medium-2 columns left-div");
        
        if (json[bookInfo[0]].details.isbn_10 !== undefined) {
            image.setAttribute("src", "http://covers.openlibrary.org/b/isbn/" + json[bookInfo[0]].details.isbn_10[0] + "-M.jpg");
        } else if (json[bookInfo[0]].details.isbn_13 !== undefined) {
            image.setAttribute("src", "http://covers.openlibrary.org/b/isbn/" + json[bookInfo[0]].details.isbn_13[0] + "-M.jpg");
        } else {
            image.setAttribute("src", "https://pngimage.net/wp-content/uploads/2018/06/image-not-found-png-5.png");
        };
        pTitle.innerHTML = "\"<strong>"  + json[bookInfo[0]].details.title + "</strong>\"";
        if (json[bookInfo[0]].details.authors == undefined) {
            pAuthor.innerHTML = "By: " + "<i>Information Not Available</i>";
        } else {
            pAuthor.innerHTML = "By: " + json[bookInfo[0]].details.authors[0].name;
        }
        rightDiv.setAttribute("class", "medium-8 columns right-div alert-callout-border");
        pDescription1.innerHTML = "Description: ";
        if (json[bookInfo[0]].details.description.value == undefined) {
            pDescription2.innerHTML = "<i>Information Not Available</i>";
        } else if (json[bookInfo[0]].details.description == undefined){
            pDescription2.innerHTML = "<i>Information Not Available</i>";
        } else {    
            pDescription2.innerHTML = json[bookInfo[0]].details.description;
        }
        spanSubjectsTags.innerHTML = "Subject tags: "
        if (json[bookInfo[0]].details.subjects == undefined) {
            pSubjectTags.innerHTML = "<i>Information Not Available</i>";
        } else {
            var subjectLink = document.createElement("a");
            var subjects = json[bookInfo[0]].details.subjects;
            for (var i = 0; i < subjects.length; i++) {
                var subjectSearch = 
                pSubjectTags.innerHTML = json[bookInfo[0]].details.subjects;
            }
        }
        spanPublishDate.innerHTML = "Publish date: "
        pPublishDate.innerHTML = json[bookInfo[0]].details.created.value.substring(0,10);
        buttonPreview.setAttribute("class", "secondary button search-button preview book-button")
        buttonAmazon.setAttribute("class", "secondary button search-button amazon book-button")
        buttonLibrary.setAttribute("class", "secondary button search-button library book-button")
        buttonSave.setAttribute("class", "primary button search-button save-isbn book-button");
        buttonHide.setAttribute("class", "secondary button search-button hide-isbn book-button");
        buttonPreview.innerHTML = "Preview";
        buttonAmazon.innerHTML = "Amazon";
        buttonLibrary.innerHTML = "Library";
        buttonSave.innerHTML = "Save"
        buttonHide.innerHTML = "Hide"

        pImg.appendChild(image);
        leftDiv.appendChild(pImg);
        leftDiv.appendChild(pTitle);
        leftDiv.appendChild(pAuthor);
        mainDiv.appendChild(leftDiv);
        rightDiv.appendChild(pDescription1);
        rightDiv.appendChild(pDescription2);
        rightDiv.appendChild(spanSubjectsTags);
        rightDiv.appendChild(pSubjectTags);
        rightDiv.appendChild(spanPublishDate);
        rightDiv.appendChild(pPublishDate);
        rightDiv.appendChild(buttonPreview);
        rightDiv.appendChild(buttonAmazon);
        rightDiv.appendChild(buttonLibrary);
        rightDiv.appendChild(buttonSave);
        rightDiv.appendChild(buttonHide);
        mainDiv.appendChild(rightDiv);

        containerDiv.appendChild(mainDiv);
    })
}})







    for (var i = 0; i < savedStories.length; i++) {
        var url = "https://openlibrary.org/api/books?bibkeys=" + savedStories[i] + "&jscmd=details&format=json";
        fetch(url)
        .then(function(response) {
            console.log(response)
            return response.json();
        })
        .then(function(json) {
            console.log(json)

            var containerDiv = document.getElementById("show-info")
            // var createDiv = document.createElement("div");
            var mainDiv = document.createElement("div");
            var leftDiv = document.createElement("div");
            // var createP = document.createElement("p");
            var pImg = document.createElement("p");
            var image = document.createElement("img")
            var pTitle = document.createElement("span");
            var pAuthor = document.createElement("p");
            var rightDiv = document.createElement("div");
            var pDescription1 = document.createElement("span");
            var pDescription2 = document.createElement("p");
            var spanSubjectsTags = document.createElement("span")
            var pSubjectTags = document.createElement("p");
            var spanPublishDate = document.createElement("span");
            var pPublishDate = document.createElement("p");
            var createButton = document.createElement("button");
            var buttonPreview = document.createElement("button");
            var buttonAmazon = document.createElement("button");
            var buttonLibrary = document.createElement("button");
            var buttonSave = document.createElement("button");
            var buttonHide = document.createElement("button");
            var bookInfo = Object.keys(json);
            // console.log(json, "keys to my json")

            mainDiv.setAttribute("class", "row");
            leftDiv.setAttribute("class", "medium-2 columns left-div");
            
            if (json[bookInfo[0]].details.isbn_10 !== undefined) {
                image.setAttribute("src", "http://covers.openlibrary.org/b/isbn/" + json[bookInfo[0]].details.isbn_10[0] + "-M.jpg");
            } else if (json[bookInfo[0]].details.isbn_13 !== undefined) {
                image.setAttribute("src", "http://covers.openlibrary.org/b/isbn/" + json[bookInfo[0]].details.isbn_13[0] + "-M.jpg");
            } else {
                image.setAttribute("src", "https://pngimage.net/wp-content/uploads/2018/06/image-not-found-png-5.png");
            };
            pTitle.innerHTML = "\"<strong>"  + json[bookInfo[0]].details.title + "</strong>\"";
            
            if (json[bookInfo[0]].details.authors == undefined) {
                pAuthor.innerHTML = "By: " + "<i>Information Not Available</i>";
            } else {
                pAuthor.innerHTML = "By: " + json[bookInfo[0]].details.authors[0].name;
            }
            rightDiv.setAttribute("class", "medium-8 columns right-div alert-callout-border");
            pDescription1.innerHTML = "Description: ";
            if (json[bookInfo[0]].details.description == undefined){
            pDescription2.innerHTML = "<i>Information Not Available</i>";
            } else if (json[bookInfo[0]].details.description.value == undefined) {
                pDescription2.innerHTML = "<i>Information Not Available</i>";
            } else {    
                pDescription2.innerHTML = json[bookInfo[0]].details.description;
            }
            spanSubjectsTags.innerHTML = "Subject tags: "
            if (json[bookInfo[0]].details.subjects == undefined) {
                pSubjectTags.innerHTML = "<i>Information Not Available</i>";
            } else {
                var subjectLink = document.createElement("a");
                var subjects = json[bookInfo[0]].details.subjects;
                console.log(subjects);
                // var links = "";
                for (var i = 0; i < subjects.length; i++) {
                // subjects.forEach(function(subs) {
                    var subjectSearch = "https://openlibrary.org/subjects/" + json[bookInfo[0]].details.subjects[i];
                    console.log("https://openlibrary.org/subjects/" + json[bookInfo[0]].details.subjects[0])
                    console.log(subjectSearch);

                    subjectLink.setAttribute("href", subjectSearch);

                    subjectLink.innerHTML = json[bookInfo[0]].details.subjects[i];
                    console.log(subjectLink);

                    pSubjectTags.innerHTML += "<a href=\"" + subjectLink + "\">" + json[bookInfo[0]].details.subjects[i] + "</a>" + ", ";
                }
            }
            spanPublishDate.innerHTML = "Publish date: "
            pPublishDate.innerHTML = json[bookInfo[0]].details.created.value.substring(0,10);
            buttonPreview.setAttribute("class", "secondary button search-button preview book-button")
            buttonAmazon.setAttribute("class", "secondary button search-button amazon book-button")
            buttonLibrary.setAttribute("class", "secondary button search-button library book-button")
            buttonSave.setAttribute("class", "primary button search-button save-isbn book-button");
            buttonHide.setAttribute("class", "secondary button search-button hide-isbn book-button");
            buttonPreview.innerHTML = "Preview";
            buttonAmazon.innerHTML = "Amazon";
            buttonLibrary.innerHTML = "Library";
            buttonSave.innerHTML = "Save"
            buttonHide.innerHTML = "Hide"

            pImg.appendChild(image);
            leftDiv.appendChild(pImg);
            leftDiv.appendChild(pTitle);
            leftDiv.appendChild(pAuthor);
            mainDiv.appendChild(leftDiv);
            rightDiv.appendChild(pDescription1);
            rightDiv.appendChild(pDescription2);
            rightDiv.appendChild(spanSubjectsTags);
            rightDiv.appendChild(pSubjectTags);
            rightDiv.appendChild(spanPublishDate);
            rightDiv.appendChild(pPublishDate);
            rightDiv.appendChild(buttonPreview);
            rightDiv.appendChild(buttonAmazon);
            rightDiv.appendChild(buttonLibrary);
            rightDiv.appendChild(buttonSave);
            rightDiv.appendChild(buttonHide);
            mainDiv.appendChild(rightDiv);

            containerDiv.appendChild(mainDiv);
        })
        
        }
