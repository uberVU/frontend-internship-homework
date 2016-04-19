import SharingFilter from '../src/sharing.js';


describe('SharingFilter', function() {
  const Bob = {
    id: 1,
    name: 'Bob'
  };

  const document1 = {
    id: 1,
    name: 'Public document',
    collaborators: []
  };

  const document2 = {
    id: 2,
    name: 'Some other document',
    collaborators: []
  };

  describe('updating documents', function() {
    it('should give access to everything to a ' +
       'fully selected collaborator', function() {
      const sharing = new SharingFilter([document1, document2], [Bob]);

      const updatedDocuments = sharing.updateDocuments([
        Object.assign({}, Bob, {selected: true})
      ]);

      expect(updatedDocuments).to.deep.equal([
        Object.assign({}, document1, {
          collaborators: [Bob.id]
        }),
        Object.assign({}, document2, {
          collaborators: [Bob.id]
        })
      ]);
    });

    it('should revoke access to everything to a ' +
       'fully deselected collaborator', function() {
      const sharing = new SharingFilter([
        Object.assign({}, document1, {collaborators: [Bob.id]}),
        Object.assign({}, document2, {collaborators: [Bob.id]})
      ]);

      const updatedDocuments = sharing.updateDocuments([
        Object.assign({}, Bob, {selected: false})
      ]);

      expect(updatedDocuments).to.deep.equal([
        Object.assign({}, document1, {
          collaborators: []
        }),
        Object.assign({}, document2, {
          collaborators: []
        })
      ]);
    });

    it('should leave the permissions of a ' +
       'partially selected collaborator alone', function() {
      const sharing = new SharingFilter([
        Object.assign(document1, {collaborators: [Bob.id]}),
        document2
      ]);

      const updatedDocuments = sharing.updateDocuments([
        Object.assign({}, Bob, {selected: true, partial: true})
      ]);

      expect(updatedDocuments).to.deep.equal([
        Object.assign({}, document1, {
          collaborators: [Bob.id]
        }),
        document2
      ]);
    });
  });
});
