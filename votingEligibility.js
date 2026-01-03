function checkVotingEligibility(age) {
  // implement your solution here
  if (age >= 18) {
    return 'Eligible to vote'
  }
  else {
    return 'Not eligible to vote'
  }
}

module.exports = { checkVotingEligibility };