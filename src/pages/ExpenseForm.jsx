import React, { useEffect, useRef, useState } from 'react'
import { Input,Button,Select } from '../components/index.js'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { insertExpense, updateExpense } from '../store/expenseSlice.js'
// font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { useParams, useHref, useLocation, useNavigate, } from 'react-router-dom'

function ExpenseForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [updatePage, setUpdatePage] = useState(false);
  const href = useHref()
  const navigate = useNavigate();
  const formRef = useRef();
  const [expense] = useSelector((data) => data.expense.expenses.filter(exp => exp.id === id))
  const categories = useSelector(state => state.category.categories);

  useEffect(()=>{
    if(id && href.includes("/update/")) {
      setUpdatePage(true)
      if(!expense) {
        navigate("/home")
      }
      console.log(expense)
    }
  },[])

  const { 
    register, 
    handleSubmit,
    formState : {errors}
   } = useForm()

   const addData = (data)=> {
     console.log(data);
     dispatch(insertExpense({
      amount : data.amount,
      note : data.note,
      date : data.date,
      category : data.category,
     }))
     formRef.current.reset();
   }

   const updateData = (data) => {
    dispatch(updateExpense({
      id : id,
      amount : data.amount,
      date : data.date,
      note : data.note,
      category : data.category,
    }))
    navigate("/expense/view")
   }

  return (
    <div className='h-screen flex justify-center items-center bg-gray-300 dark:bg-gray-700 dark:text-lime-200'>
      <form 
        action="" 
        className='bg-slate-100 rounded-md p-3 flex flex-col items-start justify-center gap-1  w-80 dark:bg-black'
        onSubmit={handleSubmit(updatePage ? updateData : addData)}
        ref={formRef}
      >
        <h2 className='text-2xl font-bold '> {updatePage ? "Update" : "Add"} <span className='text-orange-600'> Expenses </span> </h2>
        <Input 
          type="text"
          label="Expense Amount"
          defaultValue={updatePage === true ? expense.amount : ""}
          {...register("amount",{
            required : "amount must required"
          })}
        />
        {errors.amount && <span className='text-red-600'> <FontAwesomeIcon icon={faCircleExclamation} /> {errors.amount.message} </span>}
        <Input 
          type="text"
          label="Expense Note"
          defaultValue={updatePage ? expense?.note : ""}
          // ref={noteRef}
          {...register("note",{
            required : "note must required"
          })}
        />
        {errors.note && <span className='text-red-600'> <FontAwesomeIcon icon={faCircleExclamation} /> {errors.note.message} </span>}
        <Select 
          label="Expense Category"
          // defaultValue={updatePage ? expense?.amount : ""}
          defaultValue={updatePage ? expense.category : ""}
          optionList={[...categories]}
          {...register("category",{
          })}
        />
        <Input 
          type="date"
          label="Expense Date"
          defaultValue={updatePage ? expense?.date : ""}
          // ref={dateRef}
          {...register("date",{
            required : "date must required"
          })}
        />
        {errors.date && <span className='text-red-600'> <FontAwesomeIcon icon={faCircleExclamation} /> {errors.date.message} </span>}
        {updatePage ?
          <>
          <Button
            type="submit"
            bgColor='bg-orange-600'
            className='mt-2'
          >
            Update
          </Button> 
          <Button
            type="button"
            bgColor='bg-gray-300'
            textColor='text-black'
            className='mt-2'
            onClick={()=>{
              navigate("/expense/view")
            }}
          >
            Back
          </Button>
          </>
          :
          <Button
            type="submit"
            className='mt-2'
            bgColor="bg-orange-600"
          >
          Add
        </Button>
        }
      </form>

    </div>
  )
}

export default ExpenseForm