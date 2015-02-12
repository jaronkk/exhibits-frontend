var ShowcaseScrollSection = React.createClass({
  propTypes: {
    section: React.PropTypes.object.isRequired,
  },

  render: function() {
    var section = this.props.section;
    var imageColumn;
    if (section['hasPart/item']) {
      imageColumn = (
        <div className="showcase-scroll-section-column">
          <ShowcaseScrollSectionItem itemUrl={section['hasPart/item']} />
        </div>
      )
    }
    var textColumn;
    if (section.description) {
      textColumn = (
        <div className="showcase-scroll-section-column">
          <ShowcaseScrollSectionText name={section.name} description={section.description} />
        </div>
      )
    }
    return (
      <div className="showcase-scroll-section">
        {imageColumn}
        {textColumn}
      </div>
    );
  }
});
