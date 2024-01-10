function adoptAcat (color , name ){
    return  {
color : color ,
name:name ,
tiredness:0,  
happiness:100, 
hunger:0,
feed:feed,
play:play,
sleep:sleep,
ignore:ignore,
modifyName:modifyName

    }

}



var feed  = function() {
    if (this.hunger===0) {
        $(".mytext").html("i am not hungry ")
        $("#img1").attr("src", "/img/fed black cat.jpg")

    }
    else {
        this.hunger = this.hunger - 10 
        
        
        $(".mytext").html("mmm ty for feeding me ")
        $("#img1").attr("src", "/img/cat eating.jpg")
    }
}


var play =  function (){
    if (this.tiredness===100 ) {
        $(".mytext").html("i am too tired i can't play anymore ")    
        $("#img1").attr("src", "/img/tiredCat.jpg")
    }
    else {
        
        this.tiredness = this.tiredness + 10
        
        this.hunger  = this.hunger + 10 
        $(".mytext").html("meowww this is so fun " )
        $("#img1").attr("src", "/img/playing cat.webp")               
    }
    
}

var sleep = function sleep() {
    
   
      this.tiredness = 0
         
         this.happiness = 100
         $(".mytext").html("ty  had enough sleep ")
         $("#img1").attr("src", "/img/plant.jpg")
    
}

var ignore =  function ignore(){
 if (this.happiness===0 || this.hunger===100 ){
    $(".mytext").html("you are not a good master bye")    
    $("#img1").attr("src", "/img/sad.jpg")
 }

    else{
      this.hunger = this.hunger + 10 
      this.happiness = this.happiness - 10 
    }
}

var modifyName = function modifyName (name) {
    this.name = name 
    
}

  $("#instance").on("click",function(){
    $(".myImage").html('<img id="img1" src="/img/png blackl.jpg" />')

   
}) ;

var cat1
var catName
var catColor

 function instance(){
    
    cat1=adoptAcat(catName,catColor)
 }

 

 $("#click").on("click",function(){
     catName = $('#name').val()
    console.log(catName)
 })

 $("#click2").on("click",function(){
    catColor = $('#color').val()
    console.log(catColor)
 })

 //<img class='img1' src='/img/png blackl.jpg' alt='cat'>
 



 































