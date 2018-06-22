import React from 'react'
import { Link } from 'react-router'

export default ({ forum }) => (
  <div className='forum-card'>
    <div className='forum-card-img'>
      <img src={forum.coverUrl} />
    </div>
    <div className='forum-card-data'>
      <div className='forum-card-header'>
        <h3 className='forum-card-title'>{forum.title}</h3>
        {
          // <span className='forum-card-author'>Autor:</span>
          // <span className='forum-card-author forum-card-name'>Juan Pérez</span>
        }
      </div>
      <div className='forum-card-body'>
        <p className='forum-card-description'>{forum.summary}</p>
      </div>
      <div className='forum-card-footer'>
        <Link to={forum.url}>
          <button className='btn btn-link' >
            Ver más información
          </button>
        </Link>
      </div>
    </div>
  </div>
)