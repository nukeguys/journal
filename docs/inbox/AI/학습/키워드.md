## 1. AI의 역사와 진화 (History & Evolution)

- [Rule-based (규칙 기반)]: "If-Else"처럼 사람이 모든 규칙을 직접 코딩하는 방식. 복잡한 언어 이해에 한계가 있음.
- [Machine Learning (기계 학습)]: 데이터로부터 컴퓨터가 스스로 패턴을 학습하는 기술.
- [Deep Learning (딥러닝)]: 인간의 뇌 구조를 본뜬 [인공신경망(Neural Networks)]을 깊게 쌓아 학습하는 방식.
- [Transformer (트랜스포머)] : 2017년 Google이 발표한 "Attention Is All You Need" 논문의 아키텍처. 현재 모든 [LLM]의 근간.
- [Attention Mechanism]: 문장 내 단어 간의 관계(중요도)를 파악하여 문맥을 이해하는 핵심 기술.

## 2. 모델 아키텍처와 기본 단위 (Architecture & Units)

- [LLM (Large Language Model)]: 수십억 개의 파라미터를 가진 거대 언어 모델 (GPT, Gemini, Llama 등).
- [Token (토큰)]: 모델이 텍스트를 처리하는 최소 단위. (단어 혹은 문자 조각).
- [Context Window (컨텍스트 창)]: 모델이 한 번에 기억하고 처리할 수 있는 최대 토큰 양.
- [Parameters (파라미터/매개변수)]: 모델이 학습한 '지식'의 양을 나타내는 수치 (예: Llama-3-70B의 70B는 700억 개).
- [Embedding (임베딩)]: 단어나 문장을 고차원 공간상의 숫자(벡터)로 변환하여 의미적 유사도를 계산하는 기술.

## 3. 주요 기술 및 최적화 (Advanced Tech & Optimization)

- [Hallucination (환각)]: AI가 그럴듯하지만 틀린 정보를 생성하는 현상.
- [RAG (Retrieval-Augmented Generation)]: 검색 증강 생성. 외부 데이터를 실시간으로 찾아 답변의 근거로 사용하는 기술.
- [Vector Database]: 임베딩된 데이터를 저장하고 검색하는 특수 DB (Pinecone, Chroma, Milvus 등).
- [Fine-tuning (미세 조정)]: 이미 학습된 모델에 특정 도메인 데이터를 추가로 학습시켜 성능을 높이는 것.
- [PEFT / LoRA]: 전체를 학습시키는 대신 일부 파라미터만 효율적으로 학습시키는 최신 기법.

## 4. 에이전트와 실무 구현 (Agents & Application)

- [Agent (에이전트)]: 목표를 주면 스스로 계획을 세우고 도구를 사용해 실행하는 자율 시스템.
- [Tool Calling / Function Calling]: AI가 외부 API(날씨, DB 조회 등)를 호출할 수 있도록 연결하는 인터페이스.
- [ReAct (Reasoning + Acting)]: AI가 추론(Reasoning)과 행동(Acting)을 번갈아 수행하며 문제를 해결하는 프레임워크.
- [Prompt Engineering]: 모델에게 더 나은 답변을 이끌어내기 위한 입력 설계 기법 ([Zero-shot], [Few-shot], [CoT] 등).
- [Multimodal (멀티모달)]: 텍스트뿐만 아니라 이미지, 오디오, 영상 등 여러 형태의 데이터를 동시에 처리하는 능력.
- [Vercel AI SDK]: 프론트엔드에서 AI 답변을 실시간으로 보여주는(Streaming) UI 구현을 돕는 라이브러리.