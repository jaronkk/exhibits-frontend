var ItemShow = React.createClass({
  mixins: [ItemMixin],

  render: function() {
    var item = this.state.item;
    return (
      <div className="item-show">
        <h1>{item.name}</h1>
      </div>
    );
  }
});
