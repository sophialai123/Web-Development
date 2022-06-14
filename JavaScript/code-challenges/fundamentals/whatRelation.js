/* Given the percentage of DNA shared between two people, you can calculate their likely familial relationship.

We wrote a function, whatRelation(), that has one number parameter, percentSharedDNA, and returns the likely relationship. We expect the number passed in to always be an integer from 0 to 100, but for some reason it’s not working!

Here’s how it’s supposed to calculate the relationship:

100 should return 'You are likely identical twins.'
35-99 should return 'You are likely parent and child or full siblings.'
14-34 should return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
6-13 should return 'You are likely 1st cousins.'
3-5 should return 'You are likely 2nd cousins.'
1-2 should return 'You are likely 3rd cousins.'
0 should return 'You are likely not related.' */




const whatRelation = percentSharedDNA => {
  if (percentSharedDNA === 100) {
    return 'You are likely identical twins.'
  }
  if (percentSharedDNA >= 35 && percentSharedDNA <= 99) {
    return 'You are likely parent and child or full siblings.'
  }
  if (percentSharedDNA >= 14 && percentSharedDNA <= 34) {
    return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
  }
  if (percentSharedDNA >= 6 && percentSharedDNA <= 13) {
    return 'You are likely 1st cousins.'
  }
  if (percentSharedDNA >= 3 && percentSharedDNA <= 5) {
    return 'You are likely 2nd cousins.'
  }
  if (percentSharedDNA >= 1 && percentSharedDNA <= 2) {
    return 'You are likely 3rd cousins'
  }
  return 'You are likely not related.'
}

console.log(whatRelation(34))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3))
// Should print 'You are likely 2nd cousins.'
