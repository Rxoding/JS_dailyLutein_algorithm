function solution(babbling) {
  const babblables = ['aya', 'ye', 'woo', 'ma'];

  return babbling.reduce((possible, babbl) => {
    // 연속된 발음 확인
    for (let i = 0; i < babblables.length; i++) {
      if (babbl.includes(babblables[i].repeat(2))) return possible;
    }

    // 발음 할 수있는 부분 제거
    for (let i = 0; i < babblables.length; i++) {
      babbl = babbl.split(babblables[i]).join(' ').trim();
    }

    // babbl 이 존재할 시 possible 리턴
    if (babbl) return possible;

    return (possible += 1);
  }, 0);
}