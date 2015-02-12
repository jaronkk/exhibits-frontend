/** @jsx React.DOM */

var ShowcaseMixin = {
  propTypes: {
    showcaseUrl: React.PropTypes.string.isRequired,
  },

  getInitialState: function() {
    return {
      showcase: {}
    };
  },

  componentDidMount: function() {
    $.get(this.props.showcaseUrl, function(result) {
      this.setState({
        showcase: result,
      })
    }.bind(this));
  },

};
