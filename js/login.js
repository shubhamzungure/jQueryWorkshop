$(document).ready(function(){
  $("#log").click(function(){
    console.log("Enter credentials..")
    $.ajax({
      url: "http://localhost:3000/user",
      method:"GET", 
      success: (x=>{
          console.log("Data=>",x);
      })
      
    });
  });
});

console.log("Data=>",x);
        
//         $("span#id1").append(x.data.first_name+ " "
//         +x.data.last_name);
//         $("span#id2").append(x.data.email);
//         var img=x.data.avatar;
//         var drawimg="<img src='"+img+ "'/>";
//         $("div#img").append(drawimg)
//     },
//     error:(e)=>{
//         alert("Error: "+e)
//     },
//     complete:()=>{
//         alert("Call is completed");