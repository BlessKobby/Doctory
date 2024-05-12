/* THis script shall open a menu in landing page*/
function openPage(pageName, elmnt, color) {
	    var i, tabcontent, tablinks;
	    /*this shall get us a lst of all the elements with the class name tabcontent*/
	    tabcontent = document.getElementsByClassName("tabcontent");
	    for (i = 0; i < tabcontent.length; i++) {
		          /*This shall make buttons hidden by default*/
		          tabcontent[i].style.display = "none";
		        }
	  
	    tablinks = document.getElementsByClassName("tablink");
	    for (i = 0; i < tablinks.length; i++) {
		          /*This shall make the buttons have no color by default*/
		          tablinks[i].style.backgroundColor = "";
		        }
	     /*this shall make the page open when clicked by making it visible*/
	    document.getElementById(pageName).style.display = "block";
	  
	    elmnt.style.backgroundColor = color;
	  }
  /*This shall make a page default open when opening */
  document.getElementById("defaultOpen").click();
