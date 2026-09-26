(function () {
  "use strict";

  const data = window.PORTFOLIO;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const escapeHtml = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // data.js 의 문자열은 <a href> 만 허용하고, 외부 링크는 새 탭으로 연다.
  function richText(html) {
    const tpl = document.createElement("template");
    tpl.innerHTML = html;
    tpl.content.querySelectorAll("*").forEach((el) => {
      if (el.tagName !== "A") {
        el.replaceWith(document.createTextNode(el.textContent));
        return;
      }
      const href = el.getAttribute("href") || "";
      [...el.attributes].forEach((a) => el.removeAttribute(a.name));
      if (/^(https?:|mailto:|#)/.test(href)) el.setAttribute("href", href);
      if (/^https?:/.test(href)) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      }
    });
    return tpl.innerHTML;
  }

  const ICONS = {
    github:
      '<svg viewBox="0 0 24 24" aria-hidden="true" class="fill"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>',
    gmail:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    naver:
      '<svg viewBox="0 0 24 24" aria-hidden="true" class="fill"><path d="M4 4h5.3l5.4 7.8V4H20v16h-5.3L9.3 12.2V20H4z"/></svg>',
    link: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
    copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a1 1 0 0 1 1-1h10"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true" class="fill"><path d="M7 4.5v15l13-7.5z"/></svg>',
    chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
  };

  /* ---------- Profile / About ---------- */
  const { profile, skills, projects, contacts } = data;
  $("#profileName").textContent = profile.name;
  $("#profileRole").textContent = profile.role;
  $("#aboutList").innerHTML = profile.about.map((t) => `<li>${richText(t)}</li>`).join("");
  $("#copyright").textContent = data.copyright;

  if (profile.versionNote) {
    const { text, link } = profile.versionNote;
    $("#versionNote").innerHTML = `
      <p>${richText(text)}</p>
      <a class="btn btn-sm btn-ghost" href="${escapeHtml(link.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)} ${ICONS.link}</a>`;
  } else {
    $("#versionNote").remove();
  }

  const isWork = (p) => p.type.startsWith("현업");
  $("#statProjects").textContent = projects.length;
  $("#statWork").textContent = projects.filter(isWork).length;
  $("#statKosa").textContent = projects.filter((p) => p.type.includes("[KOSA 인증]")).length;
  $("#statYears").textContent = profile.careerStart;

  $("#heroLinks").innerHTML = contacts
    .map(
      (c) =>
        `<a class="icon-btn" href="${escapeHtml(c.href)}" ${c.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""} aria-label="${escapeHtml(c.label)}" title="${escapeHtml(c.value)}">${ICONS[c.kind]}</a>`
    )
    .join("");

  /* ---------- Skills ---------- */
  $("#skillsGrid").innerHTML = skills
    .map(
      (s) => `
      <article class="card skill-card">
        <div class="badges">${s.badges
          .map((b) => `<img src="${escapeHtml(b.src)}" alt="${escapeHtml(b.alt)}" loading="lazy" height="28" />`)
          .join("")}</div>
        <h3>${escapeHtml(s.title)}</h3>
        <ul>${s.items.map((t) => `<li>${richText(t)}</li>`).join("")}</ul>
      </article>`
    )
    .join("");

  /* ---------- Projects ---------- */
  const renderItems = (items, depth = 0) =>
    `<ul class="${depth ? "sub" : "items"}">${items
      .map((it) => `<li>${richText(it.t)}${it.c ? renderItems(it.c, depth + 1) : ""}</li>`)
      .join("")}</ul>`;

  const PREVIEW_COUNT = 3;

  const projectEls = projects.map((p, i) => {
    const id = p.id || `project-${i + 1}`;
    const kind = isWork(p) ? "work" : "personal";
    // 하위 항목이 없는 첫 줄(기술 스택/요약)은 제목 아래에 강조 표시
    const lead = p.items[0].c ? null : p.items[0].t;
    const rest = lead ? p.items.slice(1) : p.items;
    const hasMore = rest.length > PREVIEW_COUNT || rest.some((it) => it.c);
    // 이미지/GIF 데모는 썸네일에서도 재생, 영상 링크(Drive 등)는 시연 영상 버튼으로만
    const imageDemo = p.demo && /\.(gif|webp|png|jpe?g)$/i.test(p.demo);
    const el = document.createElement("article");
    el.className = "card project-card";
    el.id = id;
    el.dataset.kind = kind;
    el.dataset.search = (p.title + " " + p.period + " " + p.type + " " + JSON.stringify(p.items).replace(/<[^>]+>/g, "")).toLowerCase();

    el.innerHTML = `
      <button class="thumb" type="button" aria-label="${escapeHtml(p.title)} ${imageDemo ? "시연 영상 보기" : "이미지 크게 보기"}">
        <img src="${escapeHtml(p.img)}" alt="${escapeHtml(p.title)}" loading="lazy"${p.imgPosition ? ` style="object-position:${escapeHtml(p.imgPosition)}"` : ""} />
        ${imageDemo ? `<span class="demo-badge" aria-hidden="true">${ICONS.play} DEMO</span>` : ""}
        <span class="thumb-fallback" aria-hidden="true">${escapeHtml(p.title.split(/[\s:]/)[0])}</span>
      </button>
      <div class="project-body">
        <div class="project-meta">
          <span class="tag tag-${kind}">${escapeHtml(p.type)}</span>
          <time>${escapeHtml(p.period)}</time>
          ${p.demo ? `<button class="demo-btn" type="button">${ICONS.play} 시연 영상</button>` : ""}
          ${p.chats ? `<button class="demo-btn chat-btn" type="button">${ICONS.chat} 작업 대화</button>` : ""}
        </div>
        <h3 class="project-title">${escapeHtml(p.title)}</h3>
        ${lead ? `<p class="project-stack">${richText(lead)}</p>` : ""}
        <div class="project-details${hasMore ? " is-collapsed" : ""}" id="${id}-details">
          ${renderItems(rest)}
        </div>
        ${
          hasMore
            ? `<button class="more-btn" type="button" aria-expanded="false" aria-controls="${id}-details">
                 <span>자세히 보기</span> ${ICONS.chevron}
               </button>`
            : ""
        }
        <div class="project-links">
          ${p.links
            .map((l) =>
              // 링크가 없거나 비공개(Private) 저장소는 회색 비활성 버튼으로 표시
              l.href && !/\(Private\)/.test(l.label)
                ? l.href.startsWith("#")
                  ? `<a class="btn btn-sm btn-primary" href="${escapeHtml(l.href)}">${escapeHtml(l.label)}</a>`
                  : `<a class="btn btn-sm btn-primary" href="${escapeHtml(l.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(l.label)} ${ICONS.link}</a>`
                : `<span class="btn btn-sm btn-disabled" aria-disabled="true">${escapeHtml(l.label)}</span>`
            )
            .join("")}
        </div>
      </div>`;

    // 이미지 로드 실패(예: Google Drive 공유 링크) 시 대체 썸네일
    const img = $("img", el);
    img.addEventListener("error", () => el.querySelector(".thumb").classList.add("no-img"));

    $(".thumb", el).addEventListener("click", () => {
      if ($(".thumb", el).classList.contains("no-img")) {
        const src = toEmbedUrl(p.img);
        if (src) openFrame(src, p.img, p.title);
        else window.open(p.img, "_blank", "noopener");
        return;
      }
      if (imageDemo) openDemo(p);
      else openLightbox(p.img, p.title);
    });

    const demoBtn = $(".demo-btn:not(.chat-btn)", el);
    if (demoBtn) demoBtn.addEventListener("click", () => openDemo(p));

    const chatBtn = $(".chat-btn", el);
    if (chatBtn) chatBtn.addEventListener("click", () => openGallery(p.chats, 0, "작업 대화"));

    const moreBtn = $(".more-btn", el);
    if (moreBtn) moreBtn.addEventListener("click", () => setExpanded(el, moreBtn.getAttribute("aria-expanded") !== "true"));

    return { el, p, id, kind };
  });

  // 시연 영상: GIF 등 이미지는 라이트박스, 영상 링크는 링크 모달, 둘 다 안 되면 새 탭
  function openDemo(p) {
    const title = `${p.title} - 시연 영상`;
    if (/\.(gif|webp|png|jpe?g)$/i.test(p.demo)) return openLightbox(p.demo, title);
    const src = toEmbedUrl(p.demo);
    if (src) openFrame(src, p.demo, title);
    else window.open(p.demo, "_blank", "noopener");
  }

  function setExpanded(el, open) {
    const btn = $(".more-btn", el);
    if (!btn) return;
    $(".project-details", el).classList.toggle("is-collapsed", !open);
    btn.setAttribute("aria-expanded", String(open));
    $("span", btn).textContent = open ? "접기" : "자세히 보기";
  }

  const list = $("#projectList");
  projectEls.forEach(({ el }) => list.appendChild(el));

  $("#projectIndex").innerHTML = projectEls
    .map(
      ({ p, id }) =>
        `<li data-target="${id}"><a href="#${id}"><span>${escapeHtml(p.title.split(" : ")[0])}</span><small>${escapeHtml(p.period)}</small></a></li>`
    )
    .join("");

  // 본문 안의 프로젝트 링크(#devvreco-v2 등)로 이동 시에도 대상 카드 강조
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const target = document.getElementById(a.getAttribute("href").slice(1));
    if (!target || !target.classList.contains("project-card")) return;
    target.classList.remove("is-flash");
    void target.offsetWidth;
    target.classList.add("is-flash");
  });

  // 목차에서 이동 시 해당 프로젝트 자동 펼침
  $("#projectIndex").addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (li) setExpanded(document.getElementById(li.dataset.target), true);
  });

  /* 필터 + 검색 */
  let filter = "all";
  let query = "";
  function applyFilter() {
    let shown = 0;
    projectEls.forEach(({ el, kind, id }) => {
      const ok = (filter === "all" || filter === kind) && (!query || el.dataset.search.includes(query));
      el.hidden = !ok;
      const li = $(`#projectIndex li[data-target="${id}"]`);
      if (li) li.hidden = !ok;
      if (ok) shown++;
    });
    $("#resultCount").textContent =
      filter === "all" && !query ? `총 ${projects.length}개 프로젝트` : `${shown}개 프로젝트 표시 중 (전체 ${projects.length}개)`;
    list.classList.toggle("is-empty", shown === 0);
  }

  $("#projectFilter").addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    filter = btn.dataset.filter;
    $$("#projectFilter .chip").forEach((c) => {
      const on = c === btn;
      c.classList.toggle("is-active", on);
      c.setAttribute("aria-selected", String(on));
    });
    applyFilter();
  });

  // 검색창은 index.html 에서 주석 처리되어 있을 수 있음
  let searchTimer;
  $("#projectSearch")?.addEventListener("input", (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      query = e.target.value.trim().toLowerCase();
      applyFilter();
    }, 120);
  });

  let allOpen = false;
  $("#toggleAll").addEventListener("click", (e) => {
    allOpen = !allOpen;
    projectEls.forEach(({ el }) => setExpanded(el, allOpen));
    e.currentTarget.textContent = allOpen ? "모두 접기" : "모두 펼치기";
  });

  applyFilter();

  /* ---------- Contacts ---------- */
  $("#contactsGrid").innerHTML = contacts
    .map(
      (c) => `
      <div class="card contact-card">
        <a class="contact-main" href="${escapeHtml(c.href)}" ${c.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>
          <span class="contact-icon contact-${c.kind}">${ICONS[c.kind]}</span>
          <span class="contact-text"><strong>${escapeHtml(c.label)}</strong><span>${escapeHtml(c.value)}</span></span>
        </a>
        ${c.copy ? `<button class="icon-btn" type="button" data-copy="${escapeHtml(c.value)}" aria-label="${escapeHtml(c.value)} 복사" title="복사">${ICONS.copy}</button>` : ""}
      </div>`
    )
    .join("");

  $("#contactsGrid").addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-copy]");
    if (!btn) return;
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      toast(`${btn.dataset.copy} 복사됨`);
    } catch {
      toast("복사에 실패했습니다");
    }
  });

  /* ---------- Lightbox ---------- */
  // 이미지 한 장 또는 여러 장(갤러리). 여러 장이면 ← → 버튼/키로 넘긴다.
  const lightbox = $("#lightbox");
  let gallery = [];
  let galleryIndex = 0;
  let galleryTitle = "";
  function showGalleryItem(i) {
    galleryIndex = (i + gallery.length) % gallery.length;
    const item = gallery[galleryIndex];
    $("#lightboxImg").src = item.src;
    $("#lightboxImg").alt = item.caption || galleryTitle;
    $("#lightboxCaption").textContent = item.caption ? `${galleryTitle} · ${item.caption}` : galleryTitle;
    $("#lightboxNav").hidden = gallery.length < 2;
    $("#lightboxCount").textContent = `${galleryIndex + 1} / ${gallery.length}`;
  }
  function openGallery(items, index, title) {
    gallery = items;
    galleryTitle = title;
    showGalleryItem(index);
    if (!lightbox.open) lightbox.showModal();
  }
  function openLightbox(src, caption) {
    openGallery([{ src }], 0, caption);
  }
  $("#lightboxPrev").addEventListener("click", () => showGalleryItem(galleryIndex - 1));
  $("#lightboxNext").addEventListener("click", () => showGalleryItem(galleryIndex + 1));
  lightbox.addEventListener("keydown", (e) => {
    if (gallery.length < 2) return;
    if (e.key === "ArrowLeft") showGalleryItem(galleryIndex - 1);
    if (e.key === "ArrowRight") showGalleryItem(galleryIndex + 1);
  });
  $("#lightboxClose").addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.close();
  });

  /* ---------- Link modal ----------
   * 외부 링크를 창 이동 없이 모달(iframe)로 연다.
   * 대부분의 사이트(GitHub, Notion 등)는 보안 헤더로 iframe 삽입을 막으므로,
   * 삽입이 허용되는 것으로 확인된 호스트만 모달로 열고 나머지는 기존처럼 새 탭으로 연다.
   */
  const EMBED_HOSTS = ["drive.google.com", "www.hecaton.co.kr", "hwan2272-devvreco.vercel.app", "hwan2272.github.io"];

  function toEmbedUrl(href) {
    let u;
    try {
      u = new URL(href, location.href);
    } catch {
      return null;
    }
    if (u.protocol !== "https:" || !EMBED_HOSTS.includes(u.hostname)) return null;
    if (u.hostname === "drive.google.com") {
      // Drive 공유 링크(/view)는 삽입 불가, /preview 는 가능
      const m = u.pathname.match(/\/file\/d\/([^/]+)/);
      return m ? `https://drive.google.com/file/d/${m[1]}/preview` : null;
    }
    return u.href;
  }

  const frameModal = $("#frameModal");
  const frameView = $("#frameView");
  function openFrame(src, original, title) {
    $("#frameTitle").textContent = title;
    $("#frameOpen").href = original;
    frameView.src = src;
    frameModal.showModal();
  }
  // 닫을 때 iframe 을 비워 영상 재생 등을 멈춘다 (Esc 로 닫는 경우는 close 이벤트에서 처리)
  const blankFrame = () => (frameView.src = "about:blank");
  const closeFrame = () => {
    frameModal.close();
    blankFrame();
  };
  frameModal.addEventListener("close", blankFrame);
  $("#frameClose").addEventListener("click", closeFrame);
  frameModal.addEventListener("click", (e) => {
    if (e.target === frameModal) closeFrame();
  });

  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href]");
    if (!a || a.id === "frameOpen" || e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    const src = toEmbedUrl(a.getAttribute("href"));
    if (!src) return;
    e.preventDefault();
    openFrame(src, a.href, a.textContent.trim() || a.getAttribute("aria-label") || a.href);
  });

  /* ---------- Toast ---------- */
  let toastTimer;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("is-show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("is-show"), 1800);
  }

  /* ---------- Theme ---------- */
  const root = document.documentElement;
  const currentTheme = () =>
    root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  $("#themeToggle").addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  });

  /* ---------- Mobile menu ---------- */
  const nav = $("#nav");
  const menuBtn = $("#menuToggle");
  const setMenu = (open) => {
    nav.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
  };
  menuBtn.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  nav.addEventListener("click", (e) => e.target.closest("a") && setMenu(false));
  document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

  /* ---------- Scroll: progress, to-top, active nav ---------- */
  const progress = $("#progress");
  const toTop = $("#toTop");
  const onScroll = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
    toTop.classList.toggle("is-show", scrollY > 600);
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

  const navLinks = $$("#nav a");
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        navLinks.forEach((a) => {
          const on = a.dataset.section === en.target.id;
          a.classList.toggle("is-active", on);
          if (on) a.setAttribute("aria-current", "true");
          else a.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  $$("main > section").forEach((s) => sectionObserver.observe(s));

  const indexItems = $$("#projectIndex li");
  const projectObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        indexItems.forEach((li) => li.classList.toggle("is-active", li.dataset.target === en.target.id));
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );
  projectEls.forEach(({ el }) => projectObserver.observe(el));
})();
