# 프론트엔드 개발자를 위한 AI 학습 로드맵

## 1단계: AI & LLM 기초 개념 (2-3주 소요)

### 1단계 - 주요 목표

AI가 무엇인지, LLM이 무엇인지 명확히 이해하고, 어떻게 동작하는지 기본 원리를 파악합니다.

### 1단계 - 핵심 내용

- **AI, ML, 딥러닝, LLM 개념 차이**: 각 용어의 정의와 상호 관계를 명확히 이해합니다. (1시간)
- **LLM의 기본 동작 원리**: 트랜스포머 아키텍처의 간략한 이해(Self-Attention의 핵심 아이디어), 토큰화, 확정적 예측이 아닌 확률적 예측의 개념. (2시간)
- **프롬프트 엔지니어링 기초**: LLM을 효과적으로 활용하기 위한 기본적인 프롬프트 작성 기법(few-shot, zero-shot, 역할 부여 등). (3시간)
- **LLM의 활용 분야**: 텍스트 생성, 요약, 번역, 질의응답, 분류 등 LLM이 할 수 있는 주요 작업들을 알아봅니다. (2시간)

### 1단계 - 실습

- Python 개발 환경 설정(VS Code + Python). (1시간)
- 간단한 Python 스크립트 작성 및 실행 연습. (1시간)
- OpenAI API(또는 무료 LLM API) 키 발급 및 기본적인 API 호출을 통한 Prompt Engineering 실습. (주말 2시간)
  - **변경점**: 가능하면 이 단계에서 Node.js/TypeScript 환경도 함께 설치하여 프론트엔드 개발 환경에서 AI API를 호출하는 맛을 봅니다. (예: `fetch` 사용)

## 2단계: LLM 핵심 활용 & Fine-tuning (3-4주 소요)

### 2단계 - 주요 목표

LLM을 단순히 질문하는 것을 넘어, 특정 목적에 맞게 활용하고 성능을 개선하는 방법을 이해합니다.

### 2단계 - 핵심 내용

- **프롬프트 엔지니어링 심화**: Chain-of-Thought, CoT-SC, RAG(Retrieval Augmented Generation) 개념 및 중요성. (3시간)
- **LLM Fine-tuning의 개념**: 왜 Fine-tuning이 필요한지, 전체 모델 학습이 아닌 PEFT(Parameter-Efficient Fine-Tuning)의 개념 이해. (2시간)
- **임베딩(Embeddings)**: 텍스트를 벡터 공간으로 표현하는 이유와 그 활용(유사도 검색 등). (2시간)

### 2단계 - 실습

- **RAG 기초 실습**: 간단한 검색 기반 질의응답 시스템 구현 (예: 특정 문서 내용을 요약하거나 질문에 답변하는 시스템). LangChain 또는 LlamaIndex의 기본적인 사용법을 활용하여 로컬 문서 검색을 통한 RAG 구현. (주말 4시간 + 주중 1시간)
- **Hugging Face Transformers 라이브러리 탐색**: 간단한 예제를 통해 모델 로드, 토크나이저 사용법 등 살펴보기. (2시간)
  - **변경점**: 기존 Python 기반 RAG 실습 외에, Node.js/TypeScript 환경에서 Vercel AI SDK와 연동하여 RAG를 구현하는 시도를 해봅니다. 특히 Next.js API Routes를 활용한 백엔드 구성 방식을 익힙니다. (선택 사항이지만 강력 추천)

## 3단계: AI 에이전트, Function Calling & Generative UI (4-5주 소요)

### 3단계 - 주요 목표

LLM 기반 에이전트의 개념을 이해하고, 외부 도구와 연동하는 Function Calling과 Generative UI 개념을 익혀 실제 프론트엔드 환경에서 구현합니다.

### 3단계 - 핵심 내용

- **AI 에이전트의 구성 요소**: Planning, Tool Use, Memory, Reflection 개념 이해. (3시간)
- **Function Calling / Tool 사용**: LLM이 외부 도구(API, SQL 등)를 호출하는 방식 이해. (2시간)
- **Generative UI 개념 및 활용**: LLM이 데이터를 넘겨주는 것을 넘어, 직접 UI 컴포넌트나 구조를 생성/제시하는 방식 이해. 프론트엔드 개발자로서 Generative UI가 UX에 미칠 잠재적 영향력 분석. (3시간)
- **Vercel AI SDK 개요**: SDK가 프론트엔드에서 LLM과의 상호작용을 어떻게 단순화시키는지, 스트리밍, Hook 등 주요 기능 이해. (2시간)

### 3단계 - 실습

- **Function Calling 에이전트 구현**: Vercel AI SDK(또는 LangChain.js / LlamaIndex.js)를 사용하여, LLM이 외부 API(예: 날씨 정보, 주식 가격 등 가상의 API)를 호출하는 간단한 에이전트를 구축합니다. (주말 4시간 + 주중 1시간)
- **Generative UI 기초 실습**:
  - **Vercel AI SDK와 함께 Generative UI 구현**: LLM이 JSON 형식의 UI 컴포넌트를 반환하면, 이를 React/Next.js 컴포넌트로 렌더링하는 예제를 만듭니다. `use-chat` 훅과 `render` 함수 등을 활용.
  - 예: "오늘의 날씨를 보여줘" → LLM이 `{'component': 'WeatherCard', 'props': {'location': 'Seoul', 'temp': '20C'}}` 같은 JSON을 생성하면 프론트엔드에서 `WeatherCard` 컴포넌트로 렌더링. (주말 4시간 + 주중 3시간)

## 4단계: 고급 연동 & 미니 프로젝트 (2-3주 소요)

### 4단계 - 주요 목표

학습한 내용을 바탕으로 프론트엔드 개발 강점을 살린 AI 활용 아이디어를 구체화하고, 작은 미니 프로젝트를 완성합니다.

### 4단계 - 핵심 내용

- **프론트엔드와 AI 에이전트 연동 심화**: Next.js API Routes, Vercel Edge Functions를 활용한 LLM 애플리케이션 백엔드 구축 및 배포 전략.
- **LLM 기반 서비스의 UX/UI 고려사항**: LLM의 응답 속도, 불확실성, 에러 처리 등을 사용자 경험에 어떻게 반영할 것인가. (2시간)

### 4단계 - 실습

- **프론트엔드 중심 미니 프로젝트**: 앞서 배운 Generative UI와 Function Calling을 결합하여, 사용자의 의도에 따라 동적으로 UI를 생성하고 필요한 외부 정보를 가져오는 웹 앱을 개발합니다.
  - **아이디어 예시**:
    - "여행 계획 도우미": LLM과 대화하며 여행지를 추천받고, 추천받은 장소의 날씨 정보를 외부 API로 가져와 UI로 보여주며, 근처 인기 식당 리스트도 UI 컴포넌트로 제시.
    - "개인화된 대시보드": 사용자 입력에 따라 주식 차트, 할 일 목록, 뉴스 피드 등 다양한 위젯을 동적으로 생성하고 배치.
  - Vercel 플랫폼에 배포까지 시도하여 실제 운영 환경 경험. (주말 4시간 \* 2회 + 주중 4시간)
- **학습 내용 정리 및 다음 단계 구상**: 학습하며 어려웠던 점, 더 깊이 파고들고 싶은 분야 정리. (2시간)

## 관련 주제 및 심화 학습 (선택 사항)

- **웹 컴포넌트 / Design System 생성**: Generative AI를 활용하여 디자인 시스템에 기반한 웹 컴포넌트(React, Vue 등) 코드를 자동으로 생성하거나, 디자인 토큰을 기반으로 UI를 제안하는 연구.
- **AI 기반 코드 어시스턴트**: GitHub Copilot, Cursor 등 AI 기반 코드 어시스턴트의 동작 방식 이해 및 활용. (프론트엔드 코드 생성, 버그 수정 등)
- **Image Generation / UI Prototyping (멀티모달)**: DALL-E, Midjourney 같은 이미지 생성 모델을 활용하여 UI 스케치나 와이어프레임을 생성하는 툴 연동. (텍스트 프롬프트 → UI 이미지)
- **TensorFlow.js / WebAssembly**: 브라우저에서 직접 AI 모델을 실행하여 더 빠른 응답성과 오프라인 기능을 제공하는 방법. (예: 온디바이스 텍스트 요약, 이미지 분류 등)
- **LLM 보안 및 개인정보 보호**: 프론트엔드에서 LLM API를 사용할 때 발생할 수 있는 보안 취약점(Prompt Injection 등) 및 개인정보 처리 문제에 대한 이해.
- **LangChain.js / LlamaIndex.js**: Python 생태계와 유사하게 JavaScript/TypeScript 환경에서 LLM 애플리케이션을 개발할 수 있도록 돕는 프레임워크. Vercel AI SDK와 상보적으로 활용 가능.
- **LLM 기반의 테스트 자동화**: LLM이 사용자 시나리오를 이해하고 테스트 케이스를 생성하거나, UI 테스트 코드를 작성하는 방법을 연구.

## 학습 팁

- **Next.js와 React에 집중**: 프론트엔드 역량을 살린다면 Next.js와 React 기반으로 학습하는 것이 Vercel AI SDK 및 Generative UI 활용에 가장 효과적입니다.
- **실제 문제 해결**: 작은 회사나 개인 프로젝트에서 AI를 활용할 수 있는 실제 프론트엔드 문제를 찾아보고 해결해보는 것이 동기 부여에 좋습니다.
- **최신 정보 습득**: AI 분야는 빠르게 변화하므로, Vercel 블로그, AI 관련 뉴스레터, 주요 컨퍼런스 자료 등을 꾸준히 살펴보는 것이 중요합니다.
