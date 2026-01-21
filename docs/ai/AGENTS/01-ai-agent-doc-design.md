# AI Agent 협업을 위한 문서 설계 방법론

## (AGENTS.md 중심)

AI Agent를 실제 개발 파트너로 활용하기 위해서는
단순한 README나 규칙 나열 문서가 아니라,
에이전트의 추론 범위와 주의력을 설계하는 문서 구조가 필요하다.

이 문서는 AI Agent 친화적인 문서 관리 방법론을 설명하며,
특히 AGENTS.md를 중심으로 한 계층적 문서 설계를 다룬다.

## 1. 왜 문서 구조가 중요한가

LLM 기반 AI Agent는 다음과 같은 특성을 가진다.

- 장기 기억이 없으며, 매 세션마다 제공된 컨텍스트에만 의존한다.
- 모든 정보를 동일한 중요도로 처리하려는 경향이 있다.
- 명시된 규칙보다 암묵적인 패턴을 과도하게 일반화할 수 있다.
- 프롬프트 내에서 가까운 위치의 정보에 더 높은 주의 가중치를 둔다.

따라서 문서는 단순한 설명 수단이 아니라,
에이전트의 추론 공간을 제한하고 방향을 강제하는 도구로 설계되어야 한다.

## 2. AI Agent 친화적인 문서의 기본 원칙

### 2.1 명시성 우선

- "보통 이렇게 한다"와 같은 표현은 피한다.
- 허용 / 금지 / 우선순위를 명확하게 구분한다.
- MUST, SHOULD, MAY와 같은 RFC 2119 키워드를 활용한다.

### 2.2 불변 규칙과 가변 정보를 분리

- 자주 변하지 않는 원칙과
- 작업 중 계속 바뀌는 상태 정보를
  명확히 다른 문서로 관리한다.

### 2.3 가까운 컨텍스트 우선

- 에이전트는 파일 트리 상에서 가까운 정보를 더 신뢰한다.
- 따라서 규칙은 적용 범위에 따라 계층적으로 배치해야 한다.
- 현재 작업 디렉토리의 문서가 가장 높은 우선순위를 가진다.

## 3. 계층적 문서 구조 설계

AI Agent 협업에서 가장 효과적인 구조는
"헌법 + 로컬 매뉴얼" 형태의 계층적 문서 구성이다.

### 3.1 루트 AGENTS.md: 프로젝트 헌법 (Constitution)

루트 디렉토리의 AGENTS.md는
프로젝트 전체를 관통하는 불변의 원칙을 정의한다.

이 문서의 목적은:

- 에이전트가 "이 프로젝트에서 나는 어떤 존재인가"를 이해하게 하는 것
- 모든 하위 작업의 추론 기준을 고정하는 것

포함해야 할 핵심 요소:

- 에이전트 페르소나
  - 숙련도
  - 기본 행동 원칙 (추측 금지, 기존 코드 우선 등)

- 미션과 가치
  - 기술 선택과 구현 판단의 기준
  - 무엇을 우선하고 무엇을 희생하는지 명시

- 전역 기술 스택
  - 프레임워크, 언어, 패키지 매니저
  - 무단 도입을 방지하기 위한 기준선

- 공통 코딩 컨벤션
  - 네이밍, 포맷, 구조 규칙
  - 프로젝트 정체성 유지 목적

- 보안 및 절대 금지 규칙
  - 어떤 경우에도 위반 불가한 규칙
  - 하위 문서가 override할 수 없음을 명시

- 규칙 우선순위
  - 보안 > 아키텍처 > 스타일과 같은 가중치 개념

- 변경 정책
  - 이 문서가 언제, 어떻게 수정될 수 있는지 명시
  - 무분별한 규칙 변경 방지

루트 AGENTS.md는 "참고 문서"가 아니라
"항상 적용되는 기본 전제"로 작성되어야 한다.

### 3.2 서브 AGENTS.md: 로컬 업무 매뉴얼 (Local Manual)

서브 디렉토리의 AGENTS.md는
특정 도메인이나 모듈에 한정된 실무 규칙을 정의한다.

이 문서의 목적은:

- 에이전트가 현재 디렉토리의 맥락을 빠르게 이해하게 하는 것
- 불필요한 전역 추론을 차단하는 것

포함해야 할 핵심 요소:

- 적용 범위와 경계
  - 이 문서가 언제 우선되는지
  - 어떤 전역 규칙은 예외 없이 따라야 하는지

- 로컬 비즈니스 로직
  - 해당 도메인에서만 통용되는 규칙
  - 서버 검증, 상태 변경 조건 등

- 로컬 아키텍처 패턴
  - 반드시 사용해야 하는 패턴
  - 금지된 구조나 접근 방식

- 의존성 및 통신 규칙
  - 참조 가능한 모듈 범위
  - 데이터 흐름 제약

- 테스트 및 Mock 기준
  - 테스트 방식
  - Mock 데이터 위치

- 완료 정의 (Definition of Done)
  - 작업 종료 조건을 명시적으로 고정

서브 AGENTS.md는
"여기서는 이렇게 생각하고 이렇게 행동하라"는
구체적인 작업 지침에 가깝다.

### 3.3 문서 우선순위 충돌 해결

여러 계층의 AGENTS.md가 존재할 때 충돌이 발생할 수 있다.
다음 규칙에 따라 해결한다:

- 서브 AGENTS.md가 루트 AGENTS.md와 충돌할 때:
  - 보안 규칙: 루트가 항상 우선
  - 접근성 규칙: 루트가 항상 우선
  - 구현 세부사항: 서브가 우선 (단, 명시적 override 선언 필요)

- Override 선언 방법:
  서브 문서에서 전역 규칙을 덮어쓸 때는 다음과 같이 명시한다.

```text
  <!-- override: root/naming-convention -->
  이 디렉토리에서는 snake_case 대신 camelCase를 사용한다.
  이유: 외부 API와의 일관성 유지
```

- 충돌 발견 시 에이전트 행동:
  - 에이전트는 충돌을 감지하면 작업을 중단한다.
  - 개발자에게 어떤 규칙을 따를지 확인을 요청한다.
  - 결정된 내용을 DECISIONS.md에 기록한다.

### 3.4 문서 탐색 패턴

에이전트가 관련 AGENTS.md를 효과적으로 찾도록
다음 탐색 패턴을 권장한다:

1. 현재 작업 디렉토리에서 AGENTS.md 검색
2. 발견되지 않으면 상위 디렉토리로 이동
3. 루트 디렉토리에 도달할 때까지 반복
4. 읽은 문서 목록을 세션 메모리에 유지

예시:

```text
작업 위치: /src/api/users/controller.ts
탐색 순서:
1. /src/api/users/AGENTS.md (발견)
2. /src/api/AGENTS.md (발견)
3. /src/AGENTS.md (없음)
4. /AGENTS.md (발견)

세션 메모리: "Read: /AGENTS.md, /src/api/AGENTS.md, /src/api/users/AGENTS.md"
```

에이전트는 세션 시작 시 이 탐색을 자동으로 수행하고,
읽은 문서 목록을 명시적으로 확인해야 한다.

## 4. 불변 규칙과 상태 문서의 분리

### 4.1 AGENTS.md의 역할

- 규칙과 원칙
- 쉽게 변하지 않음
- 에이전트의 행동 기준

### 4.2 PROGRESS.md의 역할

- 현재 작업 상태
- 어디까지 했는지
- 다음에 무엇을 할지

이 둘을 분리하지 않으면,
에이전트는 오래된 상태를 규칙으로 오인할 수 있다.

### 4.3 PROGRESS.md 구조 예시

```markdown
## Current Sprint: API Refactoring

### In Progress

- Task 1: User endpoint migration
  - [완료] Schema 업데이트 완료
  - [진행중] Controller 작성 중
  - [대기] Integration test 작성 예정

### Next Tasks

1. Error handling 표준화
2. Rate limiting 적용
3. API documentation 업데이트

### Blocked Items

- Auth middleware 개선 (보안 리뷰 대기 중)
- Database migration (인프라 팀 승인 필요)

### Notes

- 2024-01-15: POST /users 엔드포인트 성능 이슈 발견, 추후 최적화 필요
```

PROGRESS.md는 매 작업 세션마다 업데이트되며,
완료된 항목은 주기적으로 아카이빙한다.

## 5. 의사결정 기록 (Decision Records)

규칙만으로는 충분하지 않다.
"왜 이렇게 되었는지"를 기록하는 문서가 필요하다.

이를 위해 다음과 같은 문서를 병행하는 것이 효과적이다.

### 5.1 DECISIONS.md (또는 ADR - Architecture Decision Records)

주요 내용:

- 주요 기술/구조적 결정
- 고려했던 대안
- 최종 선택 이유
- 예상되는 트레이드오프

구조 예시:

```markdown
## Decision 003: React Query 도입

### Date

2024-01-10

### Context

서버 상태 관리의 복잡도가 증가하면서
boilerplate 코드가 과도하게 늘어남.
캐싱 전략의 일관성 유지 필요.

### Considered Options

1. Redux + RTK Query
2. React Query
3. SWR
4. 자체 구현

### Decision

React Query 채택

### Rationale

- 러닝 커브가 낮음
- 캐싱 전략이 우리 요구사항과 정확히 일치
- 번들 크기 최소화 (SWR 대비)
- 팀원 대다수가 경험 보유

### Consequences

긍정적:

- 서버 상태 관리 코드 50% 감소 예상
- 자동 refetch로 데이터 신선도 향상

부정적:

- 새로운 의존성 추가
- 기존 fetch 로직 마이그레이션 필요 (2주 소요 예상)

### Status

Accepted

### Notes

Migration guide: /docs/migration/react-query.md
```

이 문서는 에이전트가
기존 결정을 함부로 뒤집지 않도록 하는 안전장치 역할을 한다.

## 6. 에이전트가 문서를 실제로 따르게 만드는 방법

문서를 잘 작성해도,
에이전트가 읽지 않으면 의미가 없다.

### 6.1 세션 초기화 프로토콜

이를 방지하기 위한 운영 전략:

1. 세션 시작 시 문서 읽기를 명시적으로 지시

```text
   "먼저 /AGENTS.md와 현재 디렉토리의 AGENTS.md를 읽고 요약해줘"
```

2. 읽은 내용을 요약하게 하여 실제 인지를 강제

```text
   Agent: "다음 규칙을 확인했습니다:
   - 페르소나: Senior Developer
   - 금지: 추측 금지, 항상 검증
   - 우선순위: 보안 > 성능 > DX"
```

3. 규칙 위반 시 사전 설명과 확인 절차 요구

```text
   Agent: "새로운 라이브러리 'axios-retry' 도입이 필요합니다.
   AGENTS.md에 따르면 전역 기술 스택 변경은 승인이 필요합니다.
   진행하시겠습니까?"
```

이 과정은
문서를 "존재하는 정보"에서
"적용되는 규칙"으로 승격시킨다.

### 6.2 지속적 컨텍스트 유지

긴 세션에서는 에이전트가 초기 규칙을 잊을 수 있다.
다음 방법으로 컨텍스트를 유지한다:

- 주요 작업 전환 시 관련 AGENTS.md 재확인 요청
- 에이전트가 규칙 위반을 하려 할 때 즉시 피드백
- 세션 메모리에 "읽은 문서 목록" 유지

## 7. 문서 버전 관리

AGENTS.md도 코드처럼 변경되며, 이력 관리가 필요하다.

### 7.1 메타데이터 포함

각 AGENTS.md 상단에 다음 정보를 포함한다:

```markdown
<!--
version: 2.1.0
last-updated: 2024-01-15
breaking-changes: none
author: team-lead
-->
```

### 7.2 변경 이력 관리

- CHANGELOG.md에 규칙 변경 내역을 기록한다.
- 중단적 변경(breaking change)은 명시적으로 표시한다.
- 변경 이유와 영향 범위를 함께 문서화한다.

예시:

```markdown
## [2.1.0] - 2024-01-15

### Added

- API error handling 표준 추가

### Changed

- [BREAKING] 함수명 규칙: PascalCase -> camelCase
  - 영향 범위: /src/utils 전체
  - 마이그레이션 스크립트: /scripts/rename-utils.sh

### Deprecated

- legacy fetch wrapper (3.0.0에서 제거 예정)

### Removed

- 없음
```

### 7.3 버전 간 호환성

- 메이저 버전 변경: 이전 규칙과 호환되지 않음
- 마이너 버전 변경: 새 규칙 추가, 기존 규칙 유지
- 패치 버전 변경: 오타 수정, 명확성 개선

## 8. 흔한 안티패턴

### 8.1 규칙 과잉 (Rule Overload)

나쁜 예:

```markdown
## 함수 네이밍 규칙

1. get으로 시작하는 함수는 값을 반환해야 함
2. set으로 시작하는 함수는 void여야 함
3. is/has로 시작하는 함수는 boolean을 반환해야 함
4. handle로 시작하는 함수는 이벤트 핸들러여야 함
   ... (50개 항목)
```

좋은 예:

```markdown
## 네이밍 원칙

- 동사로 시작 (get, set, handle, check 등)
- 의도를 명확히 표현
- 자세한 규칙: /docs/style-guide.md 참조

예외 케이스:

- React 컴포넌트: PascalCase
- 상수: UPPER_SNAKE_CASE
```

### 8.2 암묵적 규칙

나쁜 예:

```markdown
일반적으로 이 패턴을 따릅니다.
가능하면 이렇게 하는 것이 좋습니다.
```

좋은 예:

```markdown
MUST: 모든 API 호출은 ErrorBoundary로 감싸야 함
SHOULD: 3개 이상의 props는 객체로 묶을 것을 권장
MAY: 성능 최적화가 필요한 경우 useMemo 사용 가능
```

### 8.3 상태와 규칙의 혼재

나쁜 예:

```markdown
## AGENTS.md

현재 작업: 로그인 API 구현 중
다음 할 일: 회원가입 기능
```

좋은 예:

```markdown
## AGENTS.md

API 엔드포인트는 반드시 /api/v1 prefix를 가져야 함

## PROGRESS.md

현재 작업: 로그인 API 구현 중
```

### 8.4 맥락 없는 결정

나쁜 예:

```markdown
Zustand를 사용한다.
```

좋은 예:

```markdown
## DECISIONS.md

전역 상태 관리에 Zustand 사용
이유: Redux 대비 boilerplate 90% 감소,
번들 크기 3KB vs 45KB
트레이드오프: 시간여행 디버깅 불가
```

## 9. AI Agent의 일반적인 실패 모드와 대응 전략

AI Agent는 규칙이 충분히 명시되어 있더라도,
특정한 인지적 편향이나 추론 습관으로 인해 오류를 일으킬 수 있다.
이 섹션은 그러한 실패 모드를 사전에 인지하고 대응하기 위한 가이드다.

### 9.1 문서를 읽었지만 적용하지 않는 경우

원인:

- 문서를 참고 정보로만 인식하고, 강제 규칙으로 승격하지 못함
- 세션 초기에 컨텍스트로만 흘려보내는 경우

대응 전략:

- 세션 시작 시 반드시 AGENTS.md 요약을 요구한다.
- 요약이 규칙 중심이 아닐 경우 재요약을 요청한다.
- 규칙 위반 발생 시 즉시 해당 규칙의 위치를 다시 명시한다.

예시:

```text
개발자: "AGENTS.md를 읽고 핵심 규칙 3가지를 나열하세요"
Agent: "1. 추측 금지, 2. 보안 우선, 3. 기존 패턴 준수"
```

### 9.2 규칙을 과도하게 일반화하는 경우

원인:

- 로컬 규칙을 전역 규칙으로 확장 해석
- 특정 예시 코드를 전체 정책으로 오해

대응 전략:

- 서브 AGENTS.md에 적용 범위(Scope Boundary)를 명확히 명시한다.
- "이 디렉토리에서만 적용됨"이라는 문구를 반복적으로 사용한다.
- 전역 규칙과 로컬 규칙을 동일 문단에서 혼합하지 않는다.

나쁜 예:

```markdown
/src/api/AGENTS.md
이 디렉토리에서는 axios 대신 fetch 사용
```

좋은 예:

```markdown
<!-- SCOPE: /src/api 디렉토리에만 적용 -->

이 디렉토리에서만 fetch를 사용한다.
다른 디렉토리는 루트 AGENTS.md의 axios 규칙을 따른다.
```

### 9.3 암묵적 패턴을 만들어내는 경우

원인:

- 일부 코드 예시나 기존 구현을 규칙으로 오인
- 명시되지 않은 관례를 스스로 생성

대응 전략:

- 예시는 반드시 "예시(example)" 또는 "참고(reference)"로 명시한다.
- 규칙과 예시를 동일한 섹션에 혼합하지 않는다.
- 규칙이 아닌 항목에는 MUST / SHOULD / MAY를 사용하지 않는다.

탐지 방법:

```text
개발자: "지금 따르고 있는 규칙의 출처를 명시하세요"
Agent: "AGENTS.md 섹션 3.2에 따라..."
→ 출처가 AGENTS.md나 DECISIONS.md가 아니라면 암묵적 패턴 가능성 높음
```

### 9.4 오래된 결정을 되살리는 경우

원인:

- DECISIONS.md를 참조하지 않고 과거 경험 기반으로 판단
- 이미 폐기되었거나 대체된 결정을 재사용

대응 전략:

- 구조 변경이나 기술 선택 전 DECISIONS.md 확인을 명시적으로 요구한다.
- Deprecated 또는 Superseded 상태를 명확히 표시한다.
- 새로운 결정은 기존 결정을 대체하는 관계를 기록한다.

예시:

```markdown
## Decision 005: Zustand 도입

Status: Accepted
Supersedes: Decision 001 (Redux)

## Decision 001: Redux 사용

Status: Superseded by Decision 005
```

### 9.5 컨텍스트 윈도우 후반부에서 규칙 망각

원인:

- 긴 세션에서 초기 AGENTS.md 내용이 주의력 범위를 벗어남
- 새로운 정보가 계속 추가되면서 초기 규칙의 중요도 하락

대응 전략:

- 주요 작업 전환 시마다 핵심 규칙 재확인 요청
- "현재 따르고 있는 규칙을 나열하라" 주기적 요청
- 중요한 규칙은 세션 중간에 재강조

예시:

```text
개발자: "새 컴포넌트를 작성하기 전, 현재 적용 중인 네이밍 규칙을 확인하세요"
Agent: "PascalCase for components, camelCase for functions 확인했습니다"
```

## 10. 문서 생성 기준 (Documentation Threshold)

문서가 많을수록 항상 좋은 것은 아니다.
과도한 문서화는 오히려 에이전트의 주의력을 분산시킨다.

새로운 AGENTS.md 또는 규칙 문서는
다음 조건 중 하나 이상을 만족할 때만 생성한다.

### 10.1 문서화가 필요한 경우

우선순위별 기준:

1. 안전/보안 관련 (1회 발생해도 즉시 문서화)
2. 동일한 실수가 2회 이상 반복되었을 때
3. 에이전트가 서로 다른 방식으로 구현한 이력이 있을 때
4. 코드 리뷰에서 동일한 설명이 3회 이상 반복될 때
5. 로컬 규칙이 전역 규칙을 오해할 가능성이 높을 때

### 10.2 문서화하지 않는 항목

다음 항목은 문서화하지 않는다:

- 개인 취향 수준의 스타일 선호
- 한 번만 등장한 예외 케이스
- 코드만 봐도 명확한 자명한 규칙
- "함수는 20줄 이내로" 같은 측정 가능하지만 맥락 의존적인 규칙
- "변수명은 의미 있게" 같은 당연한 원칙

### 10.3 문서 정리(Pruning) 기준

6개월간 참조되지 않은 규칙은 아카이빙을 검토한다:

- 실제로 위반된 적이 없는 규칙
- "당연한 이야기"로 전락한 규칙
- 기술 스택 변경으로 더 이상 관련 없는 규칙

문서는 "정보 저장소"가 아니라 "문제 해결 장치"여야 한다.

## 11. 작업 종료 시 에이전트 자가 점검 (Self-check)

에이전트는 작업 완료를 선언하기 전에
다음 항목을 스스로 점검해야 한다.

### 11.1 필수 체크리스트

- 이 변경이 위반한 AGENTS.md 규칙은 없는가?
- 새로운 패턴, 구조, 의존성을 도입했는가?
  - 그렇다면 DECISIONS.md에 기록했는가?
- 이 변경은 현재 디렉토리의 Scope Boundary를 벗어나지 않는가?
- PROGRESS.md의 상태가 최신으로 반영되었는가?

### 11.2 자동화 가능 항목

- git diff로 변경된 파일 범위 확인
- 새 import 문이 있다면 DECISIONS.md 검색
- TODO 주석이 남아있지 않은지 확인
- 테스트 커버리지 확인

### 11.3 에이전트 프롬프트 예시

세션 시작 시 다음을 포함:

```text
작업을 완료했다고 판단하기 전, 다음 체크리스트를 실행하세요:
1. AGENTS.md 규칙 위반 여부
2. 새 의존성/패턴 도입 시 DECISIONS.md 업데이트
3. Scope 범위 준수 여부
4. PROGRESS.md 상태 반영

"완료했습니다" 대신 "체크리스트 결과: ..."로 답변하세요.
```

이 점검은 코드 품질뿐 아니라
문서-규칙-결정 간 일관성을 유지하기 위한 절차다.

## 12. AGENTS.md 버전 변경과 에이전트 호환성

AGENTS.md는 코드와 마찬가지로 진화하며,
버전 변경은 에이전트의 추론에도 영향을 미친다.

### 12.1 Agent Compatibility 원칙

- AGENTS.md v1.x:
  - 기존 세션과 호환 가능
  - 규칙 추가 또는 명확화 수준의 변경

- AGENTS.md v2.0 이상:
  - 이전 규칙과의 호환성이 보장되지 않음
  - 진행 중인 AI 세션은 재시작을 권장

메이저 버전 변경 시,
에이전트는 새로운 세션에서
최신 AGENTS.md를 다시 읽도록 한다.

### 12.2 버전 불일치 탐지 방법

세션 시작 시:

```text
Agent: "AGENTS.md version 2.1.0 확인했습니다"

개발자가 최신 버전(2.2.0)을 알고 있다면:
→ "최신 AGENTS.md를 다시 읽고 변경사항을 요약하세요"
```

자동화:

- AGENTS.md 상단 메타데이터를 항상 먼저 읽게 강제
- 버전 불일치 시 경고 메시지 출력

### 12.3 Breaking Change 대응

AGENTS.md v2.0으로 업그레이드 시:

1. 진행 중인 모든 세션 종료
2. CHANGELOG.md에서 변경 내역 확인
3. 새 세션에서 "v2.0 마이그레이션 가이드 읽기" 먼저 수행
4. 기존 코드가 새 규칙을 위반하는지 점검

마이그레이션 가이드 예시:

```markdown
## AGENTS.md v2.0 Migration Guide

### Breaking Changes

1. 네이밍 규칙: snake_case → camelCase
   - 영향: /src/utils 전체
   - 조치: scripts/rename-utils.sh 실행

2. API 구조: REST → GraphQL
   - 영향: /src/api 전체
   - 조치: DECISIONS.md #007 참조

### 점진적 마이그레이션

- v1.x와 v2.0 동시 지원 기간: 2주
- 마감일: 2024-02-01
```

## 13. 효과 측정

이 방법론의 효과는 다음과 같이 측정할 수 있다.

### 13.1 정성적 지표

- AI가 규칙을 위반한 횟수 (주간 단위)
- 개발자가 AI 출력을 수정한 빈도
- 규칙 문서 업데이트 빈도 (안정화 지표)
- 팀원의 주관적 만족도

### 13.2 정량적 지표

- PR당 평균 리뷰 코멘트 수
- AI가 문서를 참조한 명령 실행 횟수
- 작업 완료 시간 (AI 도입 전후 비교)
- 문서 읽기 명령 vs 실제 규칙 준수율

측정 예시:

```text
Week 1: 규칙 위반 12건, 문서 참조 3회
Week 4: 규칙 위반 2건, 문서 참조 18회
→ 문서 내재화 성공
```

## 14. 방법론의 핵심 요약

- AGENTS.md는 코드 스타일 문서가 아니라 추론 제어 장치다.
- 규칙은 계층적으로 배치하고, 가까운 문서를 우선하게 설계한다.
- 불변 원칙과 가변 상태를 반드시 분리한다.
- Why를 기록하지 않은 규칙은 쉽게 무시된다.
- 문서는 에이전트의 주의력을 필터링하는 역할을 한다.
- 충돌 해결 규칙을 명시하여 모호함을 제거한다.
- 버전 관리로 문서의 진화 과정을 추적한다.
- 에이전트의 실패 모드를 이해하고 사전에 대응한다.
- 과도한 문서화는 오히려 해롭다.
- 작업 종료 시 자가 점검으로 일관성을 유지한다.

이 방법론의 목적은
더 많은 정보를 주는 것이 아니라,
더 적은 정보로 더 정확한 추론을 유도하는 것이다.

## 부록 A: AGENTS.md 템플릿

### A.1 루트 AGENTS.md 템플릿

```markdown
<!--
version: 1.0.0
last-updated: YYYY-MM-DD
breaking-changes: none
-->

# Project Constitution

## Agent Persona

- Role: Senior Full-stack Developer
- Expertise: React, Node.js, TypeScript, PostgreSQL
- Behavior Principles:
  - NEVER guess: 불확실하면 반드시 확인 요청
  - ALWAYS verify: 기존 코드 패턴을 먼저 확인
  - THINK before act: 변경 전 영향 범위 분석

## Mission

우리는 확장 가능한 전자상거래 플랫폼을 구축한다.

우선순위:

1. Security: 모든 결정의 최우선 기준
2. Performance: 사용자 경험의 핵심
3. Developer Experience: 장기 유지보수성

## Tech Stack

- Frontend: React 18 + TypeScript + Vite
- Backend: Node.js + Express + TypeScript
- Database: PostgreSQL 15
- State: Zustand (전역), React Query (서버)

MUST: 새로운 의존성 추가 시 반드시 승인 필요
WHY: 번들 크기 및 보안 취약점 관리

## Coding Conventions

- Language: TypeScript strict mode
- Naming:
  - Components: PascalCase
  - Functions: camelCase
  - Constants: UPPER_SNAKE_CASE
- File structure: Feature-based grouping

## Security Rules (ABSOLUTE)

- NEVER commit secrets or API keys
- NEVER use eval() or dangerouslySetInnerHTML
- ALWAYS validate user input
- ALWAYS use parameterized queries

이 규칙들은 어떤 하위 문서도 override할 수 없다.

## Rule Priority

1. Security (이 문서의 Security Rules 섹션)
2. Architecture (DECISIONS.md 참조)
3. Code Style (이 문서의 Conventions 섹션)

충돌 시: 상위 우선순위가 항상 이긴다.

## Change Policy

이 문서의 변경은:

- Security Rules: 팀 전체 합의 필요
- Tech Stack: 리드 개발자 승인 필요
- Conventions: PR 리뷰로 충분

변경 시 CHANGELOG.md에 기록 필수.
```

### A.2 서브 AGENTS.md 템플릿

```markdown
<!--
version: 1.0.0
scope: /src/features/auth
parent: /AGENTS.md
-->

# Auth Module Guidelines

## Scope

<!-- SCOPE: /src/features/auth 디렉토리에만 적용 -->

이 문서는 /src/features/auth 디렉토리 내에서만 적용된다.
루트 AGENTS.md의 Security Rules는 예외 없이 따른다.
다른 디렉토리는 각자의 AGENTS.md 또는 루트 규칙을 따른다.

## Local Business Rules

- 모든 인증 로직은 서버 검증 필수
- 토큰은 httpOnly 쿠키에만 저장
- 비밀번호는 클라이언트 측에서 해싱 금지

## Architecture Pattern

MUST use:

- AuthContext for global auth state
- useAuth hook for component access
- authService for all API calls

NEVER:

- 직접 localStorage 접근
- 컴포넌트에서 직접 API 호출

## Dependencies

Allowed imports:

- @/lib/api (API client)
- @/hooks/useToast (에러 표시)

Forbidden imports:

- @/features/admin (권한 분리)

## Testing

- Unit: authService 모든 메서드
- Integration: 로그인 플로우 E2E
- Mock: /mocks/auth.ts 사용

## Definition of Done

- [ ] 서버 검증 로직 구현
- [ ] 클라이언트 에러 핸들링
- [ ] 토큰 갱신 로직 테스트
- [ ] 로그아웃 시 정리 확인
```

### A.3 PROGRESS.md 템플릿

```markdown
# Project Progress Tracker

Last updated: YYYY-MM-DD HH:MM

## Current Sprint: Sprint Name

### In Progress

- [Task ID] Task name
  - [완료] Subtask 1
  - [진행중] Subtask 2 (담당: Agent/Developer)
  - [대기] Subtask 3

### Up Next

1. Task priority 1
2. Task priority 2
3. Task priority 3

### Completed This Sprint

- [YYYY-MM-DD] Task name (link to PR)

### Blocked

- Task name
  - Blocker: 구체적인 블로킹 이유
  - Waiting for: 누구/무엇을 기다리는지
  - ETA: 예상 해결 시점

### Notes & Observations

- YYYY-MM-DD: 발견한 이슈나 개선 아이디어
```

### A.4 DECISIONS.md 템플릿

```markdown
# Architecture Decision Records

## Decision XXX: 결정 제목

### Date

YYYY-MM-DD

### Status

Proposed | Accepted | Deprecated | Superseded

### Context

어떤 상황에서 이 결정이 필요했는가?
어떤 문제를 해결하려고 하는가?

### Considered Options

1. Option A
   - Pros: ...
   - Cons: ...
2. Option B
   - Pros: ...
   - Cons: ...

### Decision

최종 선택: Option X

### Rationale

왜 이 옵션을 선택했는가?

- Reason 1
- Reason 2

### Consequences

긍정적 영향:

- ...

부정적 영향/트레이드오프:

- ...

### References

- 관련 문서 링크
- 참고한 아티클/논의

### Notes

추가 메모나 마이그레이션 가이드
```

## 부록 B: 실전 체크리스트

### 프로젝트 초기 설정

- [ ] 루트 AGENTS.md 작성 (페르소나, 미션, 기술 스택)
- [ ] PROGRESS.md 초기화
- [ ] DECISIONS.md 생성 (첫 번째 기술 스택 결정 기록)
- [ ] .gitignore에 임시 파일 규칙 추가
- [ ] CHANGELOG.md 초기화

### 새 기능 개발 시작

- [ ] 해당 디렉토리의 AGENTS.md 확인 (없으면 생성 고려)
- [ ] PROGRESS.md에 작업 등록
- [ ] 에이전트에게 관련 AGENTS.md 읽기 지시
- [ ] 규칙 요약 확인받기
- [ ] 페르소나 확인 ("당신의 역할을 설명하세요")

### 코드 리뷰 전

- [ ] AGENTS.md 규칙 준수 확인
- [ ] 새로운 패턴 도입 시 DECISIONS.md 업데이트
- [ ] PROGRESS.md 상태 업데이트
- [ ] 에이전트 자가 점검 체크리스트 실행 확인

### 주간 회고

- [ ] 규칙 위반 빈도 확인
- [ ] 불필요한 규칙 제거 검토
- [ ] 암묵적 규칙 → 명시적 규칙 전환 필요성 평가
- [ ] 6개월 이상 미참조 문서 아카이빙 검토

### 버전 업그레이드 시

- [ ] CHANGELOG.md 업데이트
- [ ] 메이저 버전 변경 시 세션 재시작
- [ ] 마이그레이션 가이드 작성 (Breaking Change 시)
- [ ] 팀원에게 변경사항 공지

## 부록 C: 에이전트 페르소나 검증 프로토콜

세션 시작 시 페르소나 확인 절차:

```text
개발자: "당신의 역할과 제약사항을 설명하세요"

에이전트 (기대 응답):
"저는 Senior Full-stack Developer 역할입니다.
- 불확실한 경우 추측하지 않고 확인을 요청합니다
- 기존 코드 패턴을 먼저 확인하고 따릅니다
- 변경 전 영향 범위를 분석합니다
- 보안을 최우선으로 합니다"

→ AGENTS.md의 페르소나 섹션과 일치하는지 확인
→ 불일치 시 재독 요청
```

이 검증은 에이전트가 문서를 단순히 읽은 것이 아니라
내재화했는지 확인하는 과정이다.

## 부록 D: 규칙 충돌 이력 관리

프로젝트가 성숙하면 규칙 충돌이 반복될 수 있다.
이를 추적하기 위해 CONFLICTS.md를 고려한다.

### CONFLICTS.md 템플릿

```markdown
# Rule Conflict History

## 2024-01-20: 네이밍 규칙 충돌

### Context

- 충돌: 루트는 camelCase, /api는 snake_case 요구
- 위치: /src/api/users/controller.ts

### Resolution

- 결정: API 디렉토리는 외부 스펙 준수를 위해 snake_case 유지
- 근거: 외부 API 문서와 일관성 유지 필요

### Action Taken

- /src/api/AGENTS.md에 명시적 override 추가
- DECISIONS.md에 Decision #008로 기록

### Prevention

- 루트 AGENTS.md에 "API 디렉토리는 예외" 명시

## 2024-01-25: 테스트 전략 충돌

### Context

- 충돌: 루트는 Jest, /legacy는 Mocha 사용 중
- 위치: /src/legacy/utils/

### Resolution

- 결정: Legacy 코드는 점진적 마이그레이션, 당분간 Mocha 유지
- 근거: 전체 테스트 재작성 리소스 부족

### Action Taken

- /src/legacy/AGENTS.md에 임시 예외 규칙 추가
- PROGRESS.md에 마이그레이션 태스크 등록 (Q2 2024)

### Prevention

- 마이그레이션 완료 시 이 예외 규칙 제거 계획
```

충돌 이력을 관리하면:

- 동일한 충돌의 재발을 방지한다
- 예외 규칙의 맥락을 보존한다
- 장기적인 문서 개선 방향을 파악할 수 있다

## 맺음말

이 방법론은 완벽한 해답이 아니라
현장에서 검증된 실용적 접근법의 모음이다.

프로젝트의 규모, 팀 구성, 기술 스택에 따라
유연하게 조정하여 사용하기를 권장한다.

핵심은:

- 에이전트를 통제 대상이 아닌 협력 파트너로 대하되
- 명확한 경계와 규칙으로 신뢰를 구축하는 것이다.

문서는 에이전트에게 "무엇을 하라"가 아니라
"어떻게 생각하라"를 가르치는 도구다.
