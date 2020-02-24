import React from 'react'
import styled from 'styled-components'
import { useLocalStorage } from '../hooks/useLocalStorage'

const Form = styled.form`
    width: 30%;
    margin: 20px auto;
`

const SearchBar = () => {
    const [firstName, setFirstName] = useLocalStorage("first name")
    const [lastName, setLastName] = useLocalStorage("last name")

    const handleChange = e => {
        e.target.name === "firstName" ? setFirstName(e.target.value) : setLastName(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setFirstName("");
        setLastName("");
    }
    return (
        <Form onSubmit={handleSubmit}>
            <input 
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={handleChange}
            /><br />
            <label htmlFor="firstName">First Name</label><br /><br />
            <input 
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={handleChange}
            /><br />
            <label htmlFor="lastName">Last Name</label><br /><br />
            <button type="submit">Submit</button><br />

        </Form>
    )
}

export default SearchBar