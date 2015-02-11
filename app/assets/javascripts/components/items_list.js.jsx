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
    var itemNodes = this.state.items.map(function(item, index) {
      var nodes = [];
      if (index > 0) {
        if (index%3 == 0) {
          nodes.push ((
            <div className="clearfix"></div>
          ));
        }
      }
      nodes.push((
        <div className="col-sm-4" key={item['@id']}>
          <ItemsListItem item={item} />
        </div>
      ));
      return nodes;
    });
    return (
      <div className="row items-list">
        {itemNodes}
      </div>
    );
  }
});
