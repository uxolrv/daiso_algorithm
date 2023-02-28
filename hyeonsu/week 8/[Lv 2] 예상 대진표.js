function solution(n, a, b) {
  // 처음에는 N명이 참가함. 1-2 3-4 5-6 이런식으로 싸움. 이기면 담 라운드
  // 만약 1-2에서 이긴 사람은 1번 3-4 에서 이긴 사람은 2번 이런식임..
  // 경쟁자 A, B가 몇번째 라운드에서 만나니?

  // 예시
  // 8명 참가 4번 7번의 경우
  // [[1, 2], [3, 4], [5, 6], [7, 8]]
  // 3-4에서 2 획득, 7-8에서 4획득  1라운드
  // 1-2에서 1 획득, 3-4에서 2획득  2라운드
  // 맞짱 3라운드

  // n을 절반으로 나눴을 때 둘이 같은 쪽에 있지 않으면 맨 마지막 라운드에서밖에 못봄 이거는 이제 2의 몇제곱인가? 하는 문제임.

  // 번호는 어떻게 움직이는가?
  // Math.ceil(번호/2); 로 변화함
  // 7 - 4 - 2 - 1
  // 15 - 8 - 4 - 2
  // 여기서 Math.ceil을 해줬을때 같으면 만난거임
  // 다를때마다 round++ 해주고

  let round = 1;
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  while (Math.ceil(max / 2) !== Math.ceil(min / 2)) {
    max = Math.ceil(max / 2);
    min = Math.ceil(min / 2);
    round++;
  }
  return round;
}
