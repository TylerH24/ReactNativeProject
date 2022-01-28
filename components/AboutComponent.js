import { UserInterfaceIdiom } from "expo-constants";
import React, { Component } from "react";
import { Card } from "react-native-elements";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { PARTNERS } from '../shared/partners.js';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'About Us'
    };

    render() {
        const renderPartner = ({partner}) => {
            return (
                <ListItem
                    title={partner.name}
                    subtitle={partner.description}
                    leftAvatar={{ source: require('./images/bootstrap-logo.png')}}
                />
            );
        };
        <ScrollView>
            <Mission />
            <Card
                title={"Community Partners"}>
                <FlatList
                    data={this.state.partners}
                    renderItem={renderPartner}
                    keyExtractor={partner => partner.id.toString()}
            />
            </Card>
        </ScrollView>
    };
}

function Mission(props) {
    return (
        <Card>
            <Text style={{margin: 10}}>
            We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
            </Text>
        </Card>
    );
}

export default About;