var CollectionItemsList = React.createClass({
  mixins: [CollectionMixin],

  render: function() {
    var itemsNode;
    var collection = this.state.collection;
    if (collection['hasPart/items']) {
      itemsNode = (
        <ItemsList itemsUrl={collection['hasPart/items']} />
      );
    }
    return (
      <div className="collection-items-list">
        {itemsNode}
      </div>
    );
  }
});
