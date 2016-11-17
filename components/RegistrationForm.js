// REGISTRATION FORM
// In the components/RegistrationForm.js file, create an ES2015 React component called RegistrationForm.
// This component should contain the following:
// One <form> element
// Two <input> elements — one has a text type, the other one is a password
// One <button> element with the submit type


const React = require('react');

class RegistrationForm extends React.Component {
  render() {
  return (<form>
    <input type="text" />
    <input type="password" />
    <button type="submit" />
  </form>)
  }
}

module.exports = RegistrationForm;
