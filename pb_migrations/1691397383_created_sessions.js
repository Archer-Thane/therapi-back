/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1y2qsk7id4zl76d",
    "created": "2023-08-07 08:36:23.391Z",
    "updated": "2023-08-07 08:36:23.391Z",
    "name": "sessions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pbmsl6by",
        "name": "user_id",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "mel0ksza",
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
      },
      {
        "system": false,
        "id": "p7lqe7ri",
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
      },
      {
        "system": false,
        "id": "zqine6zz",
        "name": "supervisor_id",
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
      },
      {
        "system": false,
        "id": "vph9plh0",
        "name": "start_time",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "gll2jqq2",
        "name": "end_time",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "3ww4nlfs",
        "name": "is_finished",
        "type": "bool",
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
  const collection = dao.findCollectionByNameOrId("1y2qsk7id4zl76d");

  return dao.deleteCollection(collection);
})
