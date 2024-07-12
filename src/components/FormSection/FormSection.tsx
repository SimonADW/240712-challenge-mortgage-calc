
import style from './FormSection.module.css'

const FormSection = () => {
  return (
	<div className={style.mainContainer}>
		<form action="">
			<h1>Mortgage Calculator</h1>
			<button className={style.clearAllButton}>Clear All</button>
			
			<br />

			<label htmlFor="">
				Mortgage Amount
				<input type="number" name='amount' />
			</label>


			<div>
				<label htmlFor="term">
					Mortgage Term	
				<input type="number" name='term'/>
				</label>

				<label htmlFor="">
					Interest Rate
					<input type="number" name='rate'/>
				</label>
			</div>

			<label className={style.radioButtons} htmlFor="mortgageType">
				Mortgage Type
				<label htmlFor="repayment">
					<input type="radio" value="repayment" name='mortgageType' id='repayment' />
					Repayment
				</label>

				<label htmlFor="interestOnly">
					<input type="radio" value="interestOnly" name='mortgageType' id='interestOnly' />
					Interest Only
				</label>
			</label>

			<button className={style.calcButton}>Calculate Repayment</button>

		</form>
	</div>
  )
}

export default FormSection