/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "q4qvoydemoltddy",
    "created": "2023-08-07 08:30:53.266Z",
    "updated": "2023-08-07 08:30:53.266Z",
    "name": "inrerventions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "j2ivpzb1",
        "name": "image",
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
      },
      {
        "system": false,
        "id": "bcghicyq",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ldmoo5ej",
        "name": "description",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("q4qvoydemoltddy");

  return dao.deleteCollection(collection);
})
