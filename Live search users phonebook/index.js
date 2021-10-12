const result = document.getElementById('result');   //we will append all the li tags to this
const filter = document.getElementById('filter');   // this is the input for the phonebook
const listItems =[]                                 // we will be storing all the li tags in this array

getData()
filter.addEventListener('input', (e)=>filterData(e.target.value))
//function for fetching the data from the url
async function getData(){
    const res = await fetch('https://randomuser.me/api?results=50');      //fetching the data from the api, we are fetching 50 users data
    const { results } = await res.json();                                  // converting the data into objects
    //checking the output in the console
    //console.log(results)

    //clearing all the result with empty string
    result.innerHTML=''
    //console.log(results)

    results.forEach(user => {
        //console.log(user)
        const li = document.createElement('li');            //creating a li tag and we will append to the result(ul tag)

        //pushing all the li tags into the listItems array
        listItems.push(li)
        //console.log(listItems)

        //now we are hardcoding the li element and div as in markup
        //fetching all the data and looping through the api
        li.innerHTML=`
            <img src="${user.picture.large}" alt="${user.name.first}">     
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        //appending the data to the result (ul tag)
        result.appendChild(li)
    });
}
function filterData(searchTerm){
    //enusure whether data is searching or not with consoole.log
    //console.log(searchTerm)

    listItems.forEach(item=>{
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
                item.classList.remove('hide')
        }else{
            item.classList.add('hide')
        }
    })
}