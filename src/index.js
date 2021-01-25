// react-language-selector.js - Language selector react component.

import React from 'react';

const defaultSupportedLanguages = require ('./supported-languages.json');

export default class LanguageSelector extends React.Component {
    render() {
        let supportedLanguages = (this.props.supportedLanguages) ? this.props.supportedLanguages : defaultSupportedLanguages;
        let returnV  = React.createElement('div', null,
                            React.createElement('label', {htmlFor: "LanguageSelector"}, this.props.text_language),
                            React.createElement('select', {id: "LanguageSelector", name: "lang", lang: "en", value: this.props.language, onChange: this.props.handleSettingsChange},
                                supportedLanguages.map((langdesc) => {return React.createElement('option',{value: langdesc.code},langdesc.name)})));
    console.log(returnV);
    return returnV;
    }
}