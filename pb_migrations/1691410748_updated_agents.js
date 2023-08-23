/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zhjthb90oi7we6t")

  // remove
  collection.schema.removeField("7fgusx0f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x1jy0vnq",
    "name": "starter_messages",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
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

  // remove
  collection.schema.removeField("x1jy0vnq")

  return dao.saveCollection(collection)
})
