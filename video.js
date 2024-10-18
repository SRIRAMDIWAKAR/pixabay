let btn =document.getElementById("btn")
console.log(btn);

btn.addEventListener("click",()=>{
    let search =document.getElementById("search").value
    console.log(search);

    let per_page = 10;
    window.fetch(`  https://pixabay.com/api/videos/?key=39158071-50cbe136388a61f0113e9abbd&q=${search}`)
    // window.fetch(`https://pixabay.com/api/?key=39158071-50cbe136388a61f0113e9abbd&q=${search}&image_type=photo&per_page=${per_page} https://pixabay.com/api/videos/?key=39158071-50cbe136388a61f0113e9abbd&q=yellow+flowers`)
    .then((data)=> data.json())
    .then((data1)=>{
        console.log(data1);
        console.log(data1.hits);
        for(let ele of data1.hits){
            console.log(ele);
            console.log(ele.videos.medium.url);
            let videos= `<video src=${ele.videos.medium.url}  controls><video>`
            console.log(videos);
            let demo=document.getElementById("demo")
            demo.innerHTML+=videos
        }
    })
})