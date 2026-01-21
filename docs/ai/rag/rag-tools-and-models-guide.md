# RAG 시스템 구성 요소별 상세 도구 및 모델 가이드

## 1. 생성 모델 (Generation: LLM)

RAG의 최종 답변을 작성하는 '뇌' 역할을 합니다.

- **Llama 3.1 / 3.2 (Meta):** 가장 표준적인 오픈소스 모델. 범용성이 뛰어나고 한국어 성능도 준수함.
- **Qwen 2.5 (Alibaba):** 코딩과 논리 추론에 매우 강력함. 특히 한국어/중국어 등 동양권 언어 이해도가 높음.
- **DeepSeek-R1 (Thinking Model):** 답변 전 사고 과정을 거치는 모델. 복잡한 문서를 분석하고 추론하는 RAG에 최적.
- **Mistral / Mixtral:** 효율성이 좋아 적은 자원으로도 빠른 답변 속도를 제공.

## 2. 임베딩 모델 (Embedding Models)

텍스트를 벡터(숫자)로 변환하여 '의미 검색'을 가능하게 합니다.

- **nomic-embed-text:** 현재 로컬 RAG에서 가장 널리 쓰이는 고성능/가벼운 모델.
- **BGE-M3 (BAAI):** 다국어(한국어 포함) 성능이 압도적이며, 긴 문장 처리에 강점이 있음.
- **Text-embedding-3 (OpenAI):** 클라우드 기반이지만 업계 표준 수준의 성능을 가짐.

## 3. 벡터 데이터베이스 (Vector Database)

임베딩된 데이터를 저장하고 유사도 검색을 수행하는 창고입니다.

- **ChromaDB:** 설정이 매우 간편하여 입문용으로 가장 많이 추천됨 (Open WebUI 기본 활용).
- **LanceDB:** 서버리스 방식으로 속도가 매우 빠르고 AnythingLLM에서 주력으로 사용.
- **FAISS (Meta):** 대규모 벡터 검색에 최적화된 라이브러리 (매우 빠름).
- **pgvector:** 기존 PostgreSQL DB를 그대로 쓰면서 벡터 검색 기능만 추가하고 싶을 때 사용.

## 4. 오케스트레이션 및 프레임워크 (Orchestration)

RAG의 전 과정을 코드로 엮고 관리하는 뼈대입니다.

- **LangChain:** RAG의 레고 블록. 거의 모든 도구와 연결 가능하며 확장성이 무한대.
- **LlamaIndex:** '데이터' 연결에 특화된 프레임워크. 복잡한 문서 구조를 파악하는 데 강점.
- **Haystack:** 엔터프라이즈급 RAG 파이프라인 구축에 최적화된 설계 제공.

## 5. 전처리 및 청킹 도구 (Ingestion & Chunking)

날것의 데이터를 AI가 읽기 좋게 다듬는 도구입니다.

- **Unstructured.io:** PDF, 워드, HTML 등에서 표와 이미지를 구분해 텍스트를 깨끗하게 추출.
- **PyMuPDF / PDFPlumber:** PDF 내부의 텍스트 레이아웃을 정밀하게 읽어올 때 사용.
- **RecursiveCharacterTextSplitter (LangChain):** 문맥을 최대한 보존하며 문서를 자르는 표준 알고리즘.

## 6. 검색 보정 및 평가 도구 (Post-Processing & Eval)

검색 결과의 질을 높이고 시스템을 검증합니다.

- **BGE-Reranker:** 검색된 후보군을 다시 읽고 정답 순위를 매기는 정밀 필터.
- **Ragas:** LLM을 이용해 내 RAG가 얼마나 정확한지 자동으로 점수를 매기는 평가 프레임워크.
- **Arize Phoenix:** RAG의 작동 과정을 시각화하여 어느 단계에서 에러가 나는지 추적(Tracing).
