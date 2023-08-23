/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("px0ohg2nmkh055w");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "px0ohg2nmkh055w",
    "created": "2023-08-07 11:03:54.385Z",
    "updated": "2023-08-07 11:03:54.385Z",
    "name": "supervisor_agents",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bzybqz5h",
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
      },
      {
        "system": false,
        "id": "7cir0hhz",
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
        "id": "wa8nj4ft",
        "name": "description",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "x46htqsw",
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
})
