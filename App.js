import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

export default function App() {
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState(null);
    const [firstValue, setFirstValue] = useState('');

    const handleNumberInput = (num) => {
        if (displayValue === '0') {
            setDisplayValue(num.toString());
        } else {
            setDisplayValue(displayValue + num);
        }
    };

    const handleOperatorInput = (operator) => {
        setOperator(operator);
        setFirstValue(displayValue);
        setDisplayValue('0');
    };

    const handleEqual = () => {
        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(displayValue);

        switch(operator) {
            case '+':
                setDisplayValue((num1 + num2).toString());
                break;
            case '-':
                setDisplayValue((num1 - num2).toString());
                break;
            case '*':
                setDisplayValue((num1 * num2).toString());
                break;
            case '/':
                setDisplayValue((num1 / num2).toString());
                break;
        }

        setOperator(null);
        setFirstValue('');
    };

    const handleClear = () => {
        setDisplayValue('0');
        setOperator(null);
        setFirstValue('');
    };

    const renderButton = (content, onPress, buttonStyle = null, textStyle = null) => (
        <TouchableOpacity
            style={[styles.button, buttonStyle]}
            onPress={onPress}
        >
            <Text style={[styles.buttonText, textStyle]}>{content}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.displayContainer}>
                <Text style={styles.displayText}>
                    {displayValue}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.row}>
                    {renderButton('C', handleClear, styles.specialButton, styles.specialButtonText)}
                    {renderButton('±', () => {}, styles.specialButton, styles.specialButtonText)}
                    {renderButton('%', () => {}, styles.specialButton, styles.specialButtonText)}
                    {renderButton('÷', () => handleOperatorInput('/'), styles.operatorButton, styles.operatorButtonText)}
                </View>
                <View style={styles.row}>
                    {renderButton('7', () => handleNumberInput(7))}
                    {renderButton('8', () => handleNumberInput(8))}
                    {renderButton('9', () => handleNumberInput(9))}
                    {renderButton('×', () => handleOperatorInput('*'), styles.operatorButton, styles.operatorButtonText)}
                </View>
                <View style={styles.row}>
                    {renderButton('4', () => handleNumberInput(4))}
                    {renderButton('5', () => handleNumberInput(5))}
                    {renderButton('6', () => handleNumberInput(6))}
                    {renderButton('−', () => handleOperatorInput('-'), styles.operatorButton, styles.operatorButtonText)}
                </View>
                <View style={styles.row}>
                    {renderButton('1', () => handleNumberInput(1))}
                    {renderButton('2', () => handleNumberInput(2))}
                    {renderButton('3', () => handleNumberInput(3))}
                    {renderButton('+', () => handleOperatorInput('+'), styles.operatorButton, styles.operatorButtonText)}
                </View>
                <View style={styles.row}>
                    {renderButton('0', () => handleNumberInput(0), styles.zeroButton)}
                    {renderButton('.', () => {})}
                    {renderButton('=', handleEqual, styles.equalButton, styles.equalButtonText)}
                </View>
            </View>
            <Text style={styles.signature}>Cal by Suraj</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#17171C',
        padding: 20,
    },
    displayContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 10,
    },
    displayText: {
        fontSize: 70,
        color: '#ffffff',
        fontWeight: '300',
    },
    buttonContainer: {
        flex: 2,
        marginTop: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    button: {
        width: 72,
        height: 72,
        borderRadius: 36,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2E2F38',
    },
    buttonText: {
        fontSize: 30,
        color: '#ffffff',
        fontWeight: '400',
    },
    specialButton: {
        backgroundColor: '#4E505F',
    },
    specialButtonText: {
        color: '#ffffff',
    },
    operatorButton: {
        backgroundColor: '#4B5EFC',
    },
    operatorButtonText: {
        color: '#ffffff',
    },
    equalButton: {
        backgroundColor: '#00FF00',
    },
    equalButtonText: {
        color: '#ffffff',
        fontSize: 40,
    },
    zeroButton: {
        width: 156,
        alignItems: 'flex-start',
        paddingLeft: 30,
    },
    signature: {
        color: '#4E505F',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 14,
    }
});