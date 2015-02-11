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
        <div className="col-sm-4" key={item['@id']}>
          <ItemsListItem item={item} />
        </div>
      );
    });
    return (
      <div className="row items-list">
        {itemNodes}
      </div>
    );
  }
});
