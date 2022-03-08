document.addEventListener("DOMContentLoaded", function(event) { 

    const navBurger = document.querySelector(".open-menu");
    const navList = document.querySelector(".nav-list");

    const burgerIcon = document.getElementById("burgerIcon");

    navBurger.onclick = function(){
        openCloseMenu();
    }

    function openCloseMenu() {
        if(navList.style.display === 'flex') {
            navList.style.display = 'none';
            burgerIcon.className = "fa-solid fa-bars open-menu";
        } else {
            burgerIcon.className = "fa-solid fa-xmark close-menu";
            navList.style.display = 'flex';
        }
      }
});

async function getData(){
    const images = await fetch("https://techi.envivent.com/images.json").then(result => result.json())
    const names = await fetch("https://techi.envivent.com/names.json").then(result => result.json())
    const descriptions = await fetch("https://techi.envivent.com/description.json").then(result => result.json())
     
    return {
      images,
      names,
      descriptions
    }
  }
  
  async function populate(){
     const data = await getData()
     const teamMembersElement = document.querySelector(".team-members")
     const dataLength = data.descriptions.employees.length;
     const randomNumbers = [
       parseInt(Math.random() * dataLength),
       parseInt(Math.random() * dataLength),
       parseInt(Math.random() * dataLength),
     ]
    
      randomNumbers.forEach((numeroRandomico)=>{
        const nameObj = data.names.employees[numeroRandomico]
        const image = data.images.employees[numeroRandomico]
        const description = data.descriptions.employees[numeroRandomico]
        
        const finalURL = `${data.images['images-folder']}${image.full}`
        
        teamMembersElement.innerHTML += `
        <div class="member-card">
            <div class="card-header">
            <img src="${finalURL}" alt="${nameObj.first_name} ${nameObj.last_name} Avatar">

                <div class="member-info-header">
                <h2>${nameObj.first_name} ${nameObj.last_name}</h2>
                <h3>${description.title}</h3>
                </div>
            </div>
            <div class="member-info">
                <p>
                    ${description.description}
                </p>
            </div>
        </div>
       `
      })
  }
  
  populate()