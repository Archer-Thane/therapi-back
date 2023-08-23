routerAdd("POST", "/hello", (c) => {
  const data = $apis.requestInfo(c).data;
  console.log(data.salam);
  return c.json(200, {
    message: "hello",
  });
});
// verify the user by phone and sms
routerAdd(
  "GET",
  "/verifyBySms/:phoneNumber",
  (c) => {
    const phoneNumber = c.pathParam("phoneNumber");
    const u = $app
      .dao()
      .findFirstRecordByData("users", "phone_number", phoneNumber);
    const res = $http.send({
      url: `https://api.kavenegar.com/v1/434A544C4C3667303161387A52525049573471444C346C6734617A386F465763/verify/lookup.json?receptor=${phoneNumber}&token=${u.get(
        "verify_code"
      )}&template=verify-en`,
      method: "GET",
      headers: { "content-type": "application/json" },
      timeout: 120,
    });
    return c.json(200, {
      message: "code sent to this phone: " + u.get("phone_number"),
    });
  },
  $apis.activityLogger($app)
);

// verify the user by phone and sms
routerAdd(
  "GET",
  "/verifyBySms/:phoneNumber/:code",
  (c) => {
    const phoneNumber = c.pathParam("phoneNumber");
    const code = c.pathParam("code");
    const u = $app
      .dao()
      .findFirstRecordByData("users", "phone_number", phoneNumber);
    if (u.get("verify_code") == code) {
      u.set("verified", true);
      $app.dao().saveRecord(u);
      return c.json(200, {
        message: "user verfied: " + u.get("id"),
      });
    } else {
      throw new BadRequestError("codes does not match");
    }
  },
  $apis.activityLogger($app)
);

// if sender is user, then its message will send due to a service on the port 5000
// and then we have to store the incomming message from agent to the database.
onModelAfterCreate((e) => {
  const message = e.model.get("message");
  if (e.model.get("sender") === "user") {
    const agent = $app.dao().findRecordById("agents", e.model.get("agent_id"));
    const character_id = agent.get("character_id");
    console.log(character_id);
    const res = $http.send({
      url: "http://127.0.0.1:5000/chat/" + character_id,
      method: "POST",
      body: JSON.stringify({
        message,
      }),
      headers: { "content-type": "application/json" },
      timeout: 120,
    });
    if (res.statusCode === 200) {
      const collection = $app.dao().findCollectionByNameOrId("messages");
      const record = new Record(collection, {
        session_id: e.model.get("session_id"),
        user_id: e.model.get("user_id"),
        agent_id: e.model.get("agent_id"),
        time_sent: new Date(),
        sender: "agent",
        message: res.json.response,
      });
      $app.dao().saveRecord(record);
    }
  }
}, "messages");

// New Users should be forced to not paid
// also, a new payment with status pending will create for them
onModelAfterCreate((e) => {
  const newUser = $app.dao().findRecordById("users", e.model.get("id"));
  const min = 1000;
  const max = 9999;
  const verify_code = Math.floor(Math.random() * (max - min + 1)) + min;
  newUser.set("paid", false);
  newUser.set("verify_code", verify_code);
  $app.dao().saveRecord(newUser);

  const collection = $app.dao().findCollectionByNameOrId("payments");
  const payment = new Record(collection, {
    user_id: e.model.get("id"),
    amount: 500000,
    status: "pending",
  });
  $app.dao().saveRecord(payment);
}, "users");

// users can have new sessions, which paid's attribute are true
// users can have one open session, not multiple.
onModelBeforeCreate((e) => {
  // const user = $app.dao().findRecordById("users", e.model.get("user_id"));
  // if (!user.get("paid")) {
  //   throw new BadRequestError(
  //     "User Should Complete its payment to use service"
  //   );
  // }
  // const sessions = $app.dao().findRecordsByExpr(
  //   "sessions",
  //   $dbx.exp("LOWER(user_id) = {:user_id}", {
  //     user_id: e.model.get("user_id"),
  //   }),
  //   $dbx.hashExp({ is_finished: false })
  // );
  // if (Object.keys(sessions).length) {
  //   throw new BadRequestError("There is a session which is not finished.");
  // }
}, "sessions");
