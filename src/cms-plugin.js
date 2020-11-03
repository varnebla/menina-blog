import CMS from 'netlify-cms'
CMS.registerEditorComponent({
  id: 'imageFooter',
  label: 'Pie de foto',
  // Fields the user need to fill out when adding an instance of the component
  fields: [{name: 'id', label: 'Texto', widget: 'string'}],
  // Pattern to identify a block as being an instance of this component
  pattern: /^imageFooter(\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match){
    return {
      id: match[1]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return 'imageFooter '+ obj.id;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return (
      '<div align="center"><em>'+ obj.id +'</em></div>'
    );
  }
})