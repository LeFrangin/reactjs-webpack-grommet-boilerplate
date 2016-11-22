import React, { Component, PropTypes } from 'react'
import { default as translations } from './i18n'
import { Link } from 'react-router'
import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'
import List from 'grommet/components/List'
import ListItem from 'grommet/components/ListItem'

import './style'

class Home extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { locale } = this.props;

        return (
            <Section>
                <Heading tag="h1" uppercase={true} align="center">
                    {translations[locale].title}
                </Heading>
                <List>
                    <ListItem justify="between">
                        <span>ReactJS</span>
                        <span className="secondary">15.3.2</span>
                    </ListItem>
                    <ListItem justify="between">
                        <span>Redux</span>
                        <span className="secondary">3.6.0</span>
                    </ListItem>
                </List>
            </Section>
        );
    }
}

Text.PropTypes = {
    locale: PropTypes.string
};

Text.defaultProps = {
    locale: 'en'
};

export default Home