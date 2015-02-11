/** @jsx React.DOM */

var CollectionMixin = {
  propTypes: {
    collectionUrl: React.PropTypes.string.isRequired,
  },

  getInitialState: function() {
    return {
      collection: {}
    };
  },

  componentDidMount: function() {
    $.get(this.props.collectionUrl, function(result) {
      this.setState({
        collection: result,
      })
    }.bind(this));
  },

};
