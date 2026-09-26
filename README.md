# hwan2272 Devvreco

박정환 포트폴리오 사이트 (빌드 과정 없는 정적 HTML/CSS/JS)

## 구조

```
index.html      페이지 뼈대
css/style.css   스타일 (라이트/다크 테마)
js/data.js      모든 콘텐츠 (About, Skills, Projects, Contacts) ← 내용 수정은 여기서
js/main.js      렌더링 및 인터랙션
```

## 로컬 실행

```bash
python -m http.server 5173
```

http://localhost:5173 접속

## 배포

정적 파일이므로 Vercel / GitHub Pages / Netlify 에 폴더 그대로 올리면 됩니다.
