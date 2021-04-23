
//Here i dispalyed div1 
//Show and hide 1
document.getElementById("btn2").addEventListener("click",function(){
    var Album = document.getElementById("div1");
 if(div1.style.display == "none"){
     div1.style.display = "block";

 }else{
    div1.style.display = "none";
 }
   
 
})

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 2000;	// Time Between Switch
        
    // Image List
    images[0] = "img1.jpeg";
    images[1] = "img2.jpeg";
    images[2] = "img3.jpeg";
    images[3] = "img4.jpeg";
    images[4] = "img5.jpeg";
    images[5] = "img6.jpeg";
    
    
    // Change Image
    function changeImg(){
        document.slide.src = images[i];
    
        // Check If Index Is Under Max
        if(i < images.length - 1){
          // Add 1 to Index
          i++; 
        } else { 
            // Reset Back To O
            i = 0;
        }
    
        // Run function every x seconds
        setTimeout("changeImg()", time);
    }
    
    // Run function when page loads
    window.onload=changeImg



//Here is the second display
//show and hide2

var Button1 = document.getElementById("btn1");
var div2 = document.getElementById("box1");

Button1.addEventListener("click",function(){
    if(div2.style.display == "none"){
        div2.style.display = "block";
    }else{
        div2.style.display = "none";
    }
})
   
       


   
    
  








