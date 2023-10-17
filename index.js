// JavaScript code
let burger = document.getElementById('burger-icon');
let burgerLinks = document.getElementById('navlinks');
let burgerCounter = 0; // Initialize burgerCounter to 0


//Show and hide navlink

function burgerClick() {


    if (burgerCounter % 2 === 0) {
        burger.style.transform = 'rotate(90deg)';
        burgerLinks.style.display = 'block';
        //transition effect after displaying the element
        setTimeout(() => {
            burgerLinks.style.opacity = '1';
            burgerLinks.style.height = 'auto'; // Set height to 'auto' for content to expand
        }, 10); 
    } else {
        burger.style.transform = 'rotate(0deg)';
        burgerLinks.style.opacity = '0';
        burgerLinks.style.height = '0'; // Set height to 0 to collapse the content
        //  hide the element after the animation
        setTimeout(() => {
            burgerLinks.style.display = 'none';
        }, 300); 
    }
    burger.style.transition = 'all ease 0.3s';
    burgerCounter++;
}

// Function to show nav when width gets expanded
function showNav() {

    if (innerWidth > 768) {
        burgerLinks.style.display = 'block';
        burgerLinks.style.opacity = '1';
        burgerLinks.style.height = 'auto';
    } else if(innerWidth<=768 && burgerCounter%2==0) {
        burgerLinks.style.display = 'none';
        burgerLinks.style.opacity = '0';
        burgerLinks.style.height = '0';
    }
}


setInterval(showNav, 100);


//send email via emailjs
function sendEmail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_o7t1e5b";
    const templateID = "template_9kod0os";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!! Please expect a reply soon");
  
      })
      .catch(err=>console.log(err));
  
  }


  //lets user confirm before downloading

  function confirmDownload() {
    var downloadConfirmed = confirm("Clicking this button will initiate a download. Do you want to proceed?");
    if (downloadConfirmed) {
      var downloadLink = document.getElementById('downloadLink');
      downloadLink.href = "resume.pdf";
      downloadLink.click();
    }
    else{
        console.log('False');
    }
  }


//onscroll
window.onscroll = function() {bannerScroll(); profileScroll()};

function bannerScroll() {
  if (document.documentElement.scrollTop > 5) {
    document.getElementById("hero-banner").style.filter = "brightness(0.5)";
  } else {
    document.getElementById("hero-banner").style.filter = "brightness(1)";
  }
}



function profileScroll() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("About-Me").style.backgroundColor = 'rgb(250, 250, 151)';
    document.getElementById("profile").style.transform = "scale(1.05)";
    

  }
  

    else {
    document.getElementById("About-Me").style.backgroundColor = "white";
    document.getElementById("profile").style.transform = "scale(1.00)"
  }
}
