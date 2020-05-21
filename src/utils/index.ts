
const numberToKorean = (number: number) => {
  switch (number) {
    case 1:
      return '하나'
    case 2:
      return '둘'
    case 3:
      return '셋'
    case 4:
      return '넷'
    case 5:
      return '다섯'
    case 6:
      return '여섯'
    case 7:
      return '일곱'
    case 8:
      return '여덟'
    case 9:
      return '아홉'
    case 10:
      return '십'
    case 100:
      return '백'
    case 1000:
      return '천'
    case 10000:
      return '만'
    default:
      return ''
  }
}

const recursiveSplitNumber = (stack: string[], target: number) => {
  const length = target.toString().length
  let divideKey = 1
  for (let i = 0; i < length - 1; i++) divideKey *= 10

  stack.push(numberToKorean(Math.floor(target / divideKey) * divideKey))

  if (target.toString().length === 1) return

  recursiveSplitNumber(stack, target % divideKey)
}

export const convertNumberToKorean = (target: number) => {
  const stack: string[] = []

  recursiveSplitNumber(stack, target)

  return stack.toString().replace(/,/g, ' ')
}