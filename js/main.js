const wiki_link = 'https://en.wikipedia.org/wiki'


const searchTerm = document.querySelector(".searchTerm")
const randomButton = document.querySelector(".random")
const searchButton = document.querySelector(".search")
const output = document.querySelector(".output")
const container=document.querySelector(".container")

function ajaxSearch() {
    console.log("worked")
    output.innerHTML = ""
    const api_url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm.value}&format=json&callback=?`
    $.ajax({
        url: api_url,
        dataType: 'json',
        success: (data) => {
            console.log(data)
        
            //data[0] is the search title
            //data[1] is the title
            // data[2] is the description
            // data[3] is the links

            for(let i in data[1]){
                output.innerHTML +=`
                <div class="list"><li>
                <a href="${data[3][i]}">${data[1][i]}</a>
                <p>${data[2][i]}</p>
                </li></div>
                `
            }
        },
        error: () => {
            console.log("error")
        }
    })
}

searchButton.addEventListener('click', ajaxSearch)
searchButton.addEventListener('click', function(){
    container.classList.toggle("hide")
    container.classList.toggle("show")

})
// randomButton.addEventListener('click', function(){
//     windows.open(`${wiki_link}${randomEndpoint}`)
// })