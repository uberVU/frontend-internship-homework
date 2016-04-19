import SharingFilter from '../src/sharing.js';


describe('SharingFilter', function() {
  const Bob = {
    id: 1,
    name: 'Bob'
  };

  const Andy = {
    id: 1,
    name: 'Andy'
  };

  describe('with types', function() {
    const types = ['pdf', 'xlsx'];

    const documents = [{
      id: 1,
      name: 'Public document',
      type: types[0],
      collaborators: []
    }, {
      id: 2,
      name: 'Some other document',
      type: types[1],
      collaborators: []
    }, {
      id: 3,
      name: 'Another document',
      type: types[0],
      collaborators: []
    }, {
      id: 4,
      name: 'Last document on the planet',
      type: types[1],
      collaborators: []
    }];

    describe('combining collaborators', function() {
      it('should fully select a collaborator that has access to ' +
         'every document of a certain type', function() {
        const sharing = new SharingFilter([
          Object.assign({}, documents[0], {collaborators: [Bob.id]}),
          documents[1]
        ], [Bob]);

        expect(sharing.aggregateCollaboratorPermissions()).to.deep.equal([
          Object.assign({}, Bob, {selected: true, partial: false})
        ]);
      });

      it('should partially select a collaborator that has access to ' +
         'some of the documents of a certain type', function() {
        const sharing = new SharingFilter([
          Object.assign({}, documents[0], {collaborators: [Bob.id]}),
          Object.assign({}, documents[1], {collaborators: [Andy.id]}),
          documents[2], documents[3]
        ], [Bob, Andy]);

        expect(sharing.aggregateCollaboratorPermissions()).to.deep.equal([
          Object.assign({}, Bob, {selected: true, partial: true}),
          Object.assign({}, Andy, {selected: true, partial: true}),
        ]);
      });
    });

    describe('updating documents', function() {
      it('should give access to all the documents of a certain type to a ' +
         'fully selected collaborator', function() {
        const sharing = new SharingFilter([
          Object.assign({}, documents[0], {collaborators: [Bob.id]}),
          ...documents.slice(1)
        ], [Bob]);

        expect(sharing.updateDocuments([
          Object.assign({}, Bob, {selected: true, partial: false})
        ])).to.deep.equal([
          Object.assign({}, documents[0], {collaborators: [Bob.id]}),
          documents[1],
          Object.assign({}, documents[2], {collaborators: [Bob.id]}),
          documents[3]
        ]);
      });
    });
  });
});
