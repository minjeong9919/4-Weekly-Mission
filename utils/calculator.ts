function timeToString(time: number) {
  let diffSec = parseInt(String(time / 1000));
  // 2분 미만
  if (diffSec <= 120) {
    return "1 minute ago";
  }
  let diffMinute = parseInt(String(diffSec / 60));
  // 59분 이하
  if (diffMinute <= 59) {
    return `${diffMinute} minutes ago`;
  }

  let diffHour = parseInt(String(diffMinute / 60));
  // 23시간 이하
  if (diffHour <= 23) {
    return `${diffHour} hours ago`;
  }
  // 30일 이하
  let diffDay = parseInt(String(diffHour / 24));
  if (diffDay <= 30) {
    return `${diffDay} days ago`;
  }

  let diffMonth = parseInt(String(diffDay / 30));
  // 11달 이하
  if (diffMonth <= 11) {
    return `${diffMonth} months ago`;
  }
  // 11달 이상
  let diffYear = parseInt(String(diffMonth / 12));
  return `${diffYear} years ago`;
}

export function CalcTime(time: string) {
  const nowTime = Date.now();
  const writingTime = Date.parse(time);
  const diffTime = nowTime - writingTime;

  let sentence = timeToString(diffTime);
  return sentence;
}
