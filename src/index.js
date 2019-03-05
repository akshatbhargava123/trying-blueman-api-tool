//add any imports if needed, or write your script directly in this file.
//import SomePackage from "PackageName";

//make sure to export main, with the signature
export function main (el, service, imEntity, state, config) {

  var query    = {
    "from": imEntity.class, //this should always be Gene, because we configured this tool to display data on Gene report pages.
    "select": [
      "goAnnotation.ontologyTerm.name",
      "goAnnotation.evidence.code.code",
      "goAnnotation.evidence.code.name",
      "goAnnotation.ontologyTerm.namespace"
    ],
    "where": [
      {
        "path": imEntity.format, //this translates to id, based on our tool config.
        "op": "=",
        "value": imEntity.value  // BlueGenes will pass this dynamically.
      }
    ]
  };
    //fetch data using imjs, which is available on the window.
    var goTerms = new imjs.Service(service)
        .records(query)
        .then(function(response) {
          //we'll add more code here, but in the meantime, print the result to the console.
          console.log(response);
    });
}
