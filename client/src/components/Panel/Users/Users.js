import React from 'react';

import './Users.css';
import { getAvatarUrl } from '../../../utils/userInfo';

const Users = ({ users }) => {
  return (
    <div className="infoContainer" id="infoContainer">
      {
        users.length > 0 && (
            <div className="activeContainer">
              {users.map(({ id, name, colors }) => (
                <div key={id} className="activeItem">
                  <img src={getAvatarUrl({
                    name,
                    background: colors.bg,
                    color: colors.txt,
                  })} alt='avatar'/>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          )
      }
    </div>
  )
};

export default Users;