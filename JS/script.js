// JS for see more btn 


let btn = document.getElementById("seemorebtn");
let seemore = document.getElementById("seemore");
let isVisible = false;

let content = `
At Hermain Builders, every project begins with a commitment to quality, transparency, and long-term value. From residential communities to state-of-the-art commercial developments, our expert team ensures meticulous planning, modern architecture, and timely execution. <br><br>
We prioritize client satisfaction by offering tailored solutions, utilizing premium materials, and staying ahead with sustainable and smart-building practices. Our legacy is not just in the buildings we construct, but in the trust we build with every client and partner. <br><br>
Whether you're investing, buying your dream home, or expanding your business footprint — Hermain Builders delivers unmatched reliability, modern aesthetics, and enduring value.
`;


function seemorecontent() {
  if (!isVisible) {
    seemore.innerHTML = content;
    btn.innerHTML = "See Less";
    isVisible = true;
  } else {
    seemore.innerHTML = "";
    btn.innerHTML = "See More";
    isVisible = false;
  }
}

