import React from "react"
import { Link, navigate } from "gatsby"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {login} from '../../actions/userActions'

class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e){
    e.preventDefault();
    const LoginRequest = {
      email: this.state.email,
      password: this.state.password
    }
    //console.log(LoginRequest)
    this.props.login(LoginRequest)
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log("Props", nextProps);
    if(nextProps.security.validToken){
      navigate(`/app/profile`)
    }
  }


  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    /*if (isLoggedIn()) {
      navigate(`/app/profile`)
    }*/

    return (
      <>
        <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
          <Paper variant="outlined" elevation={3}>
            <Box width={360} p={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center">

              <h1>Log in</h1>
              <form
                method="post"
                noValidate
                autoComplete="off"
                onSubmit={this.onSubmit}
              >
                <Box display="flex"
                     flexDirection="column"
                     justifyContent="center"
                     alignItems="center">
                  <TextField label="Email" name="email" onChange={this.onChange}/><br/>
                  <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    name="password"
                    onChange={this.onChange}
                    autoComplete="current-password"
                  />

                  <Box m={2}>
                    <Button type="submit" variant="contained" color="primary">
                      Log In
                    </Button>
                  </Box>
                </Box>
              </form>
              <Typography variant="body1">Vous n’avez pas de compte</Typography>
              <Link to="/app/register">Inscrivez-vous ici</Link>
            </Box>
          </Paper>
        </Box>
      </>
    )
  }
}

Login.protoTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  security: state.security,
  errors: state.errors,

});

export default connect(mapStateToProps, {login} )(Login)
