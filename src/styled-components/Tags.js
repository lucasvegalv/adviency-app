import React from 'react'
import styled from "styled-components";

const Title = styled.h1`
  padding: 0;
  margin: 0;
`
const UnList = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`
const ListItem = styled.li`
  text-decoration: none;
  list-style: none;
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: space-between;
  width: 100%;
`

export { Title, UnList, ListItem }
