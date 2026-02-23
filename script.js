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
  { id: 580, word: "reserve", meaning: "예약하다" },
    { id: 581, word: "resolve", meaning: "해결하다" },
  { id: 582, word: "resource", meaning: "자원" },
  { id: 583, word: "satisfy", meaning: "만족시키다" },
  { id: 584, word: "saying", meaning: "속담, 격언" },
  { id: 585, word: "seek", meaning: "추구하다, 찾다" },
  { id: 586, word: "similar", meaning: "유사한" },
  { id: 587, word: "social", meaning: "사회적인" },
  { id: 588, word: "solid", meaning: "단단한, 고체의, 단색의" },
  { id: 589, word: "starve", meaning: "굶주리다" },
  { id: 590, word: "status", meaning: "지위" },
  { id: 591, word: "still", meaning: "여전히, 조용한, 하지만" },
  { id: 592, word: "stimulate", meaning: "자극하다" },
  { id: 593, word: "stimuli", meaning: "자극" },
  { id: 594, word: "suspect", meaning: "의심하다" },
  { id: 595, word: "tackle", meaning: "다루다" },
  { id: 596, word: "term", meaning: "용어, 기간, 조건" },
  { id: 597, word: "that is", meaning: "즉" },
  { id: 598, word: "theory", meaning: "이론, 학설, 견해" },
  { id: 599, word: "therefore", meaning: "따라서, 그러므로" },
  { id: 600, word: "translate", meaning: "번역하다" },
  { id: 601, word: "typical", meaning: "전형적인" },
  { id: 602, word: "undesirable", meaning: "바람직하지 않은" },
  { id: 603, word: "unfamiliar", meaning: "익숙하지 않은, 친숙하지 않은" },
  { id: 604, word: "up to N", meaning: "(최대) N까지" },
  { id: 605, word: "urban", meaning: "도시의" },
  { id: 606, word: "urge", meaning: "충동, 욕구, 촉구하다" },
  { id: 607, word: "various", meaning: "다양한" },
  { id: 608, word: "vary", meaning: "다르다" },
  { id: 609, word: "virtually", meaning: "사실상, 거의" },
  { id: 610, word: "visible", meaning: "보이는" },
  { id: 611, word: "vital", meaning: "필수적인" },
  { id: 612, word: "volunteer", meaning: "자원봉사하다" },
  { id: 613, word: "abuse", meaning: "남용, 학대, 오용하다" },
  { id: 614, word: "academic", meaning: "학업의" },
  { id: 615, word: "achievement", meaning: "성취" },
  { id: 616, word: "activate", meaning: "활성화시키다" },
  { id: 617, word: "admire", meaning: "칭찬하다, 감탄하다" },
  { id: 618, word: "admit", meaning: "인정하다, 허락하다" },
  { id: 619, word: "adopt", meaning: "채택하다, 입양하다" },
  { id: 620, word: "alert", meaning: "기민한, 각성한" },
  { id: 621, word: "annual", meaning: "매년의, 연례의" },
  { id: 622, word: "appealing", meaning: "매력적인, 흥미로운" },
  { id: 623, word: "assistant", meaning: "조수, 보조원" },
  { id: 624, word: "athletic", meaning: "운동의, 체육의" },
  { id: 625, word: "attentive", meaning: "주의 깊은, 배려하는" },
  { id: 626, word: "awareness", meaning: "인식" },
  { id: 627, word: "back and forth", meaning: "앞뒤로" },
  { id: 628, word: "involved in N", meaning: "~에 참여하는, 관련된" },
  { id: 629, word: "be used to V", meaning: "~하기 위해 사용되다" },
  { id: 630, word: "be used to Ving", meaning: "~하는 데 익숙하다" },
  { id: 631, word: "used to V", meaning: "~하곤 했다" },
  { id: 632, word: "beat", meaning: "(심장 등이) 뛰다" },
  { id: 633, word: "behave", meaning: "행동하다" },
  { id: 634, word: "below N", meaning: "N의 아래에" },
  { id: 635, word: "besides", meaning: "게다가, 또한" },
  { id: 636, word: "beyond N", meaning: "N을 넘어서" },
  { id: 637, word: "bias", meaning: "편견" },
  { id: 638, word: "bill", meaning: "청구서, 지폐" },
  { id: 639, word: "bite", meaning: "한 입" },
  { id: 640, word: "blame", meaning: "비난하다, 비난" },
  { id: 641, word: "blanket", meaning: "담요" },
  { id: 642, word: "bless", meaning: "축복하다" },
  { id: 643, word: "burden", meaning: "부담, 짐" },
  { id: 644, word: "bury", meaning: "묻다, 매장하다" },
  { id: 645, word: "career", meaning: "직업, 경력" },
  { id: 646, word: "category", meaning: "범주" },
  { id: 647, word: "certificate", meaning: "수료증" },
  { id: 648, word: "chemical", meaning: "화학물질" },
  { id: 649, word: "clue", meaning: "단서" },
  { id: 650, word: "compassion", meaning: "연민" },
  { id: 651, word: "competence", meaning: "능력, 역량" },
  { id: 652, word: "complaint", meaning: "불평" },
  { id: 653, word: "complicated", meaning: "복잡한" },
  { id: 654, word: "confront", meaning: "직면하다" },
  { id: 655, word: "construction", meaning: "건축물" },
  { id: 656, word: "convenient", meaning: "편리한" },
  { id: 657, word: "cope with N", meaning: "N에 대처하다" },
  { id: 658, word: "correct", meaning: "옳은, 수정하다" },
  { id: 659, word: "count", meaning: "세다, 중요하다" },
  { id: 660, word: "cover", meaning: "다루다, 덮다" },
  { id: 661, word: "currently", meaning: "현재" },
  { id: 662, word: "decide", meaning: "결정하다" },
  { id: 663, word: "definition", meaning: "정의" },
  { id: 664, word: "degree", meaning: "정도, 학위" },
  { id: 665, word: "delight", meaning: "기쁨, 기쁘게 하다" },
  { id: 666, word: "delighted", meaning: "기쁜" },
  { id: 667, word: "deny", meaning: "부인하다" },
  { id: 668, word: "destroy", meaning: "파괴하다" },
  { id: 669, word: "directly", meaning: "직접적으로" },
  { id: 670, word: "discount", meaning: "할인" },
  { id: 671, word: "discourage", meaning: "낙담시키다" },
  { id: 672, word: "disrupt", meaning: "방해하다" },
  { id: 673, word: "distance", meaning: "거리" },
  { id: 674, word: "distant", meaning: "먼" },
  { id: 675, word: "distress", meaning: "곤경" },
  { id: 676, word: "disturb", meaning: "방해하다" },
  { id: 677, word: "donation", meaning: "기부" },
  { id: 678, word: "ecosystem", meaning: "생태계" },
  { id: 679, word: "encounter", meaning: "맞닥뜨리다" },
  { id: 680, word: "entirely", meaning: "완전히" },
  { id: 681, word: "equally", meaning: "동등하게" },
  { id: 682, word: "evaluate", meaning: "평가하다" },
  { id: 683, word: "exhausted", meaning: "지친" },
  { id: 684, word: "explanation", meaning: "설명" },
  { id: 685, word: "extremely", meaning: "극도로" },
  { id: 686, word: "face", meaning: "직면하다" },
  { id: 687, word: "favor", meaning: "부탁" },
  { id: 688, word: "fear", meaning: "두려움" },
  { id: 689, word: "flexible", meaning: "유연한" },
  { id: 690, word: "follow", meaning: "따라가다" },
  { id: 691, word: "foreign", meaning: "외국의" },
  { id: 692, word: "found", meaning: "설립하다" },
  { id: 693, word: "free will", meaning: "자유 의지" },
  { id: 694, word: "frustration", meaning: "좌절" },
  { id: 695, word: "gather", meaning: "모이다, 모으다" },
  { id: 696, word: "generous", meaning: "관대한" },
  { id: 697, word: "get along with N", meaning: "N와 잘 지내다" },
  { id: 698, word: "government", meaning: "정부" },
  { id: 699, word: "gradually", meaning: "점차적으로" },
  { id: 700, word: "growth", meaning: "성장" },
  { id: 701, word: "hardly", meaning: "거의 ~않다" },
  { id: 702, word: "hire", meaning: "고용하다" },
  { id: 703, word: "household", meaning: "가정" },
  { id: 704, word: "huge", meaning: "거대한" },
  { id: 705, word: "humanity", meaning: "인류, 인간성" },
  { id: 706, word: "illustrate", meaning: "분명히 보여주다" },
  { id: 707, word: "in essence", meaning: "본질적으로" },
  { id: 708, word: "in return", meaning: "대가로" },
  { id: 709, word: "inadequate", meaning: "부적당한, 부족한" },
  { id: 710, word: "incredibly", meaning: "놀랍게도" },
  { id: 711, word: "indication", meaning: "표시, 암시" },
  { id: 712, word: "industrial", meaning: "산업의" },
  { id: 713, word: "innovative", meaning: "혁신적인" },
  { id: 714, word: "insist", meaning: "주장하다" },
  { id: 715, word: "instance", meaning: "예시" },
  { id: 716, word: "intellectual", meaning: "지적인" },
  { id: 717, word: "intend", meaning: "의도하다" },
  { id: 718, word: "interfere (with N)", meaning: "(N을) 방해하다" },
  { id: 719, word: "invisible", meaning: "보이지 않는" },
  { id: 720, word: "label", meaning: "꼬리표, 음반회사" },
  { id: 721, word: "limit", meaning: "제한하다" },
  { id: 722, word: "link", meaning: "연결하다" },
  { id: 723, word: "locate", meaning: "위치를 찾다" },
  { id: 724, word: "mammal", meaning: "포유류" },
  { id: 725, word: "management", meaning: "관리" }
  { id: 726, word: "manufacturer", meaning: "제조업자, 제조회사" },
  { id: 727, word: "mature", meaning: "어른스러운, 성숙한" },
  { id: 728, word: "mean", meaning: "1. 의미하다 2. 사악한" },
  { id: 729, word: "meaningful", meaning: "의미 있는, 중요한" },
  { id: 730, word: "meet", meaning: "1. 충족시키다 2. 만나다" },
  { id: 731, word: "mental", meaning: "마음의, 정신의" },
  { id: 732, word: "mention", meaning: "언급하다" },
  { id: 733, word: "minimal", meaning: "최소의" },
  { id: 734, word: "minimum", meaning: "최소" },
  { id: 735, word: "moisture", meaning: "습기" },
  { id: 736, word: "moment", meaning: "순간" },
  { id: 737, word: "monitor", meaning: "감시하다, 모니터하다" },
  { id: 738, word: "moral", meaning: "도덕의" },
  { id: 739, word: "moreover", meaning: "게다가" },
  { id: 740, word: "mostly", meaning: "대부분" },
  { id: 741, word: "mutual", meaning: "상호적인" },
  { id: 742, word: "native", meaning: "원산지의, 원주의" },
  { id: 743, word: "natural", meaning: "자연의, 천연의" },
  { id: 744, word: "necessary", meaning: "필요한, 필수적인" },
  { id: 745, word: "neighborhood", meaning: "동네, 근처, 이웃" },
  { id: 746, word: "nevertheless", meaning: "그럼에도 불구하고" },
  { id: 747, word: "nonverbal", meaning: "비언어적인" },
  { id: 748, word: "normal", meaning: "정상적인" },
  { id: 749, word: "nutrient", meaning: "영양소, 영양" },
  { id: 750, word: "observer", meaning: "관찰자" },
  { id: 751, word: "occasional", meaning: "때때로의" },
  { id: 752, word: "on average", meaning: "평균적으로" },
  { id: 753, word: "option", meaning: "선택" },
  { id: 754, word: "output", meaning: "생산량, 결과물" },
  { id: 755, word: "overestimate", meaning: "과대평가하다" },
  { id: 756, word: "ownership", meaning: "소유" },
  { id: 757, word: "pace", meaning: "속도, 페이스" },
  { id: 758, word: "partly", meaning: "부분적으로" },
  { id: 759, word: "pass on", meaning: "물려주다" },
  { id: 760, word: "philosopher", meaning: "철학자" },
  { id: 761, word: "pioneer", meaning: "개척자" },
  { id: 762, word: "plant", meaning: "1. 식물 2. 공장" },
  { id: 763, word: "plate", meaning: "접시, 1인분(의 요리)" },
  { id: 764, word: "play a role", meaning: "역할을 하다" },
  { id: 765, word: "please", meaning: "기쁘게 하다" },
  { id: 766, word: "pleasure", meaning: "즐거움" },
  { id: 767, word: "polite", meaning: "예의바른, 공손한" },
  { id: 768, word: "popularity", meaning: "인기" },
  { id: 769, word: "pose", meaning: "(질문을) 제기하다" },
  { id: 770, word: "precisely", meaning: "정확하게" },
  { id: 771, word: "predict", meaning: "예측하다" },
  { id: 772, word: "prefer", meaning: "선호하다" },
  { id: 773, word: "presence", meaning: "존재" },
  { id: 774, word: "presentation", meaning: "제시, 발표" },
  { id: 775, word: "prevention", meaning: "예방, 방지" },
  { id: 776, word: "principal", meaning: "교장" },
  { id: 777, word: "productive", meaning: "생산성 있는" },
  { id: 778, word: "proper", meaning: "적절한" },
  { id: 779, word: "punish", meaning: "벌주다" },
  { id: 780, word: "recommendation", meaning: "추천" },
  { id: 781, word: "refund", meaning: "환불" },
  { id: 782, word: "refuse", meaning: "거절하다, 거부하다" },
  { id: 783, word: "reject", meaning: "거절하다" },
  { id: 784, word: "religious", meaning: "종교의" },
  { id: 785, word: "remarkably", meaning: "주목할 만하게, 현저하게" },
  { id: 786, word: "remote", meaning: "멀리 떨어진, 원격의" },
  { id: 787, word: "resistance", meaning: "저항" },
  { id: 788, word: "restrict", meaning: "제한하다" },
  { id: 789, word: "risky", meaning: "위험한" },
  { id: 790, word: "senior", meaning: "노인" },
  { id: 791, word: "session", meaning: "회차, 세션" },
  { id: 792, word: "shape", meaning: "모양, 형태를 잡다" },
  { id: 793, word: "shorten", meaning: "줄이다" },
  { id: 794, word: "sight", meaning: "시력" },
  { id: 795, word: "sink", meaning: "가라앉다, 싱크대" },
  { id: 796, word: "sort", meaning: "분류하다, 종류" },
  { id: 797, word: "souvenir", meaning: "기념품" },
  { id: 798, word: "spoil", meaning: "상하다, 망치다" },
  { id: 799, word: "store", meaning: "1. 상점 2. 저장하다" },
  { id: 800, word: "stranger", meaning: "낯선 사람" },
  { id: 801, word: "stuff", meaning: "물건, 꽉 채우다" },
  { id: 802, word: "take advantage of", meaning: "이용하다" },
  { id: 803, word: "take off", meaning: "이륙하다" },
  { id: 804, word: "talent", meaning: "재능" },
  { id: 805, word: "unfavorable", meaning: "불리한" },
  { id: 806, word: "unpleasant", meaning: "불쾌한" },
  { id: 807, word: "upcoming", meaning: "다가오는" },
  { id: 808, word: "utilize", meaning: "활용하다, 이용하다" },
  { id: 809, word: "valuable", meaning: "가치있는" },
  { id: 810, word: "violate", meaning: "위반하다" },
  { id: 811, word: "widespread", meaning: "광범위한" },
  { id: 812, word: "wildlife", meaning: "야생" },
  { id: 813, word: "within N", meaning: "N내로, 이내로" },
  { id: 814, word: "a great deal of", meaning: "다량의, 많은" },
  { id: 815, word: "a variety of Ns", meaning: "다양한 N들" },
  { id: 816, word: "abandon", meaning: "버리다" },
  { id: 817, word: "above N", meaning: "N 위에" },
  { id: 818, word: "abstract", meaning: "추상적인" },
  { id: 819, word: "acceptable", meaning: "받아들여질 수 있는" },
  { id: 820, word: "accessible", meaning: "접근하기 쉬운" },
  { id: 821, word: "accordingly", meaning: "따라서" },
  { id: 822, word: "account", meaning: "1. 설명 2. 계좌" },
  { id: 823, word: "account for N", meaning: "차지하다, 설명하다" },
  { id: 824, word: "active", meaning: "적극적인" },
  { id: 825, word: "adequate", meaning: "적절한" },
  { id: 826, word: "adequately", meaning: "적절하게" },
  { id: 827, word: "aid", meaning: "1. 돕다 2. 도움" },
  { id: 828, word: "along N", meaning: "N을 따라서" },
  { id: 829, word: "along with N", meaning: "N과 함께" },
  { id: 830, word: "alternative", meaning: "대안적인, 대안" },
  { id: 831, word: "although", meaning: "비록 ~일지라도" },
  { id: 832, word: "analysis", meaning: "분석" },
  { id: 833, word: "ancient", meaning: "고대의" },
  { id: 834, word: "anthropologist", meaning: "인류학자" },
  { id: 835, word: "apology", meaning: "사과" },
  { id: 836, word: "as well", meaning: "또한" },
  { id: 837, word: "assist", meaning: "돕다" },
  { id: 838, word: "assistance", meaning: "도움, 지원" },
  { id: 839, word: "at once", meaning: "동시에" },
  { id: 840, word: "athlete", meaning: "운동선수" },
  { id: 841, word: "atom", meaning: "원자" },
  { id: 842, word: "attraction", meaning: "관심을 끄는 것" },
  { id: 843, word: "awkward", meaning: "어색한" },
  { id: 844, word: "barely", meaning: "거의 ~않다" },
  { id: 845, word: "bark", meaning: "짖다, 나무껍데기" },
  { id: 846, word: "barrier", meaning: "장벽" },
  { id: 847, word: "basis", meaning: "기초, 기반" },
  { id: 848, word: "good at N", meaning: "~를 잘하는" },
  { id: 849, word: "known as N", meaning: "N로 알려진" },
  { id: 850, word: "known for N", meaning: "N 때문에 알려진" },
  { id: 851, word: "proud of N", meaning: "자랑스러워하는" },
  { id: 852, word: "willing to V", meaning: "기꺼이 ~하는" },
  { id: 853, word: "bend", meaning: "구부러지다" },
  { id: 854, word: "beverage", meaning: "음료" },
  { id: 855, word: "biologist", meaning: "생물학자" },
  { id: 856, word: "blind", meaning: "눈 먼" },
  { id: 857, word: "board", meaning: "탑승하다, 이사회" },
  { id: 858, word: "boost", meaning: "증대시키다" },
  { id: 859, word: "boundary", meaning: "경계" },
  { id: 860, word: "briefly", meaning: "잠시, 간단히" },
  { id: 861, word: "budget", meaning: "예산" },
  { id: 862, word: "by N", meaning: "N만큼, ~에 의해" },
  { id: 863, word: "candidate", meaning: "후보자" },
  { id: 864, word: "capture", meaning: "포획하다" },
  { id: 865, word: "caution", meaning: "주의" },
  { id: 866, word: "cell", meaning: "세포" },
  { id: 867, word: "character", meaning: "등장인물, 성격" },
  { id: 868, word: "charity", meaning: "자선 단체" },
  { id: 869, word: "childhood", meaning: "어린 시절" },
  { id: 870, word: "choice", meaning: "선택" },
  { id: 871, word: "civilization", meaning: "문명" },
  { id: 872, word: "client", meaning: "의뢰인" },
  { id: 873, word: "climb", meaning: "오르다" },
  { id: 874, word: "command", meaning: "명령" },
  { id: 875, word: "commercial", meaning: "상업적인" },
  { id: 876, word: "commonly", meaning: "보통" },
  { id: 877, word: "compel", meaning: "강요하다" },
  { id: 878, word: "complain", meaning: "불평하다" },
  { id: 879, word: "component", meaning: "구성요소" },
  { id: 880, word: "conceal", meaning: "감추다" },
  { id: 881, word: "confirm", meaning: "확인하다" },
  { id: 882, word: "consciously", meaning: "의식적으로" },
  { id: 883, word: "consist of", meaning: "구성되다" },
  { id: 884, word: "consistent", meaning: "일관된" },
  { id: 885, word: "consult", meaning: "상담하다" },
  { id: 886, word: "content", meaning: "만족한, 내용물" },
  { id: 887, word: "continue", meaning: "계속하다" },
  { id: 888, word: "contrast", meaning: "대조하다" },
  { id: 889, word: "control", meaning: "통제하다" },
  { id: 890, word: "convenience", meaning: "편리함" },
  { id: 891, word: "countless", meaning: "무수한" },
  { id: 892, word: "courage", meaning: "용기" },
  { id: 893, word: "craft", meaning: "공예" },
  { id: 894, word: "creative", meaning: "창조적인" },
  { id: 895, word: "crew", meaning: "단원" },
  { id: 896, word: "crime", meaning: "범죄" },
  { id: 897, word: "criticism", meaning: "비판" },
  { id: 898, word: "curious", meaning: "호기심 있는" },
  { id: 899, word: "deal", meaning: "거래" },
  { id: 900, word: "debt", meaning: "빚" },
  { id: 901, word: "defense", meaning: "방어" },
  { id: 902, word: "deliver", meaning: "전달하다" },
  { id: 903, word: "dependent", meaning: "의존적인" },
  { id: 904, word: "depression", meaning: "우울" },
  { id: 905, word: "design", meaning: "설계하다" },
  { id: 906, word: "destination", meaning: "목적지" },
  { id: 907, word: "differ", meaning: "다르다" },
  { id: 908, word: "disaster", meaning: "재난" },
  { id: 909, word: "discomfort", meaning: "불편함" },
  { id: 910, word: "distract", meaning: "집중을 방해하다" },
  { id: 911, word: "document", meaning: "문서" },
  { id: 912, word: "doubtful", meaning: "의심스러운" },
  { id: 913, word: "drought", meaning: "가뭄" },
  { id: 914, word: "during N", meaning: "N 동안" },
  { id: 915, word: "duty", meaning: "의무" },
  { id: 916, word: "each other", meaning: "서로" },
  { id: 917, word: "editor", meaning: "편집자" },
  { id: 918, word: "educate", meaning: "교육하다" },
  { id: 919, word: "element", meaning: "요소" },
  { id: 920, word: "emission", meaning: "배출" },
  { id: 921, word: "emotional", meaning: "감정적인" },
  { id: 922, word: "employ", meaning: "고용하다" },
  { id: 923, word: "empty", meaning: "비어 있는" },
  { id: 924, word: "end up Ving", meaning: "결국 ~하게 되다" },
  { id: 925, word: "engage", meaning: "사로잡다" },
  { id: 926, word: "enormous", meaning: "막대한" },
  { id: 927, word: "enrich", meaning: "풍요롭게 하다" },
  { id: 928, word: "enroll", meaning: "등록하다" },
  { id: 929, word: "entrance", meaning: "입구" },
  { id: 930, word: "equal", meaning: "동등한" },
  { id: 931, word: "essentially", meaning: "근본적으로" },
  { id: 932, word: "ethical", meaning: "윤리적인" },
  { id: 933, word: "evident", meaning: "명백한" },
  { id: 934, word: "exact", meaning: "정확한" },
  { id: 935, word: "exhibition", meaning: "전시회" },
  { id: 936, word: "existing", meaning: "기존의" },
  { id: 937, word: "exotic", meaning: "이국적인" },
  { id: 938, word: "expertise", meaning: "전문지식" },
  { id: 939, word: "extensive", meaning: "광범위한" },
  { id: 940, word: "fascinating", meaning: "매력적인" },
  { id: 941, word: "fashion", meaning: "유행, 패션" },
  { id: 942, word: "feel like Ving", meaning: "~하고 싶다" },
  { id: 943, word: "financial", meaning: "재정적인" },
  { id: 944, word: "fine", meaning: "좋은, 벌금" },
  { id: 945, word: "flight", meaning: "비행" },
  { id: 946, word: "float", meaning: "뜨다" },
  { id: 947, word: "flood", meaning: "범람시키다" },
  { id: 948, word: "forest", meaning: "숲" },
  { id: 949, word: "forgive", meaning: "용서하다" },
  { id: 950, word: "former", meaning: "이전의" },
  { id: 951, word: "foundation", meaning: "기초, 재단" },
  { id: 952, word: "free", meaning: "무료의, 자유로운" },
  { id: 953, word: "frequent", meaning: "빈번한" },
  { id: 954, word: "friction", meaning: "마찰" },
  { id: 955, word: "fuel", meaning: "연료" },
  { id: 956, word: "funeral", meaning: "장례식" },
  { id: 957, word: "fur", meaning: "모피" },
  { id: 958, word: "general", meaning: "일반적인" },
  { id: 959, word: "grain", meaning: "곡식" },
  { id: 960, word: "grant", meaning: "수여하다, 보조금" },
  { id: 961, word: "gratitude", meaning: "감사" },
  { id: 962, word: "guilt", meaning: "죄책감" },
  { id: 963, word: "habitat", meaning: "서식지" },
  { id: 964, word: "hardship", meaning: "고난" },
  { id: 965, word: "harmful", meaning: "해로운" },
  { id: 966, word: "harsh", meaning: "가혹한" },
  { id: 967, word: "harvest", meaning: "수확하다" },
  { id: 968, word: "hence", meaning: "따라서" },
  { id: 969, word: "hesitate", meaning: "망설이다" },
  { id: 970, word: "hollow", meaning: "텅 빈" },
  { id: 971, word: "honesty", meaning: "정직" },
  { id: 972, word: "hunter-gatherer", meaning: "수렵 채집인" }
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
        // 오답: 놀리는 표정
        feedbackIcon.innerText = '😜';
        feedbackIcon.classList.add('shake');
        
        // 정답(뜻)을 화면에 잠깐 보여줌
        wordDisplay.innerText = currentWord.meaning;

        // 중복 방지하며 오답 노트에 추가
        if (!wrongAnswers.includes(currentWord)) {
            wrongAnswers.push(currentWord);
        }
        setTimeout(nextWord, 1000);
        setTimeout(nextWord, 1000); // 1초 뒤 다음 문제
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
