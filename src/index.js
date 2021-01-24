// react-language-selector.js - Language selector react component.

import React from 'react';

const defaultSupportedLanguages = require ('./supported-languages.json');

class LanguageOption extends React.Component {
    render() {return (<option value={this.props.code}>{this.props.name}</option>);}
}

export default class LanguageSelector extends React.Component {
    render() {
        let langoptionsrepresentation = [];
        let supportedLanguages = (this.props.supportedLanguages) ? this.props.supportedLanguages : defaultSupportedLanguages;
        for (let i = 0; i < supportedLanguages.length; i++) {
            langoptionsrepresentation.push(<LanguageOption code={supportedLanguages[i].code} name={supportedLanguages[i].name} />)
        }
        return (
        <div>
            <label htmlFor="lang">{this.props.text_language}</label>
                  <select id="lang" name="lang" lang="en" value={this.props.language} onChange={this.props.handleSettingsChange}>
                    {langoptionsrepresentation}
                  </select>
        </div>
        );
    }
}