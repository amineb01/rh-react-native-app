import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationConstants from 'components/navigation/NavigationConstants';
import Login from 'components/Login';
import CompanyLogin from 'components/CompanyLogin';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  const { login, companyLogin } = NavigationConstants;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={companyLogin}
        component={CompanyLogin}
      />
      <Stack.Screen
        name={login}
        component={Login}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
