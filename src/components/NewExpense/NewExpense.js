import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {

    const saveExpenseHandler = (enteredExpenseDetails) => {
        const expenseData = {
            ...enteredExpenseDetails,
            id:Math.random().toString()
        }

        props.onAddExpense(expenseData)

}
    return (<div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
    </div>
    )
}

export default NewExpense