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
        <div className='content'>
            <li><span>correo: </span>
            <br />
            <span>{user.email}</span></li>
            <section>
                    <br />
                    <span>Cumpleaños</span>
                    <br />
                    <div className='adjust'>
                        <box-icon name='gift'></box-icon>
                        <span>{user.birthday}</span>
                    </div>
            </section>
        </div>
        <footer className='footer'>
            <button onClick={handleDelete}>
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