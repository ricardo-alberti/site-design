// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;

function search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('div');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
function myFunction() {
    var x = document.getElementById("items2");
    var y = document.getElementById("nav2");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

fetch("imoveis.json")
    .then( response => response.json()) 
    .then( data => {
    for(var i = 0; i < data.imoveis.length; i++)
    { 
        document.querySelector("#local"+i).innerText = data.imoveis[i].local
        document.querySelector("#img"+i).src = data.imoveis[i].img
        document.querySelector("#price"+i).innerText = data.imoveis[i].price
        document.querySelector("#sell"+i).innerText = data.imoveis[i].sell
        document.querySelector("#link"+i).href = data.imoveis[i].link
        document.querySelector("#area"+i).innerText = data.imoveis[i].area
        document.querySelector("#bedroons"+i).innerText = data.imoveis[i].bedroons
        document.querySelector("#bathroons"+i).innerText = data.imoveis[i].bathroons
        document.querySelector("#garages"+i).innerText = data.imoveis[i].garages
    }
})

