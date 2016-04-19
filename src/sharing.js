import _ from 'lodash';


/**
 * @typedef {Object} Document
 *
 * @property {String} name
 * @property {Number} id
 * @property {String} [type] Can be optional.
 * @property {Number[]} collaborators IDs pointing to Collaborator objects.
 */

/**
 * @typedef {Object} Collaborator
 *
 * @property {String} name
 * @property {Number} id
 */

/**
 * @typedef {Object} Permission
 *
 * @extends Collaborator
 *
 * @property {Boolean} selected Whether the collaborator should be selected in
 *     the filter.
 * @property {Boolean} partial Whether the collaborator should be marked with a
 *     partial checkmark in the filter.
 */


export default class SharingFilter {
  /**
   * @param {Document[]} documents
   * @param {Collaborator[]} collaborators
   */
  constructor(documents, collaborators) {
  }

  /**
   * @returns {Permission[]}
   */
  aggregateCollaboratorPermissions() {
    throw new Error('Implement me!');
  }

  /**
   * @param {Permission[]} permissions
   *
   * @returns {Document[]}
   */
  updateDocuments(permissions) {
    throw new Error('Implement me!');
  }
}
