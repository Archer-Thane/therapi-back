/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zhjthb90oi7we6t")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xlel94no",
    "name": "intervention_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "q4qvoydemoltddy",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zhjthb90oi7we6t")

  // remove
  collection.schema.removeField("xlel94no")

  return dao.saveCollection(collection)
})
