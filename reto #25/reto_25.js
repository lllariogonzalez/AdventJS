function travelDistance(map) {
  const roadmapArr = map.split('\n')
  const roadmap = roadmapArr.join('')
  const rows = roadmapArr.length
  const cols = roadmapArr[0].length
  const len = roadmap.length
  const santaPos = roadmap.indexOf('S')

  let gift = 1
  let movements = 0
  let santaCol = santaPos % cols
  let santaRow = (santaPos * rows) / len | 0

  const numbers = roadmap.replace(/\.|S/g, '')

  for (const _number of numbers) {
    const giftPos = roadmap.indexOf(`${gift}`)
    const giftCol = giftPos % cols
    const giftRow = (giftPos * rows) / len | 0

    movements += Math.abs(santaRow - giftRow)
    movements += Math.abs(santaCol - giftCol)

    santaCol = giftCol
    santaRow = giftRow

    gift++
  }

  return movements
}