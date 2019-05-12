import React, { Component } from "react";

const GuGuDan = () => {
    // 비구조화 할당
    const [first, setFirst] = React.useState(Math.ceil(Math.random()*9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random()*9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (parseInt(this.static.value) === this.static.first * this.static.second){
            setResult("정답: " + value);
            setFirst(Math.ceil(Math.random()*9));
            setSecond(Math.ceil(Math.random()*9));
            setValue('');
            inputRef.current.focus();
        } else {
            setResult('땡');
            setValue('');
            this.input.focus();
        }
    };

    return (
        <React.Fragment>
            <p>About State</p>
            <div>{first} 곱하기 {second}</div>
            <form>
                <input value={value}/>
                <buttom>입력!</buttom>
            </form>
            <div id="result">{result}</div>
        </React.Fragment>
    )
}

export default GuGuDan