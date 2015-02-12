var ShowcaseScroll = React.createClass({
  mixins: [ShowcaseMixin],

  render: function() {
    var sectionsNode;
    var showcase = this.state.showcase;
    if (showcase['hasPart/sections']) {
      sectionsNode = (
        <ShowcaseScrollSections showcase={showcase} />
      );
    }
    return (
      <div className="showcase-scroll">
        <ShowcaseScrollTitle showcase={showcase} />
        {sectionsNode}
      </div>
    );
  }
});
