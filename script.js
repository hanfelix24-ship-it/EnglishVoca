// script.js

// 1. 단어 데이터 (여기에 원하는 단어를 50개 이상 채워넣으세요)
const wordDatabase = [
  { id: 451, word: "tough", meaning: "힘든, 곤란한" },
  { id: 452, word: "trade", meaning: "교환하다, 거래하다" },
  { id: 453, word: "traditional", meaning: "전통적인" },
  { id: 454, word: "trait", meaning: "특성" },
  { id: 455, word: "treatment", meaning: "대우, 취급, 치료" },
  { id: 456, word: "tribe", meaning: "부족" },
  { id: 457, word: "trick", meaning: "속이다" },
  { id: 458, word: "turn out to V", meaning: "~로 판명되다, 입증되다" },
  { id: 459, word: "typically", meaning: "일반적으로" },
  { id: 460, word: "useful", meaning: "유용한" },
  { id: 461, word: "via", meaning: "NN을 통해서, 경유하여" },
  { id: 462, word: "waste", meaning: "폐기물, 쓰레기, 낭비" },
  { id: 463, word: "weight", meaning: "무게" },
  { id: 464, word: "accurate", meaning: "정확한" },
  { id: 465, word: "adjust", meaning: "조정하다, 조절하다" },
  { id: 466, word: "afford to V", meaning: "~할 여유가 있다" },
  { id: 467, word: "aim", meaning: "목표, 목표로 하다" },
  { id: 468, word: "almost", meaning: "거의" },
  { id: 469, word: "alter", meaning: "바꾸다" },
  { id: 470, word: "anxious", meaning: "불안해하는, 염려하는" },
  { id: 471, word: "arrangement", meaning: "배열, 정렬" },
  { id: 472, word: "as long as SVO", meaning: "~하는 한" },
  { id: 473, word: "attach", meaning: "첨부하다, 붙이다" },
  { id: 474, word: "attention", meaning: "주의, 관심" },
  { id: 475, word: "attractive", meaning: "매력적인" },
  { id: 476, word: "billion", meaning: "10억" },
  { id: 477, word: "block", meaning: "막다" },
  { id: 478, word: "bond", meaning: "유대감, 친밀감" },
  { id: 479, word: "categorize", meaning: "분류하다" },
  { id: 480, word: "choir", meaning: "합창단" },
  { id: 481, word: "climate", meaning: "기후" },
  { id: 482, word: "cognitive", meaning: "인지의, 인식의" },
  { id: 483, word: "comment", meaning: "논평, 언급" },
  { id: 484, word: "be committed to Ving", meaning: "~에 헌신하다" },
  { id: 485, word: "compete", meaning: "경쟁하다" },
  { id: 486, word: "competitor", meaning: "경쟁자" },
  { id: 487, word: "composer", meaning: "작곡가" },
  { id: 488, word: "confuse", meaning: "혼란시키다" },
  { id: 489, word: "considerate", meaning: "사려 깊은" },
  { id: 490, word: "considerable", meaning: "상당한" },
  { id: 491, word: "consideration", meaning: "사려, 숙고" },
  { id: 492, word: "construct", meaning: "형성하다, 건축하다" },
  { id: 493, word: "contest", meaning: "대회" },
  { id: 494, word: "conversation", meaning: "대화" },
  { id: 495, word: "convey", meaning: "전달하다, 전하다" },
  { id: 496, word: "cultivate", meaning: "경작하다, 함양하다" },
  { id: 497, word: "declare", meaning: "선언하다" },
  { id: 498, word: "department", meaning: "학과, 부서" },
  { id: 499, word: "deserve", meaning: "~~을 받을만한 자격이 있다" },
  { id: 500, word: "difference", meaning: "차이점" },
  { id: 501, word: "director", meaning: "감독" },
  { id: 502, word: "disability", meaning: "장애" },
  { id: 503, word: "disappear", meaning: "사라지다" },
  { id: 504, word: "discovery", meaning: "발견" },
  { id: 505, word: "distinguish", meaning: "구별하다" },
  { id: 506, word: "divide", meaning: "나누다, 가르다" },
  { id: 507, word: "doubt", meaning: "의심하다" },
  { id: 508, word: "economic", meaning: "경제의" },
  { id: 509, word: "emerge", meaning: "등장하다" },
  { id: 510, word: "enthusiasm", meaning: "열정" },
  { id: 511, word: "even if SVO", meaning: "비록 ~일지라도" },
  { id: 512, word: "even though SVO", meaning: "비록 ~일지라도" },
  { id: 513, word: "evolution", meaning: "진화" },
  { id: 514, word: "exactly", meaning: "정확하게" },
  { id: 515, word: "examine", meaning: "검토하다" },
  { id: 516, word: "exceed", meaning: "초과하다" },
  { id: 517, word: "existence", meaning: "존재" },
  { id: 518, word: "expect", meaning: "기대하다, 요구하다, 예상하다" },
  { id: 519, word: "extreme", meaning: "극단적인" },
  { id: 520, word: "facility", meaning: "시설" },
  { id: 521, word: "fellow", meaning: "동료" },
  { id: 522, word: "female", meaning: "여성의" },
  { id: 523, word: "field", meaning: "분야, 영역, 현장" },
  { id: 524, word: "frequency", meaning: "빈번함, 빈도" },
  { id: 525, word: "gene", meaning: "유전자" },
  { id: 526, word: "gentle", meaning: "부드러운" },
  { id: 527, word: "genuine", meaning: "진짜의" },
  { id: 528, word: "host", meaning: "주최하다" },
  { id: 529, word: "improvement", meaning: "개선" },
  { id: 530, word: "increase", meaning: "증가하다" },
  { id: 531, word: "incredible", meaning: "믿을 수 없는" },
  { id: 532, word: "infant", meaning: "유아" },
  { id: 533, word: "innovation", meaning: "혁신" },
  { id: 534, word: "insight", meaning: "통찰력" },
  { id: 535, word: "instantly", meaning: "즉시" },
  { id: 536, word: "instrument", meaning: "도구, 기구" },
  { id: 537, word: "intelligence", meaning: "지능" },
  { id: 538, word: "interrupt", meaning: "방해하다, 중단하다" },
  { id: 539, word: "introduce", meaning: "도입하다, 소개하다" },
  { id: 540, word: "investigate", meaning: "조사하다" },
  { id: 541, word: "isolation", meaning: "고립" },
  { id: 542, word: "issue", meaning: "이슈, 주제, 발급하다" },
  { id: 543, word: "knowledge", meaning: "지식" },
  { id: 544, word: "launch", meaning: "시작하다, 개시하다, 발사하다" },
  { id: 545, word: "lay", meaning: "놓다, 두다" },
  { id: 546, word: "length", meaning: "길이" },
  { id: 547, word: "local", meaning: "지역의, 지방의, 부분적인" },
  { id: 548, word: "look for", meaning: "찾다" },
  { id: 549, word: "loss", meaning: "상실" },
  { id: 550, word: "manner", meaning: "방식, 태도" },
  { id: 551, word: "means", meaning: "수단, 방법" },
  { id: 552, word: "method", meaning: "방법" },
  { id: 553, word: "minor", meaning: "사소한, 작은" },
  { id: 554, word: "mistaken", meaning: "잘못된" },
  { id: 555, word: "nature", meaning: "성격, 본성, 자연" },
  { id: 556, word: "nod", meaning: "끄덕이다, 동의하다" },
  { id: 557, word: "occasion", meaning: "경우" },
  { id: 558, word: "on behalf of", meaning: "NN을 대표해서, 대신해서" },
  { id: 559, word: "order", meaning: "순서, 규칙, 주문하다" },
  { id: 560, word: "ordinary", meaning: "평범한, 일반적인" },
  { id: 561, word: "participation", meaning: "참가, 참여" },
  { id: 562, word: "patient", meaning: "환자, 인내심 있는" },
  { id: 563, word: "persuade", meaning: "설득하다" },
  { id: 564, word: "phrase", meaning: "구절" },
  { id: 565, word: "physics", meaning: "물리학" },
  { id: 566, word: "poison", meaning: "독" },
  { id: 567, word: "precious", meaning: "귀중한" },
  { id: 568, word: "prevent", meaning: "막다" },
  { id: 569, word: "produce", meaning: "생산하다" },
  { id: 570, word: "psychology", meaning: "심리학" },
  { id: 571, word: "quite", meaning: "상당히, 꽤" },
  { id: 572, word: "recall", meaning: "회상하다" },
  { id: 573, word: "recognition", meaning: "인지" },
  { id: 574, word: "regret", meaning: "유감, 후회" },
  { id: 575, word: "regular", meaning: "상시의, 정기적인" },
  { id: 576, word: "regulation", meaning: "조절, 규제" },
  { id: 577, word: "relatively", meaning: "비교적으로, 상대적으로" },
  { id: 578, word: "reliable", meaning: "믿을 수 있는" },
  { id: 579, word: "reputation", meaning: "평판, 명성" },
  { id: 580, word: "reserve", meaning: "예약하다" }
    // ... 실제 사용 시에는 여기에 단어를 더 추가해서 50개를 만드세요.
    // 테스트를 위해 데이터를 복제하여 50개로 늘립니다.
];

// 데이터가 부족할 경우를 대비해 더미 데이터로 채움 (실제 배포시 제거 가능)
while (wordDatabase.length < 100) {
    const nextId = wordDatabase.length + 1;
    wordDatabase.push({ 
        id: nextId,
        word: `Word${nextId}`, 
        meaning: "테스트"
    });
}

// 게임 상태 변수
let currentList = [];
let wrongAnswers = [];
let currentIndex = 0;
let score = 0;
let isReviewMode = false;

// DOM 요소
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const wordDisplay = document.getElementById('english-word');
const inputField = document.getElementById('user-input');
const feedbackIcon = document.getElementById('feedback-icon');
const progressText = document.getElementById('progress-text');
const scoreText = document.getElementById('score-text');
const totalWordsSpan = document.getElementById('total-words');

// 초기화: 총 단어 수 표시
totalWordsSpan.innerText = wordDatabase.length;

// 게임 시작
function startGame() {
    const startInput = document.getElementById('start-range').value;
    const endInput = document.getElementById('end-range').value;
    let targetList = [];

    // 범위 입력 확인
    if (startInput && endInput) {
        const start = parseInt(startInput);
        const end = parseInt(endInput);

        if (start > end || start < 1) {
            alert("올바른 범위를 입력해주세요.");
            return;
        }
        
        // 해당 범위의 단어만 필터링 (id 기준)
        targetList = wordDatabase.filter(item => item.id >= start && item.id <= end);
        
        if (targetList.length === 0) {
            alert("해당 범위에 단어가 없습니다.");
            return;
        }
    } else {
        // 범위 입력이 없으면 전체에서 랜덤 50개
        targetList = [...wordDatabase].sort(() => Math.random() - 0.5).slice(0, 50);
    }

    // 선택된 리스트를 섞어서 게임 시작
    currentList = targetList.sort(() => Math.random() - 0.5);

    wrongAnswers = [];
    currentIndex = 0;
    score = 0;
    isReviewMode = false;
    
    showScreen('game-screen');
    loadWord();
}

// 화면 전환
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// 단어 불러오기
function loadWord() {
    const currentWord = currentList[currentIndex];
    wordDisplay.innerText = currentWord.word;
    inputField.value = '';
    inputField.focus();
    
    // UI 초기화
    feedbackIcon.innerText = '😐'; // 기본 표정
    feedbackIcon.classList.remove('bounce', 'shake');
    
    // 진행 상황 업데이트
    const total = currentList.length;
    progressText.innerText = `문제: ${currentIndex + 1} / ${total}`;
    scoreText.innerText = `점수: ${score}`;
}

// 정답 확인
function checkAnswer() {
    const userAnswer = inputField.value.trim();
    const currentWord = currentList[currentIndex];

    if (!userAnswer) return; // 빈 입력 방지

    // 쉼표(,)로 구분된 뜻 중 하나라도 맞으면 정답 처리
    // 예: "대우, 취급, 치료" -> ["대우", "취급", "치료"]
    const correctMeanings = currentWord.meaning.split(',').map(m => m.trim());

    if (correctMeanings.includes(userAnswer)) {
        // 정답: 칭찬 + 행복한 표정
        feedbackIcon.innerText = '😍';
        feedbackIcon.classList.add('bounce');
        score++;
        setTimeout(nextWord, 1000); // 1초 뒤 다음 문제
    } else {
        // 오답: 슬픈 표정 + 오답노트 추가
        feedbackIcon.innerText = '😭';
        feedbackIcon.classList.add('shake');
        
        // 중복 방지하며 오답 노트에 추가
        if (!wrongAnswers.includes(currentWord)) {
            wrongAnswers.push(currentWord);
        }
        setTimeout(nextWord, 1000);
    }
}

// 다음 문제로 이동
function nextWord() {
    currentIndex++;
    if (currentIndex < currentList.length) {
        loadWord();
    } else {
        endGame();
    }
}

// 게임 종료
function endGame() {
    showScreen('end-screen');
    const resultMsg = document.getElementById('result-message');
    const reviewBtn = document.getElementById('review-btn');
    
    resultMsg.innerText = `총 ${currentList.length}문제 중 ${score}개를 맞췄어요!`;
    
    if (wrongAnswers.length > 0) {
        reviewBtn.classList.remove('hidden');
        reviewBtn.innerText = `틀린 ${wrongAnswers.length}문제 다시 풀기`;
    } else {
        reviewBtn.classList.add('hidden');
        resultMsg.innerText += "\n완벽해요! 모든 문제를 맞췄습니다! 🏆";
    }
}

// 틀린 문제 다시 풀기 (오답 노트)
function startReview() {
    currentList = [...wrongAnswers]; // 틀린 문제만 복사
    wrongAnswers = []; // 오답 초기화 (다시 틀리면 또 쌓임)
    currentIndex = 0;
    score = 0;
    isReviewMode = true;
    
    showScreen('game-screen');
    loadWord();
}

// 처음부터 다시하기
function restartGame() {
    startGame();
}

// 음성 인식 (마이크 입력)
function startVoiceInput() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        alert("이 브라우저는 음성 인식을 지원하지 않습니다. 크롬 브라우저를 사용해보세요.");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'ko-KR'; // 한국어 인식
    recognition.start();

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript.replace(/\.$/, '');
        inputField.value = transcript; // 인식된 텍스트를 입력창에 넣음
        checkAnswer(); // 자동으로 정답 확인
    };
}

// 엔터키 입력 지원
inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});
