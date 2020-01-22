import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import * as actionCreators from '../../store/actions/index';

class Counter extends Component {
    render () {
        return (
            <div>   
                <Paper elevation={3}>
                    <CounterOutput value={this.props.ctr} />
                    <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                    <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                    <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                    <CounterControl label="Subtract 8" clicked={this.props.onSubtractCounter} />
                </Paper>
                <hr />
                <Paper elevation={3} >
                    <Button variant="contained" color="primary" onClick={this.props.onStoreResult.bind(this, this.props.ctr)}>Store Result</Button>
                        <ul>
                            {this.props.storedResults.map(strResult => {
                                return <li key={strResult.id} 
                                    onClick={()=>this.props.onDeleteResult(strResult.id)}>{strResult.val}</li> 
                            })}
                        </ul>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(10)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(8)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);