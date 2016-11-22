import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { resetErrorMessage, changeLocale } from '../actions'
import GrommetApp from 'grommet/components/App'
import Notification from 'grommet/components/Notification'
import Article from 'grommet/components/Article'
import Button from 'grommet/components/Button'
import Close from 'grommet/components/icons/base/Close'
import Menu from './Menu'

import '../styles/main'

class App extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleDismissClick = this.handleDismissClick.bind(this)
    }

    handleDismissClick(e) {
        this.props.resetErrorMessage();
        e.preventDefault()
    }

    handleChange(nextValue) {
        browserHistory.push(`/${nextValue}`)
    }

    renderErrorMessage() {
        const { errorMessage } = this.props;
        if (!errorMessage) {
            return null
        }
        return (
        <Notification status="warning" message={errorMessage}><Button icon={<Close />} onClick={this.handleDismissClick} /></Notification>
        )
    }

    renderMenu() {
        return (
            <Menu />
        )
    }

    render() {
        const { children } = this.props;
        return (
            <GrommetApp inline={false}>
                {this.renderMenu()}
                <Article>
                    {this.renderErrorMessage()}
                    {children}
                </Article>
            </GrommetApp>
        )
    }
}

App.propTypes = {
    errorMessage: PropTypes.string,
    resetErrorMessage: PropTypes.func.isRequired,
    children: PropTypes.node
};

function mapStateToProps(state, ownProps) {
    return {
        errorMessage: state.errorMessage
    }
}

export default connect(mapStateToProps, {
    resetErrorMessage,
    changeLocale
})(App)