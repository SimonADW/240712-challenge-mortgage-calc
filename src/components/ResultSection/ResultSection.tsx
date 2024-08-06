import React from 'react'
import style from './ResultSection.module.css'

type ResultProps = {
  mortgageCalculations: string[]
}

const ResultSection = ({mortgageCalculations}: ResultProps) => {
  
  return (
	<>
  <section className={style.resultSection}>
    <h1>Your results</h1>
    <p>
      Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.
    </p>
    <div className={style.displayResultSectionBackground}>
      <div className={style.displayResultSection}>
        <p>Your monthly repayments</p>
        <h3 className={style.monthlyRepay}>{mortgageCalculations[0]}</h3>
        <hr />
        <p>Total you´ll repay over the term</p>
        <h3 className={style.termRepay}>{mortgageCalculations[1]}</h3>
      </div>
    </div>
  </section>
  </>
  )
}

export default ResultSection