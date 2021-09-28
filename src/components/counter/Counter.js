import React from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';
import * as actions from '../../redux/actions';

function Counter({ value, onIncrement, onDecrement, step }) {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}  
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: value => dispatch(actions.increment(value)),
    onDecrement: value => dispatch(actions.decrement(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);




