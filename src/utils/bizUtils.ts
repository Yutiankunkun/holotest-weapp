/**
 * @param answerList
 * @param questions
 * @param question_results
 */

export function getBestQuestionResult(answerList, questions, question_results) {
  const optionCount = {};

  const len = Math.min(answerList.length, questions.length);

  for (let i = 0; i < len; i++) {
    const answer = answerList[i];
    const question = questions[i];

    const hitOption = question.options?.find((opt) => opt.key === answer);
    if (!hitOption) continue;

    const result = hitOption.result;
    optionCount[result] = (optionCount[result] || 0) + 1;
  }

  let maxScore = -Infinity;
  let maxScoreResult = question_results[0];

  for (const r of question_results) {
    const score = (r.resultProp || []).reduce(
      (sum, prop) => sum + (optionCount[prop] || 0),
      0
    );

    if (score > maxScore) {
      maxScore = score;
      maxScoreResult = r;
    }
  }

  return maxScoreResult;
}
