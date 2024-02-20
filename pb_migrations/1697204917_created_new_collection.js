/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fokqyatn59cwwxo",
    "created": "2023-10-13 13:48:37.170Z",
    "updated": "2023-10-13 13:48:37.170Z",
    "name": "new_collection",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hfsygaqn",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "uy6gs8dg",
        "name": "field",
        "type": "text",
        "required": false,
        "presentable": false,
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("fokqyatn59cwwxo");

  return dao.deleteCollection(collection);
})
