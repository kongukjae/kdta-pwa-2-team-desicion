console.log("hello");

/**
 * todo : old face 네명
 * todo : new face 여섯명
 * todo : old face 네명은 두 그룹으로 나누어진다.
 * todo : new face 여섯명은 두 그룹으로 나누어진다.
 * todo : 총 팀은 두개가 된다.
 * todo : old face 두명 + new face 세명 = 1팀은 총 다섯명이다.
 * todo : old face 두명 + new face 세명 = 2팀은 총 다섯명이다.
 *
 * todo : old face 네명중 두명, 두명은 랜덤으로 선출된다.(suffle 로직을 따른다)
 * todo : new face 여섯명중 세명, 세명은 랜덤으로 선출된다.(suffle 로직을 따른다)
 * todo : 팀장은 old face 두명, new face 세명 총 5명의 구성원중 1명이 랜덤으로 선출된다.
 * todo : -----> 배열 [0,1,2,3,4] 라면 맨 앞 [0]번이 팀장이 된다.
 * todo : 두명의 팀장, 두개의 팀, 각팀당 두명의 old face, 세명의 new face로 구성된다.
 *
 *
 * ? interface
 * * 1. cli로 실행하면 표가나타나는 형태를 원한다. conole.table()
 * * 2. 두개의 팀으로 고정되어있다. A팀, B팀이 보기 원활하게 작성되기를 원한다.
 *
 */

/**
 * ? dummy data
 */


/** 
 * ? 총 멤버는 열명 - 가짜로 포켓몬스터 이름으로 한다.
 * ? * old face 네명
 * ? * new face 여섯명
 * * ? old face 네명은 두 그룹으로 나누어진다.
 * * ? new face 여섯명은 두 그룹으로 나누어진다.
 * * ? 총 팀은 두개가 된다.
 * 
 * * 아래는 간단하게 생각한 구조이다.
 * 
 * * 주요 함수 이름은 teamDecision으로 생각하고 있다.
 * 
 * 
 */
const test = {
  type: "old face",
  name: "공욱재",
  isLeader: false,
};

class MakeMember {
  constructor(type, name, isLeader = false) {
    this.type = type; 
    this.name = name; 
    this.isLeader = isLeader; 
  }
}

class TotalMember {
  totalTeamMember = [];
}


const totalTeamMember = [
  {
    teamName: "A팀",
    members: [
      {
        type: "old face",
        name: "공욱재",
        isLeader: false,
      },
            {
        type: "old face",
        name: "공욱재",
        isLeader: false,
      },
            {
        type: "new face",
        name: "공욱재",
        isLeader: false,
      },
            {
        type: "new face",
        name: "공욱재",
        isLeader: false,
      },
            {
        type: "new face",
        name: "공욱재",
        isLeader: false,
      },
    ],
  },
  {
    teamName: "B팀",
    members: [
      {
        type: "old face",
        name: "공욱재",
        isLeader: false,
      },
            {
        type: "old face",
        name: "공욱재",
        isLeader: false,
      },
            {
        type: "new face",
        name: "공욱재",
        isLeader: false,
      },
            {
        type: "new face",
        name: "공욱재",
        isLeader: false,
      },
            {
        type: "new face",
        name: "공욱재",
        isLeader: false,
      },
    ],
  },
];
