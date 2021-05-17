import React, { Component } from 'react';
import { Container, Header, Content,Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
import Tab4 from './tabs/tab4';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'blue'}} hasTabs>
            <Left/>
          <Body>
            <Title style={{color:'white',alignContent:'center',alignSelf:'center',alignItems:'center',paddingLeft:55}}>News App</Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'white'}}>
          <Tab tabStyle={{backgroundColor:'blue'}} activeTabStyle={{backgroundColor:'red'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="General">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'blue'}} activeTabStyle={{backgroundColor:'red'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Business">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'blue'}} activeTabStyle={{backgroundColor:'red'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Sports">
            <Tab3 />
            
          </Tab>
          <Tab tabStyle={{backgroundColor:'blue'}} activeTabStyle={{backgroundColor:'red'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Tech">
          <Tab4 />
          
        </Tab>
          
        </Tabs>
      </Container>
    );
  }
}