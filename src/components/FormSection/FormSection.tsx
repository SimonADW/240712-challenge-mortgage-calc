
import style from './FormSection.module.css'

const FormSection = () => {
  return (
	<section className={style.mainContainer}>
		<form action="">
			<h1>Mortgage Calculator</h1>
			<button className={style.clearAllButton}>Clear All</button>
			
			<br />

			<label htmlFor="">Mortgage Amount</label>
			<div className={`${style.amountField} ${style.inputAndPlacholderWrapper}`}>
				<div className={`${style.placeholder} ${style.amountPlaceholder}`}>£</div>
				<input type="number" name='amount' />
			</div>


			<div className={style.termRateWrapper}>
				<div>
					<label htmlFor="term">Mortgage Term</label>
					<div className={`${style.amountField} ${style.inputAndPlacholderWrapper}`}>
						<input type="number" name='term'/>
						<div className={`${style.placeholder} ${style.amountPlaceholder}`}>years</div>
					</div>
				</div>

				<div>
					<label htmlFor="">Interest Rate</label>
					<div className={`${style.amountField} ${style.inputAndPlacholderWrapper}`}>
						<input type="number" name='rate'/>
						<div className={`${style.placeholder} ${style.amountPlaceholder}`}>%</div>
					</div>
				</div>
			</div>

			<div className={style.radioButtons} htmlFor="mortgageType">
				Mortgage Type
				<label className={`${style.repaymentLabel} ${style.radioLabel}`} htmlFor="repayment">
					<input type="radio" value="repayment" name='mortgageType' id='repayment' checked/>
					Repayment
				</label>

				<label className={style.radioLabel} htmlFor="interestOnly">
					<input type="radio" value="interestOnly" name='mortgageType' id='interestOnly' />
					Interest Only
				</label>
			</div>

			<button className={style.calcButton}>Calculate Repayment</button>

		</form>
	</section>
  )
}

export default FormSection