// apikey : 775fa1f9d3cb4844a7501706eabcb87f

//parameters of link to fetch from news api
let source = 'BBC-news';
let apiKey = '775fa1f9d3cb4844a7501706eabcb87f';

//grabs the new container
let newsAccordion = document.getElementById('newsAccordion');

// create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// when response is ready:
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = '';
        articles.forEach(function(element, index){

            let news = `<div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                    <b>Breaking News ${index + 1} :</b>${element["title"]}
                                </button>
                            </h2>
                            
                            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                                data-bs-parent="#newsAccordion">
                                <div class="accordion-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send();



