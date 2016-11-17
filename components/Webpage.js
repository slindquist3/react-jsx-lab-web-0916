// WEBPAGE

// In the components/Webpage.js file, create an ES2015 React component called Webpage.
// This component should contain a title with the text The world's coolest webpage.
// This component should also contain two instances of the FillerText component.
const React = require('react');
const FillerText = require('./FillerText.js')

class Webpage extends React.Component {
  render() {
  return (<div>
      <title>"The world's coolest webpage."</title>
      <FillerText/>
      <FillerText/>
    </div>)
  }
}

module.exports = Webpage;
