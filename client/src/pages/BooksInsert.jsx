import React, { Component } from 'react';
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1'
})``

const Wrapper = styled.div.attrs({
    className: 'form-group'
})`margin: 0 30px`

const Label = styled.label`
    margin: 5px;
`
const InputText = styled.input.attrs({
    className: 'form-control'
})`margin: 5px;`

const Button = styled.button.attrs({
    className: `btn btn-primary`
})`margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`
})`
    margin: 15px 15px 15px 5px
`

class BooksInsert extends Component{
    state = {
        name: '',
        authorName: ''
    }
    handleChangeInputAuthorName = async event => {
        this.setState({name: event.target.value});
    }
    handleChangeInputName = async event => {
        this.setState({authorName: event.target.value});
    }
    handleIncludeBook = async event => {
        const { name, authorName } = this.state
        await api.insertBook({name, authorName}).then(res => {
            window.alert(`Book inserted successfully`)
            this.setState({name: '', authorName: ''});
        })
    }
    render(){
        const { name, authorName } = this.state;
        return(
            <Wrapper>
                <Title>Create Book</Title>
                <Label>Name:</Label>
                <InputText 
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />
                <Label>Author Name:</Label>
                <InputText 
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={authorName}
                    onChange={this.handleChangeInputAuthorName}
                />                
                <Button onClick={this.handleIncludeBook}>Add Book</Button>
                <CancelButton href={'/books/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default BooksInsert;