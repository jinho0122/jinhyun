const CATEGORIES = [
  { id: "all", name: "All Devices", icon: "grid-3x3" },
  { id: "video", name: "Video", icon: "monitor-play" },
  { id: "3d", name: "3D", icon: "box" },
  { id: "creative", name: "Creative", icon: "pen-tool" },
  { id: "audio", name: "Audio", icon: "mic-2" },
  { id: "gaming", name: "Gaming", icon: "keyboard" },
];

const DEVICES = [
  {
    id: 1,
    name: "DaVinci Resolve Micro Panel",
    brand: "Blackmagic Design",
    category: "video",
    price: "$895",

    image: "./img/d1.jpg",
    description:
      "색보정 전문가를 위한 컴팩트 패널. 3개의 고해상도 트랙볼과 12개의 정밀 노브로 마우스로는 불가능한 섬세한 동시 제어를 경험하세요.",
    features: [
      "3개의 정밀 트랙볼",
      "12개의 기본 보정 노브",
      "USB-C 연결",
      "메탈 가공 바디",
    ],
    target: "전문 컬러리스트, 영상 편집자",
    siteUrl:
      "https://www.blackmagicdesign.com/kr/products/davinciresolve/panels",
  },
  {
    id: 2,
    name: "Loupedeck CT",
    brand: "Loupedeck",
    category: "video",
    price: "$549",
    image: "./img/d2.png",
    description:
      "프리미엄 편집 콘솔의 정점. 커다란 메인 휠과 터치 스크린 버튼, 물리 다이얼의 완벽한 조화로 컷 편집 속도를 혁신합니다.",
    features: [
      "메인 컨트롤 휠",
      "터치스크린 버튼",
      "알루미늄 바디",
      "다양한 SW 프로필",
    ],
    target: "영상 편집 전문가, 방송인",
    siteUrl: "https://loupedeck.com/products/loupedeck-ct/",
  },
  {
    id: 3,
    name: "Tangent Ripple",
    brand: "Tangent",
    category: "video",
    price: "$350",
    image: "./img/d3.png",
    description:
      "입문용 컬러 그레이딩 패널. 꼭 필요한 3개의 트랙볼만 남겨 휴대성을 극대화했으며, 프리랜서 컬러리스트에게 최적의 솔루션을 제공합니다.",
    features: [
      "3개의 트래커볼",
      "컴팩트한 디자인",
      "USB 파워",
      "광범위한 호환성",
    ],
    target: "프리랜서 컬러리스트, DIT",
    siteUrl: "https://www.tangentwave.co.uk/product/ripple/",
  },
  {
    id: 4,
    name: "SpaceMouse Enterprise",
    brand: "3Dconnexion",
    category: "3d",
    price: "$399",
    image: "./img/d4.png",
    description:
      "3D 공간에서의 자유로운 탐색을 위한 6축 센서 마우스. 왼손으로 모델을 회전하고 오른손으로 편집하는 양손 워크플로우의 핵심입니다.",
    features: [
      "6자유도(6DoF) 센서",
      "31개의 프로그래밍 버튼",
      "컬러 LCD 디스플레이",
      "인체공학적 손목 받침대",
    ],
    target: "CAD 엔지니어, 3D 모델러, 건축가",
    siteUrl: "https://3dconnexion.com/kr/product/spacemouse-enterprise/",
  },
  {
    id: 5,
    name: "TourBox Elite",
    brand: "TourBox",
    category: "creative",
    price: "$268",
    image: "./img/d5.png",
    description:
      "디지털 크리에이터를 위한 한 손 컨트롤러. 노브, 스크롤, 다이얼의 조합으로 브러시 크기 조절, 줌인/아웃을 직관적으로 수행합니다.",
    features: [
      "듀얼 채널 블루투스",
      "햅틱 피드백",
      "완벽한 커스터마이징",
      "Photoshop/Lightroom 최적화",
    ],
    target: "일러스트레이터, 사진 작가",
    siteUrl: "https://www.tourboxtech.com/kr/tourbox-elite/",
  },
  {
    id: 6,
    name: "Monogram Creative Console",
    brand: "Monogram",
    category: "creative",
    price: "$400+",
    image: "./img/d6.png",
    description:
      "자석으로 연결되는 모듈형 컨트롤러. 슬라이더, 다이얼, 버튼 모듈을 사용자가 원하는 대로 조합하여 나만의 콘솔을 구성할 수 있습니다.",
    features: [
      "모듈형 마그네틱 연결",
      "고정밀 다이얼",
      "Adobe CC 기본 통합",
      "프리미엄 마감",
    ],
    target: "음악 프로듀서, 영상/사진 편집자",
    siteUrl: "https://monogramcc.com/",
  },
  {
    id: 7,
    name: "Azeron Cyborg",
    brand: "Azeron",
    category: "gaming",
    price: "$199",
    image: "./img/d7.png",
    description:
      "기존 키보드 WASD의 한계를 넘는 인체공학 게이밍 키패드. 각 손가락에 할당된 스위치와 엄지 조이스틱으로 이동과 스킬 사용을 동시에 수행합니다.",
    features: [
      "29개 프로그래밍 키",
      "아날로그 썸스틱",
      "3D 프린팅 맞춤 제작",
      "기계식 스위치",
    ],
    target: "하드코어 게이머, MMORPG/FPS 유저",
    siteUrl: "https://www.azeron.eu/",
  },
  {
    id: 8,
    name: "CharaChorder One",
    brand: "CharaChorder",
    category: "gaming",
    price: "$249",
    image: "./img/d8.png",
    description:
      "입력의 패러다임을 바꾸는 코드(Chord) 입력 장치. 개별 글자가 아닌 단어 전체를 화음처럼 동시에 입력하여 경이로운 타이핑 속도를 제공합니다.",
    features: [
      "3D 모션 스위치",
      "코드(Chord) 입력 방식",
      "유체적 텍스트 입력",
      "완벽한 양손 분리",
    ],
    target: "속기사, 초고속 코딩 개발자",
    siteUrl: "https://www.charachorder.com/",
  },
  {
    id: 9,
    name: "ZSA Moonlander",
    brand: "ZSA",
    category: "gaming",
    price: "$365",
    image: "./img/d9.png",
    description:
      "인체공학의 정점에 있는 분리형 기계식 키보드. 사용자의 어깨 너비에 맞춰 배치할 수 있으며, 엄지 클러스터 모듈이 생산성을 극대화합니다.",
    features: [
      "좌우 완전 분리형",
      "틸트/텐트 조절",
      "엄지 클러스터",
      "핫스왑 스위치",
    ],
    target: "개발자, 작가, 터널증후군 예방",
    siteUrl: "https://www.zsa.io/moonlander/",
  },
  {
    id: 10,
    name: "Stream Deck Pedal",
    brand: "Elgato",
    category: "audio",
    price: "$89",
    image: "./img/d10.png",
    description:
      "손이 자유롭지 않을 때 발로 컨트롤하는 3개의 페달. 게임 중 마이크 음소거, 장면 전환, 스크린샷 캡처 등을 발끝으로 제어하세요.",
    features: [
      "3개의 커스텀 페달",
      "미끄럼 방지 설계",
      "강력한 매크로 지원",
      "견고한 내구성",
    ],
    target: "스트리머, 악기 연주자, 크리에이터",
    siteUrl: "https://www.elgato.com/kr/ko/p/stream-deck-pedal",
  },
  {
    id: 11,
    name: "Behringer X-Touch",
    brand: "Behringer",
    category: "audio",
    price: "$400~",
    image: "./img/d11.png",
    description:
      "DAW 제어를 위한 유니버설 컨트롤 서페이스. 9개의 터치 감지 모터 페이더가 화면의 볼륨 값에 따라 물리적으로 움직이며 직관적인 믹싱을 돕습니다.",
    features: [
      "9개 모터 페이더",
      "LCD 스크리블 스트립",
      "이더넷/USB 연결",
      "조그 휠",
    ],
    target: "음악 프로듀서, 사운드 엔지니어",
    siteUrl: "https://www.behringer.com/product.html?modelCode=P0B1X",
  },
];

let activeCategory = "all";
let activeId = 1;
let isMobileMenuOpen = false;

document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderDevices();
  setupMobileMenu();
  setupIntersectionObserver();

  lucide.createIcons();
});

function renderCategories() {
  const sidebarGrid = document.getElementById("category-grid");
  const mobileGrid = document.getElementById("mobile-category-grid");

  const createBtn = (cat, isMobile) => `
        <button 
            onclick="setCategory('${cat.id}')"
            class="flex flex-col items-center justify-center p-3 rounded-lg text-xs font-medium transition-all duration-300 border border-transparent
            ${
              activeCategory === cat.id
                ? "active-category"
                : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border-white/10"
            }"
        >
            <i data-lucide="${cat.icon}" width="14" height="14"></i>
            <span class="mt-1">${cat.name}</span>
        </button>
    `;

  sidebarGrid.innerHTML = CATEGORIES.map((cat) => createBtn(cat, false)).join(
    ""
  );
  mobileGrid.innerHTML = CATEGORIES.map((cat) => createBtn(cat, true)).join("");

  lucide.createIcons();
}

function renderDeviceList() {
  const listContainer = document.getElementById("device-list");
  const mobileListContainer = document.getElementById("mobile-device-list");

  const filtered = filterDevices();

  listContainer.innerHTML = filtered
    .map(
      (device) => `
        <button
            onclick="scrollToDevice(${device.id})"
            class="w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-300
            ${
              activeId === device.id
                ? "active-device"
                : "text-slate-500 hover:text-white hover:bg-white/5 border-l-2 border-transparent"
            }"
        >
            <div class="truncate">${device.name}</div>
        </button>
    `
    )
    .join("");

  mobileListContainer.innerHTML = filtered
    .map(
      (device) => `
        <button
            onclick="scrollToDevice(${device.id})"
            class="w-full text-left p-4 bg-white/5 rounded-xl border border-white/5 text-slate-300 font-medium hover:bg-white/10"
        >
            ${device.name}
        </button>
    `
    )
    .join("");
}

function renderDevices() {
  const container = document.getElementById("devices-container");
  const filtered = filterDevices();

  container.innerHTML = filtered
    .map(
      (device) => `
        <section 
            id="device-${device.id}"
            class="relative w-full md:min-h-screen flex items-center justify-center md:items-end md:justify-start group overflow-hidden border-b border-white/5 py-24 px-4 md:p-0"
        >
            <!-- Background: PC/Mobile 공통 (이미지 설정 유지) -->
            <div class="absolute inset-0 z-0 bg-slate-950">
                <img 
                    src="${device.image}" 
                    alt="${device.name}" 
                    class="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-100 brightness-110 contrast-125 saturate-150" 
                    loading="lazy"
                />
                <!-- 배경 그라데이션 -->
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-slate-950/80 md:from-slate-950/40 md:via-transparent md:to-transparent"></div>
            </div>

            <!-- Content Container -->
            <div class="relative z-10 w-full max-w-7xl md:px-12 md:pb-24">
                
                <!-- 
                    [Card Container]
                    Mobile: max-w-md mx-auto (중앙 정렬 카드), 내부 패딩 축소
                    Desktop: max-w-3xl (좌측 정렬 패널), 기존 스타일 유지
                -->
                <div class="w-full max-w-md mx-auto md:mx-0 md:max-w-3xl p-6 md:p-12 rounded-[2rem] border border-white/10 bg-slate-950/80 backdrop-blur-sm shadow-2xl animate-fade-in flex flex-col">
                    
                    <!-- Tags -->
                    <div class="flex flex-wrap items-center gap-3 mb-4 md:mb-6">
                        <span class="bg-cyan-500 text-black text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1 rounded shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                            ${device.category.toUpperCase()}
                        </span>
                        <span class="text-cyan-200 text-[10px] md:text-xs font-bold uppercase tracking-widest flex items-center gap-1 drop-shadow-md">
                            ${device.brand}
                        </span>
                    </div>

                    <!-- Title & Price -->
                    <h2 class="text-3xl md:text-6xl font-black text-white mb-2 leading-tight tracking-tight drop-shadow-lg break-keep">
                        ${device.name}
                    </h2>
                    <div class="text-xl md:text-3xl font-light text-slate-100 mb-6 md:mb-8 border-b border-white/10 pb-4 inline-block pr-12 drop-shadow-md">
                        ${device.price}
                    </div>

                    <!-- Description & Features Wrapper -->
                    <div class="md:grid md:grid-cols-1 md:gap-8 w-full md:mb-10">
                        
                        <!-- Description -->
                        <div class="prose prose-invert mb-6 md:mb-0">
                            <p class="text-sm md:text-lg text-slate-300 md:text-slate-100/90 leading-relaxed font-medium drop-shadow-md">
                                ${device.description}
                            </p>
                            
                            <!-- Recommended Badge (PC Only) -->
                            <div class="hidden md:flex mt-6 flex-wrap gap-4">
                                <div class="inline-flex items-center gap-2 bg-indigo-500/20 px-4 py-2 rounded-lg border border-indigo-500/30 backdrop-blur-sm">
                                    <i data-lucide="mouse-pointer-2" width="14" height="14" class="text-indigo-300"></i>
                                    <span class="text-indigo-100 text-sm font-medium">${
                                      device.target
                                    }</span>
                                </div>
                            </div>
                        </div>

                        <!-- Mobile Features (Chips Style - Reference Image Style) -->
                        <div class="grid grid-cols-2 gap-2 mb-8 md:hidden">
                             ${device.features
                               .slice(0, 2)
                               .map(
                                 (feat) => `
                                <div class="bg-white/10 rounded-full px-3 py-2.5 text-[11px] font-medium text-center text-slate-200 border border-white/5 truncate flex items-center justify-center">
                                    ${feat}
                                </div>
                            `
                               )
                               .join("")}
                        </div>

                        <!-- Desktop Features (List Style - Original) -->
                        <div class="hidden md:block">
                            <div class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <i data-lucide="zap" width="14" height="14" class="text-yellow-400"></i> Key Features
                            </div>
                            <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                                ${device.features
                                  .map(
                                    (feat) => `
                                    <li class="flex items-center gap-2 text-slate-200 font-medium text-sm">
                                        <div class="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_5px_cyan]"></div>
                                        ${feat}
                                    </li>
                                `
                                  )
                                  .join("")}
                            </ul>
                        </div>
                    </div>

                    <!-- Button: Mobile("View Details"), Desktop("Visit Official Website") -->
                    <a 
                        href="${device.siteUrl}"
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="mt-auto group flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-base md:text-lg hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_cyan] w-full md:w-auto"
                    >
                        <span class="md:hidden">View Details</span>
                        <span class="hidden md:inline">Visit Official Website</span>
                        <i data-lucide="arrow-right" width="20" height="20" class="hidden md:block group-hover:translate-x-1 transition-transform"></i>
                    </a>
                </div>
            </div>
        </section>
    `
    )
    .join("");

  renderDeviceList();
  lucide.createIcons();
  setupIntersectionObserver();
}

function filterDevices() {
  if (activeCategory === "all") return DEVICES;
  return DEVICES.filter((d) => d.category === activeCategory);
}

window.setCategory = function (id) {
  activeCategory = id;
  renderCategories();
  renderDevices();
  closeMobileMenu();
};

window.scrollToDevice = function (id) {
  activeId = id;
  const el = document.getElementById(`device-${id}`);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    closeMobileMenu();
  }
  renderDeviceList();
};

function setupIntersectionObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.id.replace("device-", ""));
          if (activeId !== id) {
            activeId = id;
            renderDeviceList();
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  const sections = document.querySelectorAll('section[id^="device-"]');
  sections.forEach((sec) => observer.observe(sec));
}

function setupMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");

  btn.addEventListener("click", () => {
    isMobileMenuOpen = !isMobileMenuOpen;
    if (isMobileMenuOpen) {
      menu.classList.remove("hidden");
      btn.innerHTML = '<i data-lucide="x"></i>';
    } else {
      menu.classList.add("hidden");
      btn.innerHTML = '<i data-lucide="menu"></i>';
    }
    lucide.createIcons();
  });
}

function closeMobileMenu() {
  isMobileMenuOpen = false;
  document.getElementById("mobile-menu").classList.add("hidden");
  document.getElementById("mobile-menu-btn").innerHTML =
    '<i data-lucide="menu"></i>';
  lucide.createIcons();
}
