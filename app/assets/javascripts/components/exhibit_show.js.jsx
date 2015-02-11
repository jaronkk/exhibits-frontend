var ExhibitShow = React.createClass({
  mixins: [ExhibitMixin],

  render: function() {
    var exhibit = this.state.exhibit;
    return (
      <div className="exhibit-show">
        <ExhibitNav exhibit={exhibit} />
        <div className="container">
          {exhibit.name}
        </div>
      </div>
    );
  }
});
