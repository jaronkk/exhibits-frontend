var ItemShow = React.createClass({
  mixins: [ItemMixin],

  render: function() {
    var item = this.state.item;
    var viewerNode;
    if (item.image) {
      viewerNode = (
        <OpenseadragonViewer image={item.image} containerID={item['@id']} />
      );
    }
    return (
      <div className="item-show">
        <h1>{item.name}</h1>
        <div className="row">
          <div className="col-md-5 well">
            <h3>Metadata</h3>
            <MetadataList metadata={item.metadata} />
          </div>
          <div className="col-md-7">
            {viewerNode}
          </div>
        </div>
      </div>
    );
  }
});
