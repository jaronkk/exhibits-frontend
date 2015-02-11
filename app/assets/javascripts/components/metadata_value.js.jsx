var MetadataValue = React.createClass({
  propTypes: {
    value: React.PropTypes.any.isRequired,
  },

  // Pattern copied from https://github.com/bryanwoods/autolink-js
  autoLink: function() {
    var value = this.props.value;
    var pattern = /(^|[\s\n]|<br\/?>)((?:https?|ftp):\/\/[\-A-Z0-9+\u0026\u2019@#\/%?=()~_|!:,.;]*[\-A-Z0-9+\u0026@#\/%=~()_|])/gi;
    if (pattern.test(value)) {
      var matches = value.split(pattern);
      var replacedNodes = matches.map(function(string, index) {
        if (pattern.test(string)) {
          return (
            <a href={string} key={index} target="_blank" rel="nofollow">{string}</a>
          );
        } else {
          return string;
        }
      });
      return replacedNodes;
    } else {
      return value;
    }
  },

  render: function() {
    return (
      <dd className="metadata-value">
        {this.autoLink()}
      </dd>
    );
  }
});
