var ItemsList = React.createClass({
  propTypes: {
    itemsUrl: React.PropTypes.string.isRequired,
  },

  getInitialState: function() {
    return {
      items: [],
    };
  },

  componentDidMount: function() {
    $.get(this.props.itemsUrl, function(result) {
      this.setState({
        items: result,
      })
    }.bind(this));
  },

  render: function() {
    var itemNodes = this.state.items.map(function(item) {
      return (
        <ItemsListItem key={item['@id']} item={item} />
      );
    });
    return (
      <div className="items-list">
        {itemNodes}
      </div>
    );
  }
});
