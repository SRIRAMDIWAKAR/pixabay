let btn =document.getElementById("btn")
console.log(btn);

btn.addEventListener("click",()=>{
    let search =document.getElementById("search").value
    console.log(search);

    let per_page = 10;

    window.fetch(`https://pixabay.com/api/?key=39158071-50cbe136388a61f0113e9abbd&q=${search}&image_type=photo&per_page=${per_page}`)
    .then((data)=> data.json())
    .then((data1)=>{
        console.log(data1);
        console.log(data1.hits);
        for(let ele of data1.hits){
            console.log(ele);
            console.log(ele.previewURL);
            let demo =document.getElementById("demo")
            console.log(demo);
            let img =`<img  src=${ele.previewURL} alt="diwa"/>`
            demo.innerHTML+=img
        }
    })
})