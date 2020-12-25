/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "./components/Button";
import Display from "./components/Display";

const App = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [stateClearDisplay, setStateClearDisplay] = useState(false);
  const [stateOperation, setOperation] = useState(null);
  const [values, setValues] = useState([0, 0]);
  const [current, setCurrent] = useState(0);

  const addDigit = n => {
    if (n === "." && displayValue.includes(".")) {
      return;
    }

    const clearDisplay = displayValue === "0" || stateClearDisplay;
    const currentValue = clearDisplay ? "" : displayValue;
    const displayValueVariable = currentValue + n;
    setDisplayValue(displayValueVariable);
    setStateClearDisplay(false);

    if (n !== ".") {
      const newValue = parseFloat(displayValueVariable);
      const value = [...values];
      value[current] = newValue;
      setValues([...value]);
    }
  };

  const clearMemory = setDisplayValue => {
    setDisplayValue("0");
    setValues([0, 0]);
    setCurrent(0);
    setOperation(null);
    setStateClearDisplay(false);
  };

  const methodSetOperation = operation => {
    if (current === 0) {
      setOperation(operation);
      setCurrent(1);
      setStateClearDisplay(true);
    } else {
      const equals = operation === "=";
      const value = [...values];
      try {
        value[0] = eval(`${value[0]} ${stateOperation} ${value[1]}`);
      } catch (e) {
        value[0] = values[0];
      }

      value[1] = 0;
      setDisplayValue(value[0]);
      setOperation(equals ? null : operation);
      setCurrent(equals ? 0 : 1);
      setStateClearDisplay(true);
      setValues(value);
    }
  };

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button
          label="AC"
          triple
          onClick={() => clearMemory(setDisplayValue)}
        />
        <Button label="/" operation onClick={() => methodSetOperation("/")} />
        <Button
          label="7"
          onClick={() => addDigit(7, setDisplayValue, displayValue)}
        />
        <Button
          label="8"
          onClick={() => addDigit(8, setDisplayValue, displayValue)}
        />
        <Button
          label="9"
          onClick={() => addDigit(9, setDisplayValue, displayValue)}
        />
        <Button label="*" operation onClick={() => methodSetOperation("*")} />
        <Button
          label="4"
          onClick={() => addDigit(4, setDisplayValue, displayValue)}
        />
        <Button
          label="5"
          onClick={() => addDigit(5, setDisplayValue, displayValue)}
        />
        <Button
          label="6"
          onClick={() => addDigit(6, setDisplayValue, displayValue)}
        />
        <Button label="-" operation onClick={() => methodSetOperation("-")} />
        <Button
          label="1"
          onClick={() => addDigit(1, setDisplayValue, displayValue)}
        />
        <Button
          label="2"
          onClick={() => addDigit(2, setDisplayValue, displayValue)}
        />
        <Button
          label="3"
          onClick={() => addDigit(3, setDisplayValue, displayValue)}
        />
        <Button label="+" operation onClick={() => methodSetOperation("+")} />
        <Button
          label="0"
          double
          onClick={() => addDigit(0, setDisplayValue, displayValue)}
        />
        <Button
          label="."
          onClick={() => addDigit(".", setDisplayValue, displayValue)}
        />
        <Button label="=" operation onClick={() => methodSetOperation("=")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

export default App;
