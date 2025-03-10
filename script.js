const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

console.log(teamMembers);

// ELEMENTO HTML
const teamCard = document.querySelector(".container");

addHtml(teamCard, teamMembers);

//FUNZIONE ELEMENTO
function addHtml(card, info) {

  let items = "";

  //console.log(items)
  for (let n = 0; n < info.length; n++) {

    const newCard = info[n];

    items += infoItems(newCard);

    // console.log(newCard);
  }

  card.innerHTML = items;

  //console.log(info);
}
function infoItems(object) {
  return ` <div class="card">
  <img src="img/male1.png" alt="img-designer">
  <div class="info-card">
      <h4>Marco Bianchi</h4>
      <h5>Designer</h5>
      <a href="#">marcobianchi@team.com</a>
  </div>
</div>`
}



