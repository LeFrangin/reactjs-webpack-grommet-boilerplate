import React, { Component, PropTypes } from 'react'
import { default as translations } from './i18n'
import { Link } from 'react-router'
import { default as Paragraph } from 'grommet/components/Paragraph'

import './style'

class NotFound extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { locale } = this.props;
        return (
            <Paragraph>
                {translations[locale].pageNotFound}
            </Paragraph>
        );
    }
}

Text.PropTypes = {
    locale: PropTypes.string
};

Text.defaultProps = {
    locale: 'en'
};

export default NotFound