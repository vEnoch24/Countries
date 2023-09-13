const countriesUrl = `https://restcountries.com/v3.1/all`;
const search = document.getElementById('search');

// const container = document.getElementById('container');
const container = document.querySelector('.grid-container');

//const countryContainer = document.querySelectorAll('.item');
const countryContainer = document.getElementsByClassName('item');
const moreInfo = document.getElementsByClassName('info');

//Country info or data
const flag = document.querySelectorAll('#flag');
const countryNames = document.querySelectorAll('.countryName');
const capital = document.querySelectorAll('.capital');
const languages = document.querySelectorAll('.languages');
const population = document.querySelectorAll('.population');
const continent = document.querySelectorAll('.continent');


let http = new XMLHttpRequest();
http.open('get', countriesUrl, true);
http.send();

http.onload = function (){
    if(this.readyState == 4 && this.status == 200)
    {
        let countries = JSON.parse(this.responseText);
        let output = ""; 
        console.log(countries.continents);
        countries.sort((a,b) => a.name.common.localeCompare(b.name.common));
        for(let country of countries)
        {
         let languageObj = Object.values(country.languages || {});
         output += `<div class="item">
             <div class="country-card" >
                  <img id="flag" alt="" src=${country.flags.png}>
                  <span class="countryName">Name: ${country.name.common.toUpperCase()} </span><br>
                  <div id="more-info" class="info">
                     <span class="capital">Capital: ${country.capital}</span><br>
                     <span class="languages">Languages: ${languageObj}</span><br>
                     <span class="population">Population: ${country.population.toLocaleString('en-US')}</span><br>
                     <span class="continent">Continent: ${country.continents}</span><br>
                  </div>
              </div>
          </div>`
        }

        container.innerHTML = output;
        
        for(let i = 0; i < countryContainer.length; i++)
        {
            countryContainer[i].addEventListener('mouseenter', () =>showMoreInfo(i));
            countryContainer[i].addEventListener('mouseleave', () => hideMoreInfo(i));
        }

        function showMoreInfo(x)
        {
            moreInfo[x].style.display = "inline-block";           
        }

        function hideMoreInfo(x)
        {
            moreInfo[x].style.display = "none";                  
        }

        //Search country by filtering the list
        let searchBox = document.getElementById('search');

        searchBox.oninput = filterCountries;
        function filterCountries() {
            for(let i = 0; i < countryContainer.length; i++) {
                const currentName = countries[i].name.common.toLowerCase();
                const searchText =  this.value.toLowerCase();
                if(!currentName.includes(searchText))
                {
                    countryContainer[i].style.display = "none";
                }else{
                    countryContainer[i].style.display = "flex";
                }
            }
        }       


        //filters the list based on selection
        const filterSelect = document.getElementById('filterSelect');

        filterSelect.addEventListener('change', handleFilterSelection);

        function handleFilterSelection() {
            const selectedOption = filterSelect.querySelector('optgroup option:checked');
            const selectedValue = selectedOption.value;

            filterItems(selectedValue);
        }


        function filterItems(selectedValue) {
            if(selectedValue === 'All')
            {
                for(let i = 0; i < countryContainer.length; i++) {
                    countryContainer[i].style.display = "flex";
                }
            }
            else if(selectedValue === 'Afr'){

                for(let i = 0; i < countryContainer.length; i++) {
                    const continent = countries[i].continents[0].toLowerCase();
                    if(continent === 'africa'){            
                        countryContainer[i].style.display = "flex";
                    }else{
                        countryContainer[i].style.display = "none";
                    }
                }   
            }
            else if(selectedValue === 'Eur') {
                for(let i = 0; i < countryContainer.length; i++) {
                    const continent = countries[i].continents[0].toLowerCase();
                    if(continent === 'europe'){            
                        countryContainer[i].style.display = "flex";
                    }else{
                        countryContainer[i].style.display = "none";
                    }
                } 
            }
            else if(selectedValue === 'Sua') {
                for(let i = 0; i < countryContainer.length; i++) {
                    const continent = countries[i].continents[0].toLowerCase();
                    if(continent === 'south america'){            
                        countryContainer[i].style.display = "flex";
                    }else{
                        countryContainer[i].style.display = "none";
                    }
                } 
            }
            else if(selectedValue === 'Noa') {
                for(let i = 0; i < countryContainer.length; i++) {
                    const continent = countries[i].continents[0].toLowerCase();
                    if(continent === 'north america'){            
                        countryContainer[i].style.display = "flex";
                    }else{
                        countryContainer[i].style.display = "none";
                    }
                } 
            }
            else if(selectedValue === 'Asi') {
                for(let i = 0; i < countryContainer.length; i++) {
                    const continent = countries[i].continents[0].toLowerCase();
                    if(continent === 'asia'){            
                        countryContainer[i].style.display = "flex";
                    }else{
                        countryContainer[i].style.display = "none";
                    }
                } 
            }
            else if(selectedValue === 'Ant') {
                for(let i = 0; i < countryContainer.length; i++) {
                    const continent = countries[i].continents[0].toLowerCase();
                    if(continent === 'antarctica'){            
                        countryContainer[i].style.display = "flex";
                    }else{
                        countryContainer[i].style.display = "none";
                    }
                } 
            }
            else if(selectedValue === 'Oce') {
                for(let i = 0; i < countryContainer.length; i++) {
                    const continent = countries[i].continents[0].toLowerCase();
                    if(continent === 'oceania'){            
                        countryContainer[i].style.display = "flex";
                    }else{
                        countryContainer[i].style.display = "none";
                    }
                } 
            }
        }
                
    }
}

// fetch(countriesUrl)
//     .then(response => response.json())
//     .then(data => {

//         let countries = data.length;
//         let dataStore = "";
        

//        for(let i = 1; i < countries; i++)
//        {
//         let languageObj = Object.values(data[i].languages)
//         dataStore += `<div class="item">
//             <div class="country-card" >
//                  <img id="flag" alt="" src=${data[i].flags.png}>
//                  <span class="countryName">Name: ${data[i].name.common} </span>
//                  <div class="more-info">
//                     <span class="capital">Capital: ${data[i].capital}</span>
//                     <span class="languages">Languages: </span>
//                     <span class="population">Population: ${data[i].population}</span>
//                     <span class="continent">Continent: ${data[i].continents}</span>
//                  </div>
//              </div>
//          </div>`
//        }

//         container.innerHTML += dataStore;

//         // flag[0].src = data[0].flags.png;
//         // countryNames[0].innerText += " " + data[0].name.common;
//         // capital[0].innerText += " " + data[0].capital;
//         // // let currencyObj = JSON.stringify(data[0].currnencies);
//         // // for(let x in data[0].currencies)
//         // // {
//         // //     currencyObj += data[0].currencies[x] + " ";
//         // // };
//         // let languageObj = Object.values(data[0].languages)
//         // languages[0].innerText += " " + languageObj;
//         // population[0].innerText += " " + data[0].population;
//         // continent[0].innerText += " " + data[0].continents;

//         countryContainer[0].addEventListener('mouseenter', showMoreInfo);
//         countryContainer[0].addEventListener('mouseleave', hideMoreInfo);

//         function showMoreInfo()
//         {
//             moreInfo.style.display = "flex";
//             console.log('more info show');
//         }

//         function hideMoreInfo()
//         {
//             moreInfo.style.display = "none";
//             console.log('more info hide');
//         }

//         console.log(data.length);
//     })
//     .catch(err => console.log(err));


// search.addEventListener('keypress', fetchData);

// const fetchData = async () => {
//     try{
//         const response = await fetch(countriesUrl);
//         const countries = await response.json();
//         countries.forEach(country => console.log(country));
//     }catch(error)
//     {
//         console.log(error);
//     }
// }

// fetchData();


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.remove('hide');
        } else {
            entry.target.classList.add('hide');
        }
    });
});


const items = document.querySelectorAll('.item');
items.forEach(item => observer.observe(item));



