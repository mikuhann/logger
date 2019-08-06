import React, {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min';

const AddLogModal = () => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({
        html: 'Please enter a log message and technician'
      });
    } else {
      console.log(message, tech, attention)
    }
  };

  return (
    <div id="add-log-modal" className="modal logger-add-log-modal">
      <div className="modal-content">
        <h4>Enter system log</h4>
        <div className="row">
          <div className="input-field">
            <input
              id="message"
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}/>
            <label htmlFor="message" className="active">
              Log message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}>
              <option value="" disabled>Select technician</option>
              <option value="Someone 1">Someone 1</option>
              <option value="Someone 2">Someone 2</option>
              <option value="Someone 3">Someone 3</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}/>
                  <span>Need attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect blue waves-green btn" onClick={onSubmit}>Enter</a>
      </div>
    </div>
  );
};

export default AddLogModal;