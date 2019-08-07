import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {updateLog} from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min';

const EditLogModal = ({current, updateLog}) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() => {
    if (current) {
      const {message, attention, tech} = current;
      setMessage(message);
      setAttention(attention);
      setTech(tech);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({
        html: 'Please, enter a log message and technician'
      });
    } else {
      const updLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date()
      };
      updateLog(updLog);
      M.toast({
        html: `Log # ${current.id} has been updated`
      });
    }
  };
  return (
    <div id="edit-log-modal" className="modal">
      <div className="modal-content">
        <h4>Edit system log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}/>
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

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  current: state.log.current
});

export default connect(mapStateToProps, {updateLog})(EditLogModal);
