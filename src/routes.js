import React from "react";

import {NavegationContainer} from '@react-navigation/native';
import {createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialIcons} from '@expo/vector-icons';

import Home from './pages/Home';
import Busca from './pages/Busca';
import Perfil from './pages/Perfil';
import Pedidos from './pages/Pedidos';
import Carteira from './pages/Carteira';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();