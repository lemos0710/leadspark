// ===== SCROLL SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const alvo = document.querySelector(this.getAttribute("href"));
    alvo.scrollIntoView({ behavior: "smooth" });
  });
});

// ===== FORMULÁRIO → WHATSAPP =====
document.getElementById("form-agendar").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const tel = document.getElementById("telefone").value;
  const pet = document.getElementById("pet").value;
  const serv = document.getElementById("servico").value;

  const msg =
    `Olá! Quero agendar um serviço na PetCare Premium:%0A` +
    `Nome: ${nome}%0A` +
    `Telefone: ${tel}%0A` +
    `Pet: ${pet}%0A` +
    `Serviço: ${serv}`;

  // altere o número aqui ⇒ coloque o número real da PetCare
  window.open(`https://wa.me/5511999999999?text=${msg}`, "_blank");

  console.log("Formulário enviado!");
});
// ===== MENU MOBILE =====
const btnMobile = document.getElementById("btn-mobile");
const menu = document.getElementById("menu");

btnMobile.addEventListener("click", () => {
  const isActive = menu.classList.toggle("active");
  btnMobile.setAttribute("aria-expanded", String(isActive));
});
