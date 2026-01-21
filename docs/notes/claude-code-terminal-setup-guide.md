# Claude Code를 위한 macOS 터미널 환경 구축 가이드

## 전제조건

이 가이드는 다음 환경을 기준으로 작성되었습니다:

- **iTerm2** 설치됨
- **Zsh** + **oh-my-zsh** 설치됨
- **powerlevel10k** 테마 적용됨
- **tmux** 설치 예정 (가이드에서 다룸)

> 아직 설치하지 않으셨다면:
>
> - [iTerm2 다운로드](https://iterm2.com/)
> - [oh-my-zsh 설치](https://ohmyz.sh/)
> - [powerlevel10k 설치](https://github.com/romkatv/powerlevel10k)

## 1. iTerm2 설정

### Profiles → Terminal

- **Scrollback lines**: `100000`
  - Unlimited는 메모리 과다 사용 가능
  - 100,000줄이면 Claude 출력에 충분하며 안정적
- **Silence bell**: ✅ 체크
  - Agent 작업 중 비프음 방지

## 2. powerlevel10k 설정

`~/.p10k.zsh` 파일을 열어 다음 내용을 찾아 수정:

```zsh
# 파일 열기
vim ~/.p10k.zsh
# 또는
code ~/.p10k.zsh
```

### 2.1 Instant Prompt

```zsh
typeset -g POWERLEVEL9K_INSTANT_PROMPT=verbose
```

- shell 시작 속도 개선
- verbose → 문제 있으면 로그 표시

### 2.2 Git status async (중요)

```zsh
typeset -g POWERLEVEL9K_VCS_GIT_HOOKS=(
  vcs-detect-changes
  git-untracked
  git-aheadbehind
)
```

- git status 비동기 처리
- 대형 repo에서도 프롬프트 멈춤 방지

### 2.3 Prompt 구성

#### LEFT prompt (필요한 정보만 표시)

```zsh
typeset -g POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(
  dir          # 현재 디렉토리
  vcs          # git 정보
  newline      # 줄바꿈
  prompt_char  # > 프롬프트
)
```

- 기본 설정에는 시간, 상태 아이콘 등 불필요한 요소가 많음
- Claude 출력에 집중하기 위해 최소화

#### RIGHT prompt (완전히 비활성화)

```zsh
typeset -g POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS=()
```

- 오른쪽 프롬프트는 긴 명령어 입력 시 방해됨
- 빈 배열 `()`로 설정하여 완전히 제거

### 2.4 Transient Prompt

```zsh
typeset -g POWERLEVEL9K_TRANSIENT_PROMPT=always
```

- 이전 명령 프롬프트 간소화
- Claude 출력/로그 가독성 향상

**설정 적용:**

```zsh
source ~/.zshrc
# 또는 터미널 재시작
```

## 3. tmux 설치 및 설정

### 3.1 설치

```zsh
brew install tmux
```

### 3.2 기본 개념

- **Session**: 작업 단위 (터미널 닫아도 유지)
- **Window**: 탭
- **Pane**: 화면 분할
- **Prefix**: tmux 명령 시작 키 → `Ctrl + a`

### 3.3 ~/.tmux.conf

```zsh
##### Prefix
set -g prefix C-a
unbind-key C-b
bind-key C-a send-prefix

##### 성능 최적화
set -s escape-time 0

##### Pane 이동 (vim 스타일)
bind-key h select-pane -L
bind-key j select-pane -D
bind-key k select-pane -U
bind-key l select-pane -R

##### Pane 분할
bind-key | split-window -h
bind-key - split-window -v

##### Pane 크기 조절
bind-key -r H resize-pane -L 5
bind-key -r J resize-pane -D 5
bind-key -r K resize-pane -U 5
bind-key -r L resize-pane -R 5

##### Pane 위치 교체
bind-key '{' swap-pane -U
bind-key '}' swap-pane -D

##### Mouse & scroll
set -g mouse on
set -g history-limit 100000
setw -g mode-keys vi

##### 클립보드 연동 (macOS)
bind-key -T copy-mode-vi MouseDragEnd1Pane send-keys -X copy-pipe-and-cancel "pbcopy"
bind-key -T copy-mode-vi Enter send-keys -X copy-pipe-and-cancel "pbcopy"

##### 창 크기 변경 대응
set -g aggressive-resize on

##### Reload
bind-key r source-file ~/.tmux.conf \; display "tmux reloaded"
```

설정 적용:

```zsh
tmux source-file ~/.tmux.conf
```

### 3.4 기본 조작법

#### Session 관리

```zsh
# Detach (세션 유지한 채 빠져나오기)
prefix → d

# 세션 목록
tmux ls

# 다시 접속
tmux attach
```

#### Pane 조작

```zsh
# 분할
prefix → |   # 좌/우 분할
prefix → -   # 상/하 분할

# 이동
prefix → h/j/k/l

# 크기 조절
prefix → H/J/K/L

# 위치 교체 (중요!)
prefix → {   # 위/왼쪽과 교체
prefix → }   # 아래/오른쪽과 교체

# 닫기
exit
```

#### 스크롤 & 검색

```zsh
# Scroll mode 진입
prefix → [

# 조작
j/k         # 이동
Ctrl+u/d    # 반 페이지
/           # 검색
n/N         # 다음/이전 검색 결과
q           # 종료
```

## 4. Claude Code 전용 세션 구성

### 4.1 고정 세션 스크립트

`~/.tmux/scripts/claude.sh`

```bash
#!/usr/bin/env bash

SESSION="claude"

tmux has-session -t $SESSION 2>/dev/null
if [ $? -eq 0 ]; then
  tmux attach -t $SESSION
  exit 0
fi

tmux new-session -d -s $SESSION

# 좌우 분할 (오른쪽 35%)
tmux split-window -h -p 35 -t $SESSION

# 왼쪽 pane 상/하 분할 (아래 30%)
tmux select-pane -t 0
tmux split-window -v -p 30

# Claude pane 포커스
tmux select-pane -t 0

tmux attach -t $SESSION
```

```zsh
chmod +x ~/.tmux/scripts/claude.sh
```

### 4.2 프로젝트별 세션 스크립트 (선택)

`~/.tmux/scripts/claude-here.sh`

```bash
#!/usr/bin/env bash

# 현재 디렉토리명을 세션명으로 사용
SESSION_NAME=$(basename "$PWD" | sed 's/[^a-zA-Z0-9_-]/_/g')

if tmux has-session -t "$SESSION_NAME" 2>/dev/null; then
  tmux attach -t "$SESSION_NAME"
  exit 0
fi

tmux new-session -d -s "$SESSION_NAME" -c "$PWD"

# 레이아웃 구성
tmux split-window -h -p 35 -c "$PWD"
tmux select-pane -t 0
tmux split-window -v -p 30 -c "$PWD"

# Claude pane 포커스
tmux select-pane -t 0

tmux attach -t "$SESSION_NAME"
```

```zsh
chmod +x ~/.tmux/scripts/claude-here.sh
```

### 4.3 alias 설정

`~/.zshrc`에 추가:

```zsh
# 고정 세션 (어디서든 동일한 claude 세션)
alias claude-tmux="~/.tmux/scripts/claude.sh"

# 프로젝트별 세션 (현재 디렉토리 기준)
alias claude-here="~/.tmux/scripts/claude-here.sh"
```

```zsh
source ~/.zshrc
```

### 4.4 사용법

```zsh
# 방법 1: 고정 세션
claude-tmux

# 방법 2: 프로젝트별 세션
cd ~/projects/my-app
claude-here
```

#### 결과 레이아웃

```zsh
┌──────────────────┬──────────┐
│ Claude           │          │
│ (Main)           │  Tests   │
│                  │  Logs    │
├──────────────────┤          │
│ git diff         │          │
│ Commands         │          │
└──────────────────┴──────────┘
```

## 5. 트러블슈팅

### tmux 설정이 적용 안 돼요

```zsh
# 설정 다시 로드
tmux source-file ~/.tmux.conf

# 또는 tmux 재시작
tmux kill-server
```

### 클립보드 복사가 안 돼요

```zsh
# pbcopy 확인
which pbcopy

# tmux에서 마우스로 선택 → 자동 복사
# 또는 copy mode에서 Enter
```

### Escape 키가 느려요

```zsh
# ~/.tmux.conf에 있는지 확인
grep "escape-time" ~/.tmux.conf

# 없으면 추가 후 reload
```

## 최종 정리

이 환경의 핵심 장점:

- ✅ **세션 유지**: 터미널이 닫혀도 작업 계속
- ✅ **멀티뷰**: Claude, 코드, 테스트를 동시에 확인
- ✅ **빠른 프롬프트**: Git 대형 repo에서도 멈춤 없음
- ✅ **긴 출력 처리**: 100,000줄 스크롤백으로 안정적
- ✅ **클립보드 연동**: 코드 복사가 자연스러움

### 일반적인 워크플로우

1. **시작**: `claude-here` 또는 `claude-tmux`
2. **Pane 0**: Claude Code 실행
3. **Pane 1**: `git diff`, 수동 명령
4. **Pane 2**: 테스트, 로그 모니터링
5. **중단**: `prefix → d` (Detach)
6. **재개**: `tmux attach`
