# Devvreco - 포트폴리오 사이트 (v.3)

## 개요

- 나만의 포트폴리오 사이트 (v.3)
- 직접 구현한 [Devvreco v.2](https://github.com/hwan2272/devvreco)를 Claude Code와 함께 리뉴얼
- HTML5 + CSS3 + Vanilla JavaScript로 구성 (빌드 과정 없는 정적 사이트)
- 콘텐츠를 `js/data.js` 한 파일로 분리하여 내용 수정 시 화면 코드 수정 불필요
- 다크 모드, 반응형 레이아웃, 키보드 접근성 적용
- 프로젝트 필터, 펼치기/접기, 스크롤 연동 목차, 시연 영상·링크 모달
- Git Feature Branch Push 후 Main Branch Merge를 통한 Vercel 자동 배포
- https://hwan2272-cl-devvreco.vercel.app

## 사용한 라이브러리

```
없음 (Vanilla JavaScript)
Pretendard - 웹폰트 (CDN)
```

## 로컬 실행

```
python -m http.server 5173
```

http://localhost:5173 접속

## 주요 폴더 및 리소스 구조 설명

```
 index.html - 페이지 뼈대 (header, section, footer, 모달)

 css
  └──style.css - 전체 스타일 (라이트/다크 테마 토큰, 반응형)

 js
  ├──data.js - 사이트 콘텐츠 데이터 (내용 수정은 이 파일만)
  │    ├──profile - 간단 자기소개, 경력 시작년도, v.2 ↔ v.3 안내 문구
  │    ├──skills - 사용하는 기술 스택 소개
  │    ├──projects - 수행한 프로젝트들의 정보 (썸네일, 시연 영상, 링크)
  │    └──contacts - 연락처 정보 (github, gmail, naver)
  │
  └──main.js - data.js를 읽어 화면을 그리고 인터랙션 처리
       (필터, 펼치기/접기, 목차, 테마 전환, 이미지·링크 모달)

 assets
  └──projects - 프로젝트 썸네일 이미지 (WebP) 및 시연 GIF
```

## 콘텐츠 수정 방법

- `js/data.js`만 수정 후 push하면 자동 배포
- 문자열 안의 `<a href="...">`는 링크로 표시 (`#프로젝트id`는 페이지 내 프로젝트로 이동)
- 프로젝트에 `demo: "주소"`를 넣으면 "시연 영상" 버튼 자동 생성
- 링크 이름에 `(Private)`가 포함되면 회색 비활성 버튼으로 표시
