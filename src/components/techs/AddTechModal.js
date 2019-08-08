import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {addTech} from '../../actions/techActions';

import M from 'materialize-css/dist/js/materialize.min';

const AddTechModal = ({addTech}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({
        html:'Please, enter First name and Last mame'
      });
    } else {
      const newTech = {
        firstName,
        lastName
      };
      addTech(newTech);
      M.toast({
        html: `New tech ${firstName} ${lastName} has been added`
      });
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

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired
};

export default connect(null, {addTech})(AddTechModal);
