import React from "react"
import { render } from "@testing-library/react" 
import SearchBar from "./SearchBar"

test("determine if there is a First Name input field", () => {
    const { getByLabelText } = render(<SearchBar />)

    getByLabelText(/first name/i)
})

test("determine if there is a First Name input field", () => {
    const { getByLabelText } = render(<SearchBar />)

    getByLabelText(/last name/i)
})