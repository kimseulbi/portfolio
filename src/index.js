import "@babel/polyfill";

const templates = {
  main: document.querySelector("#main").content,
  baeminchan: document.querySelector("#baeminchan").content,
  baemin: document.querySelector("#baemin").content,
  baseball: document.querySelector("#baseball").content,
  colorChallenge: document.querySelector("#colorChallenge").content,
  focs: document.querySelector("#focs").content,
  nav: document.querySelector("#navigation").content
};

const rootEl = document.querySelector(".container");
const logoEl = document.querySelector(".logo");
const navEl = document.querySelector(".navigation");
let counter = 0;

// 로고를 누르면 첫페이지로 이동
logoEl.addEventListener("popstate", e => {
  window.history.pushState(counter, "", "");
  drawMainPage();
});

// 메인페이지
async function drawMainPage() {
  // 1. 템플릿 복사
  const frag1 = document.importNode(templates.nav, true);
  const frag2 = document.importNode(templates.main, true);
  // 2. 요소 선택
  const baeminchanImgEl = frag2.querySelector(".protfo__img--baeminchan");
  const baeminImgEl = frag2.querySelector(".protfo__img--baemin");
  const baseballImgEl = frag2.querySelector(".protfo__img--baseball");
  const colorChallengeImgEl = frag2.querySelector(".protfo__img--rgb");
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
  // 5. 이벤트 리스너 등록하기
  baeminchanImgEl.addEventListener("click", e => {
    history.pushState(counter++, "", "baeminchan");
    drawBaeminchanPage();
  });
  baeminImgEl.addEventListener("click", e => {
    history.pushState(counter++, "", "baemin");
    drawBaeminPage();
  });
  baseballImgEl.addEventListener("click", e => {
    history.pushState(counter++, "", "baseball");
    drawBaseballPage();
  });
  colorChallengeImgEl.addEventListener("click", e => {
    history.pushState(counter++, "", "colorChallenge");
    drawColorChallengePage();
  });

  // 6. 템플릿을 문서에 삽입
  navEl.textContent = "";
  rootEl.textContent = "";
  navEl.appendChild(frag1);
  rootEl.appendChild(frag2);
}

// 배민찬 서브페이지
async function drawBaeminchanPage() {
  // 1. 템플릿 복사
  const frag1 = document.importNode(templates.nav, false);
  const frag2 = document.importNode(templates.baeminchan, true);
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
  // 6. 템플릿을 문서에 삽입
  navEl.textContent = "";
  rootEl.textContent = "";
  navEl.appendChild(frag1);
  rootEl.appendChild(frag2);
}

// 배민문방구 서브페이지
async function drawBaeminPage() {
  // 1. 템플릿 복사
  const frag1 = document.importNode(templates.nav, false);
  const frag2 = document.importNode(templates.baemin, true);
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
  // 6. 템플릿을 문서에 삽입
  navEl.textContent = "";
  rootEl.textContent = "";
  navEl.appendChild(frag1);
  rootEl.appendChild(frag2);
}

// 숫자야구 서브페이지
async function drawBaseballPage() {
  // 1. 템플릿 복사
  const frag1 = document.importNode(templates.nav, false);
  const frag2 = document.importNode(templates.baseball, true);
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
  // 6. 템플릿을 문서에 삽입
  navEl.textContent = "";
  rootEl.textContent = "";
  navEl.appendChild(frag1);
  rootEl.appendChild(frag2);
}

// RGB Challenge 서브페이지
async function drawColorChallengePage() {
  // 1. 템플릿 복사
  const frag1 = document.importNode(templates.nav, false);
  const frag2 = document.importNode(templates.colorChallenge, true);
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
  // 6. 템플릿을 문서에 삽입
  navEl.textContent = "";
  rootEl.textContent = "";
  navEl.appendChild(frag1);
  rootEl.appendChild(frag2);
}

window.addEventListener("popstate", e => {
  history.pushState(counter, "", "");
  drawMainPage();
});

drawMainPage();
