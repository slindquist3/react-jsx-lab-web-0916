// In the components/FillerText.js file, create an ES2015 React component called FillerText.
// This component should be a paragraph containing the following text: I am a filler text. I can be used to fill your screen. Amazing!.
const React = require('react')
class FillerText extends React.Component {
  render() {
    return (<p>I am a filler text. I can be used to fill your screen. Amazing!</p>)
  }
}
module.exports = FillerText
