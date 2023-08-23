/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jxfb6qyxciigt32");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "jxfb6qyxciigt32",
    "created": "2023-08-16 07:23:29.251Z",
    "updated": "2023-08-16 07:23:46.790Z",
    "name": "test",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "z0i5x6ch",
        "name": "salam",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
