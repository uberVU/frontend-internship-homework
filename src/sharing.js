import _ from 'lodash';


export default class SharingFilter {
  constructor(documents, collaborators) {
  }

  aggregateCollaboratorPermissions() {
    throw new Error('Implement me!');
  }

  updateDocuments(collaboratorPermissions) {
    throw new Error('Implement me!');
  }
}
