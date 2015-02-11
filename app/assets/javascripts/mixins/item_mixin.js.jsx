/** @jsx React.DOM */

var ItemMixin = {
  propTypes: {
    itemUrl: React.PropTypes.string.isRequired,
  },

  getInitialState: function() {
    return {
      item: {}
    };
  },

  componentDidMount: function() {
    $.get(this.props.itemUrl, function(result) {
      this.setState({
        item: result,
      })
    }.bind(this));
  },

};
