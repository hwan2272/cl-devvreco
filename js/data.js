/* 포트폴리오 콘텐츠 데이터
 * 내용 수정은 이 파일만 고치면 됩니다.
 * - 문자열 안의 <a href="..."> 는 링크로 렌더링됩니다.
 * - items 의 c 는 하위 항목(children) 입니다.
 */
window.PORTFOLIO = {
  profile: {
    name: "박정환",
    role: "Software Engineer, AI Lab Leader",
    site: "hwan2272 Devvreco",
    siteSub: "Dev Records",
    careerStart: 2012,
    // 프로필 버튼 아래 버전 안내 (v.2 ↔ v.3 연결)
    versionNote: {
      text: '이 사이트는 직접 구현한 <a href="#devvreco-v2">Devvreco v.2</a> (Next.js + TypeScript + Tailwind CSS)를 Claude Code와 함께 리뉴얼한 v.3입니다.',
      link: { label: "v.2 사이트 보기", href: "https://hwan2272-devvreco.vercel.app/" },
    },
    about: [
      "AI 스타트업에서 회사의 첫 제품을 구체화하였습니다. 이는 불모의 땅에서 문명을 건설한 것과 같습니다.",
      '이전에는 시니어 개발자 Role을 수행하며 개발팀 리딩과 협업 등의 성과로 2024년말 한국 클라우드 인증제 인증을 획득하였습니다.<a href="https://github.com/user-attachments/files/18271431/CSA-23-2024-11.-.pdf">(CSA-23-2024-11)</a>',
      '최근에는 Claude Code를 활용한 AI 협업 개발 방식 적용 프로젝트를 학습/실험 중에 있습니다.<a href="#cl-devvreco">(Devvreco v.3)</a>',
      "개발자 커뮤니티에서 170명 이상의 질문자분들과 상호 소통하는 등 생각을 나누며 트렌드를 받아들이고 보다 나은 서비스를 만들어 배포, 제공하는데 관심이 있습니다.",
      "개인 프로젝트 및 학습 등을 하며 기술 스택의 범위와 이해를 넓히고 있습니다.",
      "재직한 모든 회사의 근무 경력을 KOSA(한국소프트웨어기술자 경력관리 시스템)에서 인증 받았습니다.",
      "대부분의 기술 경력(현업 프로젝트 내역)을 KOSA에서 인증 받았습니다. (현시점에서 증빙이 어려운 일부 프로젝트 제외)",
    ],
  },

  skills: [
    {
      title: "Claude Code, Claude API",
      badges: [
        { alt: "Claude Code", src: "https://img.shields.io/badge/Claude%20Code-D97757?style=for-the-badge&logo=claude&logoColor=white" },
        { alt: "Claude API", src: "https://img.shields.io/badge/Claude%20API-191919?style=for-the-badge&logo=anthropic&logoColor=white" },
      ],
      items: [
        "Claude Code를 개발 파트너로 활용하여 요구사항 정리, 설계, 구현, 검증까지의 개발 과정을 진행할 수 있습니다.",
        "CLAUDE.md에 작업 규칙과 제약 사항(하지 않기로 한 것, 지켜야 할 것)을 정의하여 일관된 방향으로 개발을 이끌 수 있습니다.",
        "스펙 문서를 기준으로 기능을 추가/변경하고, 브라우저 미리보기와 로그로 결과를 직접 검증합니다.",
        "Claude API(Vision)를 애플리케이션에 연동하여 프롬프트 생성, 응답 검증, 사용량 관리까지 구현했습니다.",
        '<a href="#cl-devvreco">Claude Code와 함께 만든 포트폴리오 사이트 Devvreco (v.3)</a>',
      ],
    },
    {
      title: "ChatGPT",
      badges: [
        { alt: "ChatGPT", src: "https://img.shields.io/badge/ChatGPT-10A37F?style=for-the-badge&logo=openai&logoColor=white" },
      ],
      items: [
        "ChatGPT를 설계 단계의 논의 상대로 활용하여, 구현에 들어가기 전 구조와 처리 흐름을 대화로 정리하고 검토합니다.",
        "HFLOW MGP 개발 시 사용자 질의가 API → RAG → vLLM을 거쳐 응답으로 돌아오기까지의 전체 모듈 구성과 처리 순서를 ChatGPT와 함께 단계별로 정리했습니다.",
        "업계에서 통용되는 구현 방향에 대한 조언을 들어 시스템의 구현 방향을 결정했습니다.",
        '<a href="#hflow-mgp">HFLOW MGP : 민원질의 대응 RAG + LLM Ops 서비스</a>',
      ],
    },
    {
      title: "Python, FastAPI, Uvicorn",
      badges: [
        { alt: "Python", src: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" },
        { alt: "FastApi", src: "https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" },
      ],
      items: [
        "연구소에서 AI 개발 언어 통일성의 일환으로 Python FastAPI으로 API 모듈을 개발, Uvicorn으로 서빙했습니다.",
        "Pure한 VM에서 시작하여 API-RAG-vLLM 파이프라인 체계를 갖추기까지 솔루션 제품의 틀을 구축했습니다.",
      ],
    },
    {
      title: "React.js, Storybook",
      badges: [
        { alt: "React.js", src: "https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" },
        { alt: "Storybook", src: "https://img.shields.io/badge/storybook-ff4785?style=for-the-badge&logo=storybook&logoColor=white" },
      ],
      items: [
        "React.js로 프론트엔드 개발을 할 수 있습니다.",
        "개발 도중 npm 이나 yarn에서 제공하는 React.js 관련 라이브러리들을 사용할 수 있습니다. (React-Query, Recoil, React-hookform, Zod)",
        "상태관리를 위한 Recoil 등을 사용할 수 있습니다.",
        "Storybook을 사용하여 컴포넌트에 대한 공유나 문서화를 할 수 있습니다.",
        '<a href="#e-guard">밀폐공간 근로자 보호 Saas 플랫폼 E-Guard (Storybook)</a>',
      ],
    },
    {
      title: "HTML5, CSS3, Tailwind CSS",
      badges: [
        { alt: "HTML5", src: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" },
        { alt: "CSS3", src: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" },
        { alt: "Tailwind CSS", src: "https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" },
      ],
      items: [
        "HTML과 CSS를 이해하고 Tailwind CSS를 사용합니다.",
        "현 사이트는 Claude Code와 함께 HTML5, CSS3, Vanilla JavaScript만으로 구성하였습니다.",
        "Tailwind CSS의 Admin Template인 TailAdmin을 Custom하여 E-Verse 2.0과 같은 서비스들을 개발,오픈했습니다.",
        '<a href="#e-verse">에너지 절감 관리 Saas 플랫폼 E-Verse 2.0</a>',
      ],
    },
    {
      title: "JavaScript, TypeScript",
      badges: [
        { alt: "JavaScript", src: "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" },
        { alt: "TypeScript", src: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" },
      ],
      items: [
        "Javascript를 사용하며 ES6~ 문법에 익숙합니다. (spread 연산자, Object.entries 등)",
        "Typescript로 객체의 Entity를 정의하고 Response나 Payload를 구성합니다.",
      ],
    },
    {
      title: "Java, SpringFramework, SpringBoot, Jquery",
      badges: [
        { alt: "Java Spring", src: "https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white" },
        { alt: "Spring Boot", src: "https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot" },
        { alt: "Jquery", src: "https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" },
      ],
      items: [
        "Java Spring의 MVC 구조에 능숙합니다. JSP개발 경험이 많아 Jquery를 잘 다루었습니다.",
        "SpringBoot로 API 서버 개발을 했습니다.",
        "프론트엔드를 하며 Jquery는 지양하고 있습니다.",
        "DB 설계 개선과 서비스 웹 보안 적용(CORS 처리, XSS 방지 처리, 개인정보 마스킹 등 보안 정책 고안과 백엔드 협업)을 주도했습니다.",
      ],
    },
    {
      title: "Mysql, MariaDB, Oracle",
      badges: [
        { alt: "Mysql", src: "https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white" },
        { alt: "MariaDB", src: "https://img.shields.io/badge/mariaDB-003545?style=for-the-badge&logo=mariaDB&logoColor=white" },
        { alt: "Oracle", src: "https://img.shields.io/badge/oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white" },
      ],
      items: [
        "MySql, MariaDB, Oracle 모두 다룰 수 있습니다.",
        "SpringBoot로 간단한 서버를 만들시, MariaDB를 주로 사용합니다.",
      ],
    },
    {
      title: "Linux, Apache Tomcat, Nginx",
      badges: [
        { alt: "Linux", src: "https://img.shields.io/badge/linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" },
        { alt: "Apache Tomcat", src: "https://img.shields.io/badge/apache%20tomcat-F8DC75?style=for-the-badge&logo=apachetomcat&logoColor=white" },
        { alt: "Nginx", src: "https://img.shields.io/badge/Nginx-009639?logo=nginx&logoColor=white&style=for-the-badge" },
      ],
      items: [
        "Linux 환경에 익숙하여 Apache세팅 등이 가능합니다.",
        "SpringBoot으로 서버를 빌드하여 Apache Tomcat으로 구동할 수 있습니다.",
        "최근에는 Linux 환경의 배포를 위해 Nginx를 사용하였습니다.",
      ],
    },
    {
      title: "Git, Jira",
      badges: [
        { alt: "Git", src: "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" },
        { alt: "Jira", src: "https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white" },
      ],
      items: [
        "Git, Jira를 협업 툴로 많이 사용하였습니다.",
        "Git로 소스 fetch, pull 및 branch 작업에 익숙합니다.",
        "feature branch를 분기하여 개인 branch 작업을 하고, merge하는 방식을 주로 사용합니다.",
      ],
    },
  ],

  projects: [
    {
      id: "cl-devvreco",
      title: "Devvreco (Renewal Claude Code) : 개인 포트폴리오 사이트 (v.3)",
      period: "2026.09 ~ ING",
      type: "개인 프로젝트 [with Claude Code]",
      img: "assets/projects/cl-devvreco.png",
      items: [
        { t: "HTML5 + CSS3 + Vanilla JavaScript (빌드 과정 없는 정적 사이트)" },
        { t: "Claude Code와 함께 기존 사이트(Devvreco v.2) 분석부터 구현, 브라우저 검증까지 진행한 프로젝트" },
        { t: '직접 구현한 <a href="#devvreco-v2">Devvreco (v.2)</a>의 콘텐츠를 그대로 이전하고 사용성 중심으로 UI 리뉴얼' },
        { t: "콘텐츠를 data.js 한 파일로 분리하여 내용 수정 시 화면 코드 수정 불필요" },
        { t: "다크 모드, 반응형 레이아웃, 키보드 접근성 적용" },
      ],
      links: [
        { label: "Web Link (현재 사이트)", href: "#aboutme" },
        { label: "Github Link", href: "https://github.com/hwan2272/cl-devvreco" },
      ],
    },
    {
      title: "Character Style Converter : 캐릭터 스타일 변환기",
      period: "2026.09 ~ ING",
      type: "개인 프로젝트 [with Claude Code]",
      img: "assets/projects/character-style-converter-poster.png",
      imgPosition: "right center",
      demo: "assets/projects/character-style-converter-demo.gif",
      items: [
        { t: "Electron + Python 3.10 + Claude API (Vision) + Stable Diffusion WebUI API" },
        { t: "Claude Code와 함께 스펙 문서(docs/spec.md) 작성부터 설계, 개발까지 진행한 프로젝트" },
        { t: "게임 캐릭터 스크린샷을 Claude Vision으로 분석하여 캐릭터 묘사 프롬프트를 생성하고, SD WebUI(txt2img)로 다른 화풍의 이미지를 대량 생성" },
        {
          t: "프로세스 흐름 : 이미지 선택 → 프롬프트 생성 → 이미지 대량 생성 → 확인 및 저장",
          c: [
            { t: "① 이미지 선택 : 파일의 PNG 헤더를 직접 읽어 PNG 여부와 1024x1024 이하 크기를 검증" },
            { t: "② 프롬프트 생성 : Claude Vision이 캐릭터 묘사 태그를 생성하고, 고정 품질 키워드(prefix)와 LoRA 태그(suffix)를 앞뒤로 조합. 텍스트창에서 사용자가 직접 수정 가능" },
            { t: "③ 이미지 대량 생성 : SD WebUI txt2img API로 한 번에 50장 배치 생성, 진행률과 남은 시간을 원형 링으로 표시하고 완료 시 데스크탑 알림" },
            { t: "④ 확인 및 저장 : 갤러리에서 크게 보기(← → 이동), 재생성 결과 누적(최대 100장), 우클릭 저장 시 배치 시각 기반 고정 파일명으로 중복 저장 방지" },
          ],
        },
        {
          t: "LLM 응답 검증",
          c: [
            { t: "Claude 응답에서 태그 줄만 추출, 조각 단위로 한 번 더 검사하여 이상 시 디퓨전 전송 차단" },
          ],
        },
        {
          t: "API 사용량 및 보안 관리",
          c: [
            { t: "세션 카운터(중복 호출 감지)와 누적 카운터(키 만료일 기준 사용량, 추정 비용) 분리" },
            { t: "API 키는 .env에서 읽어 자식 프로세스 env로만 전달, 로그 및 렌더러 노출 금지" },
            { t: "파일 접근 최소 권한 원칙 - 사용자가 고른 파일만 읽고, 저장 버튼을 누른 경로에만 쓰기" },
          ],
        },
        { t: "목업 모드 구성으로 과금 없이 UI 및 파이프라인 반복 검증" },
      ],
      links: [{ label: "Web Link (개인용 데스크탑 프로그램이어서 링크 불가)", href: null }],
    },
    {
      title: "HFLOW MGP 고도화",
      demo: "https://drive.google.com/file/d/1pR7grVMEYAYd5BCXQvxedDvIyQ1I9Cc-/view?usp=drive_link",
      period: "2025.09 ~ 2025.10",
      type: "현업 프로젝트 [KOSA 인증]",
      img: "assets/projects/hflow-mgp.webp",
      items: [
        { t: "HFLOW MGP를 좀더 여러 상황에 맞추어 응답을 할 수 있도록 고도화하는 프로젝트" },
        {
          t: "RAG 고도화 (Langgraph Multi Agents 개발론의 방향성 활용)",
          c: [
            { t: "Langgraph Multi Agents 개발론 : Processing을 수행하는 소규모 모듈들을 nodes로 구분하고 각 역할에 따라 기능을 수행" },
            { t: "Prompt를 생성하는 것이 중요하므로 각 nodes를 이동하며 Prompt Custom 수행" },
            { t: "LLM에 전달하기 전 Prompt 최종 조합 - LLM이 응답해야 하는 질문에 대한 추가 정보 전달, 상황 및 톤 전달 등 수행" },
            { t: '개인 기술 블로그 작성글 -<a href="https://hwan2272.notion.site/Multi-Agents-Agent-262138d113dd80bbb87be328b1916c37">[분석] Multi Agents 기술 구성과 Agent들의 역할</a>' },
          ],
        },
        {
          t: "DEMO 기능 및 화면 고도화 - 실시간 검색어 기능",
          c: [
            { t: "서비스에서 현재 사람들이 많이 검색한 질문 List를 표시하는 기능" },
            { t: "질문 List에서 항목 클릭시 Count 증가 및 Count에 따른 실시간 Order변경 처리 (Websocket 및 Trigger API 사용)" },
            { t: "데이터를 Vector DB로 관리, Vector DB 관리시의 RDBMS와의 차이점 및 노하우 습득" },
          ],
        },
        {
          t: "DEMO 기능 및 화면 고도화 - 관련 검색어 기능",
          c: [
            { t: "현재 답변한 내용에 관련한 질문 List를 표시하는 기능" },
            { t: "항목 클릭시 자동으로 다음 질문으로 처리하고 LLM의 답변 생성 프로세스 재수행" },
            { t: "데이터 CRUD 구현에 REST API 형식 처리하도록 가이드" },
            { t: "데이터를 Vector DB로 관리, Vector DB 관리시의 RDBMS와의 차이점 및 노하우 습득" },
          ],
        },
        {
          t: "DEMO Admin 개발",
          c: [
            { t: "Python Django를 통한 Admin 개발" },
            { t: "Nginx 및 Admin 모듈 간 CORS 조정" },
            { t: "Demo Admin에서는 최종 Prompt 및 서버 소요시간 등도 알 수 있도록 추가하는 등 Demo와는 Detail적 부분의 차이를 두었음" },
          ],
        },
      ],
      links: [
        { label: "Web Demo Link", href: "https://www.hecaton.co.kr/hflow" },
        { label: "Github Link (Private)", href: "https://github.com/orgs/hecaton-ai/repositories" },
      ],
    },
    {
      id: "hflow-mgp",
      title: "HFLOW MGP : 민원질의 대응 RAG + LLM Ops 서비스 (1차버전)",
      period: "2025.06 ~ 2025.08",
      type: "현업 프로젝트 [KOSA 인증]",
      img: "assets/projects/hflow-mgp.webp",
      items: [
        { t: "Python 3.11 + Uvicorn + FastAPI + Html5" },
        { t: "vSphere VM 기반의 Ubuntu 서버 및 VPN망 접속 환경" },
        { t: "실물 GPU와 이를 vLLM으로 서빙할 수 있는 하드웨어 환경" },
        { t: "프로젝트 리드", c: [{ t: "연구소 팀장으로서 소규모 팀원 리딩" }, { t: "Demo UI 개발을 통한 외부 시연 제공" }] },
        { t: "Demo UI 개발", c: [{ t: "인터넷망 기반 HTML5와 Valnila Javascript를 사용한 질의와 결과 확인용 UI 구축" }] },
        { t: "게이트웨이 PC 환경 구축", c: [{ t: "인터넷망으로 들어온 질의를 VPN망의 인프라로 전달하기 위한 Nginx 리버스 프록시 고안과 구축" }] },
        {
          t: "WAF (Web Application Firewall) 구축",
          c: [
            { t: "Nginx + ModSecurity 사용. ModSecurity Role 구성을 통한 부적절 및 트래픽 공격자 IP에 대한 차단 정책 적용" },
            { t: "1시간마다 개발팀에 Noti하는 프로세스 고안과 구축" },
          ],
        },
        {
          t: "모듈 공통",
          c: [
            { t: "Github Actions의 Docker build 처리와 Docker Compose 적용을 통한 쉬운 구동 프로세스와 CI/CD 구축" },
            { t: "공통 Health Checker 적용. 이상 모듈 개발팀 Noti" },
          ],
        },
        {
          t: "Hflow API 구축",
          c: [
            { t: "사용자 질의를 받아들여 RAG와 vLLM으로 전달하기 위한 Endpoint 구성" },
            { t: "보안을 위한 질의 전처리 (XSS 방지, Length Check, Format Check)" },
          ],
        },
        {
          t: "Hflow RAG 등에 대한 보완",
          c: [
            { t: "질의 응답 파이프라인 내 Exception 시 공통 Exception Handler 적용" },
            { t: "존재하지 않는 Endpoint에 대한 접근 404 차단 적용으로 외부 공격과 트래픽 과부하 방지" },
          ],
        },
        {
          t: "vLLM 모델 선정과 전체 로그 모니터링 구축",
          c: [
            { t: "국내 대응을 위한 국산 모델 선정과 성능 확인" },
            { t: "Loki + Promtail 적용을 통한 각 모듈간 로그 수집 중앙화와 모니터링 환경 구축" },
          ],
        },
        {
          t: "기타",
          c: [
            { t: "구축 인프라를 VM 1대로 서빙할 수 있는 Kubernetes 배포 환경 연구" },
            { t: "Hflow 관련 각종 서브도메인 및 SSL 인증서 관리" },
            { t: "팀내 Git Commit 컨벤션 정립 - 유다시티 스타일 참조" },
          ],
        },
      ],
      links: [
        { label: "Web Demo Link", href: "https://www.hecaton.co.kr/hflow" },
        { label: "Github Link (Private)", href: "https://github.com/orgs/hecaton-ai/repositories" },
      ],
    },
    {
      id: "e-guard",
      title: "E-Guard : 밀폐공간 근로자보호 Saas 플랫폼",
      period: "2024.10 ~ 2025.01",
      type: "현업 프로젝트 [KOSA 인증]",
      img: "assets/projects/e-guard.webp",
      items: [
        { t: "React 18 + Vite + Typescript + Tailwind CSS(TailAdmin)" },
        { t: "E-Verse 2.0과 환경 동일" },
        { t: "Oracle Cloud Infrastructure (OCI) 인스턴스를 활용한 서비스 배포와 관리" },
        { t: "사용 편의성을 위한 ChipButton식 근로자 할당 UI, Thumbnail List식 구역 설정 UI등의 고안, 개발" },
        { t: "OCI 인스턴스를 활용한 파일 서버 고안, 구축, Nginx 보안처리 (일종의 간이 CDN)" },
        { t: "ListContentsWrapper 및 Hook Form 에 사용되는 Type Entity 개선을 위한 Zod 도입" },
        { t: "서비스 UI 컴포넌트 공유용 Storybook 개발" },
      ],
      links: [
        { label: "Web Link", href: "http://eguard.ateverse.com/auth/login" },
        { label: "Storybook Link", href: "http://storybook.ateverse.com/?path=/story/e-guard-layout-summary-card--case-good" },
        { label: "Github Link (Private)", href: "https://github.com/atemos01/e-guard-frontend.git" },
      ],
    },
    {
      id: "e-verse",
      title: "E-Verse 2.0 : 에너지 절감 관리 Saas 플랫폼",
      demo: "https://drive.google.com/file/d/1bS61RRIddGVzwNqQg7xs0u9M5pN41yDY/view?usp=drive_link",
      period: "2024.08 ~ 2024.11",
      type: "현업 프로젝트 [KOSA 인증]",
      img: "assets/projects/e-verse.webp",
      items: [
        { t: "React 18 + Vite + Typescript + Tailwind CSS(TailAdmin)" },
        { t: "Tailwind CSS의 Admin Template인 TailAdmin Base로 프론트엔드 개발" },
        { t: "자주 사용하는 UI 공통 컴포넌트화 (Cards, Buttons, Charts, Customs 등) : E-Guard Storybook 참조" },
        { t: "Tailwind CSS 사용하여 클래스 형태의 CSS 적용" },
        { t: "I18Next를 활용한 4개국어 다국어 처리, 4개국 각각의 timezone적용" },
        { t: "Card-ContentsWrapper 구조의 UI 설계 고안, 도입" },
        { t: "Oracle Cloud Infrastructure (OCI) 인스턴스를 활용한 서비스 배포와 관리" },
        { t: '<a href="https://github.com/user-attachments/files/18271431/CSA-23-2024-11.-.pdf">클라우드 인증제 (KACI) 획득 (CSA-23-2024-11)</a>' },
        { t: '개인 기술 블로그 작성글 -<a href="https://hwan2272.notion.site/Card-Children-32c0a5a4cc6a457c8a0f65d83a2f6b31">[해결]프론트엔드 Card 컴포넌트 Children 적용 구조 리뉴얼</a>' },
        { t: '개인 기술 블로그 작성글 -<a href="https://hwan2272.notion.site/JWT-Revoke-Renew-b5272d0aa1c94e689337a09809dc72b9?pvs=74">[회고]JWT 갱신 프로세스 : Revoke? Renew?</a>' },
        { t: '개인 기술 블로그 작성글 -<a href="https://hwan2272.notion.site/OCI-K8S-OKE-111138d113dd80b8b653ef7861aeda77">[해결]OCI K8S : OKE 분산 배포 적용기</a>' },
      ],
      links: [
        { label: "Web Link", href: "http://ateverse.com/auth/login" },
        { label: "Github Link (Private)", href: "https://github.com/atemos01/e-verse-frontend-2.0.git" },
      ],
    },
    {
      id: "devvreco-v2",
      title: "Devvreco : 개인 포트폴리오 사이트 (v.2)",
      period: "2024.04 ~ 2026.09",
      type: "개인 프로젝트",
      img: "assets/projects/devvreco-v2.webp",
      items: [
        { t: "Next.js + Typescript + Tailwind CSS" },
        { t: '<a href="#cl-devvreco">Devvreco (v.3)</a>로 리뉴얼 - Claude Code와 함께 사용성 중심 UI로 개편' },
        { t: "HTML5 시맨틱 태그 (header, nav, section, footer) 사용한 문단 구분" },
        { t: "Next.js 사용하여 SSR 처리" },
        { t: "Tailwind CSS 사용하여 클래스 형태의 CSS 적용" },
        { t: "Storybook 적용으로 인한 컴포넌트 문서화" },
        { t: "Git과 Vercel을 연동하여 배포" },
        { t: '개인 기술 블로그 작성글 -<a href="https://hwan2272.notion.site/62fffe933b334186bf1c2b6b90c59740">[미해결]포트폴리오 사이트 피드백 분석과 리뉴얼 개발과정</a>' },
        { t: '개인 기술 블로그 작성글 -<a href="https://hwan2272.notion.site/UI-CSS-media-856b2b4fa7314ba2abe25ad25a8fd465">[분석]반응형 UI - CSS 미디어쿼리(@media) 분기점 기준</a>' },
      ],
      links: [
        { label: "Web Link", href: "https://hwan2272-devvreco.vercel.app/" },
        { label: "Github Link", href: "https://github.com/hwan2272/devvreco" },
      ],
    },
    {
      title: "HistoryBook : 개인 포트폴리오 사이트 (v.1)",
      period: "2024.01 ~ 2024.04",
      type: "개인 프로젝트",
      img: "assets/projects/historybook.webp",
      items: [
        { t: "React + Typescript + Vite" },
        { t: "HTML5 시맨틱 태그 (header, nav, section, footer) 사용한 문단 구분" },
        { t: "App.css와 Section별 css(stacks.css 등..) 사용하여 각 항목별 디자인" },
        { t: "Material-UI를 사용한 제목(Typography), 영역(Box) 처리" },
        { t: "React-markdown을 사용하여 내부 MD파일 내용으로 PROJECTS 단의 화면 구성" },
        { t: "Vite build로 인한 빠른 build, Vitest 라이브러리를 사용한 테스트코드 작성 시도" },
        { t: "Github Action 적용을 통한, 소스 push에 따른 자동 CI/CD" },
        { t: '개인 기술 블로그 작성글 -<a href="https://hwan2272.notion.site/2-cf6ab4961393407fb3701d3cf990e63c?pvs=74">[해결]포트폴리오 테마 변경하기 (부제: 컬러감 찾기, 부제2: 스타일 찾기)</a>' },
        { t: '개인 기술 블로그 작성글 -<a href="https://hwan2272.notion.site/React-Test-Code-fetch-65a5212d34644ee5b03d317b5041ed1d">[미해결][트러블슈팅] React - Test Code에서 fetch 사용하기 이슈</a>' },
      ],
      links: [
        { label: "Web Link", href: "https://hwan2272.github.io" },
        { label: "Github Link", href: "https://github.com/hwan2272/hwan2272.github.io" },
      ],
    },
    {
      title: "Hdms Camel : 임상연구사업 관리 Saas 플랫폼 HDMS 서비스 Camel버전",
      period: "2023.04 ~ 2024.01",
      type: "현업 프로젝트 [KOSA 인증]",
      img: "assets/projects/hdms-camel.webp",
      items: [
        { t: "React.js 18 + Material-ui 및 React-hookform, yup validation, React-query" },
        { t: "임상연구 도메인의 이해와 Admin, eCrf, PRO, Imaging, Safebox, Community 구현" },
        { t: "ES6, ES8 문법 (Spread 연산자, Object.entries) 사용" },
        { t: "Input, Select 등 HTML 구성 요소들에 대한 공통 컴포넌트화. 이들의 조합 배치로 UI 구성" },
        { t: "React-query를 사용한 CRUD 적용, Zustand를 이용한 상태 관리" },
        { t: "React-Hookform과 yup resolver를 활용한 입력성 화면의 validation 체크" },
        { t: "TinyMCE → SunEditor로 WebEditor 교체" },
      ],
      links: [{ label: "Web Link", href: "https://camel.dataservice.kr" }],
    },
    {
      title: "설힐공-서울의 힐링공원 : 공원정보 사이트",
      period: "2023.01 ~ 2023.02",
      type: "개인 프로젝트",
      img: "assets/projects/seoul-parks.webp",
      items: [
        { t: "React + Redux + TypsScript + JavaScript" },
        { t: "redux store를 활용한 상태저장 관리" },
        { t: "list및 상세View - 서울시api 활용" },
        { t: "상세View내 지도, 파노라마 - 네이버api 활용" },
        { t: "상세View내 주변 음식점,카페 지도 - 카카오api 활용" },
      ],
      links: [
        { label: "Web Link (Close)", href: null },
        { label: "Github Link", href: "https://github.com/hwan2272/react_seoulparks" },
      ],
    },
    {
      title: "아파트청약케어 : 아파트관련 이통사 부가서비스",
      period: "2020.11 ~ 2022.04",
      type: "현업 프로젝트 [KOSA 인증]",
      img: "assets/projects/aptcare.webp",
      items: [
        {
          t: "React.js + Kakao Map API",
          c: [
            { t: "Kakao Map API (지도, 주변정보 등) 를 활용한 아파트 정보, 아파트 청약정보, 아파트 추천, 로그인, 회원가입 프론트엔드 (React.js) 개발" },
            { t: "공공데이터 건축물대장, 실거래가 API 동작에 따른 DB 확인" },
          ],
        },
        { t: "Flutter (WebView)", c: [{ t: "Flutter 별도 APP의 WebView구현과 Flutter Native를 호출할 수 있는 인터페이스 정의" }] },
        {
          t: "Java SpringBoot + MariaDB",
          c: [{ t: "Java SpringBoot (SpringBoot 4) 백엔드단 개발과 로그인 필수 메뉴의 접근을 제어하기 위해 JWT(Json Web Token) + Spring Security 적용" }],
        },
        { t: "Linux CentOS의 기업 내 자체 인프라 - 온 프레미스 (On Premise)" },
        { t: '<a href="https://drive.google.com/file/d/1BYVvk36FxVmqEbxtycwh6hyhtsFsB_T5/view?usp=drive_link">WEB 서버 2대, WAS 서버 2대, DB 서버 1대 형상의 L4를 통한 Round-robin. WEB-WAS 간 Apache ajp (mod_jk) 설정을 통한 서버 간 연동</a>' },
        { t: "타 직군 (기획, 디자인 UI/UX) 담당자 협업 - 개발 방향 논의 결정 및 서비스 내 사용 그래프 rMateChart 라이브러리 선정" },
        { t: "타 직군 (CS, 보안, 마케팅, QA) 담당자 협업 - CS처리, ISMS 관련 요구사항 등" },
        { t: "타 회사 (부동산 114, 리아모어소프트) 컨택" },
      ],
      links: [
        { label: "Web Link", href: "https://aptcare.kr" },
        { label: "Mobile Link", href: "https://app.aptcare.kr" },
      ],
    },
    {
      title: "이통사 부가서비스 6종 : LOP / SPM / 주투 / 슈퍼 / 알파 / PNS",
      period: "2019.09 ~ 2021.08",
      type: "현업 프로젝트 [KOSA 인증]",
      img: "assets/projects/telecom-services.webp",
      items: [
        { t: "Java SpringFramework (Jdk1.8) + JSP, Apache Tomcat" },
        { t: "회사 주력 부가서비스 유지보수 : LOP, SPM, 주투, 슈퍼, 알파, PNS" },
        { t: "2021년 이전 : LOP, SPM, 주투, 슈퍼, 알파, PNS - [부]담당자" },
        { t: "2021년 : 주투, 슈퍼 - [정]담당자 / LOP, SPM, 알파 - [부]담당자" },
        { t: "기획문의 대응, Admin 백오피스 개선 대응, 유지보수" },
        { t: "CS문의 대응, 보안 대응, 예상 매출 산출 등 기획 외 타부서 협업" },
      ],
      links: [{ label: "Web Link (각 서비스 링크는 헥토이노베이션(민앤지) 홈페이지 참조)", href: null }],
    },
    {
      title: "정부위원회 양성평등 관리 시스템 개발 및 파견 SI / SM",
      period: "2013.09 ~ 2016.12",
      type: "현업 프로젝트 [KOSA 미인증]",
      img: "assets/projects/gov-committee.webp",
      items: [
        { t: "Java SpringFramework (eGovFramework) + JSP, Sybase", c: [{ t: "여성가족부 발주 정부위원회 관리 시스템 개발" }] },
        { t: "ASP.NET, C#, Mssql", c: [{ t: "G2R 그룹웨어 운영, 유지보수" }, { t: "KTDS New Neoss시스템 개발" }] },
        {
          t: "Java SpringFramework (eGovFramework) + JSP, Oracle, Mysql",
          c: [{ t: "삼성증권 ITAM 개발" }, { t: "씨스퀘어 TAAP, CAAP 개발" }],
        },
      ],
      links: [{ label: "Web Link (고객사 내부 서비스여서 링크 불가)", href: null }],
    },
  ],

  contacts: [
    { kind: "github", label: "Github", value: "https://github.com/hwan2272", href: "https://github.com/hwan2272" },
    { kind: "gmail", label: "Gmail", value: "hwan2272@gmail.com", href: "mailto:hwan2272@gmail.com", copy: true },
    { kind: "naver", label: "Naver", value: "hwan2230@naver.com", href: "mailto:hwan2230@naver.com", copy: true },
  ],

  copyright: "Copyright ⓒ 2026. hwan2272 All rights reserved.",
};
