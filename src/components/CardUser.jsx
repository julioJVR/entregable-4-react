import React from 'react';
import './styles/cardUser.css';

const CardUser = ({user, deleteUser, setEditUser, setIsOpen}) => {

    const handleDelete = () => {
        deleteUser('/users', user.id);
    }

    const handleEdit = () => {
        setEditUser(user);
        setIsOpen(true);
    }

  return (
        <article className='card'>
            <h3 className='card__title'>{user.first_name} {user.last_name}</h3>
            <hr />

            <div className='content'>
                <span>Correo </span>
                <span>{user.email}</span>
            </div>
                
            <div className='content'>
                <span>Cumpleaños</span>

                <div className='adjust'>
                    <box-icon name='gift'></box-icon>
                    <span>{user.birthday}</span>
                </div>
            </div>
            <hr />
            <footer className='footer'>
                <button onClick={handleDelete} className='btn'>
                    <box-icon name='trash' color='red'></box-icon>
                </button>
                <button onClick={handleEdit} className='btn'>
                    <box-icon type='solid' name='edit-alt'></box-icon>
                </button>
            </footer>
        </article>
  )
}

export default CardUser;