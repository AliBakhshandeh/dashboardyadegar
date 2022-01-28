/*
 * Iran Map - SVG and Responsive.
 * Free and open source.
 * Version 1.1.0
 * By: MohammadReza Pourmohammad.
 * Email: mohammadrpm@gmail.com
 * Web: http://mrpm.ir
 */ 
var dataOnmap = [
    {city : "iran", active: 1, deactive: 2},
    {city : "alborz", active: 1, deactive: 2},
    {city : "ardabil", active: 1, deactive: 2},
    {city : "azerbaijan-east", active: 1, deactive: 2},
    {city :  "azerbaijan-west", active: 1, deactive: 2},
    {city : "chahar-mahaal-bakhtiari", active: 1, deactive: 2},
    {city : "gilan", active: 1, deactive: 2},
    {city : "golestan", active: 1, deactive: 2},
    {city : "hamadan", active: 1, deactive: 2},
    {city : "hormozgan", active: 1, deactive: 2},
    {city : "ilam", active: 1, deactive: 2},
    {city : "isfahan", active: 1, deactive: 2},
    {city : "kerman", active: 1, deactive: 2},
    {city : "kermanshah", active: 1, deactive: 2},
    {city : "khorasan-north", active: 1, deactive: 2},
    {city : "khorasan-razavi", active: 1, deactive: 2},
    {city : "khorasan-south", active: 1, deactive: 2},
    {city : "khuzestan", active: 1, deactive: 2},
    {city : "kohgiluyeh-boyer-ahmad", active: 1, deactive: 2},
    {city : "kurdistan", active: 1, deactive: 2},
    {city : "lorestan", active: 1, deactive: 2},
    {city : "markazi", active: 1, deactive: 2},
    {city : "mazandaran", active: 1, deactive: 2},
    {city : "qazvin", active: 1, deactive: 2},
    {city : "qom", active: 1, deactive: 2},
    {city : "semnan", active: 1, deactive: 2},
    {city : "sistan-baluchestan", active: 1, deactive: 2},
    {city : "tehran", active: 10, deactive: 2},
    {city : "yazd", active: 1, deactive: 2},
    {city : "zanjan", active: 1, deactive: 2},
    {city : "caspian", active: 1, deactive: 2},
    {city : "persian-gulf", active: 1, deactive: 2},
    {city : "jazmourian", active: 1, deactive: 2},
    {city : "urmia", active: 1, deactive: 2},
    {city : "abu-musa", active: 1, deactive: 2},
    {city : "faror-big", active: 1, deactive: 2},
    {city : "faror-small", active: 1, deactive: 2},
    {city : "hendorabi", active: 1, deactive: 2},
    {city : "hengam", active: 1, deactive: 2},
    {city : "hormoz", active: 1, deactive: 2},
    {city : "khark", active: 1, deactive: 2},
    {city : "kish", active: 1, deactive: 2},
    {city : "lark", active: 1, deactive: 2},
    {city : "lavan", active: 1, deactive: 2},
    {city : "qeshm", active: 1, deactive: 2},
    {city : "siri", active: 1, deactive: 2},
    {city : "tunb-big", active: 1, deactive: 2},
    {city : "tunb-small", active: 1, deactive: 2},
]
$(function() {

    $(window).resize(function() {
        resposive();
    });
    var list = []
$(function(){
    var items = $('#IranMap svg g path')
    Object.keys(items).map(function(element) {
        try{
            items[element].setAttribute("data-toggle", "tooltip")
            items[element].setAttribute("data-placement", "top")
            items[element].setAttribute("data-html", "true")
           
    
        }catch(e){
            // comment
        }
      });
      Object.keys(items).map(function(element){
          try {
            let get = items[element].classList.item(items[element].classList.length-1)

            console.log(dataOnmap.find(item => {
                items[element].setAttribute("title", `<span>فعال : ${item.active ? item.active : "اطلاعات موجود نیست"}</span><br/><span>غیر فعال : ${item.deactive ? item.deactive : "اطلاعات موجود نیست"}</span>`)
                return item.city == get
            }))
          } catch (e) {
            // comment

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