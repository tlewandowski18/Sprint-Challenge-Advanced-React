import React from "react"
import styled from "styled-components"

const Card = styled.div`
    width: 30%;
    height: 30%;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;

`
export default function PlayerCard(props) {
    return (
        <Card>
            <p>{props.name}</p>
            <p>{props.country}</p>
        </Card>
    )
}