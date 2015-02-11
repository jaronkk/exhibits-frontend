var ExhibitItemsList = React.createClass({
  mixins: [ExhibitMixin],

  render: function() {
    var collectionNode;
    var exhibit = this.state.exhibit;
    if (exhibit['isPartOf/collection']) {
      collectionNode = (
        <CollectionItemsList collectionUrl={exhibit['isPartOf/collection']} />
      );
    }
    return (
      <div className="exhibit-items-list">
        <ExhibitNav exhibit={exhibit} />
        <div className="container">
          {collectionNode}
        </div>
      </div>
    );
  }
});
