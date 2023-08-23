/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pyiexzvl",
    "name": "verify_code",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 1000,
      "max": 9999
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("pyiexzvl")

  return dao.saveCollection(collection)
})
