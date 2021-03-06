// @flow
import React, { Component } from 'react';
import {
    StatusBar,
    View,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const logo = require('../img/logo.png');
const menuCliente = require('../img/menu_cliente.png');
const menuContato = require('../img/menu_contato.png');
const menuEmpresa = require('../img/menu_empresa.png');
const menuServico = require('../img/menu_servico.png');

export default class CenaPrincipal extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor='#CCC'
                />

                <BarraNavegacao />

                <View style={styles.logo}>
                    <Image source={logo} />
                </View>

                <View style={styles.menu}>
                    <View style={styles.menuGrupo}>
                        <TouchableHighlight
                            onPress={() => {
                                this.props.navigator.push({ id: 'cliente' })
                            }}
                        >
                            <Image style={styles.imgMenu} source={menuCliente} />
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.props.navigator.push({ id: 'contato' })
                            }}
                        >
                            <Image style={styles.imgMenu} source={menuContato} />
                        </TouchableHighlight>
                    </View>

                    <View style={styles.menuGrupo}>
                        <TouchableHighlight
                            onPress={() => {
                                this.props.navigator.push({ id: 'empresa' })
                            }}
                        >
                            <Image style={styles.imgMenu} source={menuEmpresa} />
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.props.navigator.push({ id: 'servicos' })
                            }}
                        >
                            <Image style={styles.imgMenu} source={menuServico} />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 30,
        alignItems: 'center'
    },
    menu: {
        alignItems: 'center'
    },
    menuGrupo: {
        flexDirection: 'row'
    },
    imgMenu: {
        margin: 15
    }
});
