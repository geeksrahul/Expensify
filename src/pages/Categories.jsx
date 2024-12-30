import React, { useEffect, useRef } from 'react'
import {Input, Button} from '../components'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, deleteCategory} from '../store/categorySlice.js'

function Categories() {
  const { register, handleSubmit, formState : {errors} } = useForm()
  const dispatch = useDispatch();
  const categories = useSelector(state => state.category.categories);
  const formRef = useRef()
  const saveCategory = (data)=>{
    dispatch(addCategory({
      category : data.category,
    }))
    formRef.current.reset();
  }

  return (
    <div className='h-screen p-10 flex flex-col gap-5 dark:bg-gray-800 dark:text-white'>
      <h2 className='font-medium text-3xl'>
        Manage categories on which you spend your income...        
      </h2>
      <div className='w-full h-full flex items-center justify-center flex-col gap-3'>
        <form className="flex justify-between items-center flex-col gap-2 min-w-96 p-2 bg-white rounded-md dark:bg-black" onSubmit={handleSubmit(saveCategory)} ref={formRef}>
          <Input 
            type="text" 
            label="Enter Category Name"
            {...register("category",{
              required : "category name must required !"
            })}
          />
          <Button type="submit" className='h-10'> Add </Button>        
        </form> 
        <div className='w-96 min-h-40 bg-white rounded-md flex justify-center items-start p-2 gap-x-3 gap-y-0 flex-wrap dark:bg-black '>
          {categories?.map((category)=>(
            <div 
              onDoubleClick={()=>{
                dispatch(deleteCategory({
                  category,
                })) 
              }}
            key={category} className='text-xl border border-black rounded-2xl px-3 py-0  flex justify-between gap-5 text-black hover:bg-orange-500  hover:border-none cursor-pointer dark:text-white dark:border-white'>
              <span>
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
   )
}

export default Categories