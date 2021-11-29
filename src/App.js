import './App.css';
import {useForm} from 'react-hook-form'

function App() {
    const {register,handleSubmit,formState:{errors}} =useForm()
    const onSubmit=(data)=>console.log(data)
  return (
    <div className="App form">
        <div style={{width:"500px"}}>
        <h1>Example Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <div className={'form-gropup'}>
          <label htmlFor="">Name:</label>
          <input type="text" {...register("name",{required:"name is required"})} className={'form-control'}/>
          {errors.name && <small>{errors.name.message}</small>}
      </div>
        <div className={'form-gropup'}>
            <label htmlFor="">Age:</label>
            <input type="text"  {...register("age",{required:"age is required",
                min:{
                value:5,
                message:"min value is 5"
            },
                max:{
                value:15,
                message:"max value is 15"
            },
            pattern:{
                value:/^[0-9]+$/,
                message:"only numbers are allowed"
            }})} className={'form-control'}/>
            {errors.age && <small>{errors.age.message}</small>}
        </div>
        <div className={'form-gropup'}>
            <label htmlFor="">Email:</label>
            <input type="text"  {...register("email",{required:"mail is required",pattern:{
                value:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message:'Invalid  email address'
                }})} className={'form-control'}/>
            {errors.email && <small>{errors.email.message}</small>}
        </div>
        <div className={'form-gropup'}>
            <label htmlFor="">Phone:</label>
            <input type="text"  {...register("phone",{required:"phone is required",pattern:{
                value:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                    message:"Invalid Phone number"
                }})} className={'form-control'}/>
            {errors.phone && <small>{errors.phone.message}</small>}
        </div>
        <div className={'form-gropup'}>
            <label htmlFor="">Message:</label>
            <textarea  {...register("textarea",{required:"textarea is required",
                minLength:{
                value:10,
                 message:"min length is 10"
                },
                maxLength:{
                    value:50,
                    message:"max length is 50"
                }})} className={'form-control'}></textarea>
            {errors.textarea && <small>{errors.textarea.message}</small>}
        </div>
        <input type="submit" value={"send message"}/>
            </form>
        </div>
    </div>
  );
}

export default App;
