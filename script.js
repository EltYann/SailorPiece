const totalMinggu = 14;

const siswa = [

  {
    nama: "Abilah",
    role: "CEO",
    pembayaran: {
      M1: "03/03/2026",
      M2: "03/03/2026"
    }
  },

  {
    nama: "Ade Novryan",
    role: "Member",
    pembayaran: {}
  },

  {
    nama: "Afdhal Batista Dimas Prayoga",
    role: "CEO",
    pembayaran: {
      M1: "06/04/2026",
      M2: "06/04/2026"
    }
  }

];

const headerRow =
  document.getElementById("headerRow");

const tableBody =
  document.getElementById("dataKas");

/* HEADER */

for(let i=1;i<=totalMinggu;i++){

  headerRow.innerHTML += `
    <th>M${i}</th>
  `;
}

/* BADGE */

function getBadge(role){

  if(role==="CEO")
    return '<span class="badge">👑 CEO</span>';

  if(role==="Tuan")
    return '<span class="badge">💧 Tuan Muda</span>';

  if(role==="Nona")
    return '<span class="badge">🌸 Nona Muda</span>';

  if(role==="Developer")
    return '<span class="badge">👁 Developer</span>';

  return '<span class="badge">🍃</span>';
}

/* RENDER TABLE */

function renderTable(){

  tableBody.innerHTML = "";

  siswa.forEach(s=>{

    let specialClass =
      s.role !== "Member"
      ? "special"
      : "";

    let row = `
      <tr class="${s.role}">
        <td class="nama ${specialClass}">
          ${s.nama}
          ${getBadge(s.role)}
        </td>
    `;

    for(let i=1;i<=totalMinggu;i++){

      const mingguKey = "M"+i;

      const tanggal =
        s.pembayaran[mingguKey] || "";

      /* SUDAH BAYAR */

      if(tanggal){

        row += `
        <td>

          <input
            type="checkbox"
            checked
          >

          <br>

          ${tanggal}

        </td>
        `;
      }

      /* BELUM BAYAR */

      else{

        row += `
        <td>

          <input
            type="checkbox"

            onchange="
              bayar(
                '${s.nama}',
                '${mingguKey}'
              )
            "
          >

        </td>
        `;
      }
    }

    row += "</tr>";

    tableBody.innerHTML += row;
  });
}

/* BAYAR */

function bayar(nama,minggu){

  const today =
    new Date();

  const tanggal =
    today.toLocaleDateString("id-ID");

  siswa.forEach(s=>{

    if(s.nama===nama){

      s.pembayaran[minggu] =
        tanggal;
    }
  });

  renderTable();
}

/* LOAD */

renderTable();

/* BACKGROUND */

function setBackgroundByTime(){

  const hour =
    new Date().getHours();

  const body =
    document.body;

  body.classList.remove(
    "bg-pagi",
    "bg-siang",
    "bg-malam"
  );

  if(hour>=6 && hour<12){

    body.classList.add(
      "bg-pagi"
    );
  }

  else if(hour>=12 && hour<18){

    body.classList.add(
      "bg-siang"
    );
  }

  else{

    body.classList.add(
      "bg-malam"
    );
  }
}

setBackgroundByTime();

/* SKY */

const sun =
  document.querySelector(".sun");

const moon =
  document.querySelector(".moon");

const starsContainer =
  document.querySelector(".stars");

function updateSky(){

  const hour =
    new Date().getHours();

  if(hour>=6 && hour<18){

    sun.style.opacity = 1;

    moon.style.opacity = 0;

    starsContainer.innerHTML = "";
  }

  else{

    sun.style.opacity = 0;

    moon.style.opacity = 1;

    createStars();
  }
}

updateSky();

/* STARS */

function createStars(){

  starsContainer.innerHTML = "";

  for(let i=0;i<80;i++){

    const star =
      document.createElement("div");

    star.classList.add("star");

    star.style.top =
      Math.random()*100+"%";

    star.style.left =
      Math.random()*100+"%";

    star.style.animationDuration =
      (1+Math.random()*2)+"s";

    starsContainer.appendChild(star);
  }
}

/* SHOOTING STAR */

function shootingStar(){

  const star =
    document.createElement("div");

  star.classList.add("shooting");

  star.style.top =
    Math.random()*50+"%";

  star.style.left =
    Math.random()*50+"%";

  starsContainer.appendChild(star);

  setTimeout(()=>{

    star.remove();

  },1000);
}

setInterval(()=>{

  const hour =
    new Date().getHours();

  if(hour>=18 || hour<6){

    shootingStar();
  }

},5000);
