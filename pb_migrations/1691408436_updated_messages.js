/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bng51sk89vhpaa4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "numu0mtk",
    "name": "agent_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "zhjthb90oi7we6t",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nn36u0ga",
    "name": "sender",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "user",
        "agent"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bng51sk89vhpaa4")

  // remove
  collection.schema.removeField("numu0mtk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nn36u0ga",
    "name": "sender",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "user",
        "agent",
        "supervisor"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
