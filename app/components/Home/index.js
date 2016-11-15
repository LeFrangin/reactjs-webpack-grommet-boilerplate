import React, { Component, PropTypes } from 'react'
import { default as translations } from './i18n'
import { Link } from 'react-router'
import { default as Heading } from 'grommet/components/Heading'
import { default as Button } from 'grommet/components/Button'

import './style'

class Home extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        console.log("HOME");
        const { locale } = this.props;

        return (
            <Heading tag="h1" uppercase={true}>
                Sample Heading
                <Button label="Label" onClick={console.log("Button")} />
            </Heading>

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