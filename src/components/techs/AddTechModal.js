import React, {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min';

const AddTechModal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({
        html:'Please, enter First name and Last mame'
      });
    } else {
      console.log(firstName, lastName);
      setFirstName('');
      setLastName('');
    }
  };
  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>Add a new technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}/>
            <label htmlFor="firstName">First name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}/>
            <label htmlFor="lastName">Last name</label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect blue waves-green btn" onClick={onSubmit}>Add</a>
      </div>
    </div>
  );
};

export default AddTechModal;