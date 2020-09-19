import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [lowercaseElement, setLowercaseElement] = useState(true);
  const [uppercaseElement, setUppercaseElement] = useState(true);
  const [numbersElement, setNumbersElement] = useState(true);
  const [symbolsElement, setSymbolsElement] = useState(true);
  const [resultElement, setResultElement] = useState(``);
  const [lengthElement, setLenghtElement] = useState(null);
  const [generatedPassword, setGeneratedPassword] = useState(``);
  const [typesArray, setTypesArray] = useState(null);
  const randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
  };

  function getRandomLower() {
    setLowercaseElement(
      String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    );
  }
  function getRandomUpper() {
    setUppercaseElement(
      String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    );
  }

  function getRandomNumber() {
    setNumbersElement(
      +String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    );
  }

  function getRandomSymbol() {
    const symbols = `!@#$%^&*(){}[]=<>/,.`;
    setSymbolsElement(symbols[Math.floor(Math.random() * symbols.length)]);
  }

  function generatePassword(event) {
    const length = +setLenghtElement.value;
    const hasLower = lowercaseElement.checked;
    const hasUpper = uppercaseElement.checked;
    const hasNumber = numbersElement.checked;
    const hasSymbol = symbolsElement.checked;

    password(hasLower, hasUpper, hasNumber, hasSymbol, length);
  }

  function password(lower, upper, number, symbol, length) {
    const typesCount = lower + upper + number + symbol;
    setTypesArray[({ lower }, { upper }, { number }, { symbol })].filter(
      (item) => Object.values(item)[0]
    );

    if (typesCount === 0) {
      return `no password found. Try again...`;
    }

    for (let i = 0; i < length; i += typesCount) {
      typesArray.forEach((type) => {
        const funcName = Object.keys(type)[0];
        setGeneratedPassword(randomFunction[funcName]());
      });
    }
    setResultElement(generatedPassword.slice(0, length));

    return (
      <div className="Calculator">
        <div className="result-container">
          <span className="result">{resultElement}</span>
          <button className="btn" id="clipboard">
            <i className="far fa-clipboard"></i>
          </button>
        </div>
        <div className="settings">
          <div className="setting">
            <label>Password length</label>
            <input
              type="number"
              min={lengthElement(4)}
              max={lengthElement(20)}
              value="20"
            />
          </div>
          <div className="setting">
            <label>Include uppercase letters</label>
            <input type="checkbox" value={uppercaseElement} checked />
          </div>
          <div className="setting">
            <label>Include lowercase letters</label>
            <input
              type="checkbox"
              id="lowercase"
              value={lowercaseElement}
              checked
            />
          </div>
          <div className="setting">
            <label>Include numbers</label>
            <input
              type="checkbox"
              id="numbers"
              value={numbersElement}
              checked
            />
          </div>
          <div className="setting">
            <label>Include symbols</label>
            <input
              type="checkbox"
              id="symbols"
              value={symbolsElement}
              checked
            />
          </div>
        </div>
        <button
          className="btn btn-large"
          type="generate"
          onSubmit={generatePassword}
        >
          Generate password
        </button>
      </div>
    );
  }
}
