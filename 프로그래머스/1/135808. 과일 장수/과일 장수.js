function solution(k, m, score) {
    var answer = 0;
    // 먼저 socre를 내림차순 
    let sortScore = score.sort((a,b)=>b-a)
    // m개 만큼 묶어서 가격 가격 구하기
    // m개씩 묶어서 가격 계산
    for (let i = 0; i <= score.length - m; i += m) {
        // 묶음의 마지막 값이 가장 작은 값
        answer += score[i + m - 1] * m;
    }
    return answer;
}