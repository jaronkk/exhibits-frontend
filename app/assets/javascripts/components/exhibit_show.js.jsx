var ExhibitShow = React.createClass({
  mixins: [ExhibitMixin],

  render: function() {
    var exhibit = this.state.exhibit;
    var showcasesNode;
    if (exhibit['hasPart/showcases']) {
      showcasesNode = (
        <ShowcasesList showcasesUrl={exhibit['hasPart/showcases']} />
      );
    }
    return (
      <div className="exhibit-show">
        <ExhibitNav exhibit={exhibit} />
        <div className="container">
          <h1>{exhibit.name}</h1>
          {showcasesNode}
        </div>
      </div>
    );
  }
});
