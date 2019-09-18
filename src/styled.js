import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: space-around;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`

export const RuleInput = styled.input`
  padding: 5px;
`

export const RuleLabel = styled.label`
`

export const StyleInput = styled.textarea`
  margin: 0;
  border: 0;
  padding: 5px;
`

export const Button = styled.button`
  -moz-box-shadow:inset 0px 39px 0px -24px #e67a73;
	-webkit-box-shadow:inset 0px 39px 0px -24px #e67a73;
	box-shadow:inset 0px 39px 0px -24px #e67a73;
	background-color:#e4685d;
	-moz-border-radius:4px;
	-webkit-border-radius:4px;
	border-radius:4px;
	border:1px solid #ffffff;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	padding:3px 15px;
	text-decoration:none;
	text-shadow:0px 1px 0px #b23e35;
  
  &:hover{
    background-color:#eb675e;
  }
` 


export const Document = styled.div`
  display: flex;
  width: 550px;
  height: 800px;
  padding: 10px;
  border: 1px solid black;
`

export const Markup = styled.div`
  height: 100%;
  width: 100%;
  color: blue;
  font-size: 18px;
  line-height: 18px;
  font-family: monospace;
  white-space: pre-wrap;
  ${({customStyles}) => customStyles}
`

export const Editor = styled.textarea`
  position: absolute;
  margin: 0;
  border: 0;
  padding: 0;
  width: 550px;
  height: 800px;
  color: transparent;
  z-index: 1;
  outline: 0;
  background-color: transparent;
  font-size: 18px;
  line-height: 18px;
  font-family: monospace;
  caret-color: black;
`
