import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './styles/formUser.css';

const FormUser = ({createUser, editUser, updateUser, setEditUser, isOpen, setIsOpen}) => {

    const {handleSubmit, register, reset } = useForm();

    useEffect(() => {
        reset(editUser);
    }, [editUser]);

    const Submit = (data) => {
        if (editUser) {
            updateUser('/users', editUser.id, data)
            setEditUser();
        } else {
            createUser('/users',data);
        }
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: '',
        })
        setIsOpen(false);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

  return (
    <div className={`form__background ${isOpen&&'able'}`}>
        <form className= 'form__container' onSubmit={handleSubmit(Submit)}>
            <div className='form__close' onClick={handleClose}>
            <ion-icon name="close-circle-outline"></ion-icon>
            </div>
            <h2 className='form__title'>Nuevo Usuario</h2>
            <div className='form__item'>
                <label htmlFor="email">Email</label>
                <input className='form__control'{...register('email')} id='email' type="email" />
            </div>
            <div className='form__item'>
                <label htmlFor="password">password</label>
                <input className='form__control'{...register('password')}id='password' type="password" />
            </div>
            <div className='form__item'>
                <label htmlFor="first_name">first_name</label>
                <input className='form__control'{...register('first_name')}id='first_name' type="text" />
            </div>
            <div className='form__item'>
                <label htmlFor="last_name">last_name</label>
                <input className='form__control'{...register('last_name')}id='last_name' type="text" />
            </div>
            <div className='form__item'>
                <label htmlFor="birthday">birthdate</label>
                <input className='form__control'{...register('birthday')}id='birthday' type="date" />
            </div>
            <div className='form__btn__group'>
            <button className='form__btn'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default FormUser;