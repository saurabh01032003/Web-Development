let input = document.querySelector('input');
let list = document.querySelector('#list');
let btn = document.querySelector('button');

btn.addEventListener('click',function(){
    let searchText = input.value;
    console.log(searchText);
    getData(searchText);
})
function getData(searchText){
    let res = axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`);
    res.then(function(response){
        console.log(response);
        // console.log(response.data);
        manipulationDom(response.data);
    }).catch(function(err){
        console.log("Error");
    })
}

function manipulationDom(allData){

    // remove previos search histories
    while(list.firstChild){
        list.firstChild.remove();
    }

    console.log(allData);
    for(let item of allData){
        let figure = document.createElement('figure');

        if(item.show.image){ // agar image available hoga -> than only we have to put it inside div to display
            figure.innerHTML = `
                <img src=${item.show.image.original} />
                <h2>${item.show.name}</h2>    
            `
        }
        list.append(figure);
    }

}
