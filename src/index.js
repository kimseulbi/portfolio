import "@babel/polyfill";

const templates = {
  main: document.querySelector("#main").content
};
const rootEl = document.querySelector(".container");
const logoEl = document.querySelector(".logo");

// 로고를 누르면 첫페이지로 이동
logoEl.addEventListener("click", e => {
  e.preventDefault();
  drawMainPage();
});

// 메인페이지
async function drawMainPage() {
  // 1. 템플릿 복사
  const frag = document.importNode(templates.main, true);
  rootEl.textContent = "";
  rootEl.appendChild(frag);
}
drawMainPage();
