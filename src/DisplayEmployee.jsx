import React from 'react';

const DisplayEmployee = ({ employee }) => {
  return (
    <div className="DisplayEmployee">
      <img src={employee.picture.medium} alt="SimpsonsPictures" />
      <ul>
        <li>Gender : {employee.gender}</li>
        <li>
          Name : {employee.name.title}  {employee.name.first}{' '}
          {employee.name.last}
        </li>
        <li>E-mail : {employee.email}</li>
        <li>
          Location : {employee.location.street} -
                    {employee.location.postcode}{' '}{employee.location.city}
        </li>
      </ul>
    </div>
  );
};

export default DisplayEmployee;