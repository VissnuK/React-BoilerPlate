import { connect } from 'react-redux';
import App from '../components/App';
// import postXML from '../actions/appActions';

const mapStateToProps = state => ({
  // isPosted: state.xmlUtility.isPosted,
});

const mapDispatchToProps = dispatch => ({
  });

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
