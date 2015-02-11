/** @jsx React.DOM */

var ExhibitMixin = {
  propTypes: {
    exhibit_url: React.PropTypes.string.isRequired,
  },

  getInitialState: function() {
    return {
      exhibit: {}
    };
  },

  componentDidMount: function() {
    $.get(this.props.exhibit_url, function(result) {
      this.setState({
        exhibit: result,
      })
    }.bind(this));
  },

};
