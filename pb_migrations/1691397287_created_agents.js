/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zhjthb90oi7we6t",
    "created": "2023-08-07 08:34:47.270Z",
    "updated": "2023-08-07 08:34:47.270Z",
    "name": "agents",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "c7o5wa5p",
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
        "id": "39eitnih",
        "name": "short_description",
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
        "id": "nlhpm2vh",
        "name": "long_description",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "0jhgnbqr",
        "name": "mental_disorder",
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
        "id": "b8gk5wns",
        "name": "toughness",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 10
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zhjthb90oi7we6t");

  return dao.deleteCollection(collection);
})
