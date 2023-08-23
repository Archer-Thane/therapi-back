/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bng51sk89vhpaa4")

  // remove
  collection.schema.removeField("3oovqxfi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ygdfy0fp",
    "name": "message",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bng51sk89vhpaa4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3oovqxfi",
    "name": "message",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("ygdfy0fp")

  return dao.saveCollection(collection)
})
