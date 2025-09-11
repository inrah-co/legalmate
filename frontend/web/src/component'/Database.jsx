import React from 'react'
import './Database.css'

import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Database = () => {
  return (
    <div className='database'>
        <div className='database_container'>
            <h1>Legal Mate</h1>
            <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, libero consectetur adipisicing <br />elit. Neque, libero..</p>
        </div>

        <div className='database_inputContainer'>
            <FaSearch size={20} color="gray" className='   search' />
            <input type="text" placeholder='Search...'/>
        </div>

        <hr />

        <div className='list'>
            <ul>
                <li>Top pick</li>
            </ul>
            <ul>
                <li>Writting</li>
            </ul>
            <ul>
                <li>Productivity</li>
            </ul>
        </div>


        <div>
            <div className='card_container'>

                <Link to={'/detail'} style={{ textDecoration: "none",  color:"white"}} >
                <div className='card'>
                <div  className='card_content'>
                    <h2>Hello everyone</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero itaque molestiae voluptates distinctio consectetur veritatis expedita explicabo possimus facere mollitia recusandae iusto, nobis, libero nostrum labore dolorem? Necessitatibus, modi temporibus doloremque eos voluptatum debitis aspernatur, veniam sapiente quia expedita autem, asperiores laboriosam explicabo unde consequatur architecto amet dolor animi? Dignissimos.</p>
                    </div>
                </div>
                </Link>

                <div className='card'>
                    <div  className='card_content'>
                    <h2>Hello everyone</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero itaque molestiae voluptates distinctio consectetur veritatis expedita explicabo possimus facere mollitia recusandae iusto, nobis, libero nostrum labore dolorem? Necessitatibus, modi temporibus doloremque eos voluptatum debitis aspernatur, veniam sapiente quia expedita autem, asperiores laboriosam explicabo unde consequatur architecto amet dolor animi? Dignissimos.</p>
                    </div>
                    
                    </div>
                    <div className='card'>
                    <div  className='card_content'>
                    <h2>Hello everyone</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero itaque molestiae voluptates distinctio consectetur veritatis expedita explicabo possimus facere mollitia recusandae iusto, nobis, libero nostrum labore dolorem? Necessitatibus, modi temporibus doloremque eos voluptatum debitis aspernatur, veniam sapiente quia expedita autem, asperiores laboriosam explicabo unde consequatur architecto amet dolor animi? Dignissimos.</p>
                    </div>
                    
                    
                    </div>

            </div>
        </div>
    </div>
  )
}

export default Database