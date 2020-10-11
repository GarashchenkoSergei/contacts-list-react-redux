import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './store/duck';
import styles from './LoginPage.module.css';
import { Button } from 'semantic-ui-react';

const mapStateToProps = (state) => ({
  // historyList: state.historyListReducer.historyList,
});

const mapDispatchToProps = (dispatch) => ({
  // receiveHistoryList: (value) => dispatch(actions.receiveHistoryList(value)),
});

class LoginPage extends Component {
  componentDidMount() {
    // const { receiveHistoryList } = this.props;
    // receiveHistoryList();
  }

  render() {
    return ( 
      <>
        <div>
          <Button>Button test</Button>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);