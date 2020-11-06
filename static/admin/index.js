import CMS from 'netlify-cms'

CMS.registerEditorComponent({
  //Internal id of the component
  id: 'imageFooter',
  //Visible label
  label: 'Pie de imagen',
  //Fields the user needs to fill out when adding an instance of the component
  fields: [{name: 'text', label:'Texto del pie de imagen', widget: 'string' }],
  //Patern to identify a block as being an instance of this component
  pattern: /^imageFooter (\S+)$/,
  //Function to extract data elements from the regexp match
  fromBlock: function (match){
    return {
      id: match[1]
    }
  },
  //Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return 'imageFooter' + obj.id;
  },
  //Preview output for this component.
  toPreview: function(obj) {
    return(
      '<div align="center"><em>'+obj.id+'</em></div>'
    )
  }
})