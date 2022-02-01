import React from 'react';
import { ListGroup, InputGroup, FormControl } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
const uuid = require('uuid-v4');
import Note from './Note';
import { addTodo } from './Store/actions';
export default () => {
  const { todos } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onType = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      dispatch(
        addTodo({
          text: e.target.value,
          done: false,
          id: uuid(),
        })
      );
      e.target.value = '';
    }
  };
  return (
    <div>
      <ListGroup as="ol" numbered>
        {todos.map((todo) => (
          <Note key={todo.id} note={todo} />
        ))}
      </ListGroup>

      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">
          Insert a note
        </InputGroup.Text>
        <FormControl
          onKeyDown={onType}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </div>
  );
};
