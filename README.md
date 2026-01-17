# nukeguys Journal

Obsidian을 기반으로 하는 VitePress 정적 사이트입니다. 개인적인 생각, 노트, 학습 자료를 기록하고 배포합니다.

## 🚀 빠른 시작

### 로컬 개발 환경 실행

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행 (http://localhost:5173)
pnpm docs:dev
```

### 정적 빌드 및 미리보기

```bash
# 빌드
pnpm docs:build

# 빌드 결과물 미리보기
pnpm docs:preview
```

---

## 🛠 배포 가이드 (GitHub Pages + Actions)

레포지토리를 새로 만들거나 옮겼을 때 다음 설정을 완료해야 정상적으로 배포됩니다.

### 1. GitHub Pages 활성화

1. GitHub 저장소의 **Settings > Pages**로 메뉴로 이동합니다.
2. **Build and deployment > Source** 옵션을 **`GitHub Actions`**로 선택합니다.
   - 이 설정을 완료해야 `.github/workflows/deploy.yml`이 정상 작동합니다.

### 2. 커스텀 도메인 설정 (`journal.kkick.xyz`)

#### GitHub 설정

1. **Settings > Pages**의 **Custom domain** 섹션에 `journal.kkick.xyz`를 입력하고 저장합니다.
2. **DNS 확인(Verification)**이 완료되면 **Enforce HTTPS**를 체크합니다.

#### DNS 설정 (예: Cloudflare)

DNS 관리자에서 다음 레코드를 추가해야 합니다.

- **Type**: `CNAME`
- **Name**: `journal`
- **Target**: `<your-github-id>.github.io`
- **Proxy status**: `Proxied` 권장

#### CNAME 파일

- `docs/public/CNAME` 파일은 배포 시 GitHub Pages 설정이 초기화되는 것을 방지합니다. 도메인이 변경되지 않는 한 그대로 유지하십시오.

### 3. 자동 배포

- `main` 브런치에 `git push`를 하면 GitHub Actions가 자동으로 빌드 및 배포를 수행합니다.

---

## 📝 관리 가이드

### 콘텐츠 폴더

- `docs/notes/`: 일반적인 메모와 노트를 관리합니다.
- `docs/learning/`: 학습 로드맵 및 관련 자료를 관리합니다.
- `docs/_inbox/`: 작성 중인 글을 보관합니다. 이 폴더는 빌드 시 자동으로 제외됩니다.

### 사이드바 자동 생성

- `vitepress-sidebar` 플러그인이 적용되어 있습니다. 폴더에 `.md` 파일을 추가하면 사이드바 메뉴에 자동으로 나타납니다.
- 문서 내부의 `# Heading 1`이 메뉴 이름으로 사용됩니다.

### 디자인 수정

- `docs/.vitepress/theme/custom.css`에서 브랜드 컬러와 스타일을 수정할 수 있습니다 (현재 Slate 테마 적용).
