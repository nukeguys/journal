# AI/ML 6개월 학습 커리큘럼

- **대상:** 웹 프론트엔드 개발자
- **목표:** AI/ML 교양 + 기초 이해 → LLM/AI를 제품에 합리적으로 활용

## 전체 설계 원칙

- 수학/이론은 **직관 중심**, 증명 최소화
- "왜 이 기술이 등장했는가"를 항상 함께 학습
- 고전 ML은 **LLM을 잘 쓰기 위한 사고방식 습득** 목적
- 매 주차마다 **이해 목표 + 참고 자료** 명확히

## Phase 1. AI 개론 & 기초 정렬 (Week 1–4)

### Week 1 — AI란 무엇인가?

**주제:**

- AI의 정의와 지능 개념
- Symbolic AI → ML → DL 흐름

**왜 중요한가:**

- AI가 마법이 아니라 "접근 방식의 진화"임을 이해

**추천 자료:**

- Andrew Ng – _AI for Everyone_ (Week 1)
- 《Artificial Intelligence: A Modern Approach》 서론
- 블로그: _What is GOFAI?_

### Week 2 — 머신러닝의 등장 배경

**주제:**

- 규칙 기반 AI의 한계
- 데이터 기반 학습의 필요성

**추천 자료:**

- StatQuest – _What is Machine Learning?_
- 《Machine Learning Yearning》 Ch.1–3

### Week 3 — 데이터와 학습의 본질

**주제:**

- Feature / Label
- Train / Test / Validation
- 일반화 개념

**추천 자료:**

- StatQuest – _Training vs Test Data_
- Google ML Crash Course (Intro)

### Week 4 — 수학 최소 세트 (직관)

**주제:**

- 벡터 = 특징 묶음
- 평균과 분산의 의미
- 손실 함수 직관

**추천 자료:**

- 3Blue1Brown – _Linear Algebra Essence (1–3)_
- StatQuest – _Mean Squared Error_

## Phase 2. 고전 머신러닝 (압축) (Week 5–7)

### Week 5 — 회귀: 예측의 시작

**주제:**

- 선형 회귀
- 예측이란 무엇인가

**추천 자료:**

- StatQuest – _Linear Regression_
- 《Hands-On Machine Learning》 Ch.1

### Week 6 — 분류와 평가

**주제:**

- Logistic Regression
- Precision / Recall / F1

**추천 자료:**

- StatQuest – _Logistic Regression_
- StatQuest – _Precision vs Recall_

### Week 7 — 트리 기반 모델

**주제:**

- Decision Tree
- Random Forest

**왜 중요한가:**

- 딥러닝이 항상 최선이 아님을 이해

**추천 자료:**

- StatQuest – _Decision Trees_
- 블로그: _Why Random Forest Works_

## Phase 3. 딥러닝 핵심 이해 (Week 8–11)

### Week 8 — 신경망의 아이디어

**주제:**

- 퍼셉트론
- 신경망 직관

**추천 자료:**

- 3Blue1Brown – _Neural Networks_
- 블로그: _History of Perceptron_

### Week 9 — 딥러닝이 가능해진 이유

**주제:**

- GPU, 데이터, 알고리즘

**추천 자료:**

- Stanford CS231n – Intro
- 블로그: _Why Deep Learning Took Off_

### Week 10 — Transformer의 등장

**주제:**

- Attention 개념
- 기존 RNN 한계

**추천 자료:**

- Jay Alammar – _The Illustrated Transformer_
- 논문: _Attention is All You Need_ (개념 위주)

### Week 11 — NLP에서 LLM까지

**주제:**

- GPT 계보
- Pretraining / Fine-tuning

**추천 자료:**

- Stanford CS224n – Intro
- 블로그: _Evolution of GPT Models_

## Phase 4. LLM & 현대 AI 구조 이해 (Week 12–18)

> **목표:** LLM을 *어떻게 쓰는지*보다 **왜 이런 구조가 되었는지**를 이해한다.
> 실습은 최소화하고, 기존에 알고 있는 바이브 코딩/에이전트 경험을 이론적으로 정렬한다.

### Week 12 — LLM은 무엇을 학습했는가?

**핵심 질문:**

- LLM은 "지식"을 저장하는가?
- 왜 환각(hallucination)이 발생하는가?

**주제:**

- 언어 모델의 확률적 본질
- Next-token prediction의 의미

**추천 자료:**

- Andrej Karpathy – _Let’s build GPT_ (개념 중심)
- 블로그: _LLMs do not store facts_

### Week 13 — Prompt Engineering의 한계

**핵심 질문:**

- 프롬프트는 왜 근본 해결책이 아닌가?

**주제:**

- Prompt = 입력 분포 제어
- Few-shot / CoT의 작동 원리

**추천 자료:**

- OpenAI Prompt Engineering Guide
- 논문: _Chain-of-Thought Prompting_ (개념)

### Week 14 — RAG는 왜 등장했는가?

**핵심 질문:**

- 왜 Fine-tuning보다 RAG인가?

**주제:**

- LLM + 외부 메모리 구조
- Knowledge vs Reasoning 분리

**추천 자료:**

- 블로그: _Why RAG beats fine-tuning_
- Pinecone – RAG Explained

### Week 15 — Embedding과 의미 공간

**핵심 질문:**

- "의미"는 어떻게 벡터가 되는가?

**주제:**

- 분산 표현
- 유사도 검색의 본질

**추천 자료:**

- 블로그: _Embeddings Explained_
- OpenAI Embedding Overview

### Week 16 — Agent는 무엇을 해결하려는가?

**핵심 질문:**

- 왜 LLM 단독으로는 부족한가?

**주제:**

- Planning / Tool / Memory
- Agent의 구조적 한계

**추천 자료:**

- 논문: _ReAct_ (개념)
- LangGraph Overview

### Week 17–18 — 종합 정리: AI 시스템 사고

**목표:**

- LLM을 하나의 컴포넌트로 바라보기
- 언제 LLM을 쓰고, 언제 쓰지 말아야 하는지 판단

**정리 산출물:**

- "내가 이해한 LLM 아키텍처" 문서
- LLM 기반 시스템 설계 다이어그램

## 커리큘럼 활용 가이드 (업데이트)

- 실습은 **이미 알고 있는 경우 생략 가능**
- 각 주차의 핵심 질문에 답할 수 있으면 충분
- 필요 시 기존 커리큘럼의 실습을 참고 자료로 활용

> 이 커리큘럼은 **도구 사용법보다 사고방식 형성**을 목표로 합니다.
