import React from 'react';
import "./pagination.css";
import { useState } from 'react';
import { useEffect } from 'react';

const Pagination = ({count,paginate}) => {

    const [activePage,setActivePage] = useState(1);

    


    const handleActivePage = (e,number)=>{
        e.preventDefault();
        setActivePage(number);
        paginate(number);
    }


  return (
    <div className="pagination-container">
        {
            count.map((number)=>{
                return(
                    <li key={number}  className={number===activePage?'page-item active-item':"page-item"}>
                        <a value={number} onClick={(e)=>{handleActivePage(e,number)}} href="#" className='page-link'>
                            {number}
                        </a>
                    </li>
                )
            })
        }
    </div>
  )
}

export default Pagination;