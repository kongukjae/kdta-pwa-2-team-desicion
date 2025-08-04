// 더미 데이터 - 포켓몬 이름 사용
const oldFaceMembers = ["피카츄", "라이츄", "파이리", "리자드"];

const newFaceMembers = ["꼬부기", "어니부기", "캐터피", "단데기", "버터플", "뿔충이"];

/**
 * 배열을 랜덤하게 섞는 함수 (Fisher-Yates 알고리즘)
 * @param {Array} array - 섞을 배열
 * @returns {Array} - 섞인 새로운 배열
 */
function shuffle(array) {
  // 배열에 아이템들을 넣어놓는 작업
  const newArray = [];
  array.forEach((item) => {
    return newArray.push(item);
  });
  // ? 아래 절차형 위, 선언형
  // for (let i = 0; i < array.length; i++) {
  //   newArray[i] = array[i];
  // }

  let endIndex = newArray.length - 1;
  for (let i = endIndex; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    // 배열의 요소 교환
    let temp = newArray[i];
    newArray[i] = newArray[randomIndex];
    newArray[randomIndex] = temp;
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
  console.log("이 시점에서 위 함수들이나 각종 로직들을 활용함");

  // 1. old face와 new face를 각각 섞기
  const shuffledOldFace = shuffle(oldFaceMembers);
  const shuffledNewFace = shuffle(newFaceMembers);

  console.log("섞인 old face 순서:", shuffledOldFace);
  console.log("섞인 new face 순서:", shuffledNewFace);
  console.log("");

  // 2. 각 팀에 배정
  const teamA = {
    teamName: "A팀", // "A팀" 리터럴은 고정이므로 변경하지 않음
    members: [],
  };

  const teamB = {
    teamName: "B팀",
    members: [],
  };

  /**
   * 지정된 멤버 배열에서 특정 범위의 멤버를 팀에 추가하는 함수
   * @param {Array} teamMembers - 팀의 멤버 배열
   * @param {string} type - 멤버 타입 ("old face" 또는 "new face")
   * @param {Array} sourceArray - 소스 배열
   * @param {number} start - 시작 인덱스
   * @param {number} end - 끝 인덱스(포함하지 않음)
   */
  function addMembers(teamMembers, type, sourceArray, start, end) {
    for (let i = start; i < end; i++) {
      teamMembers.push(new MakeMember(type, sourceArray[i]));
    }
  }

  // A팀에 old face 2명, new face 3명 배정
  addMembers(teamA.members, "old face", shuffledOldFace, 0, 2);
  addMembers(teamA.members, "new face", shuffledNewFace, 0, 3);

  // B팀에 나머지 old face 2명, new face 3명 배정
  addMembers(teamB.members, "old face", shuffledOldFace, 2, 4);
  addMembers(teamB.members, "new face", shuffledNewFace, 3, 6);

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
  console.log("-------------------최종 팀 구성 결과 \n");

  function role(member) {
    if (member.isLeader === true) {
      return "팀장";
    } else {
      return "팀원";
    }
  }

  teams.forEach((team) => {
    console.log(`${team.teamName}`);
    console.log("─".repeat(40));

    // 테이블 형태로 출력할 데이터 준비
    const tableData = team.members.map((member, index) => ({
      번호: index + 1,
      이름: member.name,
      분류: member.type,
      역할: role(member),
    }));

    console.table(tableData);
    console.log("");
  });
}

// 프로그램 실행
teamDecision();
