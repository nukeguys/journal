# RAG (Retrieval-Augmented Generation)

## 1. RAG의 핵심 개념 (Core Concept)

- **정의:** 사전 학습된 LLM의 파라미터 외부에 존재하는 '지식 창고'를 실시간으로 참조하여 답변의 정확도와 신뢰성을 높이는 기술.
- **목적:**
  - **Hallucination(환각) 억제:** 근거 문서를 바탕으로 답변하여 지어내는 현상 방지.
    - **최신성 유지:** 모델 재학습 없이 외부 데이터 갱신만으로 최신 정보 반영.
    - **보안 및 투명성:** 답변의 근거(출처)를 제시하여 정보의 신뢰도 확보.

## 2. RAG 시스템의 4대 구성 요소 및 역할 (The 4 Pillars)

### ① 데이터 전처리 및 인덱싱 (Data Ingestion & Indexing)

- **역할:** 비정형 데이터를 AI가 검색하기 쉬운 구조로 변환하여 저장.
- **주요 프로세스:**
  - **로드(Loading):** PDF, 웹, DB 등 다양한 소스에서 텍스트 추출.
  - **청킹(Chunking):** 긴 문서를 의미 있는 최소 단위(Chunk)로 분할 (문맥 유지가 핵심).
  - **임베딩(Embedding):** 텍스트를 고차원 수치 벡터(Vector)로 변환.
- **핵심 도구:** `LangChain`, `LlamaIndex`, `PyMuPDF` (추출용).

### ② 벡터 저장소 (Vector Database / Store)

- **역할:** 변환된 벡터 데이터와 원문 메타데이터를 저장하고 관리.
- **주요 프로세스:**
  - **유사도 검색:** 질문 벡터와 가장 가까운 문서 벡터를 수학적으로 계산(Cosine Similarity 등).
- **핵심 도구:** `ChromaDB`, `Pinecone`, `Milvus`, `FAISS`, `LanceDB`.

### ③ 검색 및 재순위화 (Retrieval & Reranking)

- **역할:** 질문에 가장 적합한 정보를 추출하고, 그 중 최적의 정보를 선별.
- **주요 프로세스:**
  - **Retrieval:** 벡터 DB에서 상위 K개의 관련 문서 후보군 추출.
  - **Reranking:** 후보군과 질문의 상관관계를 심층 분석하여 순위 재조정 (정확도 향상의 핵심).
- **핵심 도구:** `BGE-Reranker`, `Cohere Rerank`, `Cross-Encoder`.

### ④ 답변 생성 (Augmented Generation)

- **역할:** 검색된 정보(Context)를 사용자 질문과 결합하여 최종 답변을 생성.
- **주요 프로세스:**
  - **Prompt Engineering:** 검색된 조각들을 프롬프트에 주입(Injection).
  - **Generation:** LLM이 제공된 맥락 내에서만 답변하도록 제한(Grounding).
- **핵심 도구:** `Llama 3.1`, `GPT-4`, `Claude 3.5`, `Qwen 2.5`.

## 3. RAG 워크플로우 (Step-by-Step)

1. **사용자 쿼리 입력:** 질문이 시스템에 들어옴.
2. **질문 임베딩:** 질문 텍스트를 벡터로 변환.
3. **1차 검색(Retrieval):** 벡터 DB에서 유사한 문서 조각 Top-K 추출.
4. **2차 필터링(Reranking):** 리랭커 모델이 검색 결과의 정밀도 보정.
5. **프롬프트 구성:** 질문 + 선별된 문서 조각 = 강화된 프롬프트.
6. **최종 생성:** LLM이 프롬프트를 읽고 근거 기반 답변 출력.

## 4. 고도화 전략 (Advanced RAG)

- **Hybrid Search:** 벡터 검색(의미) + 키워드 검색(단어)을 결합하여 검색 정확도 극대화.
- **Query Expansion:** 질문을 다각도로 재해석하여 검색 범위를 최적화.
- **Multi-Modal RAG:** 텍스트뿐만 아니라 이미지, 표(Table) 데이터를 포함하여 검색.
