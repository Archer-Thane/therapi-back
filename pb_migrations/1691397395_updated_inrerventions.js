/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q4qvoydemoltddy")

  collection.name = "interventions"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q4qvoydemoltddy")

  collection.name = "inrerventions"

  return dao.saveCollection(collection)
})
