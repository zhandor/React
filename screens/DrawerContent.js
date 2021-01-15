import React from "react"
import { View, Text, StyleSheet } from "react-native"

import { 
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
 } from "react-native-paper"

import {
    DrawerContentScrollView,
    DrawerItem
} from "@react-navigation/drawer"

import Icons from "react-native-vector-icons/MaterialCommunityIcons"

export function DrawerContent(props){
    const [isDarkTheme, setIsDarkTheme] = React.useState(false)
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:"row", marginTop:15}}>
                            <Avatar.Image 
                                source={require('../res/img/me.png')}
                                size={50}/>
                            <View style={{marginLeft:15, flexDirection:"column"}}>
                                <Title style={styles.title}>Saulo Moura</Title>
                                <Caption style={styles.caption}>moura.bsaulo@gmail.com</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <Drawer.Item 
                            icon={({ color, size }) => (
                                <Icons name="pill" color={color} size={size} />)}
                                label="Histórico de Medicamentos"
                                onPress={() => {}} />
                        <Drawer.Item 
                            icon={({ color, size }) => (
                                <Icons name="alarm-note" color={color} size={size} />)}
                                label="Meus Alarmes"
                                onPress={() => {}} />
                        <Drawer.Item 
                            icon={({ color, size }) => (
                                <Icons name="cog" color={color} size={size} />)}
                                label="Configurações"
                                onPress={() => {}} />
                    </Drawer.Section>
                    <Drawer.Section title="Preferências">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Tema Escuro</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <Drawer.Item 
                    icon={({ color, size }) => (
                        <Icons name="exit-to-app" color={color} size={size} />)}
                        label="Sair"
                        onPress={() => {}} />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3, 
        fontWeight: "bold",
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15,
    },
    paragraph: {
        fontWeight: "bold",
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#F4F4F4",
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16,
    }
})