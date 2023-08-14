import React, { useState } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  const [isSignup, setIsSignup] = useState(false)
  const [inputs, setInputs] = useState({
    name: "", email: "", password: ""
  })
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value, 

    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(inputs.email === "test@123" && inputs.password ==="12345"){
      alert("login success")
      navigate("/dashboard")
    } else{
      alert("Invalid credentials")
    }
    console.log(inputs)

  }
  const resetState = () => {
    setIsSignup(!isSignup)
    setInputs({
      name:'',
      email:'',
      password:''
    })

  }
  return (
    <form onSubmit={handleSubmit}>
      <Grid
        display={'flex'}
        flexDirection={'column'}
        maxWidth={400}
        alignItems={'center'}
        justifyContent={'center'}
        margin={'auto'}
        marginTop={5}
        padding={3}
        borderRadius={5}
        boxShadow={'5px 5px 10px #ccc'}
        sx={{
          ':hover': {
            boxShadow: '10px 10px 20px #ccc'
          }

        }}

      >

        <Typography
          variant='h2'
          padding={3}
          textAlign={'center'}>
          {isSignup ? "Signup" : "Login"}
        </Typography>
        {isSignup && (
          <TextField
            type={'text'}
            name="name"
            value={inputs.name}
            onChange={handleChange}
            variant='outlined'
            placeholder='Name'
            margin='normal'
          />
        )}
        <TextField
          type={'email'}
          name="email"
          value={inputs.email}
          onChange={handleChange}
          variant='outlined'
          placeholder='Email'
          margin='normal'
        />
        <TextField
          type={'password'}
          name="password"
          value={inputs.password}
          onChange={handleChange}
          variant='outlined'
          placeholder='Password'
          margin='normal'
        />
        <Button
          sx={{ marginTop: 3, borderRadius: 2 }}
          type='submit'
          variant='contained'
          color='warning'>
            {isSignup ? "Signup" : "Login"}
        </Button>
        <Button
          onClick={resetState}
          sx={{ marginTop: 3, borderRadius: 2 }}
        >
          {isSignup ? "Login" : "Signup"}
        </Button>
        
      </Grid>
    </form>
  )
}

export default Home