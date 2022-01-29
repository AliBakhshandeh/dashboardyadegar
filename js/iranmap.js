var get = [
    "Yazd",
    "Tehran",
    "Markazi",
    "Isfahan",
    "Qom",
    "Golestan",
    "KhorasanNorth",
    "Alborz",
    "Zanjan",
    "Qazvin",
    "Lorestan",
    "Fars",
    "Kerman",
    "KhorasanSouth",
    "Khuzestan",
    "KohgiluyehAndBoyerAhmad",
    "KhorasanRazavi",
    "ChaharMahaalBakhtiari",
    "Hamedan",
    "Kurdistan",
    "Mazandaran",
    "Semnan",
    "Bushehr",
    "Gilan",
    "Hormozgan",
    "SistanAndBaluchestan",
    "AzerbaijanEast",
    "AzerbaijanWest",
    "Ardabil",
    "Kermanshah",
    "Ilam",
    "Urumia"
  ]
var dataOnMap = [
    {
      "city": "Yazd",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "Tehran",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "Markazi",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "Isfahan",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "Qom",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "Golestan",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "KhorasanNorth",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "Alborz",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "Zanjan",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "Qazvin",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "Lorestan",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "Fars",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "Kerman",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "KhorasanSouth",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "Khuzestan",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "KohgiluyehAndBoyerAhmad",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "KhorasanRazavi",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "ChaharMahaalBakhtiari",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "Hamedan",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "Kurdistan",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "Mazandaran",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "Semnan",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "Bushehr",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "Gilan",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "Hormozgan",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "SistanAndBaluchestan",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "AzerbaijanEast",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "AzerbaijanWest",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "Ardabil",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "Kermanshah",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "Ilam",
      "active": 2,
      "deactive": 3
    },
    {
      "city": "Urumia",
      "active": 2,
      "deactive": 3
    }
  ]
//   function for get city on map path class -
// $(function(){
//     get.forEach(item => {
//         dataOnMap.push({city: item , active: 2 , deactive: 3})
//     })
//     console.log(dataOnMap)
// })

$(function() {
    $(window).resize(function() {
        resposive();
    });
// set Attribute Tooltip for Map -
    $(function(){
    var items = $('#IranMap svg g path')
    var all = $(".mapItem").map(function() {
        console.log(get.push(this.classList.item(this.classList.length-1)))
        console.log(get);
        dataOnMap.find(item => {
            if(this.classList.item(this.classList.length-1) == item.city)
            this.setAttribute("title", `<span>${item.city}</span><br/><span>فعال : ${item.active ? item.active : "اطلاعات موجود نیست"}</span><br/><span>غیر فعال : ${item.deactive ? item.deactive : "اطلاعات موجود نیست"}</span>`)
        })
        this.classList.item(this.classList.length-1)
        this.setAttribute("data-toggle", "tooltip")
        this.setAttribute("data-placement", "top")
        this.setAttribute("data-html", "true")
    }).get();
    
    console.log(all.join());

      Object.keys(items).map(function(element){
          try {
            let get = items[element].classList.item(items[element].classList.length-1)

            console.log(dataOnMap.find(item => {
                items[element].setAttribute("title", `<span>${item.city}</span><br/><span>فعال : ${item.active ? item.active : "اطلاعات موجود نیست"}</span><br/><span>غیر فعال : ${item.deactive ? item.deactive : "اطلاعات موجود نیست"}</span>`)
                return item.city == get
            }))
          } catch (e) {
        // comment for Dont show Error Classlist Item
          }
        

    })
})
    function resposive() {
        var height = $('#IranMap .list').height();
        var width = $('#IranMap .list').width();
        if (height > width) {
            $('#IranMap svg').height(width).width(width);
        } else {
            $('#IranMap svg').height(height).width(height);
        }
    }
    resposive();

});