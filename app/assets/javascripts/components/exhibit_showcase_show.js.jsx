var ExhibitShowcaseShow = React.createClass({
  mixins: [ExhibitMixin],

  render: function() {
    var exhibit = this.state.exhibit;
    return (
      <div className="exhibit-showcase-show">
        <ExhibitNav exhibit={exhibit} />
        <div className="container">
          <ShowcaseScroll showcaseUrl={this.props.showcaseUrl} />
        </div>
      </div>
    );
  }
});
