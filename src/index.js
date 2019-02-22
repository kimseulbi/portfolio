import "@babel/polyfill";

const templates = {
  main: document.querySelector("#main").content,
  baeminchan: document.querySelector("#baeminchan").content,
  baemin: document.querySelector("#baemin").content,
  baseball: document.querySelector("#baseball").content,
  colorChallenge: document.querySelector("#colorChallenge").content,
  nav: document.querySelector("#navigation").content
};

const rootEl = document.querySelector(".container");
const logoEl = document.querySelector(".logo");
const navEl = document.querySelector(".navigation");

// 로고를 누르면 첫페이지로 이동
logoEl.addEventListener("click", e => {
  e.preventDefault();
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
  window.history.pushState({ data: "" }, "", "");
  // 5. 이벤트 리스너 등록하기
  baeminchanImgEl.addEventListener("click", e => {
    window.history.pushState({ data: "baeminchan" }, "", "/baeminchan");
    drawBaeminchanPage();
  });
  baeminImgEl.addEventListener("click", e => {
    window.history.pushState({ data: "baemin" }, "", "/storeBaemin");
    drawBaeminPage();
  });
  baseballImgEl.addEventListener("click", e => {
    window.history.pushState({ data: "baseball" }, "", "/baseball");
    drawBaseballPage();
  });
  colorChallengeImgEl.addEventListener("click", e => {
    window.history.pushState({ data: "colorchallenge" }, "", "/colorChallenge");
    drawColorChallengePage();
  });

  // const imgCoverEl = protfoImgEl.querySelector(".img-cover");

  // 프로젝트 이미지 호버시 버튼 출력
  // protfoImgEl.addEventListener("mouseover", function() {
  //   imgCoverEl.style.opacity = "1";
  // });
  // protfoImgEl.addEventListener("mouseleave", function() {
  //   imgCoverEl.style.opacity = "0";
  // });

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
  // // // 2. 요소 선택
  // const btnBackEl = frag2.querySelector(".btn__back");
  // // 5. 이벤트 리스너 등록하기
  // btnBackEl.addEventListener("click", e => {
  //   window.history.go(-1);
  // });
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

drawMainPage();
