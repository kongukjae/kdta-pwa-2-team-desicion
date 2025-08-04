/**
 * 팀 배정 프로그램
 * - old face 4명, new face 6명을 2개 팀으로 나누기
 * - 각 팀: old face 2명 + new face 3명 = 총 5명
 * - 각 팀에서 팀장 1명 랜덤 선출
 */

// 더미 데이터 - 포켓몬 이름 사용
const oldFaceMembers = [
  "피카츄", 
  "라이츄", 
  "파이리", 
  "리자드"
];

const newFaceMembers = [
  "꼬부기", 
  "어니부기", 
  "캐터피", 
  "단데기", 
  "버터플", 
  "뿔충이"
];

/**
 * 배열을 랜덤하게 섞는 함수 (Fisher-Yates 알고리즘)
 * @param {Array} array - 섞을 배열
 * @returns {Array} - 섞인 새로운 배열
 */
function shuffle(array) {
  const newArray = [...array]; // 원본 배열을 복사
  
  for (let i = newArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    // 배열의 요소 교환
    [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
  }
  
  return newArray;
}

/**
 * 멤버 객체를 생성하는 클래스
 */
class MakeMember {
  constructor(type, name, isLeader = false) {
    this.type = type; 
    this.name = name; 
    this.isLeader = isLeader; 
  }
}

/**
 * 팀을 구성하고 팀장을 선출하는 메인 함수
 */
function teamDecision() {
  console.log("=== 팀 배정 시작 ===\n");
  
  // 1. old face와 new face를 각각 섞기
  const shuffledOldFace = shuffle(oldFaceMembers);
  const shuffledNewFace = shuffle(newFaceMembers);
  
  console.log("섞인 old face 순서:", shuffledOldFace);
  console.log("섞인 new face 순서:", shuffledNewFace);
  console.log("");
  
  // 2. 각 팀에 배정
  const teamA = {
    teamName: "A팀",
    members: []
  };
  
  const teamB = {
    teamName: "B팀", 
    members: []
  };
  
  // A팀에 old face 2명, new face 3명 배정
  for (let i = 0; i < 2; i++) {
    teamA.members.push(new MakeMember("old face", shuffledOldFace[i]));
  }
  for (let i = 0; i < 3; i++) {
    teamA.members.push(new MakeMember("new face", shuffledNewFace[i]));
  }
  
  // B팀에 나머지 old face 2명, new face 3명 배정
  for (let i = 2; i < 4; i++) {
    teamB.members.push(new MakeMember("old face", shuffledOldFace[i]));
  }
  for (let i = 3; i < 6; i++) {
    teamB.members.push(new MakeMember("new face", shuffledNewFace[i]));
  }
  
  // 3. 각 팀에서 팀장 선출 (첫 번째 멤버가 팀장)
  const shuffledTeamA = shuffle(teamA.members);
  const shuffledTeamB = shuffle(teamB.members);
  
  // 팀장 설정
  shuffledTeamA[0].isLeader = true;
  shuffledTeamB[0].isLeader = true;
  
  // 섞인 순서로 멤버 재배정
  teamA.members = shuffledTeamA;
  teamB.members = shuffledTeamB;
  
  const finalTeams = [teamA, teamB];
  
  // 4. 결과 출력
  displayTeams(finalTeams);
  
  return finalTeams;
}

/**
 * 팀 구성 결과를 테이블 형태로 출력하는 함수
 * @param {Array} teams - 팀 정보 배열
 */
function displayTeams(teams) {
  console.log("=== 최종 팀 구성 결과 ===\n");
  
  teams.forEach(team => {
    console.log(`🏆 ${team.teamName}`);
    console.log("─".repeat(40));
    
    // 테이블 형태로 출력할 데이터 준비
    const tableData = team.members.map((member, index) => ({
      번호: index + 1,
      이름: member.name,
      분류: member.type,
      역할: member.isLeader ? "👑 팀장" : "팀원"
    }));
    
    console.table(tableData);
    console.log("");
  });
}

// 프로그램 실행
teamDecision();
