import "@babel/polyfill";

const templates = {
  main: document.querySelector("#main").content,
  baeminchan: document.querySelector("#baeminchan").content,
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
  // 5. 이벤트 리스너 등록하기
  baeminchanImgEl.addEventListener("click", e => {
    drawBaeminchanPage();
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
  // 6. 템플릿을 문서에 삽입
  navEl.textContent = "";
  rootEl.textContent = "";
  navEl.appendChild(frag1);
  rootEl.appendChild(frag2);
}

drawMainPage();
