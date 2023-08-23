/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zhjthb90oi7we6t")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7fgusx0f",
    "name": "starter_messages",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zhjthb90oi7we6t")

  // remove
  collection.schema.removeField("7fgusx0f")

  return dao.saveCollection(collection)
})
