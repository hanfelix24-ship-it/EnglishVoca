// script.js

// 1. 단어 데이터 (여기에 원하는 단어를 50개 이상 채워넣으세요)
const wordDatabase = [
  { word: "conversation", meaning: "대화", hint: "We had a conversation about our future plans." },
  { word: "convey", meaning: "전달하다", hint: "It's hard to convey emotions through text messages." },
  { word: "cultivate", meaning: "경작하다", hint: "Farmers cultivate their crops with great care." },
  { word: "declare", meaning: "선언하다", hint: "The president declared a state of emergency." },
  { word: "department", meaning: "학과", hint: "She works in the marketing department." },
  { word: "deserve", meaning: "~을 받을만한 자격이 있다", hint: "She deserves a break after all her hard work." },
  { word: "difference", meaning: "차이점", hint: "There is a significant difference between the two methods." },
  { word: "director", meaning: "감독", hint: "The movie's director received many awards." },
  { word: "disability", meaning: "장애", hint: "She has not let her disability stop her from pursuing her dreams." },
  { word: "disappear", meaning: "사라지다", hint: "The magician made the rabbit disappear." },
  { word: "discovery", meaning: "발견", hint: "The discovery of the new species amazed everyone." },
  { word: "distinguish", meaning: "구별하다", hint: "It's hard to distinguish between the twins." },
  { word: "divide", meaning: "나뉘다", hint: "Let's divide the tasks equally." },
  { word: "doubt", meaning: "의심하다", hint: "She began to doubt his words." },
  { word: "economic", meaning: "경제의", hint: "The country is facing several economic challenges." }
    // ... 실제 사용 시에는 여기에 단어를 더 추가해서 50개를 만드세요.
    // 테스트를 위해 데이터를 복제하여 50개로 늘립니다.
];

// 데이터가 부족할 경우를 대비해 더미 데이터로 채움 (실제 배포시 제거 가능)
while (wordDatabase.length < 15) {
    wordDatabase.push({ 
        word: `Word${wordDatabase.length + 1}`, 
        meaning: "테스트", 
        hint: `This is a test sentence for Word${wordDatabase.length + 1}.` 
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
const hintArea = document.getElementById('hint-area');
const hintText = document.getElementById('hint-text');
const progressText = document.getElementById('progress-text');
const scoreText = document.getElementById('score-text');

// 게임 시작
function startGame() {
    // 전체 단어 중 50개를 무작위로 섞어서 선택
    currentList = [...wordDatabase].sort(() => Math.random() - 0.5).slice(0, 15);
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
    hintArea.classList.add('hidden');
    
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

    if (userAnswer === currentWord.meaning) {
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

// 힌트 보기
function showHint() {
    const currentWord = currentList[currentIndex];
    hintText.innerText = currentWord.hint;
    hintArea.classList.remove('hidden');
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

// 엔터키 입력 지원
inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});
