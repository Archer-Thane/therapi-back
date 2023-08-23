/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zhjthb90oi7we6t")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "krd5aqf8",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "patient",
        "supervisor",
        "evaluator",
        "report_generator"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zhjthb90oi7we6t")

  // remove
  collection.schema.removeField("krd5aqf8")

  return dao.saveCollection(collection)
})
