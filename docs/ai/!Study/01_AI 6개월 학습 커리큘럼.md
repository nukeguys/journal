# AI/ML 6개월 학습 커리큘럼 (개정)

- **대상:** 웹 프론트엔드 개발자
- **목표:** AI/ML 교양 + 기초 이해 → LLM/AI를 제품에 합리적으로 활용

## 전체 설계 원칙

- 수학/이론은 **직관 중심**, 증명 최소화
- "왜 이 기술이 등장했는가"를 항상 함께 학습
- 고전 ML은 **LLM을 잘 쓰기 위한 사고방식 습득** 목적
- 매 주차마다 **핵심 질문 + 이해 목표 + 참고 자료** 명확히
- 실습은 개념 검증 수준으로 최소화 (이미 아는 내용은 생략 가능)

## Phase 1. AI 개론 & 기초 정렬 (Week 1–3)

### Week 1 — AI란 무엇인가?

**핵심 질문:**

- 인공지능은 어떻게 발전해왔는가?
- 왜 데이터 기반 접근이 필요했는가?

**주제:**

- AI의 정의와 지능 개념
- Symbolic AI → ML → DL 흐름
- 규칙 기반 AI의 한계

**이해 목표:**

- AI가 마법이 아니라 "문제 해결 접근 방식의 진화"임을 이해
- 왜 머신러닝이 등장했는지 설명할 수 있음

**추천 자료:**

- Andrew Ng – _AI for Everyone_ (Week 1)
- 《Artificial Intelligence: A Modern Approach》 서론
- 블로그: _What is GOFAI?_
- StatQuest – _What is Machine Learning?_

### Week 2 — 데이터와 학습의 본질

**핵심 질문:**

- 기계는 어떻게 "학습"하는가?
- 좋은 모델이란 무엇인가?

**주제:**

- Feature / Label 개념
- Train / Validation / Test 분리
- Overfitting / Underfitting
- 일반화(Generalization)의 의미

**이해 목표:**

- 학습이 "패턴 찾기"임을 이해
- 왜 데이터를 나누는지, 일반화가 왜 중요한지 설명 가능

**추천 자료:**

- StatQuest – _Training vs Test Data_
- Google ML Crash Course (Intro)
- 《Machine Learning Yearning》 Ch.1–5

### Week 3 — 수학 최소 세트 (직관)

**핵심 질문:**

- 왜 수학이 필요한가?
- 최적화란 무엇인가?

**주제:**

- 벡터 = 특징들의 묶음
- 평균과 분산의 의미
- 손실 함수(Loss Function) 직관
- 경사하강법(Gradient Descent) 개념

**이해 목표:**

- 학습 = 손실함수 최소화 과정임을 이해
- 미분의 직관적 의미 파악 (증명 불필요)

**추천 자료:**

- 3Blue1Brown – _Essence of Linear Algebra (Ep.1–3)_
- 3Blue1Brown – _Gradient Descent_
- StatQuest – _Mean Squared Error_

## Phase 2. 고전 머신러닝 (핵심만) (Week 4–5)

> **목표:** LLM 이해를 위한 ML 사고방식 습득. 구현보다는 개념 중심.

### Week 4 — 머신러닝의 핵심 원리

**핵심 질문:**

- 예측과 분류는 어떻게 다른가?
- 학습은 구체적으로 무엇을 최적화하는가?

**주제:**

- 회귀(Regression): 연속값 예측
- 분류(Classification): 범주 예측
- Logistic Regression 개념
- 손실함수와 최적화의 실제

**이해 목표:**

- 예측 태스크의 본질 이해
- 손실함수가 실제로 어떻게 작동하는지 감각 습득

**추천 자료:**

- StatQuest – _Linear Regression_
- StatQuest – _Logistic Regression_
- 《Hands-On Machine Learning》 Ch.1, 3

**최소 실습:**

- 간단한 선형 회귀 한 번 직접 돌려보기 (sklearn 사용)

### Week 5 — 평가와 실전 감각

**핵심 질문:**

- 모델이 잘 작동하는지 어떻게 아는가?
- 언제 딥러닝을 쓰고, 언제 쓰지 말아야 하는가?

**주제:**

- Confusion Matrix
- Precision / Recall / F1-Score
- Class Imbalance 문제
- Baseline 모델의 중요성
- Decision Tree, Random Forest 개념 (딥러닝이 항상 답은 아님)

**이해 목표:**

- 평가지표를 읽고 해석할 수 있음 ⭐ (LLM 시스템 평가에 필수)
- ML 문제 유형별 적합한 접근 방식 판단 가능

**추천 자료:**

- StatQuest – _Precision vs Recall_
- StatQuest – _Decision Trees_
- 블로그: _When Not to Use Deep Learning_

**필수 실습:**

- Precision/Recall 계산 직접 해보기
- Class Imbalance 데이터셋 경험

---

## Phase 3. 딥러닝 핵심 이해 (Week 6–10)

### Week 6 — 신경망의 아이디어

**핵심 질문:**

- 신경망은 왜 "깊이"를 필요로 하는가?

**주제:**

- 퍼셉트론의 한계
- 다층 신경망(MLP)
- 활성화 함수의 역할
- Backpropagation 직관

**이해 목표:**

- 신경망이 "비선형 함수 근사기"임을 이해
- 층을 쌓는 이유 설명 가능

**추천 자료:**

- 3Blue1Brown – _Neural Networks (Ch.1–4)_
- 블로그: _History of Perceptron_

### Week 7 — 딥러닝이 가능해진 이유

**핵심 질문:**

- 왜 2010년대에 딥러닝이 폭발했는가?

**주제:**

- GPU의 역할
- 대규모 데이터셋 (ImageNet)
- 알고리즘 개선 (ReLU, Dropout, Batch Norm)

**이해 목표:**

- 딥러닝 성공의 3대 요소 이해
- 현대 딥러닝의 환경적 맥락 파악

**추천 자료:**

- Stanford CS231n – Lecture 1
- 블로그: _Why Deep Learning Took Off_
- 《Deep Learning》 (Goodfellow) Ch.1

### Week 8 — CNN과 시각 인식

**핵심 질문:**

- 이미지를 어떻게 이해하는가?

**주제:**

- Convolution의 직관
- CNN의 계층적 특징 학습
- Transfer Learning 개념

**이해 목표:**

- 도메인 특화 구조의 필요성 이해
- Pre-training의 가치 파악

**추천 자료:**

- Stanford CS231n – CNN Lecture
- 3Blue1Brown – _Convolution_

### Week 9 — RNN과 순차 데이터

**핵심 질문:**

- 시간/순서 정보를 어떻게 다루는가?
- RNN의 한계는 무엇인가?

**주제:**

- RNN의 기본 아이디어
- LSTM / GRU
- Vanishing Gradient 문제
- RNN의 구조적 한계 (장기 의존성)

**이해 목표:**

- 순차 데이터 모델링의 어려움 이해
- Transformer가 왜 필요했는지 배경 파악

**추천 자료:**

- Andrej Karpathy – _The Unreasonable Effectiveness of RNN_
- Stanford CS224n – RNN Lecture
- 블로그: _Understanding LSTM_

### Week 10 — Transformer의 등장 ⭐

**핵심 질문:**

- RNN 없이 어떻게 순서를 이해하는가?
- Attention은 무엇을 "주목"하는가?

**주제:**

- Attention Mechanism 직관
- Self-Attention의 작동 원리
- Positional Encoding
- Transformer 구조 (Encoder-Decoder)

**이해 목표:**

- Attention이 "가중 평균"임을 이해
- 병렬 처리가 가능한 이유 파악
- Transformer가 NLP 판도를 바꾼 이유 설명 가능

**추천 자료:**

- Jay Alammar – _The Illustrated Transformer_ ⭐ (필독)
- 논문: _Attention is All You Need_ (개념 위주)
- 3Blue1Brown – _Attention in Transformers_

**참고:**

- 이 주차는 어려울 수 있으니 필요 시 2주 할애 고려

## Phase 4. LLM & 현대 AI 구조 이해 (Week 11–18)

> **목표:** LLM을 "어떻게 쓰는지"보다 **왜 이런 구조가 되었는지** 이해.
> 실무 경험(바이브 코딩, 에이전트)을 이론적으로 정렬.

### Week 11 — BERT vs GPT: 두 갈래 길

**핵심 질문:**

- Encoder와 Decoder의 차이는 무엇인가?
- 왜 GPT가 승리했는가?

**주제:**

- BERT (Encoder-only): 양방향 이해
- GPT (Decoder-only): 단방향 생성
- Pre-training 전략의 차이 (MLM vs CLM)
- Generative AI의 부상

**이해 목표:**

- 구조 선택이 용도를 결정함을 이해
- Auto-regressive 생성의 의미 파악

**추천 자료:**

- Jay Alammar – _Illustrated BERT, GPT-2_
- Stanford CS224n – Transfer Learning Lecture
- 블로그: _BERT vs GPT_

### Week 12 — LLM은 무엇을 학습했는가? ⭐

**핵심 질문:**

- LLM은 "지식"을 저장하는가?
- 왜 환각(Hallucination)이 발생하는가?

**주제:**

- 언어 모델의 확률적 본질
- Next-token prediction의 의미
- Parameters ≠ Knowledge Store
- In-context Learning의 등장

**이해 목표:**

- LLM이 "압축된 패턴 매칭기"임을 이해
- 환각이 버그가 아니라 본질적 특성임을 파악

**추천 자료:**

- Andrej Karpathy – _Let's build GPT_ (개념 중심)
- 블로그: _LLMs Don't Store Facts_
- 논문: _What Does BERT Learn?_

### Week 13 — Prompt Engineering의 한계

**핵심 질문:**

- 프롬프트는 왜 근본 해결책이 아닌가?
- Few-shot은 어떻게 작동하는가?

**주제:**

- Prompt = 입력 분포 제어
- Few-shot Learning
- Chain-of-Thought (CoT)
- 프롬프트의 불안정성

**이해 목표:**

- 프롬프트가 모델 능력을 "끌어내는" 것임을 이해
- 프롬프트만으로 해결 불가능한 문제 인식

**추천 자료:**

- OpenAI Prompt Engineering Guide
- 논문: _Chain-of-Thought Prompting_ (개념)
- 블로그: _Prompt Engineering is not Magic_

### Week 14 — Fine-tuning의 본질

**핵심 질문:**

- 언제 Fine-tuning이 필요한가?
- Parameter-Efficient Fine-tuning은 왜 등장했나?

**주제:**

- Full Fine-tuning vs PEFT
- LoRA, QLoRA 개념
- Instruction Tuning
- RLHF 직관

**이해 목표:**

- Fine-tuning = 가중치 조정임을 이해
- 효율적 학습 방법의 필요성 파악
- Alignment의 의미 이해

**추천 자료:**

- 논문: _LoRA_ (개념 위주)
- HuggingFace – Fine-tuning Guide
- 블로그: _What is RLHF?_

### Week 15 — RAG는 왜 등장했는가? ⭐

**핵심 질문:**

- 왜 Fine-tuning보다 RAG인가?
- LLM의 메모리 한계를 어떻게 극복하는가?

**주제:**

- LLM + 외부 메모리 구조
- Knowledge vs Reasoning 분리
- RAG 파이프라인 (Retrieve → Generate)
- RAG의 장단점

**이해 목표:**

- RAG가 "검색 엔진 + LLM"임을 이해
- 언제 RAG를, 언제 Fine-tuning을 쓸지 판단 가능

**추천 자료:**

- 블로그: _Why RAG Beats Fine-tuning_
- Pinecone – _RAG Explained_
- LangChain RAG Tutorial (개념 중심)

**필수 실습:**

- 간단한 RAG 파이프라인 한 번 구현해보기

### Week 16 — Embedding과 의미 공간 ⭐

**핵심 질문:**

- "의미"는 어떻게 벡터가 되는가?
- 유사도 검색은 어떻게 작동하는가?

**주제:**

- 분산 표현 (Distributed Representation)
- Word2Vec → Sentence Embeddings
- Cosine Similarity
- Vector Database의 역할

**이해 목표:**

- Embedding이 "의미 공간의 좌표"임을 이해
- 의미적 유사성을 수치화하는 원리 파악

**추천 자료:**

- 블로그: _Embeddings Explained_
- Jay Alammar – _Illustrated Word2Vec_
- OpenAI Embedding Overview

**필수 실습:**

- Cosine similarity 직접 계산해보기
- 간단한 의미 검색 구현

### Week 17 — Agent는 무엇을 해결하려는가?

**핵심 질문:**

- 왜 LLM 단독으로는 부족한가?
- Agent의 한계는 무엇인가?

**주제:**

- Planning / Tool Use / Memory
- ReAct 패턴
- Agent의 구조적 한계
- Multi-agent 시스템

**이해 목표:**

- Agent = LLM + 실행 루프임을 이해
- Tool calling의 메커니즘 파악
- 과대평가 경계 (Agent는 만능이 아님)

**추천 자료:**

- 논문: _ReAct_ (개념)
- LangGraph Overview
- Anthropic – _Building with Claude Agents_

### Week 18 — LLM 평가와 시스템 사고

**핵심 질문:**

- LLM의 성능을 어떻게 측정하는가?
- 좋은 AI 시스템 설계란 무엇인가?

**주제:**

- LLM 평가 지표 (BLEU, ROUGE, Human Eval)
- Benchmark의 한계
- LLM을 컴포넌트로 바라보기
- 언제 LLM을 쓰고, 언제 쓰지 말아야 하는가

**이해 목표:**

- LLM 평가의 어려움 인식
- 시스템적 사고 능력 습득
- 적재적소 기술 선택 능력

**추천 자료:**

- 블로그: _Evaluating LLMs_
- 논문: _Holistic Evaluation of Language Models_

**종합 산출물:**

- "내가 이해한 LLM 아키텍처" 문서 작성
- LLM 기반 시스템 설계 다이어그램 1개

---

## 보너스 주차 (선택)

### Week 19–20 — Multimodal AI

**주제:**

- Vision-Language Models (CLIP, GPT-4V)
- Text-to-Image (Diffusion Models 개념)
- 멀티모달 Embedding

**추천 자료:**

- Jay Alammar – _Illustrated Stable Diffusion_
- OpenAI CLIP Paper (개념)

### Week 21–22 — AI의 미래와 한계

**주제:**

- Scaling Laws
- AGI 논쟁
- AI Safety & Alignment
- 윤리적 고려사항

**추천 자료:**

- Anthropic Research Blog
- 《Superintelligence》 (Nick Bostrom) 발췌

---

## 커리큘럼 활용 가이드

### 학습 원칙

- 각 주차의 **핵심 질문에 답할 수 있으면** 다음 단계로
- 참고 자료는 선택사항 (본인에게 맞는 것만)
- 실습은 **개념 검증용**으로만 (이미 아는 내용은 생략)
- 막히면 주저 없이 2주 할애

### 진도 체크

- [ ] Phase 1: AI의 역사와 기초 개념 이해
- [ ] Phase 2: ML의 핵심 사고방식 습득
- [ ] Phase 3: 딥러닝과 Transformer 이해
- [ ] Phase 4: LLM 시스템 설계 능력

### 최종 목표

- ✅ LLM의 작동 원리를 **직관적으로** 설명 가능
- ✅ RAG/Fine-tuning/Agent의 **적용 시점** 판단 가능
- ✅ LLM 기반 제품의 **기술적 의사결정** 참여 가능
- ✅ AI 기술 트렌드를 **비판적으로** 평가 가능

---

> 이 커리큘럼은 **도구 사용법보다 사고방식 형성**을 목표로 합니다.  
> "왜?"를 이해하면, "어떻게"는 필요할 때 배울 수 있습니다.
