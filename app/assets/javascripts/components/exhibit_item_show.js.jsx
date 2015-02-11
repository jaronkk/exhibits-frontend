var ExhibitItemShow = React.createClass({
  mixins: [ExhibitMixin],

  render: function() {
    var exhibit = this.state.exhibit;
    return (
      <div className="exhibit-item-show">
        <ExhibitNav exhibit={exhibit} />
        <div className="container">
          <ItemShow itemUrl={this.props.itemUrl} />
        </div>
      </div>
    );
  }
});
