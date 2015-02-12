var ShowcaseScrollSections = React.createClass({
  propTypes: {
    showcase: React.PropTypes.object.isRequired,
  },

  getInitialState: function() {
    return {
      sections: [],
    };
  },

  componentDidMount: function() {
    $.get(this.props.showcase['hasPart/sections'], function(result) {
      this.setState({
        sections: result,
      })
    }.bind(this));
  },

  render: function() {
    var sectionNodes = this.state.sections.map(function(section) {
      var columns = [];
      if (section['hasPart/item']) {
        columns.push((
          <div key={'item' + section['@id']} className="showcase-scroll-section-column">
            <ShowcaseScrollSectionItem itemUrl={section['hasPart/item']} />
          </div>
        ));
      }
      if (section.description) {
        columns.push((
          <div key={'text' + section['@id']} className="showcase-scroll-section-column">
            <ShowcaseScrollSectionText name={section.name} description={section.description} />
          </div>
        ));
      }
      return columns;
    });
    return (
      <div className="showcase-scroll-sections">
        {sectionNodes}
      </div>
    );
  }
});
