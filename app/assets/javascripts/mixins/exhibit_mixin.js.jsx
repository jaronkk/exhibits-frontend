/** @jsx React.DOM */

var ExhibitMixin = {
  propTypes: {
    exhibitUrl: React.PropTypes.string.isRequired,
  },

  getInitialState: function() {
    return {
      exhibit: {}
    };
  },

  componentDidMount: function() {
    $.get(this.props.exhibitUrl, function(result) {
      this.setState({
        exhibit: result,
      })
    }.bind(this));
  },

};
