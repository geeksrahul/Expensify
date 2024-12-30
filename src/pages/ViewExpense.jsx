import { faTrashCan,faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteExpense } from "../store/expenseSlice.js"
import { useNavigate } from 'react-router-dom';
function ViewExpense() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector(state => {
    return state.expense.expenses;
  });
  return (
    <div className='min-h-screen w-full p-10 flex flex-col gap-2 bg-gray-300 dark:bg-gray-700 dark:text-lime-100'>
        <h2 className='text-2xl font-bold'> View Expenses </h2>
        <table className='w-full'>
          <thead>
            <tr className='w-full bg-blue-800 text-white h-10'>
              <th className='border'>Sr.</th> 
              <th className='border'>Date</th>
              <th className='border'>Amount</th>
              <th className='border'>Category</th>
              <th className='border'>Note</th>
              <th className='border'>Actions</th>
            </tr>
          </thead>
          <tbody className=''>
            {selector && selector.map((expense,idx) => (
              <tr key={expense.id} className='w-full bg-white text-black h-10 dark:text-white dark:bg-gray-800'>
                <td className='border border-black text-center dark:border-white'> {idx + 1} </td>
                <td className='border border-black text-center dark:border-white'> {expense.date} </td>
                <td className='border border-black text-center dark:border-white'> {expense.amount} </td>
                <td className='border border-black text-center dark:border-white'> {expense.category} </td>
                <td className='border border-black text-center dark:border-white'> {expense.note} </td>
                <td className='border border-black text-center dark:border-white'> 
                  <FontAwesomeIcon icon={faPenToSquare} className='px-3'
                    onClick={()=>{
                      navigate(`/expense/update/${expense.id}`)
                    }}
                   />  
                  <FontAwesomeIcon icon={faTrashCan} onClick={(e)=>{
                    dispatch(deleteExpense({
                      id : expense.id
                    }))
                }} />
                </td>

              </tr>
            ))}        
          </tbody>
        </table>
    </div>
  )
}

export default ViewExpense