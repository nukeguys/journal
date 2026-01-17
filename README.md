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
- `docs/learn/`: 학습 로드맵 및 관련 자료를 관리합니다.
- `docs/_inbox/`: 작성 중인 글을 보관합니다. 이 폴더는 빌드 시 자동으로 제외됩니다.

### 사이드바 자동 생성

- `vitepress-sidebar` 플러그인이 적용되어 있습니다. 폴더에 `.md` 파일을 추가하면 사이드바 메뉴에 자동으로 나타납니다.
- 문서 내부의 `# Heading 1`이 메뉴 이름으로 사용됩니다.

### 디자인 수정

- `docs/.vitepress/theme/custom.css`에서 브랜드 컬러와 스타일을 수정할 수 있습니다 (현재 Slate 테마 적용).

---

## 💜 Obsidian 연동 가이드

이 프로젝트는 Obsidian을 기본 에디터로 사용하도록 최적화되어 있습니다.

### 1. 보관소(Vault) 열기

Obsidian에서 **`docs/` 폴더를 새로운 보관소(Vault)로** 열어주세요. 프로젝트 루트가 아닌 `docs/` 폴더를 열어야 사이트 구조와 일치하는 깔끔한 환경이 구성됩니다.

### 2. 탐색기 최적화 (hide-files 스니펫)

VitePress 작동에 필요한 `index.md` 파일과 `public/` 폴더 등을 탐색기에서 숨겨 쾌적한 작업 환경을 제공합니다.

- **활성화 방법**: Obsidian 설정 > Appearance > CSS snippets 섹션에서 **`hide-files`** 스니펫을 켬(On) 상태로 유지해 주세요.
- **설정 내용**: `docs/.obsidian/snippets/hide-files.css` 파일에 다음 내용이 작성되어 있습니다. 만약 파일이 없다면 새로 만들어서 붙여넣으세요.

```css
/* index.md 파일을 포함하는 탐색기 항목 전체를 숨깁니다. */
.tree-item:has(> .nav-file-title[data-path$="index.md"]),
.tree-item:has(> .nav-file-title[data-path$="/index.md"]),
.tree-item:has(> .tree-item-self[data-path$="index.md"]),
.tree-item:has(> .tree-item-self[data-path$="/index.md"]) {
  display: none !important;
}

/* public 폴더를 포함하는 탐색기 항목 전체를 숨깁니다. */
.tree-item:has(> .nav-folder-title[data-path="public"]),
.tree-item:has(> .nav-folder-title[data-path$="/public"]) {
  display: none !important;
}
```

### 3. 링크 작성 방법

Obsidian 스타일의 위키링크와 표준 마크다운 링크를 모두 지원합니다.

- **위키링크**: `[[문서명]]` 또는 `[[문서명|별칭]]` 형식을 사용하세요.
  - 파일명에 공백이 있어도 정상적으로 인식됩니다.
  - 다른 폴더의 문서를 링크할 때는 `[[../learning/AI/로드맵]]` 처럼 상대 경로를 쓰거나 `[[/learning/AI/로드맵]]` 처럼 루트 기준 경로를 쓰는 것이 안전합니다.
- **표준 마크다운 링크**: `[텍스트](경로)` 형식도 당연히 지원됩니다.
- **이미지**: `![[이미지.png]]` 또는 `![이미지](경로)` 형식을 모두 사용할 수 있습니다.
