/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zhjthb90oi7we6t")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hfjr13tc",
    "name": "avatar",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zhjthb90oi7we6t")

  // remove
  collection.schema.removeField("hfjr13tc")

  return dao.saveCollection(collection)
})
