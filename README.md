# react-native-pie-chart-custom

A customizable pie chart component for React Native, built using `react-native-svg`.

## Installation

1. Install the library:

   ```bash
   npm install react-native-pie-chart-custom

   ```

## Usage Example

Below is a simple example on how to integrate the PieChart into your React Native application. Ensure you have **react-native-svg** installed in your project to use react-native-pie-chart-custom.

## Importing the Component

First, you need to import the PieChart from the library:

```bash
import PieChart from 'react-native-pie-chart-custom';
```

## Sample Data

Prepare some data that you would like to display in the pie chart:

```bash
const dataOutstandingBill = [
{ percentage: 50, color: '#ff0000', legend: 'Rent' },
{ percentage: 30, color: '#00ff00', legend: 'Utilities' },
{ percentage: 20, color: '#0000ff', legend: 'Groceries' }
];
```

## Rendering the PieChart

You can render the PieChart inside a view component in your screen.
Customize it by setting its size prop to scale the pie chart:

```bash
import React from 'react';
import { View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <PieChart data={dataOutstandingBill} size={150} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});

export default App;
```

## Customizing the PieChart
The PieChart component is highly customizable. You can adjust the size, pass different data arrays, and modify the styles to fit your design needs.
