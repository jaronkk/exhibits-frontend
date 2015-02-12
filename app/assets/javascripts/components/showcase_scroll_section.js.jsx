var ShowcaseScrollSection = React.createClass({
  propTypes: {
    section: React.PropTypes.object.isRequired,
  },

  render: function() {
    var section = this.props.section;
    return (
      <div className="showcase-scroll-section">
        <h2>{section.name}</h2>
      </div>
    );
  }
});
