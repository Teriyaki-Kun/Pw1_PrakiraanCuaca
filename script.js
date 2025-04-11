fetch("https://24252-if21-pw1-omega.vercel.app/javascript/wilayah.json")
.then(response=> response.json())
.then(data => {console.log(data);
data.forEach( (item) => {
document.getElementById("list-desa").innerHTML += `<li class="list-group-item" onclick='detail("${item.kode}")'>${item.kode} ${item.nama} </li>`
})
})

function detail(kode){
console.log(kode);
// clear element
document.getElementById("list-cuaca").innerHTML = "";
fetch(`https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=${kode}`)
.then(response => response.json())
.then(data => {
    console.log(data);
    document.getElementById('desa').innerHTML = data.lokasi.desa
    document.getElementById('kecamatan').innerHTML = data.lokasi.kecamatan
    data.data[0].cuaca.forEach( (item) =>{
        console.log(item);
        item.forEach((cuaca) => {
            document.getElementById("list-cuaca").innerHTML +=`
            <div class="col-lg-3 p-2">
                <div class="card">
            <div class="card" style ="width : 18 rem;">
                <img src="${cuaca.image}" class = "card-img-top" alt = "..."></img>
                <div class="card-body">
                    <h5 class="card-title">${cuaca.weather_desc}</h5>
                    <p class="card-text">${cuaca.utc_datetime}</p>
                </div>
                </div>
                </div>
                </div>
                `
                
            

        })
        
    })
    
    

})
}

