import React, { useState } from 'react';
import { Picker, Text, StyleSheet, View, TextInput, Button } from 'react-native';

export default function Form_1() {
    const [currency, setCurrency] = useState('US Dollar');
    return (
        <View >
            <Text > Demo Form </Text>
            <View>
                <TextInput
                    placeholder="Email" />
                <TextInput
                    secureTextEntry={true}
                    placeholder="Password"
                />
                <Picker
                    selectedValue={currency}
                    onValueChange={currentCurrency => setCurrency(currentCurrency)}>
                    <Picker.Item label="USD" value="US Dollars" />
                    <Picker.Item label="EUR" value="Euro" />
                    <Picker.Item label="NGN" value="Naira" />
                </Picker>
                <Text>
                    Selected: {currency}
                </Text>
            </View>
        </View>
    );
}