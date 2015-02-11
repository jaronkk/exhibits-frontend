var ExhibitShow = React.createClass({
  mixins: [ExhibitMixin],

  render: function() {
    var exhibit = this.state.exhibit;
    return (
      <div className="exhibit-show">
        <ExhibitNav exhibit={exhibit} />
        {exhibit.name}
      </div>
    );
  }
});
