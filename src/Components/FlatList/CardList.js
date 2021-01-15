import React, { Component } from "react"
import {
    View, 
    Text,
    FlatList, 
    Button,
    Image
} from "react-native"

import { ListItem, SearchBar, ThemeConsumer } from "react-native-elements"

import styles from "./style.js"

export default class CardList extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading: false, 
            data: [],
            temp: [],
            error: null,
            searchText: null
        }
    }

    componentDidMount(){
        this.getData()
    }

    getData = async () => {
        const url = "http://192.168.0.14:3000/medicamentos/todos"
        this.setState({ loading: true })
        try {
            const response = await fetch(url)
            const json = await response.json()
            this.setResult(json)
        } catch (e) {
            this.setState({ loading: false, error: "Error loading..." })
        }
    }

    setResult = (res) => {
        this.setState({
            data: [...this.state.data, ...res],
            temp: [...this.state.temp, ...res],
            error: res.error || null,
            loading: false,
        })
    }

    renderHeader = () => {
        return (
          <SearchBar 
            placeholder="Procure aqui..." 
            lightTheme
            round
            editable={true}
            value={this.state.searchText}
            onChangeText={this.updateSearch}/>
        )
    }

    updateSearch = searchText => {
        this.setState({searchText}, () => {
            if('' == searchText){
                this.setState({
                  data: [...this.state.temp],
                })
                return;
            }
            this.state.data = this.state.temp
                .filter(function(item){
                    return item.nome_comercial.includes(searchText)
                }).map(function({id, nome_comercial}){
                    return {id, nome_comercial}
                })
        })
    }

    render(){
        return this.state.error != null ? (
          <View />  
        ) : (
          <FlatList 
            numColumns={numColumns=3}
            ListHeaderComponent={this.renderHeader}
            data={this.state.data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
              <View>
                  <Image 
                    source={require("../../../res/img/empty.jpg")}
                    style={styles.photoMed}    
                  />
                  <ListItem style={styles.photoMed} title={item.nome_comercial}/>
              </View> 
            )} />
        )
    }
}

