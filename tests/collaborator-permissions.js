import SharingFilter from '../src/sharing.js';


describe('SharingFilter', function() {
  const Bob = {
    id: 1,
    name: 'Bob'
  };

  describe('combining collaborators', function() {
    it('should fully select a collaborator that has access to ' +
       'everything', function() {
      const documents = [{
        id: 1,
        name: 'Public document',
        collaborators: [Bob.id]
      }, {
        id: 2,
        name: 'Some other document',
        collaborators: [Bob.id]
      }];

      const sharing = new SharingFilter(documents, [Bob]);

      expect(sharing.aggregateCollaboratorPermissions()).to.deep.equal([
        Object.assign({}, Bob, {selected: true, partial: false})
      ]);
    });

    it('should fully deselect a collaborator that has access to ' +
       'nothing', function() {
      const documents = [{
        id: 1,
        name: 'Public document',
        collaborators: []
      }, {
        id: 2,
        name: 'Some other document',
        collaborators: []
      }];

      const sharing = new SharingFilter(documents, [Bob]);

      expect(sharing.aggregateCollaboratorPermissions()).to.deep.equal([
        Object.assign({}, Bob, {selected: false, partial: false})
      ]);
    });

    it('should partially select a collaborator that has access to ' +
       'some of the documents', function() {
     const documents = [{
       id: 1,
       name: 'Public document',
       collaborators: [Bob.id]
     }, {
       id: 2,
       name: 'Some other document',
       collaborators: []
     }];

     const sharing = new SharingFilter(documents, [Bob]);

     expect(sharing.aggregateCollaboratorPermissions()).to.deep.equal([
       Object.assign({}, Bob, {selected: true, partial: true})
     ]);
   });
  });
});
