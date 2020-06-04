import React, {Component} from "react"

import {connect} from "react-redux";
import {register} from '../../actions/userActions'

import PropTypes from "prop-types"

import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import {Link} from "gatsby"

class Register extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            role: "",
            presentation: "",
            errors: {},
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }


    onSubmit(e) {
        e.preventDefault()

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role,
            presentation: this.state.presentation,
        }

        //console.log(newUser);
        this.props.register(newUser, this.props.history);
        console.log('envoyé')
    }


    render() {
        return (
            <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
                <Paper elevation={3}>
                    <Box width={360} p={2} display="flex" flexDirection="column" justifyContent="center"
                         alignItems="center">
                        <h1>Register</h1>
                        <form
                            method="post"
                            noValidate
                            autoComplete="off"
                            onSubmit={
                                this.onSubmit}
                        >
                            <Box display="flex"
                                 flexDirection="column"
                                 justifyContent="center"
                                 alignItems="center">
                                <TextField label="Votre nom" name="name" value={this.state.name}
                                           onChange={this.onChange}/><br/>

                                <TextField label="Email" name="email" value={this.state.email}
                                           onChange={this.onChange}/><br/>
                                <TextField
                                    id="standard-password-input"
                                    label="Password"
                                    type="password"
                                    name="password"
                                    onChange={this.onChange}
                                    autoComplete="current-password"
                                /><br/>
                                <InputLabel id="role-label">Role</InputLabel>
                                <Select
                                    labelId="role-label"
                                    id="role"
                                    name="role"
                                    value={this.state.role}
                                    onChange={this.onChange}
                                >
                                    <MenuItem name="role" value="etudiant">Étudiant</MenuItem>
                                    <MenuItem name="role" value="entreprise">Entreprise</MenuItem>
                                    <MenuItem name="role" value="institut">Institut</MenuItem>
                                </Select><br/>
                                <TextField label="Presentez-vous" name="presentation" value={this.state.presentation}
                                           multiline onChange={this.onChange}/><br/>

                                <Box m={2}>
                                    <Button type="submit" variant="contained" color="primary">
                                        Register
                                    </Button>
                                </Box>
                            </Box>
                        </form>
                        <Typography variant="p">Vous avez déjà un compte</Typography>
                        <Link to="/app/login">Connectez-vous ici</Link>
                    </Box>
                </Paper>
            </Box>
        )
    }
}

Register.propTypes = {
    register: PropTypes.func.isRequired,
}
export default connect(null, {register})(Register);
