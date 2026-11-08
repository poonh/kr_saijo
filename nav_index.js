// nav_index.js - Dynamic Navigation Header for kr_saijo
const siteTitle = "东广岛华人红色高棉证言";
const siteSubtitle = "Oral History of a Cambodian Chinese Refugee Family in Saijo, Hiroshima";

const menuData = [
    {
        title: "主页",
        url: "index.html",
        description: "返回网站首页与背景介绍"
    },
    {
        title: "中文",
        url: "chinese.html",
        description: "东广岛华人经历红色高棉的故事与完整口述证言"
    },
    {
        title: "日本語",
        url: "japanese.html",
        description: "クメール・ルージュを生き延びた東広島華人家族の証言（日本語版）"
    },
    {
        title: "老照片",
        url: "pictures.html",
        description: "难民营订婚宴与法语班历史珍贵老照片"
    },
    {
        title: "笔者手记",
        url: "mynotes.html",
        description: "采访叶家与整理口述历史的心得体会与反思"
    }
];

function renderHeader() {
    const headerEl = document.getElementById("site-header");
    if (!headerEl) return;

    let currentPage = window.location.pathname.split("/").pop();
    if (!currentPage || currentPage === "") currentPage = "index.html";

    // Desktop tabs
    const tabsHtml = menuData.map(item => {
        const isActive = (item.url === currentPage) ? 'class="active"' : '';
        const tooltipHtml = item.description ? `<span class="tab-tooltip">${item.description}</span>` : '';
        return `<li ${isActive}><a href="${item.url}">${item.title}</a>${tooltipHtml}</li>`;
    }).join("");

    // Mobile menu items
    const mobileItemsHtml = menuData.map(item => {
        const isActive = (item.url === currentPage) ? 'class="active-mobile"' : '';
        return `<li><a href="${item.url}" ${isActive}>${item.title}</a></li>`;
    }).join("");

    headerEl.innerHTML = `
        <div class="site-header-inner">
            <div class="site-branding">
                <a href="index.html" class="site-title-link">
                    <span class="site-title-main">${siteTitle}</span>
                    <span class="site-title-sub">${siteSubtitle}</span>
                </a>
                <button class="menu-icon" aria-label="切换移动端菜单" onclick="toggleMobileMenu()">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <div class="nav-wrapper">
                <nav class="desktop-nav" aria-label="桌面导航菜单">
                    <ul class="botmenu-bar" id="menuTabs">
                        ${tabsHtml}
                    </ul>
                </nav>
            </div>

            <!-- Mobile Navigation Drawer -->
            <div class="mobile-menu-backdrop" onclick="hideMobileMenu()"></div>
            <nav class="mobile-menu-list" aria-label="移动端导航菜单">
                <div class="mobile-menu-header">
                    <span class="mobile-menu-title">目录导航</span>
                    <button class="close-mobile-menu" onclick="hideMobileMenu()" aria-label="关闭菜单">&times;</button>
                </div>
                <ul class="mobile-nav-links">
                    ${mobileItemsHtml}
                </ul>
            </nav>
        </div>
    `;
}

// Run renderHeader on DOM ready or immediately
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderHeader);
} else {
    renderHeader();
}
